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
    return query(QUERY_TABLE('alert',`where kind = '${kind}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchSite(site) {
    let data=[];
    return query(QUERY_TABLE('alert',`where site = '${site}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchAttr(attr) {
    let data=[];
    return query(QUERY_TABLE('alert',`where attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchTime(time) {
    let data=[];
    return query(QUERY_TABLE('alert',`where time = '${time}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchKS(kind,site) {
    let data=[];
    return query(QUERY_TABLE('alert',`where kind = '${kind}'and site = '${site}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchKT(kind,time) {
    let data=[];
    return query(QUERY_TABLE('alert',`where kind = '${kind}'and time = '${time}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchKA(kind,attr) {
    let data=[];
    return query(QUERY_TABLE('alert',`where kind = '${kind}' and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchST(site,time) {
    let data=[];
    return query(QUERY_TABLE('alert',`where time = '${time}'and site = '${site}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchSA(site,attr) {
    let data=[];
    return query(QUERY_TABLE('alert',`where site = '${site}' and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchAT(attr,time) {
    let data=[];
    return query(QUERY_TABLE('alert',`where time = '${time}' and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchKAS(kind,site,attr) {
    let data=[];
    return query(QUERY_TABLE('alert',`where kind = '${kind}'and site = '${site}' and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchKAT(kind,attr,time) {
    let data=[];
    return query(QUERY_TABLE('alert',`where kind = '${kind}'and attr = '${attr}' and time = '${time}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchKST(kind,site,time) {
    let data=[];
    return query(QUERY_TABLE('alert',`where kind = '${kind}'and site = '${site}' and time = '${time}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchAST(attr,site,time) {
    let data=[];
    return query(QUERY_TABLE('alert',`where attr = '${attr}'and site = '${site}' and time = '${time}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchFour(kind,attr,site,time) {
    let data=[];
    return query(QUERY_TABLE('alert',`where kind = '${kind}'and attr = '${attr}'and site = '${site}' and time = '${time}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
module.exports = {
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