$(function() {
  var con = $("#gues");
  var con2 = $("#se");
  var con3 = $("#weekgues");
  var con4 = $("#age");
  var con5 = $("#memb");

  var res = function() {
    con.width(($(window).width() - 220) / 2);
    con.height(window.innerHeight / 2.5);
    con2.width(($(window).width() - 220) / 2);
    con2.height(window.innerHeight / 2.5);
    con3.width(($(window).width() - 220) / 4);
    con3.height(window.innerHeight -180);
    con4.width(($(window).width() - 220) / 2);
    con4.height(window.innerHeight / 3);
    con5.width(($(window).width() - 220) / 4);
    con5.height(window.innerHeight / 3);
  };
  res();

  var myChart = echarts.init(document.getElementById('gues'));
  var myChart2 = echarts.init(document.getElementById('se'));
  var myChart3 = echarts.init(document.getElementById('weekgues'));
  var myChart4 = echarts.init(document.getElementById('age'));
  var myChart5 = echarts.init(document.getElementById('memb'));

  var option = {
    title: {
      text: "客流数据",
      textStyle: {
            color: 'rgb(62,144,149)'
        }
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["03-29", "03-30", "03-31", "04-01"],
      axisLine: {
        lineStyle: {
          width: 0
        }
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          width: 0
        }
      },
      axisTick: {
        show: false
      }
    },
    series: [
      {
        data: [0.9, 0.7, 0.3, 0],
        type: "line",
        areaStyle: {
          normal: {
            color: "rgb(209,233,235)",
            width: 1
          }
        },
        itemStyle: {
          normal: {
            color: "skyblue",
            lineStyle: {
              color: "rgb(209,233,235)",
              width: 1
            }
          }
        }
      }
    ]
  };
  var option2 = {
    title: {
      text: "性别比例",
      textStyle: {
            color: 'rgb(62,144,149)'
        }
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["03-29", "03-30", "03-31", "04-01"],
      axisLine: {
        lineStyle: {
          width: 0
        }
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      boundaryGap: false,
      max: "100",
      type: "value",
      axisLine: {
        lineStyle: {
          width: 0
        }
      },
      axisTick: {
        show: false
      },
      backgroundColor: "rgb(241, 239, 251)"
    },
    series: [
      {
        data: [37, 39, 35, 0],
        type: "line",
        areaStyle: {
          normal: {
            color: "rgb(209,233,235)",
            width: 1
          }
        },
        itemStyle: {
          normal: {
            color: "skyblue",
            lineStyle: {
              color: "rgb(209,233,235)",
              width: 1
            }
          }
        }
      }
    ]
  }
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var times = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00"
  ];

  var data = [
    [7, 2, 15],
    [7, 3, 10],
    [8, 0, 8],
    [8, 2, 9],
    [8, 3, 4],
    [8, 4, 20],
    [8, 5, 35],
    [8, 6, 48],
    [9, 0, 19],
    [9, 1, 22],
    [9, 2, 35],
    [8, 3, 22],
    [9, 4, 17],
    [9, 5, 71],
    [9, 6, 40],
    [10, 1, 19],
    [10, 2, 35],
    [12, 2, 72],
    [13, 4, 99],
    [14, 6, 80],
    [15, 5, 65],
    [16, 4, 55],
    [18, 6, 158],
    [19, 2, 70],
    [20, 2, 47],
    [21, 3, 109],
    [21, 2, 49],
    [22, 4, 90],
    [22, 5, 110],
    [23, 4, 130],
    [23, 5, 135],
    [23, 6, 135],
    [23, 6, 160]
  ];

  data = data.map(function(item) {
    return [item[1], item[0], item[2] || "-"];
  });

  var option3 = {
    title: {
      text: "近一周客流量",
      textStyle: {
            color: 'rgb(62,144,149)'
        }
    },
    tooltip: {
      position: "top"
    },
    // animation: false,
    grid: {
      height: "65%",
      y: "10%",
      width: "70%",
      x: "20%"
    },
    xAxis: {
      type: "category",
      data: days,
      splitArea: {
        show: true
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 0
        }
      }
    },
    yAxis: {
      type: "category",
      data: times,
      splitArea: {
        show: true
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 0
        }
      }
    },
    visualMap: {
      min: 0,
      max: 164,
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: "70px",
      color: [
        "rgb(62,144,149)",
//      "rgb(100,104,255)",
//      "rgb(152,154,254)",
        "rgb(167,211,214)"
      ]
    },
    series: [
      {
        name: "近一周客流量",
        type: "heatmap",
        data: data,
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            borderColor: "#fff",
            borderWidth: 3,
            backgroundColor: "#fff"
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
            borderColor: "#fff",
            borderWidth: 2
          }
        }
      }
    ]
  }

  var option4 = {
    title: {
      text: "年龄分布趋势图",
      textStyle: {
            color: 'rgb(62,144,149)'
        }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999"
        }
      }
    },
    color: [
      "rgb(109,255,254)",
      "rgb(137,197,242)",
      "rgb(130,201,96)",
      "rgb(254,203,75)",
      "rgb(255,121,76)"
    ],
    legend: {
      data: ["0-18", "18-28", "28-40", "40-65", "65以上"]
    },
    xAxis: [
      {
        type: "category",
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        axisPointer: {
          type: "shadow"
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 0
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: "{value}"
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 0
          }
        }
      }
    ],
    series: [
      {
        name: "0-18",
        type: "bar",
        data: [80, 5, 15, 23, 65, 76, 15, 16, 32, 20, 6, 3]
      },
      {
        name: "18-28",
        type: "bar",
        data: [2, 50, 77, 2, 25, 7, 45, 164, 3, 20, 16, 36]
      },
      {
        name: "28-40",
        type: "bar",
        data: [46, 23, 74, 23, 25, 6, 35, 62, 3, 2, 61, 36]
      },
      {
        name: "40-65",
        type: "bar",
        data: [12, 50, 71, 37, 24, 7, 13, 82, 32, 20, 72, 0]
      },
      {
        name: "65以上",
        type: "bar",
        data: [222, 5, 67, 23, 45, 76, 15, 160, 182, 20, 6, 3]
      }
    ]
  }

  var option5 = {
    title: {
      text: "会员比例",
       textStyle: {
            color: 'rgb(62,144,149)'
        }
    },
    tooltip: {
      trigger: "item"
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "60%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: "center"
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "25",
              fontWeight: "bold"
            },
            formatter: "{d}%",
            color: ["rgb(62,144,149)", "rgb(167,211,214)"]
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{ value: 335, name: "会员" }, { value: 2000, name: "非会员" }],
        color: ["rgb(62,144,149)", "rgb(167,211,214)"]
      }
    ]
  }

  myChart.setOption(option);
  myChart2.setOption(option2);
  myChart3.setOption(option3);
  myChart4.setOption(option4);
  myChart5.setOption(option5);
  $(window).resize(function () {
    res()
    myChart.resize()
    myChart2.resize()
    myChart3.resize()
    myChart4.resize()
    myChart5.resize()
  })
});
