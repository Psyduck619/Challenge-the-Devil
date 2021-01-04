const {
  setSize
} = require('../../utils/utils');
const {
  saveRecord,
  getRecord,
  shareImg
} = require('../../request/request');
var interval;
const app = getApp();
//教学关界面 基本逻辑还是得看游戏界面
Page({
  data: {
    oneButton:[{text:'开始游戏'}],
    ...setSize(3), //默认是3x3
    num: 0,
    sizes: [3, 4, 5],
    showNum: false,
    time: 0,
    status: '',
    statusText: {
      'success': '挑战成功!',
      'fail': '挑战失败!'
    },
    authorize: false,
    userInfo: {},
    topRecord: 0,
    clickId: 0,
    startTime: 0,
    score: 0,
    scoreArr: [],
    showModal: false,
    url: '',
    hasStarted: false,
    closeGrid: false,
    choosedSize: 3,
    //点击动画参数
    scaleData: null,
    //新
    timenumber: [5, 10, 15],
    rdtimetofs: 5,
    readingtime: 3,
    readingtimer: '',
    canlook: false,
    canclick: false,
    fenshu: 0,
    classhard: 1, //1为简单,2为困难
    gametime: 0,
    wrong: 0,
    cancontinue: true,
    finalsocre: 0,
    iswrong: false,
    success: false,
    reading: false,
    over: false,
  },

  onLoad: function (options) {
    wx.hideHomeButton()
    let {
      currentSize
    } = this.data;
    this.setData({
      authorize: app.globalData.authorize,
      userInfo: app.globalData.userInfo,
      classhard:getApp().globalData.level
    })
    this.awaitOpenId().then(openId => {
      getRecord(openId, currentSize).then(res => {
        this.setData({
          topRecord: res
        });
      })
    });


  },

  onShow: function () {
    // wx.hideHomeButton()
  },

  onHide: function () {
    clearInterval(this.interval);
  },

  onUnload: function () {
    app.clockAudio.stop();
    clearInterval(this.interval);
  },
  // 等待获取Openid
  awaitOpenId: function () {
    return new Promise((resolve, reject) => {
      if (app.globalData.openId) {
        this.setData({
          openId: app.globalData.openId
        })
        resolve(app.globalData.openId);
      } else {
        app.openIdCallback = res => {
          this.setData({
            openId: res
          })
          resolve(res);
        }
      }
    })
  },
  // 选择观看时间
  choosetime: function (event) {

    let rtime = Number(event.target.id);
    console.log(rtime)
    app.buttonAudio.play()
    this.setData({
      readingtime: rtime,
      rdtimetofs: rtime
    });
  },

  // 点击框框
  clickMe: function (event) {
    if (this.data.canclick) {
      if (!this.data.hasStarted) {
        this.start();
      }
      let {
        num,
        currentSize,
      } = this.data;
      let item = event.currentTarget.id;
      app.clickAudio.play();
      this.setData({
        iswrong: false,
        clickId: item
      });
      if (item == num + 1) {
        this.setData({
          num: Number(item),
          iswrong: false,
        })
        this.scaleTap(event);

        // 完成
        if (item == currentSize * currentSize) {
          let {
            startTime
          } = this.data;
          let time = new Date();
          let pass = ((time.getTime() - startTime) / 1000).toFixed(2);
          let scoreArr = pass.toString().split('');
          scoreArr.push("s")
          clearInterval(this.interval);
          this.setData({
            ...setSize(currentSize),
            closeGrid: true,
            showNum: false,
            status: 'success',
            over: true,
            score: pass,
            scoreArr: scoreArr,
            hasStarted: false,
          }, () => {
            app.clockAudio.stop();
            app.successAudio.play();
          })
        }
      } else {
        this.setData({
          iswrong: true,
          wrong: this.data.wrong + 1,
        })
      }

    }

  },
  //动画函数：：

  scaleTap: function (event) {
    var animation = wx.createAnimation({});
    animation.rotate(90).opacity(0.5).scale(0).step({
      duration: 200
    })
    animation.rotate(0).opacity(1.0).scale(1).step({
      duration: 50
    })
    this.setData({
      scaleData: animation.export(),
      isclick: true
    })

  },

  timer: function () {
    let {
      time,
      startTime
    } = this.data;
    if (time < 900) {
      let date = new Date();
      let currentTime = ((date.getTime() - startTime) / 1000).toFixed(2);

      this.setData({
        time: currentTime
      });
    } else {
      app.clockAudio.stop();
      clearInterval(this.interval);
      this.setData({
        showNum: false,
        status: 'fail'
      })
    }
  },
  readcountDown: function (event) {
    if (this.data.gametime == 0) {
      if (this.data.classhard == 1) {
        this.setData({
          ...setSize(3),
          choosedSize: 3
        })
      } else {
        this.setData({
          ...setSize(4),
          choosedSize: 4
        })
      }
    }
    this.setData({
      reading: true,
    })
    if (this.data.readingtime > 0) {
      let that = this;
      that.setData({
        canlook: true,

      })
      let num = this.data.readingtime;
      clearInterval(this.data.readingtimer);
      console.log(this.data.readingtime)
      that.setData({
        readingtimer: setInterval(function () { //这里把setInterval赋值给变量名为timer的变量
          //每隔一秒countDownNum就减一，实现同步
          num--;
          //然后把countDownNum存进data，好让用户知道时间在倒计着
          that.setData({
            readingtime: num
          })
          //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
          if (num == 0) {
            //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
            //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
            clearInterval(that.data.readingtimer)
            //关闭定时器之后，可作其他处理codes go here
            that.start()
            that.setData({
              canclick: true,
            })
          }
        }, 1000)
      })
    } else {

    }

  },

  start: function (event) {
    // clearInterval(that.data.readingtimer)
    app.buttonAudio.play()
    // this.readingtimer()
    let time = new Date();
    this.setData({
      hasStarted: true,
      showNum: true,
      startTime: time.getTime(),
      time: 0,
      num: 0,

    }, () => {

      app.clockAudio.play();
      this.interval = setInterval(this.timer, 100);
    });
  },

  continue: function (event) {
    let time = new Date();
    let size = this.data.choosedSize + 1
    let t = this.data.gametime + 1
    var fs = this.returnscore();
    console.log("fs:", fs)
    if (t == 1) {
      this.setData({
        cancontinue: false,
        reading: false,
      })
    }
    this.setData({
      ...setSize(size),
      closeGrid: false,
      startTime: time.getTime(),
      showNum: true,
      time: 0,
      num: 0,
      canlook: false,
      canclick: false,
      hasStarted: false,
      wrong: 0,
      gametime: t,
      choosedSize: size,
      fenshu: fs,
    });
  },

  returnscore: function () {
    let time = this.data.score;
    let rdtime = this.data.rdtimetofs;
    let wrongnumber = this.data.wrong;
    var fs = 0;
    if (this.data.choosedSize == 3) {
      if (time <= 8) {
        fs = 100;
      } else if (time <= 12) {
        fs = 80;
      } else if (time <= 19) {
        fs = 60;
      } else {
        fs = 40;
      }
      if (wrongnumber != 0) {
        if (rdtime == 5) {
          fs = fs - 3 * wrongnumber;
        } else if (rdtime == 10) {
          fs = fs - 4 * wrongnumber;
        } else {
          fs = fs - 5 * wrongnumber;
        }
      }
    } else if (this.data.choosedSize == 4) {
      if (time <= 16) {
        fs = 100;
      } else if (time <= 21) {
        fs = 80;
      } else if (time <= 30) {
        fs = 60;
      } else {
        fs = 40;
      }
      if (wrongnumber != 0) {
        if (rdtime == 5) {
          fs = fs - 2 * wrongnumber;
        } else if (rdtime == 10) {
          fs = fs - 3 * wrongnumber;
        } else {
          fs = fs - 4 * wrongnumber;
        }
      }

    } else {
      if (time <= 25) {
        fs = 100;
      } else if (time <= 31) {
        fs = 80;
      } else if (time <= 40) {
        fs = 60;
      } else {
        fs = 40;
      }
      if (wrongnumber != 0) {
        if (rdtime == 5) {
          fs = fs - 1 * wrongnumber;
        } else if (rdtime == 10) {
          fs = fs - 2 * wrongnumber;
        } else {
          fs = fs - 3 * wrongnumber;
        }
      }
    }
    return fs;
  },
  skip: function () {
    wx.redirectTo({
      url: '/pages/p2-game/p2-game'
    })
  },

})