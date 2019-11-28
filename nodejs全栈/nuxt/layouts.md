# layouts
>* layouts用于设置pages的布局
>* 默认情况下，所有的pages使用layouts下的default.vue
>* 设置页面使用的布局：在script节点中的export default对象中添加layout属性，layout属性传入layouts目录下的.vue文件名  
>   ```
>   export default {
>     props: ['error'],
>     layout: 'blog' // 当前使用的布局为layouts目录下的blog.vue布局
>   }
>   ```
