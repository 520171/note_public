# vue补充
>* ***对象克隆(复制对象的数据到新的对象中)：*** const newObj = Object.assign({}, oldObj1, oldObj2...) // 老对象key相同的属性会被覆盖  
>* ***数组的双向绑定刷新的方式：***
>   * array.splice(index, num, insert1, insert2...) // 从index下标开始，删除num个元素， 并插入insert1..元素
>   * Vue.$set(this.obj, key, value) // 将this.obj的key的值使用value替换  
>* ***防抖和限制刷新频率：***
>   * 使用开源库
>       * npm安装：```npm i --save lodash```
>       * cdn引入：```<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>```  
>   * 设置某个方法只能间隔500ms执行/搜索防抖
>       * // vue实例中添加created钩子将某个方法设置成防抖
>           ```
>           created() {
>               // this.debounced()为函数设为防抖之后的执行函数，即this.debounced()代替this.method()调用
>               // this.method为需要被设置防抖的方法， 500为间隔时间
>               this.debounced = _.debounce(this.method, 500)
>           }
>           ```
>   * 使用：```this.debounced() // 相当于执行this.method方法，当触发间隔大于500ms就会再次执行```  
>* ***关于数组的响应式***：
>   * vue将部分数组相关的方法进行变异，当调用这些方法时，数组的改变会响应到界面
>       * push()
>       * pop()
>       * shift()
>       * unshift()
>       * splice()
>       * sort()
>       * reverse()
>   * 对于filter，concat,slice等方法，由于不改变源数组而返回一个新数组，所以可通过将返回的数组直接赋值给vue的响应数据实现响应式的修改
>   * 通过数组对象.length设置数组长度的方式或直接通过下标修改数组中的某个元素是无法实现响应式的修改  
>* ***@click、@mouseover等vue的事件触发的函数可通过传递$event的方式传递原生DOM事件，如```@click = 'func($event)'```***  
>* ***对于组件的props类型检查：*** null和undefined能通过所有的类型检查  
>* ***inheritAttrs属性：*** 默认为true，用于继承父组件的属性，当为false时不继承父组件中自定义的属性,即子组件中prop以外的属性不继承（除了style和class）(即不在子组件中显示父组件在子组件中自定义的属性)  
>* ***$attr属性***：用于访问父组件中自定义的属性（$attr.自定义属性），当需要把父组件传递的自定义属性传递给孙组件时，需要在子组件使用孙组件时添加```v-bind="$attrs"```  
>   ```
>   <!DOCTYPE html>
>   <html>
>   <head>
>   <meta charset="utf-8">
>   <title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
>   <script src="https://cdn.staticfile.org/vue/2.6.0/vue.min.js"></script>
>   </head>
>   <body>
>       <div style="padding:50px;" id="app">
>           /*age, sex是父组件使用子组件时自定义的属性*/
>           /*父组件使用子组件时设置的自定义属性，当子组件设置了inheritAttrs:false时，这些自定义属性不会再h5源码中显示*/
>           <childcom :name="name" :age="age" :sex="sex"></childcom>
>       </div>
>       <script>
>           new Vue( {
>               'el': '#app',
>           'name':'test',
>           data(){
>               return {
>                   'name':'张三',
>                   'age':'30',
>                   'sex':'男'
>               }
>           },
>           components:{
>               'childcom':{
>                   template:`<div>
>                       <div >{{name}}, {{$attrs}}</div>
>                       /*子组件在使用grandcom组件时添加了v-bind="$attrs"，即把父组件在子组件中自定义的属性传递给孙组件*/
>                       /*vver="6666"是子组件在使用孙组件时自定义的属性*/
>                       <grandcom v-bind="$attrs" vver="6666"></grandcom> 
>                   </div>`,
>                   props:['name'],
>                   /*inheritAttrs为false会不继承父组件使用子组件时自定义的属性，即子属性中非prop的不会覆盖*/
>                   inheritAttrs: false,  
>                   components: {
>                       'grandcom':{
>                           inheritAttrs: false,
>                           template:`<div>{{$attrs}}</div>`
>                       }
>                   }
>               }
>           }
>       })
>       </script>
>   </body>
>   </html>
>   ```
>* ***自定义组件的事件***：
>   * 自定义组件的事件需要在自定义的组件中通过$emit('事件名', data)的方式发送，在使用该组件时可通过@事件名='func(data)'的方式接收  
>   * 在使用自定义组件时，通过添加native修饰符如```@click.native="function()"```的方式实现对子组件的根节点的原生事件进行的监听
>   * 通过.native修饰符监听组件根节点的原生事件时，当根节点不支持该事件时则该事件无效
>   * 可通过$listeners将组件的事件分发到组件中的子节点中
>       * 使用子组件添加事件监听时不用添加.native修饰符
>       * 在子组件中需要分发事件的节点添加v-on='计算属性'，v-on=''用于多个事件监听的合并
>       * 计算属性：```computed: { 计算属性() { return Object.assign({}, this.$listeners, {input: function (event) {this.emit('自定义事件', event.target.value)} } ) } }```  
>           * Object.assign()：用于将多个事件合并，并返回一个新的对象，上方是将子组件上所有的事件和一个自定义事件合并监听
>   * 代码：
>   ```
>       <!DOCTYPE html>
>       <html>
>       <head>
>         <meta charset="utf-8">
>         <title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
>         <script src="https://cdn.staticfile.org/vue/2.6.6/vue.min.js"></script>
>       </head>
>       <body>
>       <div id="app">
>         <test @focus='console.log(666)' @abc='function(msg){console.log(msg)}'></test>
>       </div>
>       <script>
>         new Vue({
>           el: '#app',
>           data: {
>             message: 'Hello Vue.js!'
>           },
>           components: {
>             'test': {
>               template: `
>       			<label>
>       				<input type='test' v-on="allListeners"/>
>       			</label>
>       		`,
>               computed: {
>                 allListeners: function() {
>                   const _this = this
>                   const obj = Object.assign({},  _this.$listeners, {input: function(event) {_this.$emit('abc', event.target.value)} })
>                   return obj
>                 }
>               }
>             }
>           }
>         })
>       </script>
>       </body>
>       </html>
>   ```  
