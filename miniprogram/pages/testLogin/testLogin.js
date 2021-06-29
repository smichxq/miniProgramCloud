// pages/testLogin/testLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // avatarUrl:'/miniprogram/images/code-cloud-callback-config.png',
    nickName:"未登录",
    city:"未知",
    CalculateData:"",


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  //获取用户授权
  getUserInformation:function(event){
    console.log('getUserInfomation打印的事件对象', event)
    let { avatarUrl, city, nickName}= event.detail.userInfo
    this.setData({
      avatarUrl, city, nickName
    })
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