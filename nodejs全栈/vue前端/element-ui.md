# element-ui.md
>* npm安装：```npm i -save element-ui```  
>* 导入element-ui：```import ElementUI from 'element-ui'```  
>* 向vue引入element-ui：```Vue.use('ElementUI')```  
>   ```
>   // main.js下
>   import ElementUI from 'element-ui'
>   Vue.use(ElementUI)
>   ```
>* 在main.js中引入elementui的样式：```import 'element-ui/lib/theme-chalk/index.css'```  
>* 按需引入elementui：
>   * npm安装：```npm install babel-plugin-component -D```  
>   * 根目录下>建.babelrc文件并添加以下内容：
>       ```
>       {
>           "presets": [["es2015", { "modules": false }]],
>           "plugins": [
>               [
>                   "component",
>                   {
>                       "libraryName": "element-ui",
>                       "styleLibraryName": "theme-chalk"
>                   }
>               ]
>           ]
>       }
>       ```
>   * 部分引入：(main.js下)
>       ```
>       import { Button, Select } from 'element-ui'
>       Vue.use(Button)
>       ```
