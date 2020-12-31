import * as echarts from '../../ec-canvas/echarts';
let app = getApp()
let chart = null
let option = null
let _color = 'rgba(252, 165, 162, 1)'
let _color1 = 'rgba(144, 168, 245, 1)'
let _color2 = 'rgba(252, 165, 162, 1)'
let _value = [0, 0, 0, 0, 0]


function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  chart.showLoading(); //这里是缓冲动画
  option = {
    backgroundColor: "#ececc6",
    color: [_color],
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      // shape: 'circle',
      name: { // (圆外的标签)雷达图每个指示器名称的配置项。
        formatter: '{value}',
        textStyle: {
          fontSize: 12,
          color: _color
        }
      },
      splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
        show: true,
        areaStyle: { // 分隔区域的样式设置。
            color: ['transparent', 'rgba(255,255,255,0.3)'],
            // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
        }
    },
      indicator: [{
          name: '综合',
          max: 100
        },
        {
          name: '计划',
          max: 100
        },
        {
          name: '同时性加工',
          max: 100
        },
        {
          name: '继时性加工',
          max: 100
        },
        {
          name: '注意',
          max: 100
        }
      ],
      axisLine: { // (圆内的几条直线)坐标轴轴线相关设置
        lineStyle: {
            color: _color,
            // 坐标轴线线的颜色。
            width: 1,
            // 坐标轴线线宽。
            type: 'solid',
            // 坐标轴线线的类型。
        }
    },
      splitLine: {
        lineStyle: {
          color: _color, // 设置网格的颜色
        },
      },
    },
    series: [{
      name: 'PASS模型',
      type: 'radar',
      data: [{
        value: _value,
        name: 'value'
      }],
      areaStyle: {
        color: _color // 选择区域颜色
      },
    }]
  };
  chart.setOption(option);
  chart.hideLoading(); //这是消除加载动画
  return chart;
}
Page({
  data: {
    ec: {
      onInit: initChart
    },
    // aspectCanvas: {
    //   canvasWidth: 392*1.05,
    //   canvasHeight: 366*0.9,
    //   fontSize: 46,
    //   categories: ['综合', '注意', '继时性', '同时性', '计划'],
    //   MaxDimension: 100
    // },
    // currentPetNumber: 'm000225',
    dimension: [90, 90, 90, 90, 90],
    // radarData: {},
    // currentRadarImage: "",
    content: [
      '',
      '',
      '',
      ''
    ]
  },
  //回到首页
  toFirst: ()=>{
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  onShow: function () {
    if(app.globalData.sex == 1){
      _color = _color1
    } else {
      _color = _color2
    }
    wx.hideHomeButton()
    let that = this
    wx.request({
      url: 'https://www.yuan619.xyz:8887/history/bygameid',
      data: {
        id: app.globalData.gameId
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        let v = res.data.list
        console.log("游戏记录查询", v);
        _value[0] = Number(v.timescore)/2 + Number(v.score9)
        _value[1] = Number(v.score1) + Number(v.score2)
        _value[2] = Number(v.score5) + Number(v.score6)
        _value[3] = Number(v.score7) + Number(v.score8)
        _value[4] = Number(v.score3) + Number(v.score4)
        console.log("计划", _value[1])
        // option.series[0].data[0].value = _value
        // chart.setOption(option);
        that.setData({
          // 'dimension[0]': Number(v.timescore)/2 + Number(v.score9),
          'dimension[1]': Number(v.score3) + Number(v.score4),
          'dimension[2]': Number(v.score7) + Number(v.score8),
          'dimension[3]': Number(v.score5) + Number(v.score6),
          'dimension[4]': Number(v.score1) + Number(v.score2),
          'content[0]': v.comment1,
          'content[1]': v.comment2,
          'content[2]': v.comment3,
          'content[3]': v.comment4,
        })
      },
      fail: function (res) {
        console.log("...fail...");
      }
    })
    // setTimeout(()=>{
    //   const radarData = this.returnRadarData(this.data.dimension);
    //   this.setData({radarData});
    //   const {gender, id, radarList} = this.data.radarData;
    //   console.log(gender, id, radarList);
    // },1500)
  },
  // returnRadarData(dimension) {
  //     const petNumber = this.data.currentPetNumber;
  //     return {
  //         gender: app.globalData.sex,
  //         id: petNumber,
  //         radarList: dimension
  //     };
  // },
  // radarUpdate(e) {
  //     //传回来雷达图片
  //     this.setData({currentRadarImage: e.detail});
  // }
})