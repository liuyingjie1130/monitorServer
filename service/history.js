//Koa2/service/user.js
const { query } = require('../utils/query')
const {
  CREATE_TABLE,
  QUERY_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE
} = require('../utils/sql')
async function matchName(name) {
    let data=[];
    return query(QUERY_TABLE('history',`where name = '${name}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchTime(time) {
    let data=[];
    return query(QUERY_TABLE('history',`where time ="${time}"`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchNameAttr(name,attr) {
    let data=[];
    return query(QUERY_TABLE('history',`where name = '${name}' and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
async function matchThree(name,attr,time) {
    let data=[];
    return query(QUERY_TABLE('history',`where name = '${name}' and time = '${time}' and attr = '${attr}'`)).then(res => {
        if(res.length){
            return { code: 200,msg: "查询成功",data:res}
        }
    })
}
module.exports = {
    matchName,
    matchNameAttr,
    matchThree,
    matchTime
}