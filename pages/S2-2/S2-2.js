//index.js
//获取应用实例
var questionInfo = require('../../data/S2-question2-1.js');
var questionInfo1 = require('../../data/S2-question2-2.js');
var init;
var init1;
const app = getApp();
Page({
  data: {
    practice: null,
    oneButton: [{
      text: '下一关'
    }],
    oneButton1: [{
      text: '完成'
    }],
    isPage1: true, //控制第一页的显示
    isPage2: false,
    isPage3: false,
    isPage4: false,
    isPage5: false,
    selectIndex: [0, 0, 0, 0], //每个选项的选择状态
    index: -1, //选中选项的下标
    age: 0, //0为低年龄段,1为高年龄段
    questionnum: -1, //题号
    score: 100, //分数
    timecount: "0:00", //计时器文字
    second: 0, //秒
    millisecond: 0, //毫秒
    question: [],
    time: null, //一个定时器名称
    ifAnswerRight: 1, //0为回答错误,1为回答正确
    random: 0
  },

  //载入题目信息
  onLoad: function () {
    this.setData({
      practice: getApp().globalData.practice
    })
    var question
    if (getApp().globalData.level == 2) {
      question = questionInfo1.postList
    } else {
      question = questionInfo.postList
    }
    this.setData({
      question: question,
    })
  },

  //开始
  jumpBtn: function () {
    let that = this
    let random = parseInt(Math.random() * 2)
    this.setData({
      random: random
    })
    let questionnum = this.data.questionnum
    questionnum += 1
    if (questionnum < 5) {
      let isPage1 = this.data.isPage1;
      let isPage2 = this.data.isPage2;
      let isPage4 = this.data.isPage4;
      isPage1 = false;
      isPage2 = true;
      isPage4 = false;
      //初始化
      this.setData({
        isPage1: isPage1,
        isPage2: isPage2,
        isPage4: isPage4,
        questionnum: questionnum,
        //计时器清零
        second: 0,
        millisecond: 0,
        //选择情况清零
        index: -1,
        selectIndex: [0, 0, 0, 0],
        ifAnswerRight: 1
      })
      init = setInterval(this.timer1, 10);
    } else {
      this.setData({
        questionnum: questionnum
      })
      if (getApp().globalData.practice == false) {
        wx.request({
          url: 'https://www.yuan619.xyz:8887/history/upscore8',
          data: {
            id: app.globalData.gameId,
            score: that.data.score / 2,
          },
          method: 'POST',
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success: function (res) {
            console.log(res.data);
          },
          fail: function (res) {
            console.log("...fail...");
          }
        })
      }

    }
  },
  toWin() {
    if (getApp().globalData.practice == true) {
      wx.switchTab({
        url: '/pages/practice/practice',
      })
    } else {
      wx.request({
        url: 'https://www.yuan619.xyz:8887/history/upscore10',
        data: {
          id: app.globalData.gameId
        },
        method: 'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          console.log(res.data);
        },
        fail: function (res) {
          console.log("...fail...");
        }
      })
      setTimeout(() => {
        wx.redirectTo({
          url: '/pages/win/win'
        })
      }, 500)
    }

  },
  //倒计时1
  timer1: function () {
    this.setData({
      millisecond: this.data.millisecond + 1
    })
    if (this.data.millisecond >= 100) {
      this.setData({
        millisecond: 0,
        second: this.data.second + 1
      })
    }
    if (this.data.second == 20) {
      this.setData({
        second: 0,
        millisecond: 0,
        isPage2: false,
        isPage3: true
      })
      clearInterval(init)
      init1 = setInterval(this.timer2, 10);
    }
    this.setData({
      timecount: this.data.second + ":" + (this.data.millisecond < 10 ? "0" + this.data.millisecond : this.data.millisecond),
    })
  },
  // 点击确定直接结束倒计时
  speedup: function () {
    this.setData({
      second: 20
    })
  },
  // 倒计时2
  timer2: function () {
    this.setData({
      millisecond: this.data.millisecond + 1
    })
    if (this.data.millisecond >= 100) {
      this.setData({
        millisecond: 0,
        second: this.data.second + 1
      })
    }
    //时间到了记录答题状态
    if (this.data.second == 20) {
      let random = this.data.random
      let questionnum = this.data.questionnum
      let rightIndex = this.data.question[(questionnum * 2) + random].rightIndex
      let punish = this.data.question[(questionnum * 2) + random].punish
      let score = this.data.score
      let ifAnswerRight = this.data.ifAnswerRight
      if (rightIndex != this.data.index) {
        ifAnswerRight = 0;
        score = score - punish;
      }
      this.setData({
        second: 0,
        millisecond: 0,
        isPage3: false,
        isPage4: true,
        score: score,
        ifAnswerRight: ifAnswerRight
      })
      clearInterval(init1)
    }
    this.setData({
      timecount: this.data.second + ":" + (this.data.millisecond < 10 ? "0" + this.data.millisecond : this.data.millisecond),
    })
  },
  //选择选项
  selectAnswer(option) {
    let index = option.currentTarget.dataset.index
    if (index == 0) {
      this.setData({
        selectIndex: [1, 0, 0, 0],
        index: index
      })
    }
    if (index == 1) {
      this.setData({
        selectIndex: [0, 1, 0, 0],
        index: index
      })
    }
    if (index == 2) {
      this.setData({
        selectIndex: [0, 0, 1, 0],
        index: index
      })
    }
    if (index == 3) {
      this.setData({
        selectIndex: [0, 0, 0, 1],
        index: index
      })
    }
  },
  onShow: function () {
    wx.hideHomeButton(),
      this.setData({
        practice: getApp().globalData.practice
      })
    var question
    if (getApp().globalData.level == 2) {
      question = questionInfo1.postList
    } else {
      question = questionInfo.postList
    }
    this.setData({
      question: question,
    })
  },
})