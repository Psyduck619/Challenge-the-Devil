const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  onLoad: function () {
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      wx.showToast({
        title: '登录成功!',
        icon: 'success',
        image: '',
        duration: 1000,
        mask: false,
        success: (result) => {},
        fail: () => {},
        complete: () => {}
      });
      setTimeout(() => {
        wx.switchTab({
          url: '../../pages/index/index'
        })
      }, 1000)
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
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
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    wx.hideHomeButton()
  },
  getUserInfo: function (e) {
    console.log("得到用户信息！！！")
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.request({
      url: 'https://www.yuan619.xyz:8887/user/upUserinfo',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        openid: app.globalData.openid,
        name: app.globalData.userInfo.nickName
      },
      success: function (res) {
        console.log(res)
        if (res.data.code == 200) {
          if (res.data.result == "登录成功") {
            wx.setStorageSync('login', 'in')
            console.log(wx.getStorageSync('login') + "登录页用户数据上传成功!")
          }
          wx.showToast({
            title: '登录成功!',
            icon: 'success',
            image: '',
            duration: 1000,
            mask: false,
            success: (result) => {},
            fail: () => {},
            complete: () => {}
          });
          setTimeout(() => {
            wx.switchTab({
              url: '../../pages/index/index'
            })
          }, 1000)
        }
      },
      fail: function (res) {
        console.log(res)
        if (res.data.result == "no") {
          console.log("用户数据上传失败!")
        }
      }
    })
  }
})