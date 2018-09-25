$(function() {
    var lab1 = $('.lab').eq(0)
    var lab2 = $('.lab').eq(1)
    var lab3 = $('.lab').eq(2)
    var lab4 = $('.lab').eq(3)
    var con = $('#guest')
    var con2 = $('#member')

    var res = function () {
        lab1.width(($('.con').eq(0).width())/4 - 67)
        lab2.width(($('.con').eq(0).width())/4 - 67)
        lab3.width(($('.con').eq(0).width())/4 - 67)
        lab4.width(($('.con').eq(0).width())/4 - 67)
        con.width(($('.charts').width() - 150) / 2)
        con.height(window.innerHeight / 2)
        con2.width(($('.charts').width() - 150) / 2)
        con2.height(window.innerHeight / 2)
    }
    res()
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('guest'));

    // 指定图标的配置项和数据

    var option = {
        title: {
            text: '客流数据',
            textStyle: {
            color: 'rgb(62,144,149)'
        }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c}"
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['05:00', '06:00', '07:00', '08:00', '09:00'],
            axisLine: {
                lineStyle: {
                    width: 0,
                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    width: 0,
                }
            },
            axisTick: {
                show: false
            }
        },
        series: [{
            data: [0, 0, 0, 0, 10],
            type: 'line',
            areaStyle: {
                normal: {
                    color: 'rgb(209,233,235)',
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: 'skyblue',
                    lineStyle: {
                        color: 'rgb(209,233,235)',
                        width: 1
                    }
                }
            }
        }]
    };
    myChart.setOption(option);


    var myChart2 = echarts.init(document.getElementById('member'));

    // 指定图标的配置项和数据

    var option2 = {
        title: {
            text: '会员比例',
            textStyle: {
            color: 'rgb(62,144,149)'
        }
        },
        tooltip: {
            trigger: 'item',
        },
        series: [{
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    },
                    formatter: '{d}%',
                    color: ['rgb(62,144,149)', 'rgb(167,211,214)']
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: '会员' },
                { value: 2000, name: '非会员' },
            ],
            color: ['rgb(62,144,149)', 'rgb(167,211,214)']
        }]
    };
    myChart2.setOption(option2);

    $(window).resize(function () {
        res()
        myChart.resize()
        myChart2.resize()
    })
});
