var router = require('koa-router')();
// var jsonParser = bodyParser.json()
const bodyparser = require('koa-bodyparser')()
const controller = require("../controller/tags")
// const KoaBody = require('koa-body')({multipart:true,json:true})
router.post("/tags/list1",bodyparser,controller.getTags1)
router.post("/tags/list2",bodyparser,controller.getTags2)
router.post("/tags/list3",bodyparser,controller.getTags3)
router.prefix('/api/v1');



module.exports = router;