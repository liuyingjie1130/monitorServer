const template = require("../service/template")
async function list(ctx,next){//带模糊查询
    let data = await template.getList(ctx.query.query)//ctx.query 获取对象格式的参数(get请求)
    return ctx.response.body = data
}
async function paramList(ctx,next){//带模糊查询
    console.log(ctx.params.id)
    let data = await template.getParamList(ctx.params.id)//ctx.query 获取对象格式的参数(get请求)
    return ctx.response.body = data
}
async function add(ctx,next){
    let { name,description,kind,paramList} = ctx.request.body
    let data = await template.add(name,description,kind,paramList)
    // console.log(data,"responseBody")
    return ctx.response.body = data
}
async function del(ctx,next){
    let data = await template.del(ctx.request.body.templateId)
    return ctx.response.body = data
}
async function update(ctx,next){
    let { id,name,description,kind,paramList} = ctx.request.body
    let data = await template.update(id,name,description,kind,paramList)
    console.log(data,"responseBody")
    return ctx.response.body = data
}
module.exports={
 list,
 paramList,
 add,
 del,
 update
}