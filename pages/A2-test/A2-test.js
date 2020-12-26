// pages/index/test/test.js
var Main = require("./main.js");
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //题目矩阵
        num: [  
        ],
        n1:[[4, 2, 2, 2, 3, 1, 3, 1],
        [1, 2, 3, 1, 1, 2, 4, 2],
        [2, 3, 4, 4, 2, 3, 1, 2],
        [1, 2, 2, 1, 3, 4, 2, 3],
        [3, 4, 1, 4, 3, 4, 3, 2],
        [2, 3, 3, 3, 1, 4, 1, 3],
        [3, 4, 1, 1, 4, 1, 2, 3],
        [3, 2, 2, 1, 3, 3, 4, 1],
        [2, 3, 2, 2, 4, 2, 1, 4],
        [1, 3, 3, 1, 2, 3, 4, 1],],
        n2:[[4, 2, 2, 2, 3, 1, ],
        [1, 2, 3, 1, 1, 2, ],
        [2, 3, 4, 4, 2, 3, ],
        [1, 2, 2, 1, 3, 4, ],
        [3, 4, 1, 4, 3, 4, ],
        [2, 3, 3, 3, 1, 4, ],
        [3, 4, 1, 1, 4, 1, ],
        [3, 2, 2, 1, 3, 3, ]],
        //黑体矩阵
        keynum: [
            
        ],
        k2:[ [0, 0, 1, 0, 0, 1, ],
        [1, 0, 0, 0, 0, 0, ],
        [0, 0, 1, 0, 0, 0, ],
        [0, 0, 0, 1, 0, 0, ],
        [0, 0, 1, 0, 0, 0, ],
        [1, 0, 0, 0, 1, 0, ],
        [0, 0, 0, 1, 0, 1, ],
        [0, 1, 0, 1, 0, 0, ]],
        k1:[[0, 0, 0, 0, 0, 1, 0, 1],
        [0, 1, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0],
        [1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 1, 0],],
        //已选择矩阵
        select: [
        ],
        s1:[ [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],],
        s2:[[0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, ]],
        // num: [
            // [4, 2, 2, 2, 3, 1, ],
            // [1, 2, 3, 1, 1, 2, ],
            // [2, 3, 4, 4, 2, 3, ],
            // [1, 2, 2, 1, 3, 4, ],
            // [3, 4, 1, 4, 3, 4, ],
            // [2, 3, 3, 3, 1, 4, ],
            // [3, 4, 1, 1, 4, 1, ],
            // [3, 2, 2, 1, 3, 3, ]
        // ],
        // keynum: [
            // [0, 0, 1, 0, 0, 1, ],
            // [1, 0, 0, 0, 0, 0, ],
            // [0, 0, 1, 0, 0, 0, ],
            // [0, 0, 0, 1, 0, 0, ],
            // [0, 0, 1, 0, 0, 0, ],
            // [1, 0, 0, 0, 1, 0, ],
            // [0, 0, 0, 1, 0, 1, ],
            // [0, 1, 0, 1, 0, 0, ]
        // ],
        // select: [
        //     [0, 0, 0, 0, 0, 0, ],
        // [0, 0, 0, 0, 0, 0, ],
        // [0, 0, 0, 0, 0, 0, ],
        // [0, 0, 0, 0, 0, 0, ],
        // [0, 0, 0, 0, 0, 0, ],
        // [0, 0, 0, 0, 0, 0, ],
        // [0, 0, 0, 0, 0, 0, ],
        // [0, 0, 0, 0, 0, 0, ]],
        // BOLD_NUM: 12,
        
        //需要选择的数量
        BOLD_NUM:21,
        b1:21,
        b2:12,
        checkcnt: 0,
        hidden: false,
        over: false,
        mills: 0,
        second: 0,
        minute: 0,
        showDialog: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let age = app.globalData.age;
        //判断年龄,生成题目
        if(getApp().globalData.level==2)
        {
            this.setData({
                num:this.data.n1,
                keynum:this.data.k1,
                select:this.data.s1,
                BOLD_NUM:this.data.b1
            })
        }
        else if(getApp().globalData.level==1)
        {
            this.setData({
                num:this.data.n2,
                keynum:this.data.k2,
                select:this.data.s2,
                BOLD_NUM:this.data.b2
            })
        }
        setInterval(this.increase, 111)
    },
    increase() {
        let mills = this.data.mills + 111;
        let second = Math.floor(mills / 1000 % 60);
        if (second <= 9) {
            second = "0" + second
        }
        let minute = Math.floor(mills / 1000 / 60);
        if (minute <= 9) {
            minute = "0" + minute
        }
        this.setData({
            mills,
            second,
            minute
        })
    },
    handletapview(e) {
        // console.log(e)
        let col = parseInt(e.target.dataset.col)
        let row = parseInt(e.target.dataset.row)
        let select=this.data.select;
        if (this.data.keynum[row][col] === 1
            && select [row][col]===0) {
            let arr = this.data.select;
            let n = this.data.checkcnt + 1;
            arr[row][col] = 1;
            //turn green
            this.setData({
                select: arr,
                checkcnt: n
            })

        } else {
            //闪烁红色
        }
        //whether  all the ceil is chosed
        if (this.data.checkcnt == this.data.BOLD_NUM) {
            this.setData({
                showDialog: !this.data.showDialog
            })
            app.globalData.time2=this.data.mills;
            console.log("耗时:  分钟: " + this.data.minute + " 秒: " + this.data.second)
            /*计算分数
                时间上每过1秒扣0.4分
                保留0位小数
            */
           app.globalData.score2=(50- app.globalData.time2/1000*0.4).toFixed(0);
            console.log("此题得分"+app.globalData.score2);
            setTimeout(function () {
                wx.redirectTo({
                    url: '/pages/finish/finish',
                })
            }, 1050)
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