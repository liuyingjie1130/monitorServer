const template = require("../service/template")
async function list(ctx,next){//带模糊查询
    console.log(ctx.query.query,88)
    let key = ctx.query.query?JSON.parse(ctx.query.query).key:''
    let data = await template.getList(key)//ctx.query 获取对象格式的query参数(get请求)
    return ctx.response.body = data
}
async function getTemplateById(ctx,next){
    let data = await template.getTemplateById(ctx.params.id)//ctx.query 获取对象格式的query参数(get请求)
    return ctx.response.body = data
}
async function paramList(ctx,next){
    let data = await template.getParamList(ctx.params.id)//ctx.params 获取对象格式的param参数(get请求)
    return ctx.response.body = data
}
async function add(ctx,next){
    console.log(ctx.request.body,'bbbbbb')
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
 getTemplateById,
 paramList,
 add,
 del,
 update
}