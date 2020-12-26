//index.js
//获取应用实例
var questionInfo = require('../../data/question2.js');
var numberInfo=require('../../data/number.js');
const question = require('../../data/question.js');
Page({
  data: {
    practice:false,
    showDialog: false,
    isPage1: true,//控制第一页的显示
    isPage2:false,
    isPage3:false,
    isPage4:false,
    selectid:-1,//选中图片的index
    imgnumber:0,//该题目是2*2还是3*3
    ifAnswerRight:0,//回答是否正确，控制弹窗,0没选，1正确，2错误
    numberid:0,//控制看题倒计时
    questionnum:-1,//题号
    animation: {},
    question:[],
    number:[],
    selectQuestionId:[],
    time:null,//一个定时器名称
    scole:0,
    k:1,//每做完一题+1，到下一个题库,
    level:0
  },
  getquestionid:function(){
    return Math.floor(Math.random()*9+(this.data.k-1)*9); //随机获取0~题库数量的随机整数
  },
  onLoad: function () {
    console.log(this.getquestionid())
    var question
    var number
    if(getApp().globalData.level==1){
      this.setData({
        imgnumber:4,
        practice:getApp().globalData.practice
      })
      question=questionInfo.postList
      number=numberInfo.postList
    }
    else if(getApp().globalData.level==2){
      this.setData({
        imgnumber:9,
        practice:getApp().globalData.practice
      })
      question=questionInfo.postList2
      number=numberInfo.postList2
    }
    var selectQuestionId=this.data.selectQuestionId
    this.setData({
      question:  question,
      number:number
    })
    console.log(this.data.selectid)

  },
  //圆形倒计时
  drawProgressbg: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvasProgressbg')
    ctx.setLineWidth(15);// 设置圆环的宽度
    ctx.setStrokeStyle('#ff6501'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath();//开始一个新的路径
    ctx.arc(42, 42, 30, 0, 2 * Math.PI, false);
    //设置一个原点(100,100)，半径为90的圆的路径到当前路径
    ctx.stroke();//对当前路径进行描边
    ctx.draw();
  },
  answerdaojishi:function(){
    var that=this;
    var step = 1,//计数动画次数
    num = 0,//计数倒计时秒数（n - num）
    start = 1.5 * Math.PI,// 开始的弧度
    end = -0.5 * Math.PI,// 结束的弧度
    time = null;// 计时器容器

  var animation_interval = 1000,// 每1秒运行一次计时器
    n = 10; // 当前倒计时为10秒
  // 动画函数
  function animation() {
    if (step <= n) {
      end = end + 2 * Math.PI / n;
      ringMove(start, end);
      step++;
    } else {
      clearInterval(time);
    }
  };
  // 画布绘画函数
  function ringMove(s, e) {
    var context = wx.createCanvasContext('secondCanvas')

    var gradient = context.createLinearGradient(200, 100, 100, 200);
    gradient.addColorStop("0", "#2661DD");
    gradient.addColorStop("0.5", "#40ED94");
    gradient.addColorStop("1.0", "#5956CC");

    // 绘制圆环
    context.setStrokeStyle('#ffeca8')
    context.beginPath()
    context.setLineWidth(10)
    context.arc(42, 42, 30, s, e, true)
    context.stroke()
    context.closePath()

    // 绘制倒计时文本
    context.beginPath()
    context.setLineWidth(1)
    context.setFontSize(30)
    context.setFillStyle('#ffffff')
    context.setTextAlign('center')
    context.setTextBaseline('middle')
    context.fillText(n - num + '', 42, 42, 30)
    context.fill()
    context.closePath()

    context.draw()

    // 每完成一次全程绘制就+1
    num++;
  }
  // 倒计时前先绘制整圆的圆环
  ringMove(start, end);
  // 创建倒计时
  let j=0;
  that.data.time = setInterval(function() {
    j=j+1;
    if (j==10) {
      var isPage4=that.data.isPage4;
      isPage4=true;
     var ifAnswerRight=that.data.ifAnswerRight;
     var k=that.data.k
     k=k+1
         //回答错误
         ifAnswerRight=2;
         that.setData({
           isPage4:isPage4,
           ifAnswerRight:ifAnswerRight,
           k:k
         })
         clearInterval(that.data.time)
    } else {
      animation()
    }
}, 1000)
  },
  onReady: function () {
    this.drawProgressbg(); 
  },

  onShow: function () {
    wx.hideHomeButton()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  //初始化
  init:function(){
      this.setData({
        isPage2:true,
        isPage3:false,
        isPage4:false,
        selectid:-1,//选中图片的index
        ifAnswerRight:0,//回答是否正确，控制弹窗,0没选，1正确，2错误
        numberid:0,//控制倒计时
      })
  },
  //开始
  begin:function(){
    console.log("得分为",this.data.scole)
    let questionnum=this.data.questionnum
    let k=this.data.k
    questionnum=this.getquestionid()
    console.log("做的第几题:",questionnum)
    if(k<6){
      this.init();
      var that=this;
      let isPage1=this.data.isPage1;
      let isPage2=this.data.isPage2;
      isPage1=false;
      isPage2=true;
      this.setData({
        isPage1:isPage1,
        isPage2:isPage2,
        questionnum:questionnum
      })
      this.daojishi();
    }
    else{//全部做完了
    }
   },
   //看题倒计时
   daojishi:function(options){
    var that=this;
   var numberid=this.data.numberid
 
     var i = setInterval(function() {
       numberid=numberid+1;
       if (numberid>=5) {
         let isPage2=that.data.isPage2;
         let isPage3=that.data.isPage3;
           isPage2=false;
           isPage3=true;
           that.answerdaojishi();
         that.setData({
           isPage2:isPage2,
           isPage3:isPage3
         })
            clearInterval(i)
       } else {
         that.setData({
           numberid:numberid
         })
        console.log(numberid)
       }
  }, 1000)
  },
   //选择图片
   selectimg(option)
   {
       let index=option.currentTarget.dataset.index;
       console.log(index)
       this.setData({
         selectid:index
       })
   },
   //选择结束确定后
   over:function(){
     var that=this;
     let selectid=this.data.selectid
     if(selectid==-1){
      wx.showToast({
        title: '小魔法师还未选择图片哦！',
        icon: 'none',
        duration: 2000//持续的时间
      })
     }
     else{
       let questionnum=that.data.questionnum;
       let isPage4=that.data.isPage4;
       isPage4=true;
      let ifAnswerRight=that.data.ifAnswerRight;
      let k=that.data.k
      k=k+1
      clearInterval(that.data.time);
        if(selectid==that.data.question[questionnum].answerindex){
          let scole=that.data.scole;
          scole=scole+1;
          //回答正确
          ifAnswerRight=1;
          that.setData({
            isPage4:isPage4,
            ifAnswerRight:ifAnswerRight,
            scole:scole,
            k:k
          })
        }
        else{
          //回答错误
          ifAnswerRight=2;
          that.setData({
            isPage4:isPage4,
            ifAnswerRight:ifAnswerRight,
            k:k
          })
        }
     }
     if(that.data.k==6){
      var that=this
     var score=60+this.data.scole*8
     this.setData({
       scole:score
     })
     console.log(this.data.scole,"分")
     setTimeout(() =>{
      that.setData({
        showDialog: !that.data.showDialog
      })
    }, 500) 
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
       setTimeout(function () {
         if(getApp().globalData.practice==false){
           wx.redirectTo({
             url: '/pages/1-story1/S1-story1'
           })
         }
         else if(getApp().globalData.practice==true){
          wx.switchTab({
            url: '/pages/practice/practice',
          })
         }
         
       },3500);
    }
   },
})
