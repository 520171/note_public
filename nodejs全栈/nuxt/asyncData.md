# asyncData  
>* asyncData是一个方法，用于页面渲染前获取数据，类似于vue实例的钩子函数  
>* 该方法返回的数据会合并到data中  
>* 系统调用该方法时会传入context实例作为参数  
>* 用法：在script节点的export default的对象中添加该方法
>   * 异步：
>       ```
>       asyncData ({app}) {
>           return app.$axios.get("/data.json") // 通过app属性访问axios
>               .then(res => {
>               return {title: res.data.title}
>               })
>       }
>       ```
>   * async/await：
>       ```
>       async asyncData ({app}) {
>       const { data } = await app.$axios.get("/data.json") // 通过app属性访问axios
>       return data
>       }
>       ```  
>* nuxt框架自带的axios不能通过this.$axios直接使用在asyncData中(asyncData方法在vue实例创建前执行)，必须通过context对象的app属性访问$axios
