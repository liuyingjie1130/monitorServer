//Koa2/controller/userController.js
const history = require("../service/history")
async function getHistoryname(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {name} = ctx.request.body
    let data = await history.matchName(name);
    console.log(ctx.request.body,"requestBody",data,"responseBody")
    return ctx.response.body = data
    
}
async function getHistorytime(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {time} = ctx.request.body
    let data = await history.matchTime(time);
    console.log(ctx.request.body,"requestBody",data,"responseBody")
    return ctx.response.body = data
}
async function getHistory2(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {name,attr} = ctx.request.body
    let data = await history.matchNameAttr(name,attr);
    console.log(ctx.request.body,"requestBody",data,"responseBody")
    return ctx.response.body = data
}
async function getHistory3(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {name,attr,time} = ctx.request.body
    let data = await history.matchThree(name,attr,time);
    console.log(ctx.request.body,"requestBody",data,"responseBody")
    return ctx.response.body = data
}
module.exports={
    getHistoryname,
    getHistorytime,
    getHistory2,
    getHistory3
}