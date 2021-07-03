// miniprogram/pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //加载期间存取openid


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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { 

  },

  _handlerSumbit:function(evt){
    //get Account and pwd
    let username = evt.detail.value.username;
    let password = evt.detail.value.password;

    //get cloudDb refer
    const db = wx.cloud.database();
    //get collection refer
    const userCollection = db.collection("counters");
    //use refer add data into dbCollection

    //register
    if (evt.detail.target.id === "register"){
      userCollection.add({
        data:{
          username:username,
          password:password
        }
      });
    }

      //login
      else{
        wx.cloud.callFunction({
          name: 'login',
        })
        .then(res => {
          console.log(res.result.userExist)
        })
        .catch(console.log("fall!!!!"))

        // userCollection.where({
        //   username:username,
        //   password:password
        // }).get().then(res=>{
        //   console.log("success! ",res.data);

        // }).catch(err=>{
        //   console.log("err!",err);
        // })

      }


    },

  
})