# 客户端存储token
>* 客户端通过vuex+localStorage存储token  
>* 创建store.js模块，用于导出vuex实例
>* 给vuex对象所在的js文件中(store.js)的vuex对象的state属性添加Authorization属性  
>* 给vuex对象所在的js文件中(store.js)的vuex对象的mutations属性添加修改state属性的方法
>   ```
>   // 在./vuex/store.js目录下
>   import Vue from 'vue' // 引入vue模块
>   import Vuex from 'vuex' // 引入vuex模块
>   Vue.use(Vuex) // 在Vue中安装vuex
>   export default new Vuex.Store({
>       // 导出vuex实例
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
>* 将vuex实例引入到Vue实例中
>   ```
>   // 在./main.js下
>   import store from './vuex/store' // 引入vuex实例
>   const v = new Vue({
>     router,
>     store, // 将vuex实例添加在vue实例中
>     render: h => h(App)
>   }).$mount('#app')
>   ```
