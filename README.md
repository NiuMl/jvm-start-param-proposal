# jvm-start-param-proposal
jvm启动参数调优建议


# 接口返回
```markdown
{
  "memory": {
    "codeCacheInit": 0,//代码缓存区 初始化
    "codeCacheUsed": 0,//代码缓存区 已用
    "codeCacheMax": 0,//代码缓存区 最大值
    "metaspaceInit": 0,//元空间 初始化
    "metaspaceUsed": 33993944,//元空间 已用
    "metaspaceMax": -1,//元空间 最大值 如果为-1表示无限大
    "compressedClassSpaceInit": 0,//类压缩数据区 初始化
    "compressedClassSpaceUsed": 4338008,//类压缩数据区 已用
    "compressedClassSpaceMax": 1073741824,//类压缩数据区 最大值
    "psEdenSpaceInit": 0,//堆内存eden区 初始化
    "psEdenSpaceUsed": 0,//堆内存eden区 已用
    "psEdenSpaceMax": 0,//堆内存eden区 最大值
    "psSurvivorSpaceInit": 0,//堆内存survivor区 初始化
    "psSurvivorSpaceUsed": 0,//堆内存survivor区 已用
    "psSurvivorSpaceMax": 0,//堆内存survivor区 最大值
    "psOldGenInit": 0,//堆内存old区 初始化
    "psOldGenUsed": 0,//堆内存old区 已用
    "psOldGenMax": 0 //堆内存old区 最大值
  },
  "gcutil": {
    "FGCT": 0,//老年代垃圾回收消耗时间
    "CCS": 91.64,//压缩使用比例
    "FGC": 0,//老年代垃圾回收次数
    "YGC": 2,//年轻代垃圾回收次数
    "E": 75.29,//Eden区使用比例
    "YGCT": 0.006,//年轻代回收使用时间
    "GCT": 0.007,垃圾回收消耗总时间
    "CGCT": 0.001,//并发垃圾回收所花费的总时间（以秒为单位）。
    "M": 97.7,//元数据区使用比例
    "S0": 0,//第一个Servivor区当前使用比例
    "CGC": 2,//自JVM启动以来发生的并发垃圾回收的次数。
    "S1": 99.7,//第二个Servivor区当前使用比例
    "O": 0.05//老年代使用比例
  },
  "thread": {
    "jvmThreadCount": 32,//线程总数
    "jvmThreadDaemonCount": 20,//守护线程总数
    "jvmThreadTotalStartedCount": 35,//线程启动总数
    "jvmThreadNewCount": 0,//新生线程数
    "jvmThreadRunnableCount": 7,//可运行线程数
    "jvmThreadBlockedCount": 0,//阻塞线程数
    "jvmThreadWaitingCount": 13,//等待线程数
    "jvmThreadTimeWaitingCount": 12,//等待超时线程数
    "jvmThreadTerminatedCount": 0,//终止线程数
    "jvmThreadDeadlockCount": 0//死锁线程数
  },
  "heap": {
    "heapMemoryMax": 2147483648,//堆内存最大值
    "heapMemoryInit": 2147483648,//堆内存初始化
    "heapMemoryUsed": 146787592,//堆内存已用
    "nonHeapMemoryMax": -1,//非堆内存最大值 -1表示无限大
    "nonHeapMemoryInit": 7667712,//非堆内存初始化
    "nonHeapMemoryUsed": 50799920//非堆内存已用
  },
  "gc": {
    "FGC": 0,//老年代垃圾回收次数
    "S1C": 8192,//第二个Survivor区回收次数
    "OU": 1036.2,//老年代使用大小
    "S0C": 0,//年轻代第一个Survivor区的大小
    "MU": 21071.6,//方法区使用大小
    "CGCT": 0.001,//并发垃圾回收所花费的总时间（以秒为单位）
    "CCSC": 2816,//压缩类空间大小
    "EU": 134144,//年轻代中Eden区的使用大小
    "FGCT": 0,//老年代垃圾回收消耗时间
    "YGC": 2,//年轻代垃圾回收次数
    "OC": 1910784,//老年代回收次数
    "YGCT": 0.006,//年轻代垃圾回收消耗时间
    "MC": 21568,//方法区大小
    "S1U": 8167.1,//年轻代第二个Survivor区的使用大小
    "GCT": 0.007,//垃圾回收消耗总时间
    "S0U": 0,//年轻代第一个Survivor区的使用大小
    "CCSU": 2580.5,//压缩类空间使用大小
    "CGC": 2,//自JVM启动以来发生的并发垃圾回收的次数
    "EC": 178176//年轻代中Eden区的大小
  }
}
```
