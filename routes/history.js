var router = require('koa-router')();
// var jsonParser = bodyParser.json()
const bodyparser = require('koa-bodyparser')()
const controller = require("../controller/history")
// const KoaBody = require('koa-body')({multipart:true,json:true})
router.post("/history/listname",bodyparser,controller.getHistoryname)
router.post("/history/listtime",bodyparser,controller.getHistorytime)
router.post("/history/list2",bodyparser,controller.getHistory2)
router.post("/history/list3",bodyparser,controller.getHistory3)
router.prefix('/api/v1');



module.exports = router;