// pages/look/look.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        practice:false,
        showDialog2: false,
        puzzle: [{
                title: "第二个文字是什么",
                content: ["黑色", "绿色", ],
                rightnum: 1
            },
            {
                title: "第一个文字是什么",
                content: ["黄色", "绿色", ],
                rightnum: 1
            },
            {
                title: "第一个文字是什么",
                content: ["黑色", "绿色", "白色"],
                rightnum: 2
            },
            {
                title: "第三个文字是什么",
                content: ["灰色", "蓝色", "黑色"],
                rightnum: 1
            },
            {
                title: "第二个文字是什么",
                content: ["灰色", "橙色", "绿色"],
                rightnum: 0
            },
            {
                title: "文字'红色'下面是什么",
                content: ["白色", "绿色", "黄色", "紫色"],
                rightnum: 2
            },
            {
                title: "文字'黄色'下面是什么",
                content: ["白色", "绿色", "黄色", "紫色"],
                rightnum: 0
            },
            {
                title: "文字'绿色'下面是什么",
                content: ["红色", "绿色", "白色", "黄色"],
                rightnum: 3
            },
            {
                title: "前面文字共描述了几种颜色",
                content: ["2", "3", "4", "5"],
                rightnum: 1
            },
            {
                title: "前面文字共描述了几种颜色",
                content: ["2", "3", "4", "5"],
                rightnum: 2
            },
            {
                title: "前面文字共描述了几种颜色",
                content: ["2", "3", "4", "5"],
                rightnum: 1
            },
            {
                title: "前面文字共描述了几种颜色",
                content: ["2", "3", "4", "5"],
                rightnum: 3
            },
            {
                title: "倒数第二个方块的文字是什么",
                content: ["绿色", "黑色", "黄色", "红色", "白色"],
                rightnum: 0
            },
            {
                title: "倒数第三个方块的文字是什么",
                content: ["粉色", "黑色", "黄色", "红色", "白色"],
                rightnum: 0
            },
            {
                title: "倒数第四个方块的文字是什么",
                content: ["灰色", "黑色", "黄色", "红色", "白色"],
                rightnum: 1
            }
        ],
        //页面布置记录
        // top: '180rpx',
        currentPageId: 0,
        status: "",
        showDialog: false,

        //答题信息记录
        timer: 0,
        errorTime: 0,

        // 进入游戏根据年龄随机生成的题库,记录题目id
        current: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        
        let time = app.globalData.time1
        let err = app.globalData.error
        let id = parseInt(options.id)
        //屏幕上小人的移动
        // let top = 180 + id * 130 + 'rpx'
        setInterval(this.timePass, 100);
        this.setData({
            currentPageId: id,
            timer: time,
            errorTime: err,
            // top: top,
            current: app.globalData.current,
            practice:getApp().globalData.practice
        })
        console.log(this.data.current)

    },
    //request获取,没有空着
    getPuzzle() {

    },
    //计时功能
    timePass() {
        let time = this.data.timer + 100;
        this.setData({
            timer: time
        })
    },
    handleviewtap(e) {
        let tar = parseInt(e.target.dataset.idx);
        this.handleIsRight(tar);   
        let id = this.data.currentPageId + 1;
        //跳转之前,需要保存或者发送数据
        app.globalData.time1 = this.data.timer;
        app.globalData.error = this.data.errorTime;
        //判断是否为第六关,只有第六关可以跳转
        if (id == 2) {
            /*计算分数
                回答错误 扣3分 , 时间上每过1秒扣0.5分,低于一定分数启动保底机制
                保留0位小数
            */
            let t = app.globalData.time1 / 1000;
            if (t < 50) {
                app.globalData.A1score = (50 - 3 * app.globalData.error - t * 0.4).toFixed(0);
            }
            //分数太低了,给点奖励分
            else {
                app.globalData.A1score = (50 - 2 * app.globalData.error - t * 0.1).toFixed(0);
            }
            console.log(app.globalData.A1score);
                            // wx.request({
    //         url: 'http://121.196.102.238:8887/history/upscore3',
    //         data: {
    //           id: ,
    //           score:app.globalData.A1score,
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
            if(getApp().globalData.practice==true){
                this.setData({
                    status: "你的得分为 :"+app.globalData.A1score,
                    showDialog: !this.data.showDialog
                })
                
            }
            else if(getApp().globalData.practice==false){
                this.setData({
                    status: "恭喜你走出迷宫！",
                    showDialog: !this.data.showDialog
                })
            }
            
            setTimeout(function () {
                if(getApp().globalData.practice==false){
                  wx.redirectTo({
                    url: '/pages/A-story2/A-story2'
                  })
                }
                else if(getApp().globalData.practice==true){
                  wx.switchTab({
                    url: '/pages/practice/practice',
                  })
                }
                
              },1500);
            
        }
        //继续跳向下一题
        else {
            this.setData({
                showDialog: !this.data.showDialog
            })
            setTimeout(function () {
                wx.redirectTo({
                    url: '/pages/A1-question/A1-question?id=' + id,
                })
            }, 1100);
        }
    },
    handleIsRight(tar)
    {
        let current = this.data.current
        let currentPage = this.data.currentPageId
        if (tar === this.data.puzzle[current[currentPage] - 1].rightnum) {
            this.setData({
                status: "恭喜你答对了！"
            })
        }
        else {
            let error = this.data.errorTime + 1;
            this.setData({
                status: "好可惜，下一题加油！",
                errorTime: error
            })
        }
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

})