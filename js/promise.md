# promise
>* promise是es6新增的语法糖，解决回调地狱
>* promise异步操作有三种状态：pending，resolve，reject
>* Promise.resolve(val)：该方法的返回值也是一个Promise对象
>* promise.reject(val)：该方法的返回值也是一个Promise对象
>* Promise对象.then(func)：该方法的返回值也是一个Promise对象，该Promise对象的值取决于func的返回值，如果返回值是个Promise对象则then直接返回该对象，如果是普通值则返回Promise.resolve(普通值)，如果没有返回值则返回Promise(undefined)
>* 用法：
>   1. 通过new Promise(func)获取promise对象,参数为一个方法对象，方法调用时会传入两个方法对象，resolve和reject方法对象，resolve或reject的参数会传递给then参数的方法：```const p = new Promise((resolve, reject) => {})```
>   2. then(func)：捕获上一个执行resolve的Promise，并将resolve的参数传递给func，若then的参数不为func则继续往下传，直至遇到方法参数
>   3. catch(func)：捕获执行reject的Promise，并将reject的参数传递给func
>   ```
>   const p = new Promise((resolve, reject) => {
>       resolve()
>       reject()
>   })
>   ```
