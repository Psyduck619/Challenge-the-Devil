let app = getApp()
Page({
  data: {
    aspectCanvas: {
      canvasWidth: 392*1.05,
      canvasHeight: 366*0.9,
      fontSize: 46,
      categories: ['综合', '注意', '继时性', '同时性', '计划'],
      MaxDimension: 100
    },
    currentPetNumber: 'm000225',
    dimension: [90, 90, 90, 90, 90],
    radarData: {},
    currentRadarImage: "",
    content: [
      '计划力评价',
      '注意力评价注意力评价注意力评价',
      '同时性编码评价',
      '继时性编码评价'
    ]
  },
  //回到首页
  toFirst: ()=>{
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  onShow: function () {
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
        that.setData({
          'dimension[0]': Number(v.timescore)/2 + Number(v.score9),
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
    setTimeout(()=>{
      const radarData = this.returnRadarData(this.data.dimension);
      this.setData({radarData});
      const {gender, id, radarList} = this.data.radarData;
      console.log(gender, id, radarList);
    },1500)
  },
  returnRadarData(dimension) {
      const petNumber = this.data.currentPetNumber;
      return {
          gender: app.globalData.sex,
          id: petNumber,
          radarList: dimension
      };
  },
  radarUpdate(e) {
      //传回来雷达图片
      this.setData({currentRadarImage: e.detail});
  }
})