# res的响应方法
>* 返回json对象：```res.json({})```  
>* 返回状态码：```res.sendStatus(401)```  
>* 返回状态码并携带数据：```res.status(403).send(data)```  
>* 返回状态码并携带json数据：```res.status(401).json({"content": "未授权"})```
