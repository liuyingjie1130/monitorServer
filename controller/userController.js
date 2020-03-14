//Koa2/controller/userController.js
const user = require("../service/user")
async function checkLogin(ctx,next){
    let {user_name,user_password} = ctx.request.body
    let data = await user.checkUser(user_name,user_password)
    console.log(ctx.request.body,"requestBody",data,"responseBody")
 return ctx.response.body = data
}
async function registerUser(ctx,next){
 let {user_name,user_password} = ctx.request.body
 let data = await user.findUser(user_name,user_password)
 console.log(ctx.request.body,"requestBody",data,"responseBody")
 return ctx.response.body = data
}
module.exports={
 checkLogin,
 registerUser
}