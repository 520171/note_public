# axios异步请求
***
>* 安装axios：npm i --save axios  
>* 使用axios：``` const axios = require('axios') ```  
>* 创建axios实例：``` const instance = axios.create(config) ```  
>* 使用axios实例发送异步post请求：``` instance.post(url, data) ```  
>* axios的全局配置：``` instance.default.baseURL='' ... ```  
>* 并发请求：``` instance.all([axios(config), axios(config)]).then(instance.spread((result1, result2) => {})).catch(err => {}) ```  
>* 获取错误码和携带的数据
>   >* 错误码：```err.response.status```  
>   >* 携带的数据： ```err.response.data```  
>   >   ![errorcode.png](https://github.com/520171/note/blob/master/nodejs全栈/imgs/errcode.png 'errcode')
>* 请求拦截：一般用于给Header设置token,login页面除外  
>   >```
>   >instance.interceptors.request.use(config => {
>   >       config.headers.authorization  = localStorage.getItem('Authorization')
>   >   }
>   >   // 数据加密
>   >   config.data = { data: crypt.aesEncrypt(config.data) }
>   >   console.log(config.data)
>   >   return config
>   >}, error => Promise.reject(error) )
>   >```  
>* 响应拦截：判断页面是否返回401，401一般表示未授权，401则返回登陆页面
>   >```
>   >instance.interceptors.response.use(response => {
>   >   // 解密响应携带的payload数据
>   >  response.data.payload = crypt.aesDecrypt(response.data.payload)
>   >  return response
>   >}, error => {
>   >  if (error.response) {
>   >    switch (error.response.status) {
>   >      case 401:
>   >        localStorage.removeItem('Authorization')
>   >        router.replace('/login')
>   >        break
>   >    }
>   >    return Promise.reject(error.response)
>   >  }
>   >})
>   >```
>* 可将vue-router对象传至axios封装的js文件中，实现401跳转  
