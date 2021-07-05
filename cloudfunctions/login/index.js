// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

//获取数据库引用
const db = cloud.database({
  //不抛出异常
  throwOnNotFound: false
})

//获取集合引用
const UserCollection = db.collection('Users')

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = async (event, context) => {
  
  console.log(event)
  console.log(context)

  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看

  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  const wxContext = cloud.getWXContext()
  const _ = db.command
  //数据库查询必须使用await
  //返回值为array如果存在则返回一个符合条件的数组
  var dbResults = await UserCollection.where({
    _id:_.eq(wxContext.OPENID)
  }).get()

  // return {
  //   UserExist: true,
  //   dbResult: dbResults,
  // }
  

    // var dbResults = await UserCollection.doc(wxContext.OPENID)



    //已注册
  if (dbResults.data.length!=0){

    return {
      UserExist: true,
      dbResult: dbResults,
    }
  }
  //未注册
  else{
    //增加用户openid

    await UserCollection.add({
      data: {
        _id: wxContext.OPENID,
        // RegStmp: new Date(),
        UserNickName: "",
        UserAge:"",
        // UserPictureUrl:"",
        // UserLoc:"",
      }
    })

    return {
      UserExist: false,
    }
  }



  // console.log(userExist)


  





  




  


}

