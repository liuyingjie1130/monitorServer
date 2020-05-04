//Koa2/controller/userController.js
const alert = require("../service/alert")
async function getAlert1(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {kind,site,attr} = ctx.request.body
    let data = await alert.matchKind(kind) || await alert.matchSite(site) || await alert.matchAttr(attr);
    // let data2 = await alert.matchKA(kind,attr) || await alert.matchKS(kind,site) || await alert.matchSA(site,attr);
    // let data3 = await alert.matchThree(kind,site,attr);
    console.log(ctx.request.body,"requestBody",data,"responseBody")
    return ctx.response.body = data
    
}
async function getAlert2(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {kind,site,attr} = ctx.request.body
    let data = await alert.matchKA(kind,attr) || await alert.matchKS(kind,site) || await alert.matchSA(site,attr);
    console.log(ctx.request.body,"requestBody",data,"responseBody")
    return ctx.response.body = data
}
async function getAlert3(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {kind,site,attr} = ctx.request.body
    let data = await alert.matchThree(kind,site,attr);
    console.log(ctx.request.body,"requestBody",data,"responseBody")
    return ctx.response.body = data
}
async function getAlerttime(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {time} = ctx.request.body
    let data = await alert.matchTime(time);
    console.log(ctx.request.body,"requestBody",data,"responseBody")
    return ctx.response.body = data
}
module.exports={
    getAlert1,
    getAlert2,
    getAlert3,
    getAlerttime
}