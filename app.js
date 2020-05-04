const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const jwt = require('koa-jwt')

const index = require('./routes/index')
const users = require('./routes/users')
const template = require('./routes/template')
const alert = require('./routes/alert')
const tags = require('./routes/tags')
const history = require('./routes/history')
const site = require('./routes/site')


const _json=async (ctx,next)=>{
  //指定服务器端允许进行跨域资源访问的来源域。可以用通配符*表示允许任何域的JavaScript访问资源，但是在响应一个携带身份信息(Credential)的HTTP请求时，必需指定具体的域，不能用通配符
  ctx.set("Access-Control-Allow-Origin", "*");

  //指定服务器允许进行跨域资源访问的请求方法列表，一般用在响应预检请求上
  ctx.set("Access-Control-Allow-Methods", "OPTIONS,POST,GET,HEAD,DELETE,PUT");
  
  //必需。指定服务器允许进行跨域资源访问的请求头列表，一般用在响应预检请求上
  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
  
  //告诉客户端返回数据的MIME的类型，这只是一个标识信息,并不是真正的数据文件的一部分
  ctx.set("Content-Type", "application/json;charset=utf-8");
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
}


// app.use(_json)

// error handler
onerror(app)

// middlewares
// app.use(bodyparser())
app.use(async (ctx, next) => {
  await next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        data: null,
        message: 'token无效',
        code: 401
      };
    } else {
      throw err;
    }
  });
});
app.use(jwt({secret:'LZC'}).unless({path: ["/api/v1/login","api/v1/register"]}));
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))
app.use(cors())
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
<<<<<<< HEAD
app.use(template.routes(), users.allowedMethods())
app.use(alert.routes(), users.allowedMethods())
app.use(tags.routes(), users.allowedMethods())
app.use(history.routes(), users.allowedMethods())
=======
app.use(template.routes(), template.allowedMethods())
app.use(site.routes(), site.allowedMethods())

>>>>>>> remotes/origin/dev_zqy

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
