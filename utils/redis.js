const redis = require('redis')
const REDIS_CONFIG = require('../config/redis_config') // 数据库配置

//连接redis
let redisClient = redis.createClient(REDIS_CONFIG);

setInterval(()=>{
    ["aa","bb","cc"].forEach((item)=>{
        redisClient.set(item, Math.random()*100, function(err, reply){
            console.log("set hum error:" + err);
        })
        redisClient.expire(item, 50);//设置超时时间
    })
},5000)




module.exports = {
    query
}