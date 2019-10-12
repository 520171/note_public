# jwt验证
>* 生成token
>   * 
>导入jsonwebtoken工具：```const jwt = require('jsonwebtoken'')```  
>   * 生成token：```const token = jwt.sign(payload, signkey, { expireIn: '60s'})```  
>   * ```jwt.sign()的参数说明```  
>   * payload = {}：负载
>   * signkey = 'salt'：加盐，加密的key
>   * 
>
>ptions = { expireIn: '60s' } // 配置生成的token的有效期
>* 使用express-jwt中间间验证token
>   * 
