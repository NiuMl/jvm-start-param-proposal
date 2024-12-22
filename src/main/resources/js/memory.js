const CodeCache = echarts.init(document.getElementById('CodeCache'));
const Metaspace = echarts.init(document.getElementById('Metaspace'));
const CompressedClassSpace = echarts.init(document.getElementById('CompressedClassSpace'));
const PSEdenSpace = echarts.init(document.getElementById('PSEdenSpace'));
const PSSurvivorSpace = echarts.init(document.getElementById('PSSurvivorSpace'));
const PSOldGen = echarts.init(document.getElementById('PSOldGen'));
CodeCache.setOption({
    title: {
        text: '代码缓存区',
        left: "center",
        textStyle: {
            //宽度
            width: 100,
            //6.设置主标题文本样式
          height: 40,
          lineHeight: 40,
          //6.设置主标题文本样式
          fontSize: 14,
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
Metaspace.setOption({
    title: {
        text: '元空间（如果最大值为-1时，最大值为当前使用值*2）',
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
CompressedClassSpace.setOption({
    title: {
        text: '类压缩数据区',
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
PSEdenSpace.setOption({
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
PSSurvivorSpace.setOption({
    title: {
        text: 'S区(幸存区)',
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
PSOldGen.setOption({
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

function memorySetValue(data) {
    CodeCache.setOption({
        series: [{
            min: Math.round(data.codeCacheInit / 1024 / 1024),
            max: Math.round(data.codeCacheMax / 1024 / 1024),
            data: [
                {
                    value: Math.round(data.codeCacheUsed / 1024 / 1024)
                }
            ]
        }]
    });
    let maxValue = data.metaspaceMax == -1 ? 2 * data.metaspaceUsed : data.metaspaceMax;
    Metaspace.setOption({
        series: [{
            min: Math.round(data.metaspaceInit / 1024 / 1024),
            max: Math.round(maxValue / 1024 / 1024),
            data: [
                {
                    value: Math.round(data.metaspaceUsed / 1024 / 1024)
                }
            ]
        }]
    });
    CompressedClassSpace.setOption({
        series: [{
            min: Math.round(data.compressedClassSpaceInit / 1024 / 1024),
            max: Math.round(data.compressedClassSpaceMax / 1024 / 1024),
            data: [
                {
                    value: Math.round(data.compressedClassSpaceUsed / 1024 / 1024)
                }
            ]
        }]
    });
    PSEdenSpace.setOption({
        series: [{
            min: Math.round(data.psEdenSpaceInit / 1024 / 1024),
            max: Math.round(data.psEdenSpaceMax / 1024 / 1024),
            data: [
                {
                    value: Math.round(data.psEdenSpaceUsed / 1024 / 1024)
                }
            ]
        }]
    });
    PSSurvivorSpace.setOption({
        series: [{
            min: Math.round(data.psSurvivorSpaceInit / 1024 / 1024),
            max: Math.round(data.psSurvivorSpaceMax / 1024 / 1024),
            data: [
                {
                    value: Math.round(data.psSurvivorSpaceUsed / 1024 / 1024)
                }
            ]
        }]
    });
    PSOldGen.setOption({
        series: [{
            min: Math.round(data.psOldGenInit / 1024 / 1024),
            max: Math.round(data.psOldGenMax / 1024 / 1024),
            data: [
                {
                    value: Math.round(data.psOldGenUsed / 1024 / 1024)
                }
            ]
        }]
    });
}
