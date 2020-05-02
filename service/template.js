const { query } = require('../utils/query')
const {
  CREATE_TABLE,
  QUERY_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE
} = require('../utils/sql')
const uuid = require('uuid')
async function getList(queryKey) {
    console.log(queryKey,'mysql')
    const condition = queryKey?`where name like '%${queryKey}%'`:''
    return query(QUERY_TABLE('template',condition)).then(
        res => {
            // console.log(res,'res')
            return{ code:200,msg:'模板查询成功',data:res}
        }
    )
}
async function getParamList(id){
    console.log(id,'mysql')
    const condition = `where templateId='${id}'`
    return query(QUERY_TABLE('paramByTemplate',condition)).then(
        res => {
            console.log(res,'res')
            return{ code:200,msg:'模板参数查询成功',data:res}
        }
    )
}
async function del(templateId) {
    // console.log(queryKey,'mysql')
    let key = 'id';
    let val = `'${templateId}'`
    return query(DELETE_TABLE('template',{key,val})).then(
        res => {
            // console.log(res,9090)
            return query(DELETE_TABLE('paramByTemplate',{key:'templateId',val})).then(
                res => {
                    // console.log(res,'res')
                    return{ code:200,msg:'模板删除成功',data:templateId}
                }
            )
        }
    )
}
async function add(name,description,kind,paramList) {
    console.log(name,description,kind,paramList,'mysql')
    let key = 'id,name,description,kind';
    let templateId = uuid.v1();
    let templateName = name;
    let val = `('${templateId}','${name}','${description}','${kind}')`
    return query(INSERT_TABLE('template',{key,val})).then(
        res => {
            let val=[];
            let key = 'id,template,attrName,min,max,description,unit,templateId';
            paramList.forEach((item,index) => {
                let {name,description,min,max,unit} = item;
                let valOne = `('${uuid.v1()}','${templateName}','${name}',${min},${max},'${description}','${unit}','${templateId}')`
                val.push(valOne)
            });
            
            return paramList.length==0?{ code:200,msg:'模板添加成功',data:templateId}:query(INSERT_TABLE('paramByTemplate',{key,val:val.join(',')})).then(res=>{
                return{ code:200,msg:'模板添加成功',data:templateId}
            })
        }
    )
}
async function update(id,name,description,kind,paramList) {
    console.log(id,name,description,kind,paramList,'mysql')
    let {primaryKey, primaryVal} = {primaryKey:"id",primaryVal:`'${id}'`};
    let templateName = name;
    let templateId = id;
    let upd = `name='${name}',description='${description}',kind='${kind}'`
    return query(UPDATE_TABLE('template',{primaryKey, primaryVal},upd)).then(
        res => {
            let k =0;
            return query(DELETE_TABLE('paramByTemplate',{key:"templateId",val:templateId})).then(res=>{
                let key = 'id,template,attrName,min,max,description,unit,templateId';
                let val = [];
                 paramList.forEach((item,index) => {
                    let {name,description,min,max,unit} = item;
                    let valOne = `('${uuid.v1()}','${templateName}','${name}',${min},${max},'${description}','${unit}','${templateId}')`
                    val.push(valOne)                    
                });
                return query(INSERT_TABLE('paramByTemplate',{key,val:val.join(',')})).then(res=>{
                    return{ code:200,msg:'模板修改成功',data:templateId}
                })
            })
            // console.log('paramList',paramList)
            
        }
    )
}
module.exports = {
 getList,
 getParamList,
 add,
 del,
 update
}