// pages/testLogin/testLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userOpenid:"",
    hasUserInfo: false,
    CalculateData:"",
    userInfoCanShow: false,
    openidExistInDB:false,
    imgUrl:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    //页面加载期间调用云函数获取用户openid
    wx.cloud.callFunction({

      //调用函数名
      name: 'login',

    })
    .then(res => {
      console.log("success")

      //用户未注册-点击按钮后进入个人信息设置页面并传送调用login
      if (!res.result.UserExist){
        this.setData({
          openidExistInDB: false
        })
        
      }
      //用户已注册
      else {
        this.setData({
          userInfo: res.result.dbResult,
          openidExistInDB: true
        })
        console.log(res.result.dbResult.data[0]._id)
      }
      

    })
    .catch(console.error)

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

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  //获取用户个人信息()
  getUserInformation:function(event){
    
    //弹出用户信息对话框
      wx.getUserProfile({
        desc: 'desc',
        success: (res) => {
          this.setData({
            userInfo: res.userInfo,
            userInfoCanShow: true,
            imgUrl: res.userInfo.avatarUrl,
            // userOpenid: res.userInfo
          })
          console.log(this.data.imgUrl)
        }
      })

      //判断用户是否存在DB
      if (this.data.openidExistInDB){
        //跳转到主页面
      }

      //未存在的用户已在访问期间自动存放openid到DB
      else{
        //调用数据库引用上传数据到数据库
        //上传到主页面

      }


  },


  //计算触发
  cloudFunTest:function(event){
    
    //获取from信息
    let a = parseInt(event.detail.value.a);
    let b = parseInt(event.detail.value.b);
    // console.log("a",typeof(a));

    // console.log("a",typeof(a));
    // console.log("b",typeof(b));
    console.log("a+b",a+b);

    // this.setData({
    //   "CalculateData":a+b
    // })




    //结果暂存
    let sum = 0;

    //获取云函数调用
    
    wx.cloud.callFunction({

      //调用函数名
      name: 'sum',

      //传递参数

      data: {
        a: a,
        b: b,
      },
    })
    .then(res => {
      this.setData({
        CalculateData: res.result.sum
      })
    })
    .catch(console.error)


  },
  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})