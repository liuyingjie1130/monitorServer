var router = require('koa-router')();
// var jsonParser = bodyParser.json()
const bodyparser = require('koa-bodyparser')()
const controller = require("../controller/alert")
// const KoaBody = require('koa-body')({multipart:true,json:true})
// router.post("/alert/list1",bodyparser,controller.getAlert1)
// router.post("/alert/list2",bodyparser,controller.getAlert2)
// router.post("/alert/list3",bodyparser,controller.getAlert3)
// router.post("/alert/listtime",bodyparser,controller.getAlerttime)
router.post("/alert/list",bodyparser,controller.getAlert)
router.prefix('/api/v1');



module.exports = router;