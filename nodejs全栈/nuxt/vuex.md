# vuex
>* nuxt的状态树分两种：普通状态树和模块状态树  
>* 普通状态树和模块状态树的state属性都必须是一个方法：state: () => ({属性: 值})
>* nuxt的普通状态树  
>   * 普通状态树和vue脚手架的vuex使用基本相同  
>   * 在./store目录下创建一个index.js文件，该文件必须以方法的形式返回一个vuex实例  
>   * 分模块时只需要在./store目录下创建相应的js文件，并在该js文件导出模块，在./store/index.js文件中引入该模块即可  
>   ```
>   // ./store/counter.js
>   export default {
>     namespaced: true, // 必须添加，用于隔离不同模块的数据
>     state: () => ({
>       count: 3
>     }),
>     mutations: {
>       incCount (state) {
>         state.count += 2
>       }
>     }
>   }
>   ```
>   ```
>   // ./store/index.js
>   import vuex from 'vuex'
>   import count2 from "./counter" // 导入自定义的状态树模块
>   const state = () => ({
>       counter: 0
>   })
>   const mutations = {
>     increment (state) {
>       state.counter ++
>     }
>   }
>   const modules = {
>     count2
>   }
>   export default () => new vuex.Store({
>     state,
>     mutations,
>     modules
>   })
>   ```
>* nuxt的模块状态树  
>   * 官方推荐使用模块状态树
>   * 模块状态树的结构：vuex所有的.js文件的结构保持一致，包括./store/index.js文件  
>   * ./store/index.js文件不需要引入vue,vuex模块或者vue.use(vuex),这些都是自动完成的  
>   * 系统会根据./store目录自动构建vuex树  
>   * .js文件结构：
>       ```
>       // 导出state属性（方法）：
>       export const state = () => ({属性:值})  
>       // 导出mutations属性：
>       export const mutations = {funName(state, payload){},}  
>       // 导出getters属性
>       export const getters = { funName(){} }  
>       // 导出actions属性
>       export const actions = {
>           funName({commit, state}, payload){
>               return new Promise((resolve,reject) => {
>                   commit("mutationsFunName", payload)
>                   resolve(state.属性)
>               })
>           }
>       }
>       ```
>* fetch方法：
>   * 该方法类似于asyncData但fetch用于更新vuex状态树
>   * 该方法由系统调用，在组件加载前调用，第一个参数为context
>   * 用法：
>       ```
>       async fetch ({app, store}) {
>           const {data} = await app.$axios.get(url) // 异步拉取数据
>           store.commit("mutationsFunName", data) // 将数据同步到vuex状态树
>       } 
>       ```
