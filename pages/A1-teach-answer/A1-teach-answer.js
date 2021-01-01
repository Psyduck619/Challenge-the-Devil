// pages/A1-teach-answer/A1-teach-answer.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        puzzle: [{
                title: "第二个文字是什么",
                content: ["黑色", "绿色", ],
                rightnum: 1
            },
            {
                title: "前面文字共描述了几种颜色",
                content: ["2", "3", "4"],
                rightnum: 1
            },
            {
                title: "倒数第二个方块的文字是什么",
                content: ["灰色", "蓝色", "黑色"],
                rightnum: 0
            },
        ],
        currentPageId: 0,
        status: "",
        showDialog: false,
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let id = parseInt(options.id)
        this.setData({
            currentPageId: id,
        })
    },
    handleviewtap(e) {
        let tar = parseInt(e.target.dataset.idx);
        this.handleIsRight(tar);
        let id = this.data.currentPageId + 1;
        
        if (id == 3) {
            this.setData({
                status: "开始正式游戏吧"
            })
            setTimeout(function () {
                wx.redirectTo({
                    url: '/pages/A1-question/A1-question?id='+0
                })
            }, 1500);
        }
        //继续跳向下一题
        else {
            
            setTimeout(function () {
                wx.redirectTo({
                    url: '/pages/A1-teach-question/A1-teach-question?id=' + id,
                })
            }, 1100);
        }
        this.setData({
            showDialog: !this.data.showDialog
        })
    },
    handleIsRight(tar) {
        let currentPage = this.data.currentPageId
        if (tar === this.data.puzzle[currentPage].rightnum) {
            this.setData({
                status: "学的很快嘛！"
            })
        } else {
            let error = this.data.errorTime + 1;
            this.setData({
                status: "好可惜，仔细读题哦",
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
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
    },
})