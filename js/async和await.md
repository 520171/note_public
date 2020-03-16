# async和await
>* async和await是es7的语法
>
>
>* async：
>   * async是Promise的一种语法糖
>   * async用于修饰方法，方法运行后得到一个Promise对象，返回的Promise对象取决于方法本身的返回值
>       1. 当方法本来就返回一个Promise对象，则直接得到该Promise对象
>       2. 当方法没有返回值则返回一个```resolve(undefined)```的Promise对象
>       3. 当方法返回值为其他类型时则返回一个```resolve(返回值)```的Promise对象
>
>
>* await：
>   * await必须使用在async修饰的方法内部
>   * await一般用于修饰Promise，作用是等Promise异步执行完成再继续执行后面的语句，即将微任务加入到主任务中
>   * await修饰的语句会返回异步结果值，如果修饰的不是Promise对象则直接返回当前值
>
>
>* 
>
>
