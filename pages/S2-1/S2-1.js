//index.js
//获取应用实例
var questionInfo = require('../../data/S2-question1-1.js');
var questionInfo1 = require('../../data/S2-question1-2.js');
var init;
const app = getApp();
Page({
  data: {
    showhint:false,
    isPage1: true, //控制第一页的显示
    isPage2: false,
    isPage3: false,
    isPage4: false,
    right: [0, 0, 0, 0, 0, 0], //在卷轴上显示正确的字符
    selectIndex: [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0
    ], //每个色块的选择下标
    age: getApp().globalData.level==1?0:1, //0为低年龄段,1为高年龄段
    selectid: -1, //选中图片的index
    imgnumber: 4, //该题目是2*2还是3*3
    numberid: 0, //控制看题倒计时
    questionnum: -1, //题号
    answerIndex: -1, //答题进度
    score: 0, //分数
    timecount: "0:00", //计时器文字
    second: 0, //秒
    millisecond: 0, //毫秒
    spendtime: 0,
    wrongTimes: 0,
    animation: {},
    question: [],
    number: [],
    hint: ["优秀的魔法师,选择咒语吧!",
      "答对啦!继续选择下一个咒语吧",
      "好像不是这个咒语哦,再找找吧"
    ],
    time: null, //一个定时器名称
    ifAnswerRight: 0,
    random:0
  },

  onLoad: function () {
    var question = questionInfo.postList //为什么要加postList?
    if (this.data.age == 1) {
      question = questionInfo1.postList
    }
    this.setData({
      question: question,
    })
    console.log(this.data.selectid)
  },

  //初始化
  init: function () {
    let imgnumber = this.data.imgnumber
    if (this.data.age == 1) {
      imgnumber = 9
    } else {
      imgnumber = 4
    }
    this.setData({
      isPage2: true,
      isPage3: false,
      isPage4: false,
      selectid: -1, //选中图片的index
      imgnumber: imgnumber, //该题目是2*2还是3*3
      //清零计时器,选择信息,错误次数
      second: 0,
      millisecond: 0,
      selectIndex: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      right: [0, 0, 0, 0, 0, 0],
      wrongTimes: 0,
    })
  },
  //隐藏主页
  onShow: function () {
    wx.hideHomeButton()
  },
  //开始
  jumpBtn: function () {
    let that = this
    let questionnum = this.data.questionnum
    questionnum += 1
    let random = parseInt(Math.random()*3)
    this.setData({
      random:random
    })
    let score = this.data.score;
    if (questionnum < 2) {
      let isPage1 = this.data.isPage1;
      let isPage2 = this.data.isPage2;
      isPage1 = false;
      isPage2 = true;
      this.setData({
        isPage1: isPage1,
        isPage2: isPage2,
        answerIndex: 0,
        questionnum: questionnum,
      })
      this.init();
      init = setInterval(this.timer, 10);
    } else {
      score = score / questionnum;
      this.setData({
        isPage2: false,
        isPage3: false,
        isPage4: false,
        answerIndex: 0,
        score: score,
        questionnum: questionnum
      })
      if(getApp().globalData.practice==false){
        wx.request({
          url: 'https://www.yuan619.xyz:8887/history/upscore7',
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
        wx.redirectTo({
          url: '../S2-story2/S2-story2'
        })
      }
      else if(getApp().globalData.practice==true){
        this.setData({
          showhint:true
        })
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/practice/practice',
          })
        }, 2050)
      }
    }
  },
  startGame: function () {
    let isPage2 = this.data.isPage2;
    let isPage3 = this.data.isPage3;
    isPage2 = false;
    isPage3 = true;
    this.setData({
      isPage2: isPage2,
      isPage3: isPage3
    })
  },
  // 计时器
  timer: function () {
    this.setData({
      millisecond: this.data.millisecond + 1
    })
    if (this.data.millisecond >= 100) {
      this.setData({
        millisecond: 0,
        second: this.data.second + 1
      })
    }
    this.setData({
      timecount: this.data.second + ":" + (this.data.millisecond < 10 ? "0" + this.data.millisecond : this.data.millisecond),
    })
  },
  nextGame(){
    wx.redirectTo({
      url: '../S2-story2/S2-story2'
    })
  },
  //选择选项
  selectimg(option) {
    let index = option.currentTarget.dataset.index;
    let ifAnswerRight = this.data.ifAnswerRight
    let selectIndex = this.data.selectIndex;
    let question = this.data.question;
    let questionnum = this.data.questionnum;
    let random = this.data.random;
    let answer = question[(questionnum*3)+random].answer;
    let answerIndex = this.data.answerIndex;
    let wrongTimes = this.data.wrongTimes;
    let right = this.data.right;
    var that = this;
    if (selectIndex[index] == 0) {
      if (index == answer[answerIndex]) {
        selectIndex[index] = 1;
        right[answerIndex] = 1;
        answerIndex++;
        ifAnswerRight = 1;
      } else {
        selectIndex[index] = 2;
        wrongTimes++;
        ifAnswerRight = 2;
      }
      that.setData({
        selectIndex: selectIndex,
        answerIndex: answerIndex,
        wrongTimes: wrongTimes,
        ifAnswerRight: ifAnswerRight,
        right: right,
      })
    } else if (selectIndex[index] == 2) {
      if (index == answer[answerIndex]) {
        selectIndex[index] = 1;
        right[answerIndex] = 1;
        answerIndex++;
        ifAnswerRight = 1;
      } else {
        wrongTimes++;
      }
      that.setData({
        selectIndex: selectIndex,
        answerIndex: answerIndex,
        right: right,
        ifAnswerRight: ifAnswerRight,
        wrongTimes: wrongTimes
      })
    }
     if (answerIndex == answer.length) {
     //结算分数   
        let score = this.data.score
        let second = this.data.second;
        let wrongTimes = this.data.wrongTimes;
        let imgnumber = this.data.imgnumber;
        if (imgnumber == 4) {
          if (second < 5) {
            score += 100;
          } else if (second < 10) {
            score += 80;
          } else if (second < 15) {
            score += 60;
          } else {
            score += 40;
          }
          score = score - 5 * wrongTimes;
        } else if (imgnumber == 9) {
          if (second < 10) {
            score += 100;
          } else if (second < 17) {
            score += 80;
          } else if (second < 23) {
            score += 60;
          } else {
            score += 40;
          }
          score = score - 3 * wrongTimes;
        }
        this.setData({
          score: score
        })
      clearInterval(init);
      console.log("通关")
      that.setData({
        isPage4: true,
        isPage3: false,
        answerIndex: answerIndex,
      })
    }
  }
})