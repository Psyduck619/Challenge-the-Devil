let app = getApp()
Page({

  data: {
    score: [],
    personPosition: 'left'
  },
  onShow: function () {
    let that = this
    if(app.globalData.sex == 2){
      this.setData({
        personPosition: 'right'
      })
    }
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
        console.log(v);
        that.setData({
          'score[0]': Number(v.score1) + Number(v.score2),
          'score[1]': Number(v.score3) + Number(v.score4),
          'score[2]': Number(v.score5) + Number(v.score6),
          'score[3]': Number(v.score7) + Number(v.score8),
        })
        console.log(that.score)
      },
      fail: function (res) {
        console.log("...fail...");
      }
    })
  },
})