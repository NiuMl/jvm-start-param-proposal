package com.niuml.jspp;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.lang.management.*;
import java.time.Duration;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import reactor.core.publisher.Flux;
/***
 * @author niumengliang
 * Date:2024/12/19
 * Time:14:32
 */
@Log4j2
@CrossOrigin
@RestController
@RequestMapping("/public")
public class JvmController {

    private static final Map<String, SseEmitter> SSE_EMITTER_MAP = new ConcurrentHashMap<>();

    static String pid;

    static {
        String name = ManagementFactory.getRuntimeMXBean().getName();
        pid = name.split("@")[0];
    }

    ExecutorService executors = Executors.newFixedThreadPool(10);


    @GetMapping("/startThread")
    public String startThread(){
        final String[] s = {"asdfasdfasdfasdfasdfasdfasdfasdf"};
        IntStream.range(1,100).forEach(a->{
            executors.execute(()->{
                s[0] += s[0];
            });
        });
        return "startThread";
    }



    @GetMapping("/flux")
    public Flux<String> getProcessInfo() {

        return Flux.interval(Duration.ofSeconds(1))
                .map(sequence -> {
                    try {
                        Map<String, Number> stringNumberMap = collectThreadInfo();
                        Map<String, Object> map = new HashMap<String, Object>() {{
                            put("thread", stringNumberMap);
                            put("memory", new MemoryInformation());
                            put("heap", getHeapInfo());
                            put("gc", gcInfo("jstat -gc "+pid+" 1 1"));
                            put("gcutil", gcInfo("jstat -gcutil "+pid+" 1 1"));
                        }};
                        return objectMapper.writeValueAsString(map);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    return "";
                });
    }

    @GetMapping("/create-connect")
    public SseEmitter createConnect(@RequestParam("userId") String userId) {
        try {
            // 设置超时时间，0表示不过期。默认30秒
            SseEmitter sseEmitter = new SseEmitter(0L);
            // 注册回调
            sseEmitter.onCompletion(() -> removeSseConnection(userId, "SSE连接已关闭"));
            sseEmitter.onError(throwable -> removeSseConnection(userId, "SSE连接出现错误"));
            sseEmitter.onTimeout(() -> removeSseConnection(userId, "SSE连接超时"));
            SSE_EMITTER_MAP.put(userId, sseEmitter);
            log.info("创建了用户[{}]的SSE连接", userId);
            return sseEmitter;
        } catch (Exception e) {
            log.error("创建新的SSE连接异常，当前用户：" + userId, e);
            return null;
        }
    }

    ObjectMapper objectMapper = new ObjectMapper();

    @GetMapping("/send-message")
    public void sendMessage(@RequestParam("userId") String userId, @RequestParam("message") String message) {
        SseEmitter sseEmitter = SSE_EMITTER_MAP.get(userId);
        if (sseEmitter != null) {
            try {
                Map<String, Number> stringNumberMap = collectThreadInfo();
                Map<String, Object> map = new HashMap<String, Object>() {{
                    put("thread", stringNumberMap);
                    put("memory", new MemoryInformation());
                    put("heap", getHeapInfo());
                    put("gc", gcInfo("jstat -gc "+pid+" 1 1"));
                }};
                sseEmitter.send(SseEmitter.event()
                        .name("message")
                        .data(objectMapper.writeValueAsString(map))
                        .reconnectTime(5000));
                log.info("给用户[{}]发送消息成功: {}", userId, message);
            } catch (Exception e) {
                log.error("给用户[{}]发送消息失败: {}", userId, e.getMessage(), e);
                // 如果发送失败，尝试从map中移除失效的SseEmitter
                removeSseConnection(userId, "发送消息失败");
            }
        } else {
            log.info("用户[{}]的SSE连接不存在或已关闭，无法发送消息", userId);
        }
    }


    private void removeSseConnection(String userId, String reason) {
        System.out.println("用户id:" + userId + " 移除");
        SSE_EMITTER_MAP.computeIfPresent(userId, (key, sseEmitter) -> {
            sseEmitter.complete();
            SSE_EMITTER_MAP.remove(key);
            log.info("用户[{}]的SSE连接已移除，原因：{}", userId, reason);
            return null;
        });
    }


    //gc相关
    private Map<String, Number> gcInfo(String cmd) throws IOException {
        Process process = Runtime.getRuntime().exec(new String[]{
                "/bin/sh", "-c", cmd});
        InputStreamReader ir = new InputStreamReader(process.getInputStream());
        LineNumberReader input = new LineNumberReader(ir);
        String line;
        List<String> strList = new ArrayList<>();
        while ((line = input.readLine()) != null){
            strList.add(line.toUpperCase());
        }
        log.info(strList.toString());
        String[] split = strList.get(1).replace("-","0").split(" ");
        List<String> list = Arrays.stream(split).filter(a -> !a.isEmpty()).collect(Collectors.toList());
        AtomicInteger i = new AtomicInteger();
        return Arrays.stream(strList.get(0).split(" ")).filter(a->!a.isEmpty()).collect(Collectors.toMap(a->a,a->Double.parseDouble(list.get(i.getAndIncrement())),(a, b)->a));
    }





    private static Map<String, Number> collectThreadInfo() {
        final ThreadMXBean threadBean = ManagementFactory.getThreadMXBean();
        Map<String, Number> map = new LinkedHashMap<String, Number>();
        map.put("jvmThreadCount", threadBean.getThreadCount());// 线程总数
        map.put("jvmThreadDaemonCount", threadBean.getDaemonThreadCount());// 守护线程数
        map.put("jvmThreadTotalStartedCount", threadBean.getTotalStartedThreadCount());//启动线程总数
        ThreadInfo[] threadInfos = threadBean.getThreadInfo(threadBean.getAllThreadIds());

        int newThreadCount = 0;
        int runnableThreadCount = 0;
        int blockedThreadCount = 0;
        int waitThreadCount = 0;
        int timeWaitThreadCount = 0;
        int terminatedThreadCount = 0;

        if (threadInfos != null) {
            for (ThreadInfo threadInfo : threadInfos) {
                if (threadInfo != null) {
                    switch (threadInfo.getThreadState()) {
                        case NEW:
                            newThreadCount++;
                            break;
                        case RUNNABLE:
                            runnableThreadCount++;
                            break;
                        case BLOCKED:
                            blockedThreadCount++;
                            break;
                        case WAITING:
                            waitThreadCount++;
                            break;
                        case TIMED_WAITING:
                            timeWaitThreadCount++;
                            break;
                        case TERMINATED:
                            terminatedThreadCount++;
                            break;
                        default:
                            break;
                    }
                } else {
                    /*
                     * If a thread of a given ID is not alive or does not exist,
                     * the corresponding element in the returned array will,
                     * contain null,because is mut exist ,so the thread is terminated
                     */
                    terminatedThreadCount++;
                }
            }
        }

        map.put("jvmThreadNewCount", newThreadCount);// 新建线程数
        map.put("jvmThreadRunnableCount", runnableThreadCount);// 可运行线程数
        map.put("jvmThreadBlockedCount", blockedThreadCount);// 阻塞线程数
        map.put("jvmThreadWaitingCount", waitThreadCount);// 等待线程数
        map.put("jvmThreadTimeWaitingCount", timeWaitThreadCount);// 等待超时线程数
        map.put("jvmThreadTerminatedCount", terminatedThreadCount);// 终止线程数

        long[] ids = threadBean.findDeadlockedThreads();
        map.put("jvmThreadDeadlockCount", ids == null ? 0 : ids.length);// 死锁线程数

        return map;
    }


    //获取非堆和堆的内存情况
    public Map<String, Object> getHeapInfo() {
        MemoryMXBean mm = ManagementFactory.getMemoryMXBean();
        //// 获取非堆内存使用情况
        MemoryUsage nonMu = mm.getNonHeapMemoryUsage();
        long nonMuMax = nonMu.getMax();
        long nonMuUsed = nonMu.getUsed();
        long nonMuInit = nonMu.getInit();
        // 获取堆内存使用情况
        MemoryUsage mu = mm.getHeapMemoryUsage();
        long muMax = mu.getMax();
        long muUsed = mu.getUsed();
        long muInit = mu.getInit();
        return new HashMap<String, Object>() {{
            put("nonHeapMemoryMax", nonMuMax);
            put("nonHeapMemoryUsed", nonMuUsed);
            put("nonHeapMemoryInit", nonMuInit);
            put("heapMemoryMax", muMax);
            put("heapMemoryUsed", muUsed);
            put("heapMemoryInit", muInit);
        }};
    }
}

@Data
class MemoryInfoBean {
    //    private String name;
    private long used;
    private long max;
}


@Data
class MemoryInformation {
    //代码缓存区
    private long codeCacheInit;
    private long codeCacheUsed;
    private long codeCacheMax;
    //元空间
    private long metaspaceInit;
    private long metaspaceUsed;
    private long metaspaceMax;
    //Compressed Class Space 类压缩数据区
    private long compressedClassSpaceInit;
    private long compressedClassSpaceUsed;
    private long compressedClassSpaceMax;
    //PS Eden Space Eden区
    private long psEdenSpaceInit;
    private long psEdenSpaceUsed;
    private long psEdenSpaceMax;
    //PS Survivor Space Survivor区
    private long psSurvivorSpaceInit;
    private long psSurvivorSpaceUsed;
    private long psSurvivorSpaceMax;
    //PS Old Gen 老年代
    private long psOldGenInit;
    private long psOldGenUsed;
    private long psOldGenMax;

    public MemoryInformation() {
        List<MemoryPoolMXBean> memoryPoolMXBeans = ManagementFactory.getMemoryPoolMXBeans();
        for (MemoryPoolMXBean memoryPoolMXBean : memoryPoolMXBeans) {
            MemoryUsage memoryUsage = memoryPoolMXBean.getUsage();
            if ("Code Cache".equals(memoryPoolMXBean.getName())) {
                codeCacheInit = memoryUsage.getInit();
                codeCacheUsed = memoryUsage.getUsed();
                codeCacheMax = memoryUsage.getMax();
            } else if ("Metaspace".equals(memoryPoolMXBean.getName())) {
                metaspaceInit = memoryUsage.getInit();
                metaspaceUsed = memoryUsage.getUsed();
                metaspaceMax = memoryUsage.getMax();
            } else if ("Compressed Class Space".equals(memoryPoolMXBean.getName())) {
                compressedClassSpaceInit = memoryUsage.getInit();
                compressedClassSpaceUsed = memoryUsage.getUsed();
                compressedClassSpaceMax = memoryUsage.getMax();
            } else if ("PS Eden Space".equals(memoryPoolMXBean.getName())) {
                psEdenSpaceInit = memoryUsage.getInit();
                psEdenSpaceUsed = memoryUsage.getUsed();
                psEdenSpaceMax = memoryUsage.getMax();
            } else if ("PS Survivor Space".equals(memoryPoolMXBean.getName())) {
                psSurvivorSpaceInit = memoryUsage.getInit();
                psSurvivorSpaceUsed = memoryUsage.getUsed();
                psSurvivorSpaceMax = memoryUsage.getMax();
            } else if ("PS Old Gen".equals(memoryPoolMXBean.getName())) {
                psOldGenInit = memoryUsage.getInit();
                psOldGenUsed = memoryUsage.getUsed();
                psOldGenMax = memoryUsage.getMax();
            }
        }
    }
}
