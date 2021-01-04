const app = getApp()
Page({
  data: {

  },
  onShow: function () {
    wx.request({
      url: 'https://www.yuan619.xyz:8887/history/byopenid',
      data: {
        openid: app.globalData.openid
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        let list2 = res.data.list
        console.log(list2);
        let list3 = []
        for(let i = 0; i < list2.length; i++){
          if(list2[i].score8 != 0){
            console.log(list2[i].score8)
            list3.push(list2[i])
            // console.log(list3)
          }
        }
        console.log(list3.length)
        if(list3.length < 1){
          wx.showToast({
            title: '必须要打败一次大魔王后才能进行训练哦',
            icon:'none',
            duration:1600,
            mask:true
          })
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/index/index',
            })
          },1600)
        }
      },
      fail: function (res) {
        console.log("...fail...");
      }
    })
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