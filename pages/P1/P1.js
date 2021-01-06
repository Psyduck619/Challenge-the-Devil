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
    left1: '140rpx',
    left2: '300rpx',
    left3: '250rpx',
    left4: '190rpx',
    left5: '335rpx',
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
      if (this.data.count == 5) {
        var score = 0
        var ontime = (new Date() - this.data.time) / 1000.0
        if (ontime <= 8) {
          score = 100
        } else if (ontime > 8) {
          score = 100 - (ontime - 8) * 2.5
          if(score <= 30){
            score = 30
          }
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
      if (this.data.count == 5) {
        var ontime = (new Date() - this.data.time) / 1000.0
        if (ontime <= 20) {
          score = 100
        } else if (ontime > 20) {
          score = 100 - (ontime - 20) * 2
          if(score <= 30){
            score = 30
          }
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
      if(this.data.count == 0){
        max = 89
        min = 10
      }else if(this.data.count == 1 || this.data.count == 2){
        max = 899
        min = 100
      }else{
        max = 8999
        min = 1000
      }
    } else if (this.data.level == 2) {
      if(this.data.count == 0){
        max = 8999
        min = 1000
      }else if(this.data.count == 1 || this.data.count == 2){
        max = 89999
        min = 10000
      }else{
        max = 899999
        min = 100000
      }
    }
    // 生成值相同的两个下标
    let random_index1 = Math.floor(Math.random() * 5) + 1
    let random_index2 = random_index1 + 1 % 5
    // 使得第二个数字位置不等于第一个数字位置
    while((random_index2 - 1 == random_index1 || random_index2 + 1 == random_index1)){
      var number = random_index2
      random_index2 = Math.floor(Math.random() * 5) + 1
      if(random_index1 == random_index2){
        random_index2 = number
      }
    }
    console.log(random_index1)
    console.log(random_index2)
    var temp = new Array(5)
    // 基础数字生成
    if(this.data.level == 1){
      if(this.data.count == 0){
        var i = 1
        for(i = 1; i <= 5; i++){
          temp[i] = Math.floor(Math.random() * max + min)
        }
        for(i = 1; i <= 5; i++){
          while(temp[i] == temp[i % 5 + 1] || temp[i] == temp[i % 5 + 2] || temp[i] == temp[i % 5 + 3] || temp[i] == temp[i % 5 + 4]){
            temp[i] = Math.floor(Math.random() * max + min)
          }
        }
      }
      else if(this.data.count == 1 || this.data.count == 2){
        var a = 0
        var b = 1
        var number = Math.floor(Math.random() * max + min)
        var flag = 0
        var math = number.toString()
        var sl = math.split('')
        if(sl[0] != sl[1] && sl[0] != sl[2] && sl[1] != sl[2]){
          flag = 1
        }
        while(flag == 0){
          number = Math.floor(Math.random() * max + min)
          math = number.toString()
          sl = math.split('')
          if(sl[0] != sl[1] && sl[0] != sl[2] && sl[1] != sl[2]){
            flag = 1
          }
        }
        temp[1] = number
        var i = 2
        for(i=2; i<=5; i++){
          if(i == random_index2){
          }else{
            number = Math.floor(Math.random() * max + min)
            math = number.toString()
            sl = math.split('')
            var n = sl[a]
            sl[a] = sl[b]
            sl[b] = n
            math = sl.join("")
            temp[i] = parseInt(math)
            if(a == 0 && b == 1){
              b ++ 
            }else{
              a ++
            }
          }
        }
      }else{
        var number = Math.floor(Math.random() * max + min)
        var flag = 0
        var math = number.toString()
        var sl = math.split('')
        if(sl[0] != sl[1] && sl[0] != sl[2] && sl[0] != sl[3] && sl[1] != sl[2] && sl[1] != sl[3] && sl[2] != sl[3]){
          flag = 1
        }
        while(flag == 0){
          number = Math.floor(Math.random() * max + min)
          math = number.toString()
          sl = math.split('')
          if(sl[0] != sl[1] && sl[0] != sl[2] && sl[0] != sl[3] && sl[1] != sl[2] && sl[1] != sl[3] && sl[2] != sl[3]){
            flag = 1
          }
        }
        console.log(number)
        temp[1] = number
        var a1 = 1
        var b1 = 2
        var i = 2
        while(i <= 5){
          var math = number.toString()
          var sl = math.split('')
          var n = sl[a1]
          sl[a1] = sl[b1]
          sl[b1] = n
          if(a1 == 1 && b1!=3){
            b1++
          }
          else if(b1 == 3 && a1 != 2){
            a1++
          }else{
            b1 = 0
          }
          console.log(sl)
          math = sl.join("")
          temp[i] = parseInt(math)
          i++
        }
      }
    }else{
      if(this.data.count == 0){
        var number = Math.floor(Math.random() * max + min)
        var flag = 0
        var math = number.toString()
        var sl = math.split('')
        if(sl[0] != sl[1] && sl[0] != sl[2] && sl[0] != sl[3] && sl[1] != sl[2] && sl[1] != sl[3] && sl[2] != sl[3]){
          flag = 1
        }
        while(flag == 0){
          number = Math.floor(Math.random() * max + min)
          math = number.toString()
          sl = math.split('')
          if(sl[0] != sl[1] && sl[0] != sl[2] && sl[0] != sl[3] && sl[1] != sl[2] && sl[1] != sl[3] && sl[2] != sl[3]){
            flag = 1
          }
        }
        console.log(number)
        temp[1] = number
        var a1 = 1
        var b1 = 2
        var i = 2
        while(i <= 5){
          var math = number.toString()
          var sl = math.split('')
          var n = sl[a1]
          sl[a1] = sl[b1]
          sl[b1] = n
          if(a1 == 1 && b1!=3){
            b1++
          }
          else if(b1 == 3 && a1 != 2){
            a1++
          }else{
            b1 = 0
          }
          console.log(sl)
          math = sl.join("")
          temp[i] = parseInt(math)
          i++
        }
      }else if(this.data.count == 1 || this.data.count == 2){
        var number = Math.floor(Math.random() * max + min)
        var flag = 0
        var math = number.toString()
        var sl = math.split('')
        if(sl[0] != sl[1] && sl[0] != sl[2] && sl[0] != sl[3] && sl[0] != sl[4] && sl[1] != sl[2] && sl[1] != sl[3] && sl[1] != sl[4] && sl[2] != sl[3] && sl[2] != sl[4] && sl[3] != sl[4]){
          flag = 1
        }
        while(flag == 0){
          number = Math.floor(Math.random() * max + min)
          math = number.toString()
          sl = math.split('')
          if(sl[0] != sl[1] && sl[0] != sl[2] && sl[0] != sl[3] && sl[0] != sl[4] && sl[1] != sl[2] && sl[1] != sl[3] && sl[1] != sl[4] && sl[2] != sl[3] && sl[2] != sl[4] && sl[3] != sl[4]){
            flag = 1
          }
        }
        console.log(number)
        temp[1] = number
        var a1 = 1
        var b1 = 3
        var i = 2
        while(i <= 5){
          var math = number.toString()
          var sl = math.split('')
          var n = sl[a1]
          sl[a1] = sl[b1]
          sl[b1] = n
          if(a1 == 1 && b1 != 4){
            b1++
          }
          else if(b1 == 4 && a1 != 2){
            a1++
          }else{
            a1 = 3
            b1 = 4
          }
          console.log(sl)
          math = sl.join("")
          temp[i] = parseInt(math)
          i++
        }
      }else{
        var number = Math.floor(Math.random() * max + min)
        var flag = 0
        var math = number.toString()
        var sl = math.split('')
        if(sl[0] != sl[1] && sl[0] != sl[2] && sl[0] != sl[3] && sl[0] != sl[4] && sl[1] != sl[2] && sl[1] != sl[3] && sl[1] != sl[4] && sl[2] != sl[3] && sl[2] != sl[4] && sl[3] != sl[4]){
          flag = 1
        }
        while(flag == 0){
          number = Math.floor(Math.random() * max + min)
          math = number.toString()
          sl = math.split('')
          if(sl[0] != sl[1] && sl[0] != sl[2] && sl[0] != sl[3] && sl[0] != sl[4] && sl[1] != sl[2] && sl[1] != sl[3] && sl[1] != sl[4] && sl[2] != sl[3] && sl[2] != sl[4] && sl[3] != sl[4]){
            flag = 1
          }
        }
        console.log(number)
        temp[1] = number
        var a1 = 1
        var b1 = 3
        var i = 2
        while(i <= 5){
          var math = number.toString()
          var sl = math.split('')
          var n = sl[a1]
          sl[a1] = sl[b1]
          sl[b1] = n
          if(a1 == 1 && b1 != 4){
            b1++
          }
          else if(b1 == 4 && a1 != 2){
            a1++
          }else{
            a1 = 3
            b1 = 4
          }
          console.log(sl)
          math = sl.join("")
          temp[i] = parseInt(math)
          i++
        }
      }
    }
    
    // var number = Math.floor(Math.random() * max + min)
    // var flag = 0
    // var math = number.toString()
    // var sl = math.split('')
    // if(sl[0] != sl[1] && sl[0] != sl[2] && sl[0] != sl[3] && sl[1] != sl[2] && sl[1] != sl[3] && sl[2] != sl[3]){
    //   flag = 1
    // }
    // while(flag == 0){
    //   number = Math.floor(Math.random() * max + min)
    //   math = number.toString()
    //   sl = math.split('')
    //   if(sl[0] != sl[1] && sl[0] != sl[2] && sl[0] != sl[3] && sl[1] != sl[2] && sl[1] != sl[3] && sl[2] != sl[3]){
    //     flag = 1
    //   }
    // }
    // console.log(number)
    // temp[1] = number
    // var a1 = 1
    // var b1 = 2
    // var a2 = 1
    // var b2 = 3
    // while(i <= 5){
    //   var math = number.toString()
    //   var sl = math.split('')
    //   if(this.data.level == 1){
    //     var n = sl[a1]
    //     sl[a1] = sl[b1]
    //     sl[b1] = n
    //     if(a1 == 1 && b1!=3){
    //       b1++
    //     }
    //     else if(b1 == 3 && a1 != 2){
    //       a1++
    //     }else{
    //       b1 = 0
    //     }
    //     console.log(sl)
    //     math = sl.join("")
    //     temp[i] = parseInt(math)
    //   }else if(this.data.level == 2){
    //     var n = sl[a2]
    //     sl[a2] = sl[b2]
    //     sl[b2] = n
    //     if(b2 == 6){
    //       a2 = 2
    //     }else{
    //       a2++
    //       b2++
    //     }
    //     math = sl.join("")
    //     temp[i] = parseInt(math)
    //   }
    //   i++
    // }


    // 进行赋值
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