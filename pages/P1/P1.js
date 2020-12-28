var cnt = 0
const app = getApp()
Page({
  data: {
    level: 1,
    practice: false,
    score: 0,
    color1: 'rgb(37, 30, 51)',
    color2: 'rgb(37, 30, 51)',
    color3: 'rgb(37, 30, 51)',
    color4: 'rgb(37, 30, 51)',
    color5: 'rgb(37, 30, 51)',
    // 展示不同部分的代码
    show: true,
    show2: true,
    show3: false,
    // 计时
    time: new Date(),
    number1: -1,
    number2: -1,
    number3: -1,
    number4: -1,
    number5: -1,
    // 储存点击的是哪个位置的数
    selectFrm: -1,
    // 储存位置里储存的数字
    selectFrm_num: -1,
    count: 0,
    // 小人图片变化
    image: 'http://yuan619.xyz/elf.png',
    animation: 'none'
  },

  // 关闭提示后开始计时
  go: function () {
    this.setData({
      show: false,
      time: new Date()
    })
  },

  randomMath: function () {
    var _this = this
    if (this.data.level == 1) {
      if (this.data.count == 8) {
        var score = 0
        var ontime = (new Date() - this.data.time) / 1000.0
        if (ontime <= 15) {
          score = 100
        } else if (ontime > 15) {
          score = 100 - (ontime - 15) * 2.8571
        }
        this.setData({
          score: Math.floor(score / 2)
        })
        // wx.request({
        //         url: 'http://121.196.102.238:8887/history/upscore3',
        //         data: {
        //           id: ,
        //           score:score,
        //         },
        //         method: 'POST',
        //         header: {
        //           "Content-Type": "application/x-www-form-urlencoded"
        //         },
        //         success: function (res) {
        //           console.log(res.data);
        //         },
        //         fail: function (res) {
        //           console.log("...fail...");
        //         }
        //       })
        this.setData({
          show3: true,
          time: ontime
        })
      }
    } else if (this.data.level == 2) {
      if (this.data.count == 12) {
        var ontime = (new Date() - this.data.time) / 1000.0
        if (ontime <= 25) {
          score = 100
        } else if (ontime > 25) {
          score = 100 - (ontime - 25) * 2.5
        }
        console.log(score)
        this.setData({
          score: Math.floor(score / 2)
        })
        // wx.request({
        //         url: 'http://121.196.102.238:8887/history/upscore3',
        //         data: {
        //           id: ,
        //           score:score,
        //         },
        //         method: 'POST',
        //         header: {
        //           "Content-Type": "application/x-www-form-urlencoded"
        //         },
        //         success: function (res) {
        //           console.log(res.data);
        //         },
        //         fail: function (res) {
        //           console.log("...fail...");
        //         }
        //       })
        this.setData({
          show3: true,
          time: ontime
        })
      }
    }

    let max
    let min
    if (this.data.level == 1) {
      max = 10000
      min = 1000
    } else if (this.data.level == 2) {
      max = 1000000
      min = 100000
    }
    let random_index1 = Math.floor(Math.random() * 5) + 1
    let random_index2 = Math.floor(Math.random() * 5) + 1
    // 使得第二个数字位置不等于第一个数字位置
    while (random_index1 == random_index2) {
      random_index2 = Math.floor(Math.random() * 5) + 1
    }
    var temp = new Array(5)
    var i = 1
    while (i <= 5) {
      temp[i] = Math.floor(Math.random() * (max - min))
      i = i + 1
    }
    temp[random_index2] = temp[random_index1]
    i = 1
    this.setData({
      count: this.data.count + 1,
      number1: temp[1],
      number2: temp[2],
      number3: temp[3],
      number4: temp[4],
      number5: temp[5],
      selectFrm: -1,
      selectFrm_num: -1,
    })
    this.cleancolor()
    var j = 0;
    var time = setInterval(function () {
      j = j + 1;
      if (j == 100) {
        _this.setData({
          animation: 'none'
        })
        clearInterval(time)
      } else {
        _this.setData({
          animation: 'turn 0.5s linear infinite'
        })
      }
    }, 10)
  },

  turnRed: function () {
    if (this.data.selectFrm == 1) {
      this.setData({
        color1: 'red'
      })
    } else if (this.data.selectFrm == 2) {
      this.setData({
        color2: 'red'
      })
    } else if (this.data.selectFrm == 3) {
      this.setData({
        color3: 'red'
      })
    } else if (this.data.selectFrm == 4) {
      this.setData({
        color4: 'red'
      })
    } else if (this.data.selectFrm == 5) {
      this.setData({
        color5: 'red'
      })
    }
  },
  cleancolor: function () {
    this.setData({
      color1: 'rgb(37, 30, 51)',
      color2: 'rgb(37, 30, 51)',
      color3: 'rgb(37, 30, 51)',
      color4: 'rgb(37, 30, 51)',
      color5: 'rgb(37, 30, 51)'
    })
  },

  // match_success:function() {
  //   var _this = this
  //   cnt = cnt + 1
  //   this.setData({
  //     number1:242,
  //     number2:424,
  //     number3:244,
  //     number4:422,
  //     number5:244,
  //     selectFrm:-1,
  //     selectFrm_num:-1,
  //     image:'http://yuan619.xyz/good.png'
  //   });
  //   this.cleancolor()
  //   setTimeout(function(){
  //     _this.setData({
  //       image:'http://yuan619.xyz/elf.png'
  //     })
  //   }, 500)
  //   // 成功后进行某些操作
  //   if(cnt==2){
  //     console.log("success"),
  //     this.setData({
  //       show2:false,
  //       show3:true
  //     })
  //   }
  // },

  // 关闭成绩单的提示框
  goto: function () {
    console.log(getApp().globalData.score)
    this.setData({
      show3: false
    })
  },

  // 每个数字点击后的情形
  select1: function () {
    if (this.data.selectFrm == -1) {
      this.data.selectFrm = 1
      this.data.selectFrm_num = this.data.number1
      this.setData({
        color1: 'rgb(48, 204, 255)'
      })
    } else if (this.data.selectFrm == 1) {
      this.data.selectFrm = -1
      this.data.selectFrm_num = -1
      this.setData({
        color1: 'rgb(37, 30, 51)'
      })
    } else if (this.data.selectFrm_num == this.data.number1) {
      this.randomMath()
    } else {
      var _this = this
      this.setData({
        color5: 'red',

      })
      this.turnRed()
      setTimeout(function () {
        _this.cleancolor()
        _this.setData({
          image: 'http://yuan619.xyz/elf.png'
        })
      }, 500)
      this.cleancolor()
      this.data.selectFrm = -1
      this.data.selectFrm_num = -1
    }
  },

  select2: function () {
    if (this.data.selectFrm == -1) {
      this.data.selectFrm = 2
      this.data.selectFrm_num = this.data.number2
      this.setData({
        color2: 'rgb(48, 204, 255)'
      })
    } else if (this.data.selectFrm == 2) {
      this.data.selectFrm = -1
      this.data.selectFrm_num = -1
      this.setData({
        color2: 'rgb(37, 30, 51)'
      })
    } else if (this.data.selectFrm_num == this.data.number2) {
      this.randomMath()
    } else {
      var _this = this
      this.setData({
        color2: 'red',

      })
      this.turnRed()
      setTimeout(function () {
        _this.cleancolor()
        _this.setData({
          image: 'http://yuan619.xyz/elf.png'
        })
      }, 500)
      this.data.selectFrm = -1
      this.data.selectFrm_num = -1
    }
  },

  select3: function () {
    if (this.data.selectFrm == -1) {
      this.data.selectFrm = 3
      this.data.selectFrm_num = this.data.number3
      this.setData({
        color3: 'rgb(48, 204, 255)'
      })
    } else if (this.data.selectFrm == 3) {
      this.data.selectFrm = -1
      this.data.selectFrm_num = -1
      this.setData({
        color3: 'rgb(37, 30, 51)'
      })
    } else if (this.data.selectFrm_num == this.data.number3) {
      this.randomMath()
    } else {
      var _this = this
      this.setData({
        color3: 'red',

      })
      this.turnRed()
      setTimeout(function () {
        _this.cleancolor()
        _this.setData({
          image: 'http://yuan619.xyz/elf.png'
        })
      }, 500)
      this.data.selectFrm = -1
      this.data.selectFrm_num = -1
    }
  },

  select4: function () {
    if (this.data.selectFrm == -1) {
      this.data.selectFrm = 4
      this.data.selectFrm_num = this.data.number4
      this.setData({
        color4: 'rgb(48, 204, 255)'
      })
    } else if (this.data.selectFrm == 4) {
      this.data.selectFrm = -1
      this.data.selectFrm_num = -1
      this.setData({
        color4: 'rgb(37, 30, 51)'
      })
    } else if (this.data.selectFrm_num == this.data.number4) {
      this.randomMath()
    } else {
      var _this = this
      this.setData({
        color4: 'red',

      })
      this.turnRed()
      setTimeout(function () {
        _this.cleancolor()
        _this.setData({
          image: 'http://yuan619.xyz/elf.png'
        })
      }, 500)
      this.data.selectFrm = -1
      this.data.selectFrm_num = -1
    }
  },

  select5: function () {
    if (this.data.selectFrm == -1) {
      this.data.selectFrm = 5
      this.data.selectFrm_num = this.data.number5
      this.setData({
        color5: 'rgb(48, 204, 255)'
      })
    } else if (this.data.selectFrm == 5) {
      this.data.selectFrm = -1
      this.data.selectFrm_num = -1
      this.setData({
        color5: 'rgb(37, 30, 51)'
      })
    } else if (this.data.selectFrm_num == this.data.number5) {
      this.randomMath()
    } else {
      var _this = this
      this.setData({
        color5: 'red',

      })
      this.turnRed()
      setTimeout(function () {
        _this.cleancolor()
        _this.setData({
          image: 'http://yuan619.xyz/elf.png'
        })
      }, 500)
      this.data.selectFrm = -1
      this.data.selectFrm_num = -1
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideHomeButton()
    this.setData({
      practice: app.globalData.practice,
      level: app.globalData.level
    })
    this.randomMath()
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

  nextGame: function () {
    if (getApp().globalData.practice == false) {
      wx.request({
        url: 'https://www.yuan619.xyz:8887/history/upscore1',
        data: {
          id: app.globalData.gameId,
          score: this.data.score,
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
        url: '/pages/p2-story/p2-story'
      })
    } else if (getApp().globalData.practice == true) {
      wx.switchTab({
        url: '/pages/practice/practice',
      })
    }
  }
})