//Koa2/service/user.js
const { query } = require('../utils/query')
const {
  CREATE_TABLE,
  QUERY_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE
} = require('../utils/sql')
async function checkUser(name, password) {
 return query(QUERY_TABLE('user',`where user_name ='${name}' and user_password='${password}'`)).then(res => {
   console.log(res,'res')
 if (res.length == 1 && res[0].user_name === name && res[0].user_password === password) {
 return { msg: "登陆成功", code: 200 }
 } else {
 return { msg: "用户名或密码错误", code: 201 }
 }
 })
}
async function findUser(name, password) {
 return query(QUERY_TABLE('user',"where user_name ='" + name + "'")).then(res => {
 if (res.length == 0) {
 return registerUser(name, password)
 } else {
 return { msg: "用户已存在", code: 202 }
 }
 })
}
async function registerUser(name, password) {
 let key = 'user_name,user_Password';
 let val = `('${name}','${password}')`
 return query(INSERT_TABLE('user',{key,val})).then(res => {
 if (res.affectedRows == 1) {
 return { msg: "注册成功", code: 200 }
 } else {
 return { msg: "注册失败", code: 200 }
 }
 })
}
module.exports = {
 checkUser,
 findUser,
 registerUser
}