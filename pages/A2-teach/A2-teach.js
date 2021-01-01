// pages/index/test/test.js

const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //题目矩阵
        num:[["Ae","Bb","Fs","Nq","Ws"],
       ["Jj","Ns","Sb","Eo","Ra"],
       ["Pl","Ad","Yy","Cc","Gt"],
       ["Gh","Lc","Vi","Ym","Wa"],
       ["Vh","Xq","Pp","Ml","Sx"],
       ["Xd","Qb","Qz","Dd","Hs"],
        ],
        //关键字数量
        keynum:6,
        //已选择矩阵
        select:[[0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, ],
     ],
        //需要选择的数量
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
        if(this.data.checkcnt==this.data.keynum)
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