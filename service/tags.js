//Koa2/service/user.js
const { query } = require('../utils/query')
const {
  CREATE_TABLE,
  QUERY_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE
} = require('../utils/sql')
async function matchKind(kind) {
    let data=[];
    return query(QUERY_TABLE('tags',`where kind = '${kind}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchSite(site) {
    let data=[];
    return query(QUERY_TABLE('tags',`where site = '${site}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchAttr(attr) {
    let data=[];
    return query(QUERY_TABLE('tags',`where attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchKS(kind,site) {
    let data=[];
    return query(QUERY_TABLE('tags',`where kind = '${kind}'and site = '${site}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchKA(kind,attr) {
    let data=[];
    return query(QUERY_TABLE('tags',`where kind = '${kind}' and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchSA(site,attr) {
    let data=[];
    return query(QUERY_TABLE('tags',`where site = '${site}' and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchThree(kind,site,attr) {
    let data=[];
    return query(QUERY_TABLE('tags',`where kind = '${kind}'and site = '${site}' and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
module.exports = {
    matchKind,
    matchSite,
    matchAttr,
    matchKS,
    matchKA,
    matchSA,
    matchThree,
}