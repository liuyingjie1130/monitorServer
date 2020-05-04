//Koa2/controller/userController.js
const tags = require("../service/tags")
async function getTags1(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {kind,site,attr} = ctx.request.body
    let data = await tags.matchKind(kind) || await tags.matchSite(site) || await tags.matchAttr(attr);
    console.log(ctx.request.body,"requestBody",data,"responseBody")
    return ctx.response.body = data
    
}
async function getTags2(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {kind,site,attr} = ctx.request.body
    let data = await tags.matchKA(kind,attr) || await tags.matchKS(kind,site) || await tags.matchSA(site,attr);
    console.log(ctx.request.body,"requestBody",data,"responseBody")
    return ctx.response.body = data
}
async function getTags3(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {kind,site,attr} = ctx.request.body
    let data = await tags.matchThree(kind,site,attr);
    console.log(ctx.request.body,"requestBody",data,"responseBody")
    return ctx.response.body = data
}
module.exports={
    getTags1,
    getTags2,
    getTags3
}