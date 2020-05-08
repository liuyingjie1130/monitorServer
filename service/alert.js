//Koa2/service/user.js
const { query } = require('../utils/query')
const {
  CREATE_TABLE,
  QUERY_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE
} = require('../utils/sql')
async function match() {
    let data=[];
    return query(QUERY_TABLE('alert')).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchKind(kind) {
    let data=[];
    return query(QUERY_TABLE('alert',`where kind = '${kind}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchSite(site) {
    let data=[];
    return query(QUERY_TABLE('alert',`where site = '${site}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchAttr(attr) {
    let data=[];
    return query(QUERY_TABLE('alert',`where attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchTime(start,end) {
    let data=[];
    return query(QUERY_TABLE('alert',`where time between '${start}' and '${end}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchKS(kind,site) {
    let data=[];
    return query(QUERY_TABLE('alert',`where kind = '${kind}'and site = '${site}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchKT(kind,start,end) {
    let data=[];
    return query(QUERY_TABLE('alert',`where time between '${start}' and '${end}'and kind = '${kind}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchKA(kind,attr) {
    let data=[];
    return query(QUERY_TABLE('alert',`where kind = '${kind}' and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchST(site,start,end) {
    let data=[];
    return query(QUERY_TABLE('alert',`where time between '${start}'and '${end}'and site = '${site}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchSA(site,attr) {
    let data=[];
    return query(QUERY_TABLE('alert',`where site = '${site}' and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchAT(attr,start,end) {
    let data=[];
    return query(QUERY_TABLE('alert',`where time between '${start}'and '${end}' and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchKAS(kind,site,attr) {
    let data=[];
    return query(QUERY_TABLE('alert',`where name='${kind}.${site}.${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
        // else{
        //     return { code: 200,msg: "查询成功",data:[]}
        // }
    })
}
async function matchKAT(kind,attr,start,end) {
    let data=[];
    return query(QUERY_TABLE('alert',`where time between '${start}'and '${end}'and kind = '${kind}'and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchKST(kind,site,start,end) {
    let data=[];
    return query(QUERY_TABLE('alert',`where time between '${start}'and '${end}'and kind = '${kind}'and site = '${site}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchAST(attr,site,start,end) {
    let data=[];
    return query(QUERY_TABLE('alert',`where time between '${start}'and '${end}'and attr = '${attr}'and site = '${site}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
async function matchFour(start,end,kind,site,attr) {
    let data=[];
    return query(QUERY_TABLE('alert',`where time between '${start}'and '${end}'and name='${kind}.${site}.${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }else{
            return { code: 200,msg: "查询成功",data:[]}
        }
    })
}
module.exports = {
    match,
    matchKind,
    matchSite,
    matchAttr,
    matchTime,
    matchKS,
    matchKT,
    matchKA,
    matchST,
    matchSA,
    matchAT,
    matchKAS,
    matchKAT,
    matchKST,
    matchAST,
    matchFour
}