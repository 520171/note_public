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
>   >   const pathname = config.pathname
>   >   if (localStorage.getItem('token')) {
>   >       if ('/' != pathname && '/login' != pathname) {
>   >           config.headers.common['token'] = localStorage.getItem('token')
>   >       }
>   >   }
>   >   return config
>   >}, error => Promise.reject(error) )
>   >```  
>* 响应拦截：判断页面是否返回401，401一般表示未授权，401则返回登陆页面
>   >```
>   >instance.interceptor.response.use(response => response, error => {
>   >   // 判断error.response 错误对象是否不为空
>   >   if (error.response) {
>   >       switch (err.response.status) {
>   >           case 401:
>   >               // 移除token
>   >               localStorage.removeItem('token')
>   >               // 回到登录页面
>   >               router.replace({
>   >                   path: '/login'
>   >               })
>   >           break;
>   >       }
>   >       // 返回错误信息
>   >       return Promise.reject(error.response.data)
>   >   }
>   >})
>   >```
