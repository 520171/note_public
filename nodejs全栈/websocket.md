# websocket
> ### socket.io:
>* 服务端端： 
>   * npm安装socket.io模块：```npm i --save socket.io```
>   * express创建websocket服务：
>       * ws：先创建http服务，通过socket.io组件将http服务升级为websocket服务
>           ```
>           const http = require('http') // 引入http模块
>           const app = require('express')() // 引入express模块
>           const httpServer = http.createServer(app) // 创建http服务
>           const io = require('socket.io')(httpServer) // 升级http服务为websocket服务
>           httpServer.listen(port) // 设置http服务端口，必须通过http服务实例设置
>           io.on('connection', (socket) => {
>               // 每一个客户端进行ws连接时都会触发connection事件，每一个连接都对应一个socket对象
>               socket.on('disconnect', () => {}) // 客户端连接断开时触发disconnect事件
>               socket.on('message', (payload) => {}) // 客户端通过socket.send()发送消息时触发message事件
>               socket.on('xxx', (payload) => {}) // 客户端通过socket.emit('xxx', payload) 发送事件消息时触发
>               socket.send(payload) // 向客户端发送消息
>               socket.emit('xx', payload) // 向客户端发送事件消息
>           })
>           ```
>       * wss：流程和ws相似，只需将http服务更改为https服务即可
>* 前端：
>   * npm安装socket.io-client模块：```npm --save i socket.io-client```
>   * 引入socket.io-client模块：```import io from 'socket.io-client'```
>   * 创建socket.io-client实例：```const socket = io('ws://xxxx')```
>   * 根据业务设置socket连接的事件监听或发送消息
>       ```
>       socket.on('connect', () => {}) //ws连接成功触发的事件
>       socket.on('disconnect' () => {}) // 与服务器断开连接时触发
>       socket.on('reconnecting', () => {}) // 重连中。。。
>       socket.on('reconnect', () => {}) // 重连成功
>       socket.on('xxx', (payload) =>{}) // 服务器通过socket.emit('xxx', paylaod)发送事件消息时触发
>       socket.send(xxx) // 向服务器发送消息
>       socket.emit('xxx', payload) // 向服务端发送事件消息
>       ```
