// pages/index/test/test.js

const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //题目矩阵
        num:[[1, 2, 2, 2, 3, ],
        [1, 2, 3, 1, 1, ],
        [2, 3, 1, 1, 2, ],
        [1, 2, 2, 1, 3, ],
        [3, 2, 1, 2, 3, ],
        [2, 3, 3, 3, 1, ],
        ],
        //黑体矩阵
        keynum:[ [0, 0, 1, 0, 1,],
        [1, 1, 0, 0, 0, ],
        [0, 0, 1, 0, 0, ],
        [0, 0, 0, 1, 0, ],
        [0, 0, 1, 0, 0, ],
        [1, 0, 0, 0, 1, ],
       ],
   
        //已选择矩阵
        select:[[0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, ],
     ],
        //需要选择的数量
        BOLD_NUM:9,
        checkcnt: 0,
        hidden: false,
        over: false,
        showDialog: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
          
    },
    onShow: function () {
      wx.hideHomeButton()
    },
    handletapview(e) {
        // console.log(e)
        let col = parseInt(e.target.dataset.col)
        let row = parseInt(e.target.dataset.row)
        let select=this.data.select;
        if (this.data.keynum[row][col] === 1&&
          select [row][col]===0) {
            let arr = this.data.select;
            let n = this.data.checkcnt + 1;
            arr[row][col] = 1;
            //turn green
            this.setData({
                select: arr,
                checkcnt: n
            })
        }
        if(this.data.checkcnt==this.data.BOLD_NUM)
        {
            this.setData({
                showDialog: !this.data.showDialog
              })
                setTimeout(  function() {
                  wx.redirectTo({
                    url: '/pages/A2-test/A2-test',
                  })
                }, 2000)
        }
    },
    handleredirect() {
        this.setData({
          showDialog: !this.data.showDialog
        })
          setTimeout(  function() {
            wx.redirectTo({
              url: '/pages/A2-test/A2-test',
            })
          }, 2000)
      },
})