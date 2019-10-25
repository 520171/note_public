# 压缩dist
>* 不打包source map：
>   * 在vue.config.js中添加：```module.exports = { productionSourceMap:false }```属性  
>* 分离css
>   * 在vue.config.js中添加以下代码
>   ```
>   module.exports = {
>       css: {
>           // 是否使用css分离插件 ExtractTextPlugin
>           extract: true,
>           // 开启 CSS source maps?
>           sourceMap: false,
>           // css预设器配置项
>           loaderOptions: {},
>           // 启用 CSS modules for all css / pre-processor files.
>           modules: false
>       }
>   }
>   ```
>* 压缩图片：
>   * npm安装```image-webpack-loader```模块 ```npm install image-webpack-loader --save-dev```  
>   * vue.config.js下添加代码  
>   ```
>    // 压缩图片
>     chainWebpack: config => {
>       config.module
>           .rule('images')
>           .use('image-webpack-loader')
>           .loader('image-webpack-loader')
>           .options({
>             bypassOnDebug: true
>           })
>           .end()
>     },
>   ```  
>* 公共代码抽离：// 不要用
>   * vue.config.js下添加以下代码
>   ```
>   configureWebpack: {
>       optimization: {
>         splitChunks: {
>           cacheGroups: {
>             vendor:{
>               chunks:"all",
>                   test: /node_modules/,
>                   name:"vendor",
>                   minChunks: 1,
>                   maxInitialRequests: 5,
>                   minSize: 0,
>                   priority:100,
>             },
>             common: {
>               chunks:"all",
>               test:/[\\/]src[\\/]js[\\/]/,
>               name: "common",
>               minChunks: 2,
>               maxInitialRequests: 5,
>               minSize: 0,
>               priority:60
>             },
>             styles: {
>               name: 'styles',
>               test: /\.(sa|sc|c)ss$/,
>               chunks: 'all',
>               enforce: true,
>             },
>             runtimeChunk: {
>               name: 'manifest'
>             }
>           }
>         }
>       }
>     }
>   ```
>* cdn
>   * 在index.html中添加cdn脚本
>   ```
>   <script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
>   <script src="https://cdn.bootcss.com/vuex/3.1.0/vuex.min.js"></script>
>   <script src="https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js"></script>
>   <script src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
>   <script src="https://cdn.bootcss.com/echarts/3.7.1/echarts.min.js"></script>
>   <script src="https://cdn.bootcss.com/element-ui/2.12.0/index.js"></script>
>   ```
>   * 在vue.config.js中添加以下代码  
>   ```
>   configureWebpack: {
>       externals: {
>         'vue': 'Vue',
>         'vuex': 'Vuex',
>         'vue-router': 'VueRouter',
>         'element-ui': 'ELEMENT', // 通过cdn引入elementui则vue也必须通过cdn引入
>         'echarts': 'echarts', // 配置使用CDN
>         'Axios': 'axios'
>       }
>   }
>   ```
>* gzip压缩：
>   * 对于nodejs服务器直接在服务器中处理  
>       * 在express服务端安装compression模块：```npm i --save compression```  
>       * 在app.js的其他中间件前先使用compression：```app.use(compression())```  
>   * 对于其他服务器  
>       * npm安装compression-webpack-plugin模块：npm i --save compression-webpack-plugin  
>       ```
>       const CompressionWebpackPlugin = require('compression-webpack-plugin')  //获取compression-webpack-plugin实例  
>       // 在vue.config.js中添加以下代码
>       configureWebpack: {
>           plugins:[
>                 new CompressionWebpackPlugin({
>                   filename: '[path].gz[query]',
>                   algorithm: 'gzip',
>                   test: /\.js$|\.json$|\.html$|\.css/,
>                   threshold: 10, // 只有大小大于该值的资源会被处理
>                   minRatio:0.8, // 只有压缩率小于这个值的资源才会被处理
>                   deleteOriginalAssets: true // 删除原文件
>                 })
>               ]
>       }
>       ```
>* 懒加载：
>   * 方式1：```const home = () => import('path')```  
>   * 方式2：```const home = resolve => require(['path'..], resolve)```  
>* js体积分析插件(webpack-bundle-analyzer)：
>   * npm安装：```npm i --save-dev webpack-bundle-analyzer```
>   * 使用：在vue.config.js中添加以下代码
>   ```
>   configureWebpack: {
>       plugins: [
>           new BundleAnalyzer.BundleAnalyzerPlugin()
>       ]
>   }
>   ```
>   * 当执行npm run build 会自动进行分析
