# 客户端存储token
>* 客户端通过vuex+localStorage存储token  
>* 给vuex对象所在的js文件中(store.js)的vuex对象的state属性添加Authorization属性  
>* 给vuex对象所在的js文件中(store.js)的vuex对象的mutations属性添加修改state属性的方法
>   ```
>   import Vue from 'vue' // 引入vue模块
>   import Vuex from 'vuex' // 引入vuex模块
>    
>   Vue.use(Vuex) // 在Vue中安装vuex
>   export default new Vuex.Store({
>     state: {
>       // 初始化Authorization属性，
>       Authorization:  localStorage.getItem('Authorization') || ''
>     },
>     mutations: {
>       changeLogin (state, user) {
>         // 修改token值，并存放在本地
>         state.Authorization = user.Authorization
>         localStorage.setItem('Authorization', user.Authorization)
>       }
>     },
>     actions: {
>    
>     }
>   })
>   ```
