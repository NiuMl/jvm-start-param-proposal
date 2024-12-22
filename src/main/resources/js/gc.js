const gcS0 = echarts.init(document.getElementById('gcS0'));
const gcS1 = echarts.init(document.getElementById('gcS1'));
const gcEden = echarts.init(document.getElementById('gcEden'));
const gcOld = echarts.init(document.getElementById('gcOld'));
const gcMethod = echarts.init(document.getElementById('gcMethod'));
const gcCcsc = echarts.init(document.getElementById('gcCcsc'));
const gcYGC = echarts.init(document.getElementById('gcYGC'));
const gcYGCT = echarts.init(document.getElementById('gcYGCT'));
const gcFGC = echarts.init(document.getElementById('gcFGC'));
const gcFGCT = echarts.init(document.getElementById('gcFGCT'));
const gcGCT = echarts.init(document.getElementById('gcGCT'));
gcS0.setOption({
    title: {
        text: 'S0区',
        left: "center",
        textStyle: {
            //宽度
            width: 100,
            //6.设置主标题文本样式
          height: 40,
          lineHeight: 40,
          //6.设置主标题文本样式
          fontSize: 13,
        },
    },
    series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 240,
            splitNumber: 2,
        center: ['50%', '70%'],
            itemStyle: {
                color: '#58D9F9',
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 100,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            progress: {//蓝色半圆
                show: true,
                roundCap: true,
                width: 9
            },
            axisLine: {//虚半圆
                roundCap: true,
                lineStyle: {
                    width: 9
                }
            },
            pointer: {//指针
                icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                length: '55%',
                width: 10,
                offsetCenter: [0, '5%']
            },
            axisTick: {//两个大刻度里面的小刻度
                splitNumber: 2,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            splitLine: {//两个大刻度
                length: 10,
                lineStyle: {
                    width: 3,
                    color: '#999'
                }
            },
            axisLabel: {
                distance: 10,
                color: '#999',
                fontSize: 7
            },
            title: {
                show: false
            },
            detail: {
                // backgroundColor: '#fff',
                // borderColor: '#999',
                // borderWidth: 2,
                width: '40%',
                lineHeight: 60,
                height: 15,
                borderRadius: 10,
                offsetCenter: [0, '15%'],
                valueAnimation: true,
                formatter: function (value) {
                    return '{value|' + value.toFixed(0) + '}{unit|MB}';
                },
                rich: {
                    value: {
                        fontSize: 15,
                        fontWeight: 'bolder',
                        color: '#777'
                    },
                    unit: {
                        fontSize: 15,
                        color: '#999',
                        padding: [0, 0, 0, 5]
                    }
                }
            },
            data: [
                {
                    value: 120
                }
            ]
        }
    ]
});
gcS1.setOption({
    title: {
        text: 'S1区',
        left: "center",
        textStyle: {
            //宽度
            width: 100,
            //6.设置主标题文本样式
          height: 40,
          lineHeight: 40,
          //6.设置主标题文本样式
          fontSize: 13,
        },
    },
    series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 240,
            splitNumber: 2,
        center: ['50%', '70%'],
            itemStyle: {
                color: '#58D9F9',
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 100,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            progress: {//蓝色半圆
                show: true,
                roundCap: true,
                width: 9
            },
            axisLine: {//虚半圆
                roundCap: true,
                lineStyle: {
                    width: 9
                }
            },
            pointer: {//指针
                icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                length: '55%',
                width: 10,
                offsetCenter: [0, '5%']
            },
            axisTick: {//两个大刻度里面的小刻度
                splitNumber: 2,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            splitLine: {//两个大刻度
                length: 10,
                lineStyle: {
                    width: 3,
                    color: '#999'
                }
            },
            axisLabel: {
                distance: 10,
                color: '#999',
                fontSize: 7
            },
            title: {
                show: false
            },
            detail: {
                // backgroundColor: '#fff',
                // borderColor: '#999',
                // borderWidth: 2,
                width: '40%',
                lineHeight: 60,
                height: 15,
                borderRadius: 10,
                offsetCenter: [0, '15%'],
                valueAnimation: true,
                formatter: function (value) {
                    return '{value|' + value.toFixed(0) + '}{unit|MB}';
                },
                rich: {
                    value: {
                        fontSize: 15,
                        fontWeight: 'bolder',
                        color: '#777'
                    },
                    unit: {
                        fontSize: 15,
                        color: '#999',
                        padding: [0, 0, 0, 5]
                    }
                }
            },
            data: [
                {
                    value: 120
                }
            ]
        }
    ]
});
gcEden.setOption({
    title: {
        text: '伊甸区',
        left: "center",
        textStyle: {
            //宽度
            width: 100,
            //6.设置主标题文本样式
          height: 40,
          lineHeight: 40,
          //6.设置主标题文本样式
          fontSize: 13,
        },
    },
    series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 240,
            splitNumber: 2,
        center: ['50%', '70%'],
            itemStyle: {
                color: '#58D9F9',
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 100,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            progress: {//蓝色半圆
                show: true,
                roundCap: true,
                width: 9
            },
            axisLine: {//虚半圆
                roundCap: true,
                lineStyle: {
                    width: 9
                }
            },
            pointer: {//指针
                icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                length: '55%',
                width: 10,
                offsetCenter: [0, '5%']
            },
            axisTick: {//两个大刻度里面的小刻度
                splitNumber: 2,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            splitLine: {//两个大刻度
                length: 10,
                lineStyle: {
                    width: 3,
                    color: '#999'
                }
            },
            axisLabel: {
                distance: 10,
                color: '#999',
                fontSize: 7
            },
            title: {
                show: false
            },
            detail: {
                // backgroundColor: '#fff',
                // borderColor: '#999',
                // borderWidth: 2,
                width: '40%',
                lineHeight: 60,
                height: 15,
                borderRadius: 10,
                offsetCenter: [0, '15%'],
                valueAnimation: true,
                formatter: function (value) {
                    return '{value|' + value.toFixed(0) + '}{unit|MB}';
                },
                rich: {
                    value: {
                        fontSize: 15,
                        fontWeight: 'bolder',
                        color: '#777'
                    },
                    unit: {
                        fontSize: 15,
                        color: '#999',
                        padding: [0, 0, 0, 5]
                    }
                }
            },
            data: [
                {
                    value: 120
                }
            ]
        }
    ]
});
gcOld.setOption({
    title: {
        text: '老年代',
        left: "center",
        textStyle: {
            //宽度
            width: 100,
            //6.设置主标题文本样式
          height: 40,
          lineHeight: 40,
          //6.设置主标题文本样式
          fontSize: 13,
        },
    },
    series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 240,
            splitNumber: 2,
        center: ['50%', '70%'],
            itemStyle: {
                color: '#58D9F9',
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 100,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            progress: {//蓝色半圆
                show: true,
                roundCap: true,
                width: 9
            },
            axisLine: {//虚半圆
                roundCap: true,
                lineStyle: {
                    width: 9
                }
            },
            pointer: {//指针
                icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                length: '55%',
                width: 10,
                offsetCenter: [0, '5%']
            },
            axisTick: {//两个大刻度里面的小刻度
                splitNumber: 2,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            splitLine: {//两个大刻度
                length: 10,
                lineStyle: {
                    width: 3,
                    color: '#999'
                }
            },
            axisLabel: {
                distance: 10,
                color: '#999',
                fontSize: 7
            },
            title: {
                show: false
            },
            detail: {
                // backgroundColor: '#fff',
                // borderColor: '#999',
                // borderWidth: 2,
                width: '40%',
                lineHeight: 60,
                height: 15,
                borderRadius: 10,
                offsetCenter: [0, '15%'],
                valueAnimation: true,
                formatter: function (value) {
                    return '{value|' + value.toFixed(0) + '}{unit|MB}';
                },
                rich: {
                    value: {
                        fontSize: 15,
                        fontWeight: 'bolder',
                        color: '#777'
                    },
                    unit: {
                        fontSize: 15,
                        color: '#999',
                        padding: [0, 0, 0, 5]
                    }
                }
            },
            data: [
                {
                    value: 120
                }
            ]
        }
    ]
});
gcMethod.setOption({
    title: {
        text: '方法区',
        left: "center",
        textStyle: {
            //宽度
            width: 100,
            //6.设置主标题文本样式
          height: 40,
          lineHeight: 40,
          //6.设置主标题文本样式
          fontSize: 13,
        },
    },
  
    series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 240,
            splitNumber: 2,
        center: ['50%', '70%'],
            itemStyle: {
                color: '#58D9F9',
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 100,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            progress: {//蓝色半圆
                show: true,
                roundCap: true,
                width: 9
            },
            axisLine: {//虚半圆
                roundCap: true,
                lineStyle: {
                    width: 9
                }
            },
            pointer: {//指针
                icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                length: '55%',
                width: 10,
                offsetCenter: [0, '5%']
            },
            axisTick: {//两个大刻度里面的小刻度
                splitNumber: 2,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            splitLine: {//两个大刻度
                length: 10,
                lineStyle: {
                    width: 3,
                    color: '#999'
                }
            },
            axisLabel: {
                distance: 10,
                color: '#999',
                fontSize: 7
            },
            title: {
                show: false
            },
            detail: {
                // backgroundColor: '#fff',
                // borderColor: '#999',
                // borderWidth: 2,
                width: '40%',
                lineHeight: 60,
                height: 15,
                borderRadius: 10,
                offsetCenter: [0, '15%'],
                valueAnimation: true,
                formatter: function (value) {
                    return '{value|' + value.toFixed(0) + '}{unit|MB}';
                },
                rich: {
                    value: {
                        fontSize: 15,
                        fontWeight: 'bolder',
                        color: '#777'
                    },
                    unit: {
                        fontSize: 15,
                        color: '#999',
                        padding: [0, 0, 0, 5]
                    }
                }
            },
            data: [
                {
                    value: 120
                }
            ]
        }
    ]
});
gcCcsc.setOption({
    title: {
        text: '压缩类空间',
        left: "center",
        textStyle: {
            //宽度
            width: 100,
            //6.设置主标题文本样式
          height: 40,
          lineHeight: 40,
          //6.设置主标题文本样式
          fontSize: 13,
        },
    },
    series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 240,
            splitNumber: 2,
        center: ['50%', '70%'],
            itemStyle: {
                color: '#58D9F9',
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 100,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            progress: {//蓝色半圆
                show: true,
                roundCap: true,
                width: 9
            },
            axisLine: {//虚半圆
                roundCap: true,
                lineStyle: {
                    width: 9
                }
            },
            pointer: {//指针
                icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                length: '55%',
                width: 10,
                offsetCenter: [0, '5%']
            },
            axisTick: {//两个大刻度里面的小刻度
                splitNumber: 2,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            splitLine: {//两个大刻度
                length: 10,
                lineStyle: {
                    width: 3,
                    color: '#999'
                }
            },
            axisLabel: {
                distance: 10,
                color: '#999',
                fontSize: 7
            },
            title: {
                show: false
            },
            detail: {
                // backgroundColor: '#fff',
                // borderColor: '#999',
                // borderWidth: 2,
                width: '40%',
                lineHeight: 60,
                height: 15,
                borderRadius: 10,
                offsetCenter: [0, '15%'],
                valueAnimation: true,
                formatter: function (value) {
                    return '{value|' + value.toFixed(0) + '}{unit|MB}';
                },
                rich: {
                    value: {
                        fontSize: 15,
                        fontWeight: 'bolder',
                        color: '#777'
                    },
                    unit: {
                        fontSize: 15,
                        color: '#999',
                        padding: [0, 0, 0, 5]
                    }
                }
            },
            data: [
                {
                    value: 120
                }
            ]
        }
    ]
});

////////////////////////////////////////////////////////////////////////////////////////



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
//年轻代gc次数
gcYGC.setOption(optionD('年轻代gc次数', '#409EFF'));
//年轻代gc消耗时间 
gcYGCT.setOption(optionD('年轻代gc消耗时间', '#1B45CE'));
// 老年代gc次数
gcFGC.setOption(optionD('老年代gc次数', '#59C75B'));
//老年代gc消耗时间 
gcFGCT.setOption(optionD('老年代gc消耗时间', '#E9E322'));
//gc总时间
gcGCT.setOption(optionD('gc总时间', '#C0E995'));

let ygcArrY = new Array(nums);
let ygcArrX = new Array(nums);

let ygctArrY = new Array(nums);
let ygctArrX = new Array(nums);

let fgcArrY = new Array(nums);
let fgcArrX = new Array(nums);

let fgctArrY = new Array(nums);
let fgctArrX = new Array(nums);

let gcctArrY = new Array(nums);
let gcctArrX = new Array(nums);

function gcSetValue(data) {
    console.log(data)
    gcS0.setOption({
        series: [{
            min: Math.round(0),
            max: Math.round(data.S0C / 1024 ),
            data: [
                {
                    value: Math.round(data.S0U / 1024 )
                }
            ]
        }]
    });
    gcS1.setOption({
        series: [{
            min: Math.round(0),
            max: Math.round(data.S1C / 1024 ),
            data: [
                {
                    value: Math.round(data.S1U / 1024 )
                }
            ]
        }]
    });
    gcEden.setOption({
        series: [{
            min: Math.round(0),
            max: Math.round(data.EC / 1024 ),
            data: [
                {
                    value: Math.round(data.EU / 1024 )
                }
            ]
        }]
    });
    gcOld.setOption({
        series: [{
            min: Math.round(0),
            max: Math.round(data.OC / 1024 ),
            data: [
                {
                    value: Math.round(data.OU / 1024 )
                }
            ]
        }]
    });
    gcMethod.setOption({
        series: [{
            min: Math.round(0),
            max: Math.round(data.MC / 1024 ),
            data: [
                {
                    value: Math.round(data.MU / 1024 )
                }
            ]
        }]
    });
    gcCcsc.setOption({
        series: [{
            min: Math.round(0),
            max: Math.round(data.CCSC / 1024 ),
            data: [
                {
                    value: Math.round(data.CCSU / 1024 )
                }
            ]
        }]
    });
    ////////////////
    gcYGC.setOption({
        xAxis: {
            data: getArr10(ygcArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: 'gc次数',
                data: getArr10(ygcArrY, data.YGC),
            }
        ]
    });
    gcYGCT.setOption({
        xAxis: {
            data: getArr10(ygctArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: 'gc消耗时间',
                data: getArr10(ygctArrY, data.YGCT),
            }
        ]
    });
    gcFGC.setOption({
        xAxis: {
            data: getArr10(fgcArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: 'gc次数',
                data: getArr10(fgcArrY, data.FGC),
            }
        ]
    });
    gcFGCT.setOption({
        xAxis: {
            data: getArr10(fgctArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: 'gc消耗时间',
                data: getArr10(fgctArrY, data.FGCT),
            }
        ]
    });
    gcGCT.setOption({
        xAxis: {
            data: getArr10(gcctArrX, showCurrentDateTime()),
            inverse: true //x轴反向
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: 'gc消耗时间',
                data: getArr10(gcctArrY, data.GCT),
            }
        ]
    });
}
