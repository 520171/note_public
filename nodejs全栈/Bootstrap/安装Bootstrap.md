# 安装Bootstrap  
>* 通过cdn引入Bootstrap
>   * head节点：
>       ```
>       <head>
>           <!-- 该节点保证了移动端字体大小的适配 -->
>           <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
>           <!-- 引入Bootstrap样式 -->
>           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">  
>       </head>
>       ```  
>   * body节点：
>       ```
>       <body>
>           <!-- 添加Bootstrap依赖 -->
>           <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
>           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js" integrity="sha384-L2pyEeut/H3mtgCBaUNw7KWzp5n9+4pDQiExs933/5QfaTh8YStYFFkOzSoXjlTb" crossorigin="anonymous"></script>
>           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
>       </body>
>       ```
>* nuxt脚手架使用Bootstrap的步骤：
>   * 安装bootstrap-vue：```npm i --save bootstrap-vue```
>   * 在nuxt.config.js的modules属性中引入bootstrap-vue：```modules: ['@nuxtjs/axios', 'bootstrap-vue/nuxt']```  
>* vue脚手架使用Bootstrap的步骤：
