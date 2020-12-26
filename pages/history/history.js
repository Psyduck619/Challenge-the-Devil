const app = getApp()
Page({
  data: {
    hasInfo: false,
    list: []
  },
  onLoad: function (options) {

  },
  onReady: function () {
    
  },

  getId:function(e) {
    app.globalData.gameId = e.currentTarget.dataset.id
  },
  getInfo:function() {
    wx.navigateTo({
      url: '../comment/comment'
    })
    console.log(app.globalData.gameId)
  },
  onShow: function () {
    console.log(app.globalData.openid)
    let that = this
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
        for(let i = 0; i < list2.length; i++){
          list2[i].finishTime = list2[i].finishTime.substring(0, 
            list2[i].finishTime.length - 10).replace('T', ' ')
        }
        that.setData({
          list: list2
        })
        if(list2){
          that.setData({
            hasInfo: true
          })
        }
      },
      fail: function (res) {
        console.log("...fail...");
      }
    })
  }

})