# vuex存放全局数据  
>* 安装和导入vuex  
>   >* 安装：``` npm i --save vuex```  
>   >* 导入：```import vuex from 'vuex'```  
>* 使用vuex
>   >* 创建store.js文件
>   >* 在store.js文件内引入vuex：```Vue.use(vuex)```  
>   >* 在store.js文件内创建vuex对象并导出：```export default new Vuex.Store({ actions, getters, state, mutations, modules })```  
>   >* 将vuex对象添加到vue实例中：  
>   >   ```
>   >   import store from 'js文件目录'
>   >   new Vue(){ el:'#xx', store }
>   >   ```
>   >* 访问state/getters属性：```this.$store.state.属性/this.$store.getters.属性```  
>   >* 修改state属性：```this.$store.commit('mutations方法名', payload)```  
>* vuex对象的属性：
>   >* state属性：该属性用于存放数据```state = {数据1，数据2}```  
>   >* getters属性：该属性类似vue的计算属性  
>   >* mutations属性：该属性用于存放方法，这些方法用于修改state的值  
>   >   ```
>   >   定义：
>   >   mutations = {
>   >       setA(state的属性a, payload){
>   >              // 参数payload是荷载，用于传参
>   >           state.a = payload.xx
>   >       }
>   >   }
>   >   使用：this.$store.commit('setA', { xx=xxx })  
>   >   // 通过commit方法调用mutations中的方法，第一个参数是mutations中的方法方法名，第二个参数是payload
>   >   ```
>   >* actions属性，类似于mutations，actions是异步的，mutations是同步的  

