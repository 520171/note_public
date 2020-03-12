# [网络api](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)
>* [网络请求](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)
>   * [wx.request({object}):](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)
>       ```
>       const requestTask = wx.request({
>           url: string, // 请求地址，服务器域名请在 「小程序后台-开发-开发设置-服务器域名」 中进行配置
>           data: string/object/ArrayBuffer, // 最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String，get方法提交或POST 方法且 header['content-type'] 为 application/x-www-form-urlencoded 的数据会自动转换成k,v拼接在url上
>           header: {
>               "content-type": "application/json", // default
>               "authorization": "Bearer token" // 使用jwt验证时，常将token存在header中随请求一并送到后端
>           },
>           timeout: number, // 超时时间，毫秒
>           method: string, // 提交方式，GET,POST等
>           dataType: string, // 默认是json，将返回的数据进行JSON.parse处理， 将json数据转换成对象，其他则不做JSON.parse处理
>           responseType: string, // 响应的数据类型，默认是text,为文本，或arraybuffer，为响应的数据为 ArrayBuffer
>           success(res) {
>               data: string/Object/Arraybuffer, // 
>               status: number, // 状态码
>               header: object, // 响应头
>               cookies: Array<string> // 返回的cookies
>           },
>           fail: callback,
>           complete: callback
>       })
>       ```
>   * [RequestTask：](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.html)
>       * wx.request(object)方法的返回值为RequestTask类型
>       * 中断请求任务：requestTask.abort()
>       * 监听响应头时间，执行比请求完成事件早：requestTask.onHeaderReceived(callback)
>       * 取消监听响应头事件：requestTask.offHeaderReceived(callback)
>
>
