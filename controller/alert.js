//Koa2/controller/userController.js
const alert = require("../service/alert")
async function getAlert(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {kind,site,attr,time} = ctx.request.body
    if(kind && site && attr && time){
        var data = await alert.matchFour(kind,site,attr,time);
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }    
    if(time &&(attr==undefined)&&(site==undefined)&&(kind==undefined)){
        var data = await alert.matchTime(time);
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(kind &&(attr==undefined)&&(site==undefined)&&(time==undefined)){
        var data = await alert.matchKind(kind) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(attr &&(kind==undefined)&&(site==undefined)&&(time==undefined)){
        var data = await alert.matchAttr(attr) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(site &&(kind==undefined)&&(attr==undefined)&&(time==undefined)){
        var data = await alert.matchSite(site) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(site && kind &&(attr==undefined)&&(time==undefined)){
        var data = await alert.matchKS(kind,site) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(kind && attr &&(site==undefined)&&(time==undefined)){
        var data = await alert.matchKA(kind,attr) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(kind && time &&(site==undefined)&&(attr==undefined)){
        var data = await alert.matchKT(kind,time) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(site && attr &&(kind==undefined)&&(time==undefined)){
        var data = await alert.matchSA(site,attr) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(site && time &&(kind==undefined)&&(attr==undefined)){
        var data = await alert.matchST(site,time) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(time && attr &&(kind==undefined)&&(site==undefined)){
        var data = await alert.matchAT(attr,time) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(kind && attr && site &&(time==undefined)){
        var data = await alert.matchKAS(kind,attr,site) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(kind && attr && time &&(site==undefined)){
        var data = await alert.matchKAT(kind,attr,time) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(kind && site && time &&(attr==undefined)){
        var data = await alert.matchKST(kind,site,time) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(attr && site && time &&(kind==undefined)){
        var data = await alert.matchAST(attr,site,time) 
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
}   
module.exports={
    getAlert
}