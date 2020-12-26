//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showDialog: false,
    isFinished: false
  },
  //事件处理函数
  onShow: function () {
    wx.hideHomeButton()
  },
  onLoad: function () {

    let that = this;
    setTimeout(function () {
      that.setData({
        isFinished: true
      })
    }, 100);
    this.generateQuestion();
  },
  //根据年龄,生成题库
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
  handleredirect() {

    if (this.data.isFinished) {
      this.setData({
        showDialog: !this.data.showDialog
      })
      setTimeout(function () {
        wx.redirectTo({
          url: '/pages/A1-question/A1-question?id=' + 0,
        })
      }, 800);
    }
  }
})