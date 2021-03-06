$(function() {
  var con = $("#gus");
  var con2 = $("#sex");
  var con3 = $("#weekgus");

  var res = function() {
    con.width(($(window).width() - 220) / 2);
    con.height(window.innerHeight / 2.5);
    con2.width(($(window).width() - 220) / 2);
    con2.height(window.innerHeight / 2.5);
    con3.width(($(window).width() - 220) / 3.5);
    con3.height(window.innerHeight-180);
  };
  res()

  var myChart3 = echarts.init(document.getElementById("gus"));

  var option3 = {
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
        data: [300, 300, 250, 0],
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

  myChart3.setOption(option3);

  var myChart4 = echarts.init(document.getElementById("sex"));

  var option4 = {
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
  };

  myChart4.setOption(option4);

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

  var myChart5 = echarts.init(document.getElementById("weekgus"));

  var option5 = {
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
  };

  myChart5.setOption(option5);

  $(window).resize(function() {
    res();
    myChart3.resize();
    myChart4.resize();
    myChart5.resize();
  });
});
