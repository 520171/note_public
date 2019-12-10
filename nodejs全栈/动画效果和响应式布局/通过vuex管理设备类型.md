# 通过vuex管理设备类型  
***  
### vuex储存设备类型
>1. 创建./store/modules/device.js文件用于储存和保存设备类型数据并导出类似vuex结构的对象  
>   ```
>   // ./store/modules/device.js
>   const state = () => ({
>       // 创建device属性，用于储存设备类型
>     device: 'desktop'
>   })
>   const mutations = {
>       // 在mutations创建TOGGLE_DEVICE方法用于修改device属性
>     TOGGLE_DEVICE (state, device) {
>       state.device = device
>     }
>   }
>   const actions = {
>       // 在actions创建toggleDevice方法通过调用mutations的TOGGLE_DEVICE的形式异步修改device属性
>     toggleDevice ({ commit }, device) {
>       commit('TOGGLE_DEVICE', device)
>     }
>   }
>   export default {
>       state,
>       mutations,
>       actions
>   }
>   ```
>2. 创建./store/getters.js文件，用于将隔离的模块数据映射到getters对象中并导出getters对象  
>   ```
>   export default {
>       device: state => state.device.device // 将device模块的device属性映射到getters计算属性中
>   }
>   ```
>3. 将./store/getters.js文件和./store/modules/device.js导出的对象引入到./store/index.js的vuex实例中
>   ```
>   import devcie from './modules/device'
>   import getters from './getters'
>   import Vue from 'vue'
>   import Vuex from 'vuex'
>   Vue.use(Vuex)
>   export default new Vuex.store({
>       modules: {
>           device
>       },
>       getters
>   })
>   ```
### 根据窗口大小的改变响应式修改设备类型  
>1. 创建./layout/mixin/ResizeHandler.js // 导出类似vue实例结构的对象用于向布局vue实例混入对象,该混入对象主要为了实现响应式修改vuex的设备类型  
>   ```
>   const WIDTH = 992 // 设置mobile/desktop两种类型的边界值，宽度大于等于992为'desktop',小于992为'mobile'  
>   const { body } = document // 解构赋值从document对象获取body对象  
>   export default {
>       methods: {
>           isMobile () {
>               // 判断当前设备类型是否为移动端
>               const rect = body.getBoundingClientRect()
>               return react.width-1 < WIDTH
>           },
>           resizeHandler () {
>               // 自定义重置窗口大小时的回调函数
>               if (!document.hidden) {
>                   const isMobile = this.isMobile()
>                   this.$store.dispatch('toggleDevice', isMobile? 'mobile' : 'desktop')
>               }
>           }
>       },
>       beforeMount () {
>           // VUE实例挂载前设置窗口大小改变的监听，当窗口大小改变时就会触发resizeHandler回调方法
>           window.addEventListener('resize', this.resizeHandler)
>       },
>       beforeDestory () {
>           // VUE实例销毁前移除窗口大小改变的事件监听
>           window.removeEventLinstener ('resize', this.resizeHandler)
>       },
>       mounted () {
>           // VUE挂载时确认设备类型
>           resizeHandler()
>       }
>   }
>   ```
>2. 在./layout/index.js混入./layout/mixin/ResizeHandler.js的实例:
>   ```
>   import ResizeHandler from './layout/mixin/ResizeHandler'
>   mixins: [ResizeHandler]
>   ```  
