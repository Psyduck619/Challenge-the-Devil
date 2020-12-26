//app.js
App({
  onLaunch: function () {
    //云开发初始化
    wx.cloud.init({
      env: 'yuan-1bd01',
      traceUser: true
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // 获取到用户的 code 之后：res.code
        console.log("用户的code:" + res.code);
        // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
        // wx.request({
        //     // 自行补上自己的 APPID 和 SECRET
        //   url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx779e535c408fadbd&secret=7bce4a89821f3ae45b1a17e572287dd6&js_code=' + res.code + '&grant_type=authorization_code',
        //   success: res => {
        //     // 获取到用户的 openid
        //     console.log("用户的openid:" + res.data.openid);
        //     this.globalData.openid = res.data.openid
        //   }
        // });
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              this.globalData.nickName = res.userInfo.nickName
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    //index
    userInfo: null,
    oepnid: null,
    nickName: null,
    gameId: 9,
    gameInfo: null,
    sex: 2,
    level: 1, //1-低级；2-高级
    practice: false,
    //wjl
    // 测试年龄段
    young: [1, 2, 2, 3, 4, 4],
    old: [2, 3, 3, 4, 4, 5],
    time1: 0,
    time2: 0,
    error: 0,
    //记录题目难度序列,便于生成题目
    level2: [
      [1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15]
    ],
    // 进入游戏根据年龄随机生成的题库,记录题目id
    current: [],
    scoreList: [6, 6, 8, 8, 11, 11],
    //第一关的分数
    A1score: 50,
    //第二关分数
    A2score: 50
    //
  }
})