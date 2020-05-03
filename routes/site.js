var router = require('koa-router')();
const bodyparser = require('koa-bodyparser')()
const controller = require("../controller/site")

router.get("/list",bodyparser,controller.list)
router.get("/list/:id",bodyparser,controller.getSiteById)
router.get("/param/list/:id",bodyparser,controller.paramList)
router.post("/add",bodyparser,controller.add)
router.post("/delete",bodyparser,controller.del)
router.post("/update",bodyparser,controller.update)

router.prefix('/api/v1/site');



module.exports = router;