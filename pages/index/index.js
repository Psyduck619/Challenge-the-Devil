const app = getApp()
const myaudio = wx.createInnerAudioContext()

Page({
  data: {
    on: true,
    animationMiddleHeaderItem: null,
  },
  auto:function () {
    myaudio.onEnded(() => {
      myaudio.play()
      this.setData({
        on: true
      })
    })
  },
  //游戏开始跳转
  bindstart: function () {
    wx.redirectTo({
      url: '../../pages/select/select',
    })
  },
  // //播放
  // play: function () {
  //   myaudio.play();
  //   console.log(myaudio.duration);
  //   this.setData({ on: true });
  // },
  // // 停止
  // stop: function () {
  //   myaudio.pause();
  //   this.setData({ on: false });
  // },
  // stop() {
  //   this.setData({
  //     on: !this.data.on
  //   })
  //   if (this.data.on) {
  //     this.back.play()
  //   } else {
  //     this.back.pause()
  //   }
  // },
  stop() {
    if (this.data.on) {
      myaudio.pause();
    } else {
      myaudio.play();
    }
    this.setData({
      on: !this.data.on
    })
  },
  
  
  onReady: function () {
    // //背景音乐
    // this.back = wx.getBackgroundAudioManager()
    // // this.back.src = "http://yuan619.xyz/music/bg_music.mp3"
    // // this.back.src = "../../music/GEM.mp3"
    // this.back.title = 'know'
    // this.back.play()
    //心跳
    var circleCount = 0;
    // 心跳的外框动画 
    this.animationMiddleHeaderItem = wx.createAnimation({
      duration: 2000, // 以毫秒为单位 
      /** 
       * http://cubic-bezier.com/#0,0,.58,1 
       * linear 动画一直较为均匀 
       * ease 从匀速到加速在到匀速 
       * ease-in 缓慢到匀速 
       * ease-in-out 从缓慢到匀速再到缓慢 
       * 
       * http://www.tuicool.com/articles/neqMVr 
       * step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过 
       * step-end 保持 0% 的样式直到动画持续时间结束 一闪而过 
       */
      timingFunction: 'linear',
      delay: 100,
      transformOrigin: '50% 50%',
      success: function (res) {}
    });
    setInterval(function () {
      if (circleCount % 2 == 0) {
        this.animationMiddleHeaderItem.scale(1.15).step();
      } else {
        this.animationMiddleHeaderItem.scale(1.0).step();
      }
      this.setData({
        animationMiddleHeaderItem: this.animationMiddleHeaderItem.export()
      });
      circleCount++;
      if (circleCount == 1000) {
        circleCount = 0;
      }
    }.bind(this), 1000);
    //上传用户信息
    setTimeout(() => {
      console.log(app.globalData.openid)
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
              console.log("用户数据上传成功!")
            }
          }
        },
        fail: function (res) {
          console.log(res)
          if (res.data.result == "no") {
            console.log("用户数据上传失败!")
          }
        }
      })
      wx.request({
        url: 'https://www.yuan619.xyz:8887/user/byopenid',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: {
          openid: app.globalData.openid
        },
        success: function (res) {
          if(res.data.list.age >= 11){
            app.globalData.level = 2
          }
          console.log(res)
        },
        fail: function (res) {
          console.log(res)
        }
      })
    }, 1500)
  },
  onLoad: function () {
    myaudio.src = "http://yuan619.xyz/music/bg_music.mp3"
    myaudio.play()
    this.auto()
    this.getOpenid()
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          console.log("已经授权")
        } else {
          wx.redirectTo({
            url: '../../pages/login/login'
          })
        }
      }
    })
  },
  // 获取用户openid
  getOpenid() {
    let that = this;
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        console.log('云函数获取到的openid:', res.result.openId)
        var openid = res.result.openId;
        app.globalData.openid = openid
      }
    })
  }
})