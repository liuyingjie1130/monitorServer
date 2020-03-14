var router = require('koa-router')();


const controller = require("../controller/userController")
const KoaBody = require('koa-body')({multipart:true})
router.post("/login",KoaBody,controller.checkLogin)
router.post("/register",KoaBody,controller.registerUser)
 
// router.prefix('/users');



module.exports = router;
