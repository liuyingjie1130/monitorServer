//Koa2/controller/userController.js
const tags = require("../service/tags")
async function getTags(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {kind,site,attr} = ctx.request.body
    if((kind==undefined)&&(attr==undefined)&&(site==undefined)){
        var data = await tags.match() 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(kind &&(attr==undefined)&&(site==undefined)){
        var data = await tags.matchKind(kind) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(attr &&(kind==undefined)&&(site==undefined)){
        var data = await tags.matchAttr(attr) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(site &&(kind==undefined)&&(attr==undefined)){
        var data = await tags.matchSite(site) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(site && kind &&(attr==undefined)){
        var data = await tags.matchKS(kind,site) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(kind && attr &&(site==undefined)){
        var data = await tags.matchKA(kind,attr) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(site && attr &&(kind==undefined)){
        var data = await tags.matchSA(site,attr) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(kind && site && attr){
        var data = await tags.matchThree(kind,site,attr)
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
}
module.exports={
    getTags
}