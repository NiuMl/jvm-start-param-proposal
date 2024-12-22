const threadCount = echarts.init(document.getElementById('threadCount'));
const threadDaemonCount = echarts.init(document.getElementById('threadDaemonCount'));
const jvmThreadTotalStartedCount = echarts.init(document.getElementById('jvmThreadTotalStartedCount'));
const jvmThreadNewCount = echarts.init(document.getElementById('jvmThreadNewCount'));
const jvmThreadRunnableCount = echarts.init(document.getElementById('jvmThreadRunnableCount'));
const jvmThreadBlockedCount = echarts.init(document.getElementById('jvmThreadBlockedCount'));
const jvmThreadWaitingCount = echarts.init(document.getElementById('jvmThreadWaitingCount'));
const jvmThreadTimeWaitingCount = echarts.init(document.getElementById('jvmThreadTimeWaitingCount'));
const jvmThreadTerminatedCount = echarts.init(document.getElementById('jvmThreadTerminatedCount'));
const jvmThreadDeadlockCount = echarts.init(document.getElementById('jvmThreadDeadlockCount'));
// 显示标题，图例和空的坐标轴
function optionD(name, color) {
  return {
    title: {
      text: name,
      left: "center",
      textStyle: {
        //宽度
        width: 100,
        height: 40,
        lineHeight: 40,
        //6.设置主标题文本样式
        fontSize: 14,
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'line' // 默认为直线，可选为：'line' | 'shadow'
      }

    },
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {},
    series: [
      {
        // name: '线程总数',
        type: 'line',
        data: [],
        itemStyle: {
          color: color
        }
      }
    ]
  }
}
threadCount.setOption(optionD('线程总数', '#409EFF'));
threadDaemonCount.setOption(optionD('守护线程数', '#1B45CE'));
//启动线程总数
jvmThreadTotalStartedCount.setOption(optionD('启动线程总数', '#87DBDF'));
// 新建线程数
jvmThreadNewCount.setOption(optionD('新建线程数', '#C0E995'));
// 运行线程数
jvmThreadRunnableCount.setOption(optionD('运行线程数', '#59C75B'));
// 阻塞线程数
jvmThreadBlockedCount.setOption(optionD('阻塞线程数', '#EB7536'));
// 等待线程数
jvmThreadWaitingCount.setOption(optionD('等待线程数', '#E9E322'));
// 等待超时线程数
jvmThreadTimeWaitingCount.setOption(optionD('等待超时线程数', '#F0B30B'));
// 终止线程数
jvmThreadTerminatedCount.setOption(optionD('终止线程数', '#F00B2A'));
// 死锁线程数
jvmThreadDeadlockCount.setOption(optionD('死锁线程数', '#CE0BF0'));

// threadDaemonCount.setOption({
//     series: [
//         {
//             type: 'gauge',
//             axisLine: {
//                 lineStyle: {
//                     width: 20,
//                     color: [
//                         [0.3, '#67e0e3'],
//                         [0.7, '#37a2da'],
//                         [1, '#fd666d']
//                     ]
//                 }
//             },
//             pointer: {
//                 itemStyle: {
//                     color: 'auto'
//                 }
//             },
//             axisTick: {
//                 distance: -20,
//                 length: 8,
//                 lineStyle: {
//                     color: '#fff',
//                     width: 2
//                 }
//             },
//             splitLine: {
//                 distance: -30,
//                 length: 15,
//                 lineStyle: {
//                     color: '#fff',
//                     width: 4
//                 }
//             },
//             axisLabel: {
//                 color: 'inherit',
//                 distance: -10,
//                 fontSize: 10
//             },
//             detail: {
//                 fontSize: 13,
//                 valueAnimation: true,
//                 formatter: '{value} km/h',
//                 color: 'inherit'
//             },
//             data: [
//                 {
//                     value: 70
//                 }
//             ]
//         }
//     ]
//
// });
const nums = 10;

let arrY = new Array(nums);
let arrX = new Array(nums);

let jvmThreadDaemonCountArrY = new Array(nums);
let jvmThreadDaemonCountArrX = new Array(nums);

let jvmThreadTotalStartedCountArrY = new Array(nums);
let jvmThreadTotalStartedCountArrX = new Array(nums);

let jvmThreadNewCountArrY = new Array(nums);
let jvmThreadNewCountArrX = new Array(nums);

let jvmThreadRunnableCountArrY = new Array(nums);
let jvmThreadRunnableCountArrX = new Array(nums);

let jvmThreadBlockedCountArrY = new Array(nums);
let jvmThreadBlockedCountArrX = new Array(nums);

let jvmThreadWaitingCountArrY = new Array(nums);
let jvmThreadWaitingCountArrX = new Array(nums);

let jvmThreadTimeWaitingCountArrY = new Array(nums);
let jvmThreadTimeWaitingCountArrX = new Array(nums);

let jvmThreadTerminatedCountArrY = new Array(nums);
let jvmThreadTerminatedCountArrX = new Array(nums);

let jvmThreadDeadlockCountArrY = new Array(nums);
let jvmThreadDeadlockCountArrX = new Array(nums);

function setValues(jsonData) {
    //线程总数
    threadCount.setOption({
        xAxis: {
            data: getArr10(arrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: '线程数量',
                data: getArr10(arrY, jsonData.jvmThreadCount),
            }
        ]
    });
    //守护线程数
    threadDaemonCount.setOption({
        xAxis: {
            data: getArr10(jvmThreadDaemonCountArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: '守护线程数量',
                data: getArr10(jvmThreadDaemonCountArrY, jsonData.jvmThreadDaemonCount),
            }
        ]
    });
    //启动线程总数
    jvmThreadTotalStartedCount.setOption({
        xAxis: {
            data: getArr10(jvmThreadTotalStartedCountArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: '启动线程总数',
                data: getArr10(jvmThreadTotalStartedCountArrY, jsonData.jvmThreadTotalStartedCount),
            }
        ]
    });
    //启动线程总数
    jvmThreadNewCount.setOption({
        xAxis: {
            data: getArr10(jvmThreadNewCountArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: '新建线程数',
                data: getArr10(jvmThreadNewCountArrY, jsonData.jvmThreadNewCount),
            }
        ]
    });
    //运行线程数
    jvmThreadRunnableCount.setOption({
        xAxis: {
            data: getArr10(jvmThreadRunnableCountArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: '运行线程数',
                data: getArr10(jvmThreadRunnableCountArrY, jsonData.jvmThreadNewCount),
            }
        ]
    });
    //阻塞线程数
    jvmThreadBlockedCount.setOption({
        xAxis: {
            data: getArr10(jvmThreadBlockedCountArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: '阻塞线程数',
                data: getArr10(jvmThreadBlockedCountArrY, jsonData.jvmThreadNewCount),
            }
        ]
    });
    //等待线程数
    jvmThreadWaitingCount.setOption({
        xAxis: {
            data: getArr10(jvmThreadWaitingCountArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: '等待线程数',
                data: getArr10(jvmThreadWaitingCountArrY, jsonData.jvmThreadWaitingCount),
            }
        ]
    });
    //等待超时线程数
    jvmThreadTimeWaitingCount.setOption({
        xAxis: {
            data: getArr10(jvmThreadTimeWaitingCountArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: '等待超时线程数',
                data: getArr10(jvmThreadTimeWaitingCountArrY, jsonData.jvmThreadTimeWaitingCount),
            }
        ]
    });
    //终止线程数
    jvmThreadTerminatedCount.setOption({
        xAxis: {
            data: getArr10(jvmThreadTerminatedCountArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: '终止线程数',
                data: getArr10(jvmThreadTerminatedCountArrY, jsonData.jvmThreadTerminatedCount),
            }
        ]
    });
    //死锁线程数
    jvmThreadDeadlockCount.setOption({
        xAxis: {
            data: getArr10(jvmThreadDeadlockCountArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: '死锁线程数',
                data: getArr10(jvmThreadDeadlockCountArrY, jsonData.jvmThreadDeadlockCount),
            }
        ]
    });
}

function getArr10(arr, data) {
    if (arr.length < 20) {
        arr.unshift(data);
    } else {
        arr.pop();
        arr.unshift(data);
    }
    return arr;
}


function showCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份是从0开始的，所以要+1
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
