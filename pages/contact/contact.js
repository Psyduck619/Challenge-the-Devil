var app = getApp()
Page({

  data: {
    contactInfo: ''
  },

  contactInput:function(e){
    this.setData({
      contactInfo:e.detail.value
    })
  },
  commit:function(e){
    if(this.data.contactInfo.length == 0){
      wx.showToast({
        title: '内容不能为空!',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false,
        success: (result)=>{},
        fail: ()=>{},
        complete: ()=>{}
      });
    } else {
      console.log(this.data.contactInfo)
      let that = this
      wx.request({
        url: 'https://www.yuan619.xyz:8887/contact/upcontact',
        header: {
         "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: {
          openid: app.globalData.openid,
          content: that.data.contactInfo
        },
        success: function (res) {
         console.log(res)
         if(res.data.code == 200){
           if(res.data.result == "上传成功"){
             console.log("用户建议上传成功!")
           }
         }
        },
        fail: function (res) {
         console.log(res)
         if(res.data.result == "no"){
           console.log("用户建议上传失败!")
         }
        }
      })
      wx.showToast({
        title: '感谢您的反馈!',
        icon: 'success',
        image: '',
        duration: 700,
        mask: false,
        success: (result)=>{},
        fail: ()=>{},
        complete: ()=>{}
      });
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/my/my',
        })
      }, 700)
    }
    
  }
})