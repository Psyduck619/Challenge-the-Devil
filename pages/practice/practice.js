const app = getApp()
Page({
  data: {

  },
  onShow: function () {
    console.log(app.globalData.level)
  },
  game1:function () {
    app.globalData.practice = true
    console.log(app.globalData.practice)
    wx.navigateTo({
      url: '../../pages/P1-story/P1-story',
    })
  },
  game2:function () {
    app.globalData.practice = true
    console.log(app.globalData.practice)
    wx.navigateTo({
      url: '../../pages/p2-story/p2-story',
    })
  },
  game3:function () {
    app.globalData.practice = true
    console.log(app.globalData.practice)
    wx.navigateTo({
      url: '../../pages/A-story1/A-story1',
    })
  },
  game4:function () {
    app.globalData.practice = true
    console.log(app.globalData.practice)
    wx.navigateTo({
      url: '../../pages/A-story2/A-story2',
    })
  },
  game5:function () {
    app.globalData.practice = true
    console.log(app.globalData.practice)
    wx.navigateTo({
      url: '../../pages/S1-story1/S1-story1',
    })
  },
  game6:function () {
    app.globalData.practice = true
    console.log(app.globalData.practice)
    wx.navigateTo({
      url: '../../pages/S1-story2/S1-story2',
    })
  },
  game7:function () {
    app.globalData.practice = true
    console.log(app.globalData.practice)
    wx.navigateTo({
      url: '../../pages/S2-story1/S2-story1',
    })
  },
  game8:function () {
    app.globalData.practice = true
    console.log(app.globalData.practice)
    wx.navigateTo({
      url: '../../pages/S2-story2/S2-story2',
    })
  },
  game9:function () {
    app.globalData.practice = true
    console.log(app.globalData.practice)
    wx.navigateTo({
      url: '../../pages/S3-story/S3-story',
    })
  },
})