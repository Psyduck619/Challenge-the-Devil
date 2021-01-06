//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  begin: function() {
    this.setData({
      showDialog: !this.data.showDialog
    })
    setTimeout(  function() {
    wx.redirectTo({
      url: '../A1-teach-question/A1-teach-question?id=0'
    })}
    ,3000)
  },
  onShow: function () {
    wx.hideHomeButton()
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
    this.generateQuestion();
  },
  generateQuestion() {
    let age = app.globalData.age;
    let old=app.globalData.old;
    let young=app.globalData.young;
    let num;
    if (getApp().globalData.level==1) {
      num = young
    } else if(getApp().globalData.level==2){
      num = old
    }
    let k = 0;
    let set = new Set();
    let level2 = app.globalData.level2;
    while (true) {
      let id = level2[num[k]-1][Math.floor(Math.random() * level2[num[k]-1].length)];
      while (set.has(id)) 
      {
        id = level2[num[k]-1][Math.floor(Math.random() * level2[num[k]-1].length)];
      }
      app.globalData.current[k] = id;
      set.add(id);
      k++;
      if (k == 6) {
        break;
      }
    }
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
