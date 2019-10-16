# vue路由  
>* 安装导入vue-router  
>   >* 安装：```npm i --save vue-router```  
>   >* 导入：```import Router from 'vue-router'```  
>* 使用vue-router  
>   >* 创建routes.js文件  
>   >* 导入：```import Router from 'vue-router'```  
>   >* Vue.use(Router)
>   >* 创建vue-router实例
>   >   ```
>   >   const router = new Router({
>   >       mode: 'hash'|'history'|'abstract', // 默认为hash
>   >       base: 应用的基路径,所有的路由path前面url会添加一个基路径,
>   >       routes: [] // 配置路由页面对象数组
>   >   })
>   >   注：
>   >   routes: []数组中的对象的属性：  
>   >       path: 路由映射的uri,用在router-link,  
>   >       component: vue组件,  
>   >       redirect: 传入子路由的path,用于设置默认子路由  
>   >       children: [], // 子路由对象数组  
>   >   ```
>   >* 导出vue-router实例：```export default router```  
>* 前置路由守卫(用于路由跳转时检查token是否存在，存在则继续跳转，否则返回login)：
>   >```
>   >router.beforeEach((to, from, next) => {
>   >  if ('/login' === to.path) {
>   >    next()
>   >  } else {
>   >    if (localStorage.getItem('Authorization')) {
>   >      next()
>   >    } else {
>   >      next('/login')
>   >    }
>   >  }
>   >})
>   >```
