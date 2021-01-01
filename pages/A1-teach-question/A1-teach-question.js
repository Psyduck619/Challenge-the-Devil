//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    puzzle: [{
        content: [{
          name: ' 白色',
          color: 'red'
        }, {
          name: '绿色',
          color: 'yellow'
        }],
      },
      {
        content: [{
          name: '黄色',
          color: 'pink'
        }, {
          name: '紫色',
          color: 'green'
        }, {
          name: '蓝色',
          color: 'black'
        }],
      },
      {
        content: [{
            name: '橙色',
            color: 'brown'
          },
          {
            name: '灰色',
            color: 'wheat'
          },
          {
            name: '绿色',
            color: 'blue'
          }
        ],
      },
    ],
    time: 6,
    currentPageId: 0,
    showDialog: false,
    isFinished: false,
    tid: 0,
    objt: {},
    percent:0,
  },
  //事件处理函数
  onShow: function () {
    wx.hideHomeButton()
  },
  decreaseTime() {
    let time = this.data.time - 1;
    let p=this.data.percent+16.67;
    this.setData({
      time,
      percent:p
    })
  },
  changeQuestion() {
    let tid = this.data.tid + 1;
    let t = this.data.puzzle[this.data.currentPageId].content[tid];
    if (t != undefined) {
      this.setData({
        objt: t,
        tid: tid
      })
    }
  },
  onLoad: function (options) {
    let that = this;
    setTimeout(function () {
      that.setData({
        isFinished: true
      })
    }, 100);
    let tid = parseInt(options.id)
    let obj = this.data.puzzle[tid].content[this.data.tid];
    this.setData({
      currentPageId: tid,
      objt: obj,
    })
    let interval = 5000 / (this.data.puzzle[tid].content.length);
    setInterval(this.decreaseTime, 1000);
    setInterval(this.changeQuestion, interval);
    setTimeout(function () {
      wx.redirectTo({
        url: '/pages/A1-teach-answer/A1-teach-answer?id=' + tid,
      })
    }, 6000);
  },

  handleredirect() {
    this.setData({
      showDialog: !this.data.showDialog
    })
    setTimeout(function () {
      wx.redirectTo({
        url: '/pages/A1-question/A1-question?id=' + 0,
      })
    }, 800);

  }
})