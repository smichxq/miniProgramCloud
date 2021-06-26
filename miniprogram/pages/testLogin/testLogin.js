// pages/testLogin/testLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // avatarUrl:'/miniprogram/images/code-cloud-callback-config.png',
    nickName:"未登录",
    city:"未知",


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
      avatarUrl,city, nickName
    })
  },
  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})