//Koa2/controller/userController.js
const history = require("../service/history")
async function getHistory(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {name,attr,time} = ctx.request.body
    if(name&&attr&&time){
        var data = await history.matchThree(name,attr,time);
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(name&&(attr==undefined)&&(time==undefined)){
        var data = await history.matchName(name);
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(time&&(attr==undefined)&&(name==undefined)){
        var data = await history.matchTime(time);
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
    if(name&&attr&&(time==undefined)){
        var data = await history.matchNameAttr(name,attr);
        console.log(ctx.request.body,"requestBody",data,"responseBody")
        return ctx.response.body = data
    }
}
module.exports={
    getHistory

}