const app = require('http').createServer()
const io = require('socket.io')(app)
const redis = require('redis')
const REDIS_CONFIG = require('./config/redis_config') // 数据库配置

app.listen(5000)
// redis

let redisClient = redis.createClient(REDIS_CONFIG);
// 模拟传感器发来的实时数据
setInterval(()=>{
    let timestamp = new Date().getTime();
    let arr = [];
    ["aa","bb","cc"].forEach((item)=>{
        arr.push({
            name:item,
            value:Math.random()*100,
            timestamp
        })
    })
    console.log(arr)
    redisClient.set('current', JSON.stringify(arr), function(err, reply){
        console.log(" error?replay:" , err,reply);
    })
    // ["aa","bb","cc"].forEach((item)=>{
    //     redisClient.set(item, JSON.stringify({value:Math.random()*100,timestamp}), function(err, reply){
    //         console.log("set hum error:" + err,reply);
    //     })
    //     redisClient.expire(item, 50);//设置超时时间
    // })
},5000)


io.on("connection",function (clientSocket) {
    // socket.io 使用 emit(eventname,data) 发送消息，使用on(eventname,callback)监听消息
    //监听客户端发送的 sendMsg 事件
    clientSocket.on("clientMsg",function (data) {
        // data 为客户端发送的消息，可以是 字符串，json对象或buffer
        // 使用 emit 发送消息
        setInterval(()=>{
            redisClient.get('current',function(err,data){
                clientSocket.emit("serverMsg",data);
            })
        },5000)
        
        
    })
});