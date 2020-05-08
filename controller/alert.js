//Koa2/controller/userController.js
const alert = require("../service/alert")
async function getAlert(ctx,next){
    ctx.set('Content-Type', 'application/json')
    let {kind,site,attr,start,end} = ctx.request.body
    if((start==undefined)&&(end==undefined)){
        if((attr==undefined)&&(site==undefined)&&(kind==undefined)){
            var data = await alert.match();
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        if(kind &&(attr==undefined)&&(site==undefined)){
            var data = await alert.matchKind(kind) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        if(attr &&(kind==undefined)&&(site==undefined)){
            var data = await alert.matchAttr(attr) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        if(site &&(kind==undefined)&&(attr==undefined)){
            var data = await alert.matchSite(site) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        if(site && kind &&(attr==undefined)){
            var data = await alert.matchKS(kind,site) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        if(kind && attr &&(site==undefined)){
            var data = await alert.matchKA(kind,attr) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        if(site && attr &&(kind==undefined)){
            var data = await alert.matchSA(site,attr) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        if(kind&&attr&&site){
            var data = await alert.matchKAS(kind,site,attr) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
    }else{
        if(kind && site && attr){
            var data = await alert.matchFour(start,end,kind,site,attr);
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }   
        if((attr==undefined)&&(site==undefined)&&(kind==undefined)){
            var data = await alert.matchTime(start,end);
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        if(kind &&(site==undefined)&&(attr==undefined)){
            var data = await alert.matchKT(kind,start,end) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        
        if(site &&(kind==undefined)&&(attr==undefined)){
            var data = await alert.matchST(site,start,end) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        if(attr &&(kind==undefined)&&(site==undefined)){
            var data = await alert.matchAT(attr,start,end) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        
        if(kind && attr &&(site==undefined)){
            var data = await alert.matchKAT(kind,attr,start,end) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        if(kind && site &&(attr==undefined)){
            var data = await alert.matchKST(kind,site,start,end) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
        if(attr && site &&(kind==undefined)){
            var data = await alert.matchAST(attr,site,start,end) 
            console.log(ctx.request.body,"requestBody",data,"responseBody")
            return ctx.response.body = data
        }
    }
}   
module.exports={
    getAlert
}