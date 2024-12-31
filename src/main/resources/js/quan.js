const quan = echarts.init(document.getElementById('quan'));
const zhexiantu = echarts.init(document.getElementById('zhexiantu'));
quan.setOption({
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: '内存使用',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1024, name: 'S0区' },
                { value: 1024, name:'S1区'},
                { value: 1024, name: '伊甸区' },
                { value: 1024, name: '老年代' },
                { value: 1024, name: '方法区' },
                { value: 1024, name: '压缩类空间' }
            ]
        }
    ]
});
zhexiantu.setOption({
    title: {
        text: '内存使用比例（%）',
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
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['S0比例', 'S1比例', 'Eden比例', '老年代比例', '元数据比例', '压缩比例'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '内存使用比例（%）',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330]
        }
    ]
});


function setQuan(data) {
    quan.setOption({
        series: [
            {
                data: [
                    { value: data.S0C / 1024, name: 'S0区' },
                    { value: data.S1C/1024, name:'S1区'},
                    { value: data.EC/ 1024, name: '伊甸区' },
                    { value: data.OC / 1024, name: '老年代' },
                    { value: data.MC/ 1024, name: '方法区' },
                    { value: data.CCSC/ 1024, name: '压缩类空间' }
                ]
            }
        ]
    });
}
function setZheXianTu(data) {
    zhexiantu.setOption({
        series: [
            {
                data: [
                    data.S0,
                    data.S1,
                    data.E,
                    data.O,
                    data.M,
                    data.CCS
                ]
            }
        ]
    });
}
