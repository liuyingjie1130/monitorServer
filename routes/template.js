var router = require('koa-router')();


const controller = require("../controller/template")
const bodyparser = require('koa-body')({multipart:true})
// const bodyparser = require('koa-bodyparser')()
router.get("/list",bodyparser,controller.list)
router.get("/list/:id",bodyparser,controller.getTemplateById)
router.get("/param/list/:id",bodyparser,controller.paramList)
router.post("/add",bodyparser,controller.add)
router.post("/delete",bodyparser,controller.del)
router.post("/update",bodyparser,controller.update)
 
router.prefix('/api/v1/template');



module.exports = router;
