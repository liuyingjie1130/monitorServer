var router = require('koa-router')();
// var jsonParser = bodyParser.json()
const bodyparser = require('koa-bodyparser')()
const controller = require("../controller/alert")
router.post("/alert/list",bodyparser,controller.getAlert)
router.prefix('/api/v1');



module.exports = router;