const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    openid: null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    myList: [
      {
        "id": "1",
        "text": "游戏记录",
        "img": "http://yuan619.xyz/lsq/history.png"
      },
      {
        "id": "2",
        "text": "孩子信息",
        "img": "http://yuan619.xyz/lsq/personal.png"
      },
      {
        "id": "3",
        "text": "联系我们",
        "img": "http://yuan619.xyz/lsq/email.png"
      }
    ]
  },
  //页面跳转函数
  changeBtn:function(e) {
    let $id = e.currentTarget.dataset.id
    console.log($id)
    if("1" == $id) {
      wx.navigateTo({
        url: '../history/history'
      })
    } else if ("2" == $id){
      wx.navigateTo({
        url: '../userinfo/userinfo'
      })
    } else if ("3" == $id){
      wx.navigateTo({
        url: '../contact/contact'
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        openid: app.globalData.openid,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          openid: app.globalData.openid,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            openid: app.globalData.openid,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function () {
    // wx.request({
    //   url: 'https://www.yuan619.xyz:8887/user/upUserinfo',
    //   header: {
    //    "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   method: "POST",
    //   data: {
    //     openid: app.globalData.openid,
    //     name: app.globalData.nickName
    //   },
    //   success: function (res) {
    //    console.log(res)
    //    if(res.data.code == 200){
    //      if(res.data.result == "登录成功"){
    //        console.log("用户数据上传成功!")
    //      }
    //    }
    //   },
    //   fail: function (res) {
    //    console.log(res)
    //    if(res.data.result == "no"){
    //      console.log("用户数据上传失败!")
    //    }
    //   }
    // })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
