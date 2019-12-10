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
>   >* getters属性：该属性类似vue的计算属性，getters中的方法传递的参数(state, getters)  
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
>   >* actions属性，类似于mutations，actions是异步的，mutations是同步的,一般用于提交mutations的方法  
>   >   ```
>   >   // 定义,异步使用
>   >   actions = {
>   >       // 第一个参数
>   >       funName ({commit, state}, payload) {
>   >           return new Promise((resolve, reject) => {
>   >               commit("mutationsFunName", payload)
>   >               resolve(state.属性)
>   >           })
>   >       }
>   >   }
>   >   // 使用， 通过dispatch()方法使用
>   >   this.$store.dispatch("funName", payload).then(res => {})
>   >   ```
>   >* module属性：modules属性用于隔离数据，将vuex中的数据进行分模块（分区）：
>   >   * 数据分模块后的访问方式：
>   >       * 访问state/getters：this.$store.state/getters.模块对象名.属性名  
>   >       * 访问actions/mutations：this.$store.dispatch('模块名/actions属性名', payload)/this.$store.commit('模块名/mutations属性名', payload)  
>   >   * vuex数据分模块的标准步骤：
>   >       * 创建一个store/index.js文件，该文件用于导出vuex实例  
>   >       * 创建一个store/modules目录，该目录用于存放.js文件，这些用于导出分区的数据对象(一般包括state, mutations, actions属性)，该对象必须包含属性（namespaced: true）  
>   >       * 创建一个store/getters.js文件，该文件导出一个对象，该对象是一些方法，通过state参数获取各模块的state属性  
>   >       * 将store/modules/.js对象导入到store/index.js中，并将这些对象导入到vuex实例的modules属性中  
>   >       * 将store/getters.js文对象件导入到store/index.js中,并将该对象导入到vuex实例的getters属性中  
>   >   * 代码：
>   >       ```
>   >       // ./store/modules/xx.js
>   >       const state = {}
>   >       const mutations = {}
>   >       const actions = {}
>   >       export default {
>   >         namespaced: true,
>   >         state,
>   >         mutations,
>   >         actions
>   >       }
>   >       ```
>   >       ```
>   >       // ./store/getters.js
>   >       const getters = {
>   >         sidebar: state => state.app.sidebar,
>   >         language: state => state.app.language,
>   >         size: state => state.app.size,
>   >         device: state => state.app.device,
>   >         visitedViews: state => state.tagsView.visitedViews,
>   >         cachedViews: state => state.tagsView.cachedViews,
>   >         token: state => state.user.token,
>   >         avatar: state => state.user.avatar,
>   >         name: state => state.user.name,
>   >         introduction: state => state.user.introduction,
>   >         roles: state => state.user.roles,
>   >         permission_routes: state => state.permission.routes,
>   >         addRoutes: state => state.permission.addRoutes,
>   >         errorLogs: state => state.errorLog.logs
>   >       }
>   >       export default getters
>   >       ```
>   >       ```
>   >       // ./store/index.js
>   >       import Vue from 'vue'
>   >       import Vuex from 'vuex'
>   >       import app from './modules/app'
>   >       import errorLog from './modules/errorLog'
>   >       import permission from './modules/permission'
>   >       import tagsView from './modules/tagsView'
>   >       import settings from './modules/settings'
>   >       import user from './modules/user'
>   >       import getters from './getters'
>   >       Vue.use(Vuex)
>   >       const store = new Vuex.Store({
>   >         modules: {
>   >           app,
>   >           errorLog,
>   >           permission,
>   >           tagsView,
>   >           settings,
>   >           user
>   >         },
>   >         getters
>   >       })
>   >       export default store
>   >       ```
>* vuex的解构（将vuex中的state,getters解构到computed中）：
>   >*  mapState方法的使用
>   >   * 从vuex中引入mapState方法：```import {mapState} from 'vuex'```
>   >   * computed: {...mapSate(['vuex的state的key',...])} // 将vuex的state属性解构到computed属性中  
>   >   * computed: {...mapstate({key: state => state.模块名.state属性名})} // 对于模块中的属性的解构必须通过这种方式                                     
>   >*  mapGetters方法的使用
>   >   * 从vuex中引入mapGetters方法：```import {mapGetters} from 'vuex'```  
>   >   * computed: {...mapGetters(['vuex的getters的key',...])} // 将vuex的getters属性解构到computed属性中  

