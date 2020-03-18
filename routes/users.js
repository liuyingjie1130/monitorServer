var router = require('koa-router')();
// var jsonParser = bodyParser.json()
const bodyparser = require('koa-bodyparser')()
const controller = require("../controller/userController")
// const KoaBody = require('koa-body')({multipart:true,json:true})
router.post("/login",bodyparser,controller.checkLogin)
router.post("/register",bodyparser,controller.registerUser)
 
router.prefix('/api/v1');



module.exports = router;
