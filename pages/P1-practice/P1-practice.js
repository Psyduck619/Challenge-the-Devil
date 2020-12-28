// pages/game1/game1.js
var cnt = 0
Page({
  data: {
    level:0,
    color1:'rgb(37, 30, 51)',
    color2:'rgb(37, 30, 51)',
    color3:'rgb(37, 30, 51)',
    color4:'rgb(37, 30, 51)',
    color5:'rgb(37, 30, 51)',
    show:true,
    show2:true,
    show3:false,
    number1:121,
    number2:212,
    number3:121,
    number4:222,
    number5:111,
    selectFrm:-1,
    selectFrm_num:-1,
    image:'http://yuan619.xyz/elf.png',
    animation: 'none',
  },

  // 用于关闭提示
  go:function(){
    this.setData({
      show:false
    })
  },

  // 用于把数字变红（在搭配错误时
  turnRed:function(){
    if(this.data.selectFrm==1){
      this.setData({
        color1:'red'
      })
    }else if(this.data.selectFrm==2){
      this.setData({
        color2:'red'
      })
    }else if(this.data.selectFrm==3){
      this.setData({
        color3:'red'
      })
    }else if(this.data.selectFrm==4){
      this.setData({
        color4:'red'
      })
    }else if(this.data.selectFrm==5){
      this.setData({
        color5:'red'
      })
    }
  },

  // 用于把数字全部变回白色
  cleancolor:function(){
    this.setData({
      color1:'rgb(37, 30, 51)',
      color2:'rgb(37, 30, 51)',
      color3:'rgb(37, 30, 51)',
      color4:'rgb(37, 30, 51)',
      color5:'rgb(37, 30, 51)',
    })
  },

  // 配对成功后进行的操作
  match_success:function() {
    var _this = this
    cnt = cnt + 1
    // 设置第二轮训练的数字
    this.setData({
      number1:242,
      number2:424,
      number3:244,
      number4:422,
      number5:244,
      selectFrm:-1,
      selectFrm_num:-1,
    });
    var j=0;
    var time = setInterval(function() {
      j=j+1;
      if (j==100) {
        _this.setData({
             animation:'none'
           })
           clearInterval(time)
      } else {
        _this.setData({
          animation:'turn 0.5s linear infinite'
        })
      }
  }, 10)
    this.cleancolor()
    // 若是两轮都整完了，就展示开始挑战的页面
    if(cnt==2){
      cnt = 0
      console.log("success"),
      this.setData({
        show2:false,
        show3:true
      })
    }
  },

  // select1 - 5 代表了点击每个数字的函数
  select1:function(){
    if(this.data.selectFrm==-1){
      this.data.selectFrm=1
      this.data.selectFrm_num=this.data.number1
      this.setData({
        color1: 'rgb(48, 204, 255)'
      })
    }else if(this.data.selectFrm==1){
      this.data.selectFrm=-1
      this.data.selectFrm_num=-1
      this.setData({
        color1: 'rgb(37, 30, 51)'
      })
    }else if(this.data.selectFrm_num==this.data.number1){
      this.match_success()
    }else{
      var _this = this
      this.setData({
        color1: 'red',
      })
      this.turnRed()
      this.setData({
        color1: 'red',
      })
      this.turnRed()
      setTimeout(function(){
        _this.cleancolor()
        _this.setData({
          image:'http://yuan619.xyz/elf.png'
        })
      }, 500)
      this.data.selectFrm=-1
      this.data.selectFrm_num=-1
    }
  },

  select2:function(){
    if(this.data.selectFrm==-1){
      this.data.selectFrm=2
      this.data.selectFrm_num=this.data.number2
      this.setData({
        color2: 'rgb(48, 204, 255)'
      })
    }else if(this.data.selectFrm==2){
      this.data.selectFrm=-1
      this.data.selectFrm_num=-1
      this.setData({
        color2: 'rgb(37, 30, 51)'
      })
    }else if(this.data.selectFrm_num==this.data.number2){
      this.match_success()
    }else{
      var _this = this
      this.setData({
        color2: 'red',
        
      })
      this.turnRed()
      setTimeout(function(){
        _this.cleancolor()
        _this.setData({
          image:'http://yuan619.xyz/elf.png'
        })
      }, 500)
      this.data.selectFrm=-1
      this.data.selectFrm_num=-1
    }
  },

  select3:function(){
    if(this.data.selectFrm==-1){
      this.data.selectFrm=3
      this.data.selectFrm_num=this.data.number3
      this.setData({
        color3: 'rgb(48, 204, 255)'
      })
    }else if(this.data.selectFrm==3){
      this.data.selectFrm=-1
      this.data.selectFrm_num=-1
      this.setData({
        color3: 'rgb(37, 30, 51)'
      })
    }else if(this.data.selectFrm_num==this.data.number3){
      this.match_success()
    }else{
      var _this = this
      this.setData({
        color3: 'red',
        
      })
      this.turnRed()
      setTimeout(function(){
        _this.cleancolor()
        _this.setData({
          image:'http://yuan619.xyz/elf.png'
        })
      }, 500)
      this.data.selectFrm=-1
      this.data.selectFrm_num=-1
    }
  },

  select4:function(){
    if(this.data.selectFrm==-1){
      this.data.selectFrm=4
      this.data.selectFrm_num=this.data.number4
      this.setData({
        color4: 'rgb(48, 204, 255)'
      })
    }else if(this.data.selectFrm==4){
      this.data.selectFrm=-1
      this.data.selectFrm_num=-1
      this.setData({
        color4: 'rgb(37, 30, 51)'
      })
    }else if(this.data.selectFrm_num==this.data.number4){
      this.match_success()
    }else{
      var _this = this
      this.setData({
        color4: 'red',
        
      })
      this.turnRed()
      setTimeout(function(){
        _this.cleancolor()
        _this.setData({
          image:'http://yuan619.xyz/elf.png'
        })
      }, 500)
      this.data.selectFrm=-1
      this.data.selectFrm_num=-1
    }
  },

  select5:function(){
    if(this.data.selectFrm==-1){
      this.data.selectFrm=5
      this.data.selectFrm_num=this.data.number5
      this.setData({
        color5: 'rgb(48, 204, 255)'
      })
    }else if(this.data.selectFrm==5){
      this.data.selectFrm=-1
      this.data.selectFrm_num=-1
      this.setData({
        color5: 'rgb(37, 30, 51)'
      })
    }else if(this.data.selectFrm_num==this.data.number5){
      this.match_success()
    }else{
      var _this = this
      this.setData({
        color5: 'red',
        
      })
      this.turnRed()
      setTimeout(function(){
        _this.cleancolor()
        _this.setData({
          image:'http://yuan619.xyz/elf.png'
        })
      }, 500)
      this.data.selectFrm=-1
      this.data.selectFrm_num=-1
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideHomeButton()
    var level=getApp().globalData.level;
    this.setData({
      level:level
    })
  },
  next: function() {
      wx.redirectTo({
        url: '../P1/P1'
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideHomeButton()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})