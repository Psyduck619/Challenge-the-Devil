// pages/exp/exp.js
/*

**/
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //题库数据
        puzzle: [{
                content: [{
                    name: '黑色',
                    color: 'red'
                }, {
                    name: '绿色',
                    color: 'yellow'
                }],
                margin_bottom: '250rpx',
                level2:1
            },
            {
                content: [{
                    name: '绿色',
                    color: 'red'
                }, {
                    name: '黄色',
                    color: 'yellow'
                }],
                margin_bottom: '250rpx',
                level2:1
            },
            {
                content: [{
                    name: '白色',
                    color: 'pink'
                }, {
                    name: '紫色',
                    color: 'green'
                }, {
                    name: '蓝色',
                    color: 'black'
                }],
                margin_bottom: '120rpx',
                level2:2
            },
            {
                content: [{
                    name: '灰色',
                    color: 'white'
                }, {
                    name: '白色',
                    color: 'blue'
                }, {
                    name: '蓝色',
                    color: 'green'
                }],
                margin_bottom: '120rpx',
                level2:2
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
                }],
                margin_bottom: '120rpx',
                level2:2
            },
            {
                content: [{
                        name: '绿色',
                        color: 'red'
                    },
                    {
                        name: '红色',
                        color: 'yellow'
                    },
                    {
                        name: '黄色',
                        color: 'black'
                    },
                    {
                        name: '白色',
                        color: 'purple'
                    },
                ],
                margin_bottom: '70rpx',
                level2:3
            },
            {
                content: [{
                        name: '紫色',
                        color: 'red'
                    },
                    {
                        name: '绿色',
                        color: 'yellow'
                    },
                    {
                        name: '黄色',
                        color: 'black'
                    },
                    {
                        name: '白色',
                        color: 'pink'
                    },
                ],
                margin_bottom: '70rpx',
                level2:3
            },
            {
                content: [
                    {
                        name: '红色',
                        color: 'red'
                    },
                    {
                        name: '绿色',
                        color: 'yellow'
                    },
                    {
                        name: '黄色',
                        color: 'black'
                    },
                    {
                        name: '白色',
                        color: 'purple'
                    },
                ],
                margin_bottom: '70rpx',
                level2:3
            },
            {
                content: [{
                        name: '绿色',
                        color: 'yellow'
                    },
                    {
                        name: '黑色',
                        color: 'red'
                    },
                    {
                        name: '红色',
                        color: 'green'
                    },
                    {
                        name: '红色',
                        color: 'black'
                    },
                    {
                        name: '绿色',
                        color: 'blue'
                    },
                ],
                margin_bottom: '45rpx',
                level2:4
            },  {
                content: [{
                        name: '蓝色',
                        color: 'yellow'
                    },
                    {
                        name: '红色',
                        color: 'red'
                    },
                    {
                        name: '绿色',
                        color: 'green'
                    },
                    {
                        name: '红色',
                        color: 'black'
                    },
                    {
                        name: '紫色',
                        color: 'blue'
                    },
                ],
                margin_bottom: '45rpx',
                level2:4
            },
            {
                content: [{
                        name: '绿色',
                        color: 'yellow'
                    },
                    {
                        name: '紫色',
                        color: 'red'
                    },
                    {
                        name: '绿色',
                        color: 'green'
                    },
                    {
                        name: '红色',
                        color: 'black'
                    },
                    {
                        name: '紫色',
                        color: 'blue'
                    },
                ],
                margin_bottom: '45rpx',
                level2:4
            },
            {
                content: [{
                        name: '白色',
                        color: 'yellow'
                    },
                    {
                        name: '黑色',
                        color: 'red'
                    },
                    {
                        name: '绿色',
                        color: 'green'
                    },
                    {
                        name: '红色',
                        color: 'black'
                    },
                    {
                        name: '紫色',
                        color: 'blue'
                    },
                ],
                margin_bottom: '45rpx',
                level2:4
            },
            {
                content: [{
                        name: '绿色',
                        color: 'grey'
                    },
                    {
                        name: '黑色',
                        color: 'black'
                    },
                    {
                        name: '红色',
                        color: 'yellow'
                    },
                    {
                        name: '白色',
                        color: 'purple'
                    },
                    {
                        name: '绿色',
                        color: 'blue'
                    },
                    {
                        name: '黄色',
                        color: 'green'
                    }
                ],
                margin_bottom: '22rpx',
                level2:5
            },{
                content: [
                    {
                        name: '红色',
                        color: 'grey'
                    },
                    {
                        name: '白色',
                        color: 'black'
                    },
                    {
                        name: '黑色',
                        color: 'yellow'
                    },
                    {
                        name: '粉色',
                        color: 'purple'
                    },
                    {
                        name: '黄色',
                        color: 'blue'
                    },
                    {
                        name: '粉色',
                        color: 'green'
                    }
                ],
                margin_bottom: '22rpx',
                level2:5
            },
            {
                content: [
                    {
                        name: '红色',
                        color: 'grey'
                    },
                    {
                        name: '粉色',
                        color: 'black'
                    },
                    {
                        name: '黑色',
                        color: 'yellow'
                    },
                    {
                        name: '白色',
                        color: 'purple'
                    },
                    {
                        name: '黄色',
                        color: 'blue'
                    },
                    {
                        name: '灰色',
                        color: 'green'
                    }
                ],
                margin_bottom: '22rpx',
                level2:5
            }
        ],
        //页面布置记录
        time: 5,            //倒计时
        currentPageId: 0,
        
        title:["第一题","第二题","第三题","第四题","第五题","第六题"],
        //答题信息记录
        timer:0,
        errorTime:0,
        
         // 进入游戏根据年龄随机生成的题库,记录题目id
         current:[],
         tid:0,
         objt:{},
         percent:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    decreaseTime() {
        let time = this.data.time - 1;
        let p=this.data.percent+16.67;
        this.setData({
            time,
            percent:p
        })
    },
    changeQuestion()
    {
        let tid=this.data.tid+1;
        let t=this.data.puzzle[this.data.current[this.data.currentPageId]-1].content[tid];
        if(t!=undefined){
            this.setData({
                objt:t,
                tid:tid
            })
        }
    },
    onLoad: function (options) {
        let time= app.globalData.time1
        let err=app.globalData.error
        console.log("总共耗时"+time)
        console.log("总共错误次数"+err)
        let tid=parseInt(options.id)
        let obj=this.data.puzzle[app.globalData.current[tid]-1].content[this.data.tid];
        this.setData({
            currentPageId: tid,
            timer:time,
            errorTime:err,
            objt:obj,
            current:app.globalData.current
        })
        let interval=5000/(this.data.puzzle[this.data.current[tid]-1].content.length);
        console.log(this.data.current)
        setInterval(this.decreaseTime, 1000);
        setInterval(this.changeQuestion,interval);
        let id = this.data.currentPageId;
        let that=this;
        setTimeout(function () {
        //跳转之前,需要保存或者发送数据
        app.globalData.time1=that.data.timer;
        app.globalData.error=that.data.errorTime;
            wx.redirectTo({
                url: '/pages/A1-answer/A1-answer?id=' + id,
            })
        }, 5000);
    },
 //request获取,没有空着
 getPuzzle() {

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