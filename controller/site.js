const site = require("../service/site")
async function list(ctx,next){//带模糊查询
    console.log(ctx.query.query,88)
    let key = ctx.query.query?JSON.parse(ctx.query.query).key:''
    let data = await site.getList(key)//ctx.query 获取对象格式的query参数(get请求)
    return ctx.response.body = data
}
async function getSiteById(ctx,next){
    let data = await site.getSiteById(ctx.params.id)//ctx.query 获取对象格式的query参数(get请求)
    return ctx.response.body = data
}
async function paramList(ctx,next){
    let data = await site.getParamList(ctx.params.id)//ctx.params 获取对象格式的param参数(get请求)
    return ctx.response.body = data
}
async function add(ctx,next){
    console.log(ctx.request.body,'bbbbbb')
    let { name,description,kind,paramList} = ctx.request.body
    let data = await site.add(name,description,kind,paramList)
    // console.log(data,"responseBody")
    return ctx.response.body = data
}
async function del(ctx,next){
    let data = await site.del(ctx.request.body.siteId)
    return ctx.response.body = data
}
async function update(ctx,next){
    let { id,name,description,kind,paramList} = ctx.request.body
    let data = await site.update(id,name,description,kind,paramList)
    console.log(data,"responseBody")
    return ctx.response.body = data
}
module.exports={
    list,
    getSiteById,
    paramList,
    add,
    del,
    update
}