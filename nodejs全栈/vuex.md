# vuex存放全局数据  
>* 安装和导入vuex  
>   >* 安装：``` npm i --save vuex```  
>   >* 导入：```import vuex from 'vuex'```  
>* 使用vuex
>   >* 创建store.js文件
>   >* 在store.js文件内引入vuex：```Vue.use(vuex)```  
>   >* 在store.js文件内创建vuex对象并导出：```export default new Vuex.Store({actions, getters, state, mutations})```  
>   >* 将vuex对象添加到vue实例中：  
>   >   ```
>   >   import store from 'js文件目录'
>   >   new Vue(){ el:'#xx', store }
>   >   ```

