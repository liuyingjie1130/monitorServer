var router = require('koa-router')();
// var jsonParser = bodyParser.json()
const bodyparser = require('koa-bodyparser')()
const controller = require("../controller/history")
router.post("/history/list",bodyparser,controller.getHistory)
router.prefix('/api/v1');



module.exports = router;