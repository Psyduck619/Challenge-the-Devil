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
        n1:[],
        //需要选择的数量
        keynum: 0,  
        //已选择矩阵
        select: [
        ],
        age2:[10,8],
        age1:[9,6],
        checkcnt: 0,
        hidden: false,
        over: false,
        mills: 0,
        second: 0,
        minute: 0,
        showDialog: false,
        practice:false,
        score:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let age = app.globalData.age;
        //判断年龄,生成题目
        let random=4;
        let row=0;
        let col=0;
        if(getApp().globalData.level===2)
        {
            row=this.data.age2[0];
            col=this.data.age2[1];
            random=Math.floor(Math.random()*5)+6;
        }
        else if(getApp().globalData.level===1)
        {
            row=this.data.age1[0];
            col=this.data.age1[1];
            random=Math.floor(Math.random()*4)+4;
        }
        let n1=new Array();
        let select=new Array();
        let key=0;
        for(let i=0;i<row;++i)
        {
            n1[i]=new Array();
            select[i]=new Array();
        }
        for(let i=0;i<row;++i)
        {
            for(let j=0;j<col;++j)
            {
                let a1= String.fromCharCode(65+Math.floor(Math.random()*26));
                let a2;
                if(Math.floor(Math.random()*5)+6===random)
                {
                    a2= String.fromCharCode(a1.charCodeAt()+32);
                }
                else{
                    a2= String.fromCharCode(97+Math.floor(Math.random()*26));
                }
                if((a1.charCodeAt()+32)===a2.charCodeAt())
                {
                    key++;
                }
                n1[i][j]=a1+a2;
                select[i][j]=0;
            }
        }
        this.setData({
            num:n1,
            keynum:key,
            select:select,
            practice:getApp().globalData.practice
        })
        console.log(key)
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
        let col = parseInt(e.target.dataset.col)
        let row = parseInt(e.target.dataset.row)
        let select=this.data.select;
        if (this.data.num[row][col].charAt(0).charCodeAt()+32 === 
        this.data.num[row][col].charAt(1).charCodeAt()
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
            //闪烁
            let arr = this.data.select;
            if(arr[row][col] ===0)
                arr[row][col] = -1;
                else if(arr[row][col] ===-1){
                arr[row][col] = 0;
            }
            this.setData({
                select: arr,
            })
        }
        //whether  all the ceil is chosed
        if (this.data.checkcnt === this.data.keynum) {
            this.setData({
                showDialog: !this.data.showDialog
            })
            app.globalData.time2=this.data.mills;
            console.log("耗时:  分钟: " + this.data.minute + " 秒: " + this.data.second)
            /*计算分数
                时间上每过1秒扣0.4分
                保留0位小数
            */
           app.globalData.A2score=(50- app.globalData.time2/1000*0.4).toFixed(0);
            console.log("此题得分"+app.globalData.A2score);
            this.setData({
                score:  app.globalData.A2score
            })
            setTimeout(function () {
                if(getApp().globalData.practice==false){
                    wx.request({
                        url: 'https://www.yuan619.xyz:8887/history/upscore4',
                        data: {
                          id: app.globalData.gameId,
                          score: app.globalData.A2score,
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
                      url: '/pages/S1-story1/S1-story1'
                    })
                  }
                  else if(getApp().globalData.practice==true){
                    wx.switchTab({
                      url: '/pages/practice/practice',
                    })
                  }
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