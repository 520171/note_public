# jwt验证
>* 生成token
>   * 
>导入jsonwebtoken工具：```const jwt = require('jsonwebtoken'')```  
>   * 生成token：```const token = jwt.sign(payload, signkey, { expireIn: '60s'})```  
>   * ```jwt.sign()的参数说明```  
>   * payload = {}：负载
>   * signkey = 'salt'：加盐，加密的key
>   * options = { expireIn: '60s' } // 配置生成的token的有效期
>* 使用express-jwt中间验证token
>   * 安装express-jwt中间件：```npm i --save express-jwt```  
>   * 导入express-jwt：```const expressJWT = require('express-jwt')```  
>   * 引入express-jwt中间件：```app.use(expressJWT(option).unless({}))```  // option = { secret: '加密的salt'};  unless中的{path: [需要过滤的url,除了这些url都要过滤] }  
>   * 默认情况下：express-jwt会从req.headers.authorization中获取，且该token的格式必须为``` `Bearer ${token}` ```
>   * 校验token失败的处理(当校验不通过时会抛出401错误，且err.name === 'UnauthorizedError')：
>       ```
>       app.use(function(err, req, res, next){
>           if ('UnauthorizedError' === err.name) {
>               // 当token过期或无效时会触发'UnauthorizedError'错误
>               res.status(401).send('xxx')
>           }
>       })
>       ```
>* jwt验证整合：  
>   >* 创建tokenConfig.js文件
>   > ```
>   > const jwt = require('jsonwebtoken')
>   > const expressJwt = require("express-jwt")
>   > const secret = 'zjj' // 设置
>   > 
>   > // 生成token
>   > const generatorToken = (payload) => {
>   >   return jwt.sign(payload, secret, { expiresIn: 60 })
>   > }
>   >
>   > // 验证token
>   > // .unless的参数可以是function,当方法返回true则不需要token验证当前的请求。.unless({path: ['/login'...]}) || unless(function (req) {})
>   > const analyzeToken = expressJwt({
>   >   secret
>   > }).unless({path: '/login'})
>   > 
>   > // 处理401错误
>   > const handleErr = function (err, req, res, next) {
>   >   // console.log(req.headers)
>   >   if ('UnauthorizedError' === err.name) {
>   >       res.status(401).send('未授权！！！')
>   >   } else {
>   >       next(err)
>   >   }
>   > }
>   >    
>   > module.exports = {
>   >   generatorToken,
>   >   analyzeToken,
>   >   handleErr
>   > }
>   > ```
