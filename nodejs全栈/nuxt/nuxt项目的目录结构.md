# 目录结构
>* /assets：资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。
>* /components：组件目录 components 用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性。
>* /layouts：布局目录 layouts 用于组织应用的布局组件。若无额外配置，该目录不能被重命名。
>* /middleware：用于存放中间件  
>* /pages：页面目录 pages 用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置。若无额外配置，该目录不能被重命名。
>* /plugins：插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
>* /static：静态文件目录 static 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。 服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。举个例子: /static/robots.txt 映射至 /robots.txt若无额外配置，该目录不能被重命名。
>* /store：store 目录用于组织应用的 Vuex 状态树 文件。 Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。若无额外配置，该目录不能被重命名。
>* nuxt.config.js 文件：nuxt.config.js 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。若无额外配置，该文件不能被重命名。  
