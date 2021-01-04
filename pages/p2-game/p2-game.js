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
//主要游戏界面onebu
Page({
  data: {
    practice:false,
    searchscore:false,
    oneButton:[{text:'继续挑战'}],
    oneButton1:[{text:'查看分数'}],
    oneButton2:[{text:'完成练习'}],
    ...setSize(3), //默认是3x3
    num: 0,
    sizes: [3, 4, 5],//3x3,4x4,5x5
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
    scoreArr:[],//时间文字化数组
    showModal: false,
    url: '',
    hasStarted: false,
    closeGrid: false,//控制显示的布尔量
    choosedSize: 3,
    //点击动画参数
    scaleData:null,
    //新
    timenumber:[5,10,15],//三个阅读时间
    rdtimetofs:5,//记录选择的时间，算分数的时候用的
    readingtime:5,//倒计时的时间显示
    readingtimer:'',
    canlook:false,//用于调节页面显示的布尔量
    canclick:false,
    fenshu:0,//中间分数
    classhard: getApp().globalData.level,//传入的难度
    gametime:0,//游戏的次数
    wrong:0,//错误次数
    cancontinue:true,//能否继续的布尔量
    finalsocre:0,//最终分数
    iswrong:false,//用于调节页面显示的布尔量
    success:false,
    reading:false,
  },

  onLoad: function (options) {
    wx.hideHomeButton()
    this.setData({
      practice:getApp().globalData.practice
    })
    let {
      currentSize
    } = this.data;
    this.setData({
      authorize: app.globalData.authorize,
      userInfo: app.globalData.userInfo,
      classhard:getApp().globalData.level
    })
    let nd=this.data.classhard
    if(nd==1){
      this.setData({//重新设置时间
        readingtime:3
      })
    }
    else{
      this.setData({//重新设置时间
        readingtime:3
      })
    }
    this.awaitOpenId().then(openId => {
      getRecord(openId, currentSize).then(res => {
        this.setData({
          topRecord: res
        });
      })
    });
  },

  onShow: function () {//没啥用的函数
    wx.hideHomeButton({
      success: (res) => {},
    })
  },

  onHide: function () {//没啥用的函数
    clearInterval(this.interval);
  },

  onUnload: function () {//没啥用的函数
    app.clockAudio.stop();
    clearInterval(this.interval);
  },
  // 等待获取Openid
  awaitOpenId: function () {//没啥用的函数
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
  // 选择模式
  choose: function (event) {//可以用来选择大小的函数，可惜难度现在固定了，没啥用，可以在练习模式里用一用吧
    let size = Number(event.target.id);//size表示几乘几
    let time = new Date();
    if (this.data.hasStarted && size != this.data.choosedSize) {
      console.log('clear');
      this.setData({
        time: 0,
        startTime: time.getTime(),
        hasStarted: false,
        clickId:0,
      })
      clearInterval(this.interval);
      app.clockAudio.stop();
    }
    if (!this.data.hasStarted && size != this.data.choosedSize) {
      app.buttonAudio.play()
      let {
        openId
      } = this.data;
      this.setData({ ...setSize(size),
        status: '',
        choosedSize: size,
        clickId:0,
      });
      getRecord(openId, size).then(res => {
        this.setData({
          topRecord: res
        });
      })
    }
  },
  // 选择观看时间
  choosetime: function (event) {
    
    let rtime = Number(event.target.id);
    // console.log(rtime)
    app.buttonAudio.play()
    this.setData({ 
      readingtime:rtime,//记录选择的时间
      rdtimetofs:rtime
    });
  },

  // 点击框框的函数
  clickMe: function (event) {
    if(this.data.canclick){
      if (!this.data.hasStarted) {//如果倒计时没到0就不能点击
        this.start();
      }
      let {
        num,//用来记录现在点到数字几了
        currentSize,
      } = this.data;
      let item = event.currentTarget.id;
      app.clickAudio.play();
      this.setData({
        iswrong:false,//iswrong记录的是每一小局的错误次数，所以开始前清零
        clickId: item
      });
      if (item == num + 1) {
        this.setData({
          num: Number(item),
        })
        this.scaleTap(event);
  
        // 完成
        if (item == currentSize * currentSize) {
          let {
            startTime
          } = this.data;
          let time = new Date();//计算时间
          let pass = ((time.getTime() - startTime) / 1000).toFixed(2);
          let scoreArr = pass.toString().split('');
          scoreArr.push("s")
          clearInterval(this.interval);
          this.setData({ ...setSize(currentSize),
            closeGrid: true,//调节页面显示的布尔量
            showNum: false,
            status: 'success',
            score: pass,
            scoreArr:scoreArr,
            hasStarted: false,
          }, () => {
            app.clockAudio.stop();
            app.successAudio.play();
          })
        }
      }else{
        this.setData({
          iswrong:true,//记录错误次数
          wrong:this.data.wrong+1,
        })
      }

    }
   
  },
//动画函数：： 就那个星星闪的动画
scaleTap: function(event) {
  var animation = wx.createAnimation({});
  animation.rotate(90).opacity(0.5).scale(0).step({duration:200})
  animation.rotate(0).opacity(1.0).scale(1).step({duration:50})
  this.setData({
    scaleData: animation.export(),
    isclick:true
  })

},
//计时器，基本不用改
  timer: function () {
    let {
      time,
      startTime
    } = this.data;
    if (time < 900) {
      let date = new Date();
      let currentTime = ((date.getTime() - startTime) / 1000).toFixed(2);
      this.setData({
        time: currentTime//实时更新
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
//倒计时器，也基本不用改
  readcountDown: function (event) {
    if(this.data.gametime==0){//如果没选时间不可开始
      if(this.data.classhard==1){//点了确定后根据难度调整方块的数目
        this.setData({ ...setSize(3),
          choosedSize:3
        })
      }else{
        this.setData({...setSize(4),
          choosedSize:4
        })
      }
    }
    this.setData({
      reading:true,
    })
    if(this.data.readingtime>0){//开始倒计时
      let that = this;
      that.setData({
        canlook:true,
      })
      let num=this.data.readingtime;
      clearInterval(this.data.readingtimer);
      console.log(this.data.readingtime)
      that.setData({
        readingtimer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
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
              canclick:true,//可以点击了
            })
          }
        }, 1000)
      })  
    }
    else{

    }
   
  },
//再开始
  start: function (event) {
    app.buttonAudio.play()
    let time = new Date();
    this.setData({
      hasStarted: true,//重新设置数据
      showNum: true,
      startTime: time.getTime(),
      time: 0,
      num: 0,
      
    }, () => {
      
      app.clockAudio.play();
      this.interval = setInterval(this.timer, 100);
    });
  },

  continue: function (event) {//继续挑战对应的函数
    let time = new Date();
    let size=this.data.choosedSize+1
    let t=this.data.gametime+1
    let nd=this.data.classhard
    if(nd==1){
      this.setData({//重新设置时间
        readingtime:3
      })
    }
    else{
      this.setData({//重新设置时间
        readingtime:3
      })
    }
    var fs=this.returnscore();
    console.log("fs:",fs)
    if(t==1){
      this.setData({//使其只能继续一次，即3*3后只能接一次4*4
        cancontinue:false,
        reading:false,
      })
    }
    this.setData({...setSize(size),//同样的重新设置
      closeGrid: false,
      startTime: time.getTime(),
      showNum: true,
      time: 0,
      num: 0,
      canlook:false,
      canclick:false,
      hasStarted:false,
      wrong:0,
      gametime:t,
      choosedSize:size,
      fenshu:fs,
    });
  },
  next:function(){
    var fs2=this.returnscore()//分两阶段计算
    let fs1=this.data.fenshu;
    console.log("fs1:",fs1)
    console.log("fs2:",fs2)
    this.setData({
      finalsocre:fs1*0.4+fs2*0.6,//计算分数
      searchscore:true
    })
    console.log("最终分数：",this.data.finalsocre)
  },
  finish:function(){
    if(getApp().globalData.practice==false){
      wx.request({
        url: 'https://www.yuan619.xyz:8887/history/upscore2',
        data: {
          id: app.globalData.gameId,
          score: this.data.finalsocre / 2,
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
        url: '/pages/A-story1/A-story1'
      })
    }
    else if(getApp().globalData.practice==true){
      wx.switchTab({
        url: '/pages/practice/practice',
      })
    }
  },

//计算分数的函数，也基本不用改
  returnscore: function () {
      let time=this.data.score;//用时
      let rdtime=this.data.rdtimetofs;//阅读时间
      let wrongnumber=this.data.wrong;//单局错误次数
      var fs=0;//最后返回的分数
    if(this.data.choosedSize==3){//3x3的计分规则
      if(time<=8){
        fs=100;
      }
      else if(time<=12){
        fs=80;
      }
      else if(time<=19){
        fs=60;
      }
      else{
        fs=40;
      }
      if(wrongnumber!=0){
        if(rdtime==5){
          fs=fs-3*wrongnumber;
        }
        else if(rdtime==10){
          fs=fs-4*wrongnumber;
        }
        else{
          fs=fs-5*wrongnumber;
        }
      }
    }else if(this.data.choosedSize==4){//4x4的计分规则
      if(time<=16){
        fs=100;
      }
      else if(time<=21){
        fs=80;
      }
      else if(time<=30){
        fs=60;
      }
      else{
        fs=40;
      }
      if(wrongnumber!=0){
        if(rdtime==5){
          fs=fs-2*wrongnumber;
        }
        else if(rdtime==10){
          fs=fs-3*wrongnumber;
        }
        else{
          fs=fs-4*wrongnumber;
        }
      }

    }
    else{//5x5的计分规则
      if(time<=25){
        fs=100;
      }
      else if(time<=31){
        fs=80;
      }
      else if(time<=40){
        fs=60;
      }
      else{
        fs=40;
      }
      if(wrongnumber!=0){
        if(rdtime==5){
          fs=fs-1*wrongnumber;
        }
        else if(rdtime==10){
          fs=fs-2*wrongnumber;
        }
        else{
          fs=fs-3*wrongnumber;
        }
      }
    }
    return fs;
  },
})