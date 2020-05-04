const { query } = require('../utils/query')
const {
  CREATE_TABLE,
  QUERY_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE
} = require('../utils/sql')
const uuid = require('uuid')
// async function del(siteId) {
//     // console.log(queryKey,'mysql')
//     let key = 'id';
//     let val = `'${siteId}'`
//     return query(DELETE_TABLE('site',{key,val})).then(
//         res => {
//             // console.log(res,9090)
//             return query(DELETE_TABLE('siteTags',{key:'siteId',val})).then(
//                 res => {
//                     // console.log(res,'res')
//                     return{ code:200,msg:'种植位删除成功',data:siteId}//这里是ctx.response.body
//                 }
//             )
//         }
//     )
// }
async function getList(queryKey) {
    console.log(queryKey,'mysql')
    const condition = queryKey?`where name like '%${queryKey}%'`:''
    return query(QUERY_TABLE('site',condition)).then(
        res => {
            // console.log(res,'res')
            return{ code:200,msg:'种植位查询成功',data:res}
        }
    )
}
async function getSiteById(id) {
    const condition = `where id ='${id}'`
    return query(QUERY_TABLE('site',condition)).then(
        res => {
            // console.log(res,'res')
            return{ code:200,msg:'种植位查询成功',data:res}
        }
    )
}
async function getParamList(id){
    console.log(id,'mysql')
    const condition = `where siteId='${id}'`
    return query(QUERY_TABLE('siteTags',condition)).then(
        res => {
            console.log(res,'res')
            return{ code:200,msg:'种植位参数查询成功',data:res}
        }
    )
}
async function del(siteId) {
    // console.log(queryKey,'mysql')
    let key = 'id';
    let val = `'${siteId}'`
    return query(DELETE_TABLE('site',{key,val})).then(
        res => {
            // console.log(res,9090)
            return query(DELETE_TABLE('siteTags',{key:'siteId',val})).then(
                res => {
                    // console.log(res,'res')
                    return{ code:200,msg:'种植位删除成功',data:siteId}
                }
            )
        }
    )
}
async function add(name,description,kind,paramList) {
    console.log(name,description,kind,paramList,'mysql')
    let key = 'id,name,description,kind';
    let siteId = uuid.v1();
    let siteName = name;
    let val = `('${siteId}','${name}','${description}','${kind}')`
    return query(INSERT_TABLE('site',{key,val})).then(
        res => {
            let val=[];
            let key = 'id,siteName,attrName,min,max,description,unit,siteId';
            paramList.forEach((item,index) => {
                let {attrName,description,min,max,unit} = item;
                let valOne = `('${uuid.v1()}','${siteName}','${attrName}',${min},${max},'${description}','${unit}','${siteId}')`
                val.push(valOne)
            });
            
            return paramList.length==0?{ code:200,msg:'种植位添加成功',data:siteId}:query(INSERT_TABLE('siteTags',{key,val:val.join(',')})).then(res=>{
                return{ code:200,msg:'种植位添加成功',data:siteId}
            })
        }
    )
}
async function update(id,name,description,kind,paramList) {
    console.log(id,name,description,kind,paramList,'mysql')
    let {primaryKey, primaryVal} = {primaryKey:"id",primaryVal:`'${id}'`};
    let siteName = name;
    let siteId = id;
    let upd = `name='${name}',description='${description}',kind='${kind}'`
    return query(UPDATE_TABLE('site',{primaryKey, primaryVal},upd)).then(
        res => {
            let k =0;
            return query(DELETE_TABLE('siteTags',{key:"siteId",val:`'${siteId}'`})).then(res=>{
                let key = 'id,siteName,attrName,min,max,description,unit,siteId';
                let val = [];
                 paramList.forEach((item,index) => {
                    let {attrName,description,min,max,unit} = item;
                    let valOne = `('${uuid.v1()}','${siteName}','${attrName}',${min},${max},'${description}','${unit}','${siteId}')`
                    val.push(valOne)                    
                });
                return query(INSERT_TABLE('siteTags',{key,val:val.join(',')})).then(res=>{
                    return{ code:200,msg:'种植位修改成功',data:siteId}
                })
            })
            // console.log('paramList',paramList)
            
        }
    )
}
module.exports = {
 getList,
 getSiteById,
 getParamList,
 add,
 del,
 update
}