# net模块实现tcp连接
***
>* 使用的模块：net  
>* 服务端：
>   * 引入模块：```const net = require('net')```  
>   * 创建Server实例：```const server = net.createServer()```  
>   * 设置服务监听的端口号：```server.listen(port, callback)```  
>   * 设置server的各个事件的回调函数
>       ```
>       server.on('connection', function (socket) {}) // 每个客户端连接时触发
>       server.on('close', callback) // 服务关闭时触发
>       server.on('listening', callback) // 开始监听时触发
>       server.on('error', function (err) {}) // 服务器出错时触发
>       ```
>   * 监听客户端发送的消息，检测客户端是否断开连接，是则服务端关闭该连接通道（采用tcp连接自带的方式-keepalive）
>       ```
>       server.on('connection', function (socket) {
>           socket.setKeepAlive(true, n*1000) // 将当前连接设置成长连接，并设置检测的延时时间
>           socket.on('data', function (buff[]) {}) // 客户端发送消息的回调  
>           socket.on('close', callback) // 断开连接时触发
>           socket.on('end', callback) // 服务端发出FIN报文时触发
>           socket.on('timeout', callback) // 连接超时触发
>           socket.on('error', function () {socket.destory()}) // 当连接出现异常时关闭该连接（用于检测客户端是否断开连接）
>       })
>       ```
>   * 创建一个数组常量clients用于存放
>   * 代码：
>       ```
>       const net = require('net')
>       const server = net.createServer()
>       server.on('connection', function (socket) {
>           if (-1 == socket.remoteAddress.indexOf(config.webServerIp)) {
>               socket.addr = socket.remoteAddress + ':' + socket.remotePort
>               socket.name = 'unknown'
>               clients.push(socket)
>               console.log('客户端【' + socket.addr + '】已连接')
>               socket.setKeepAlive(true, 10*1000)
>               socket.on('data', function (data) {
>                   const msg = data.toString()
>                   if ('unknown' == socket.name && msg.startsWith('ETUNG:')) {
>                       const name = msg.substring(6, msg.length - 1)
>                       socket.name = name
>                       console.log(socket.name+'已连接，当前在线人数：' + clients.length + ' ' + new Date().Format("yyyy/MM/dd hh:mm:ss"))
>                   }
>                   console.log("//////////////////////////////////////data////////////////////////////////////////////")
>                   console.log(socket.name + "：" + data.toString() + ' ' + new Date().Format("yyyy/MM/dd hh:mm:ss"))
>                   console.log(data)
>                   server.getConnections(function (err, count) {
>                       console.log(count)
>                   })
>                   console.log("//////////////////////////////////////////////////////////////////////////////////////")
>                   if (client) {
>                       client.write(JSON.stringify({
>                           data,
>                           connections: clients.length,
>                           imei: socket.name
>                       }))
>                   }
>               })
>               socket.on('end', function () {
>                   clients.splice(clients.indexOf(socket), 1)
>                   console.log('客户端【' + socket.name + '】已断开连接，当前在线人数：' + clients.length + ' ' + new Date().Format("yyyy/MM/dd hh:mm:ss"))
>               });
>       
>               socket.on('timeout', function () {
>                   console.log('客户端【' + socket.name + '】已超时' + ' ' + new Date().Format("yyyy/MM/dd hh:mm:ss"));
>                   socket.end();
>               });
>       
>               socket.on("error", function (err) {
>                   socket.destroy()
>                   clients.splice(clients.indexOf(socket), 1)
>                   console.log('客户端【' + socket.name + '】发生错误，' + err + '，当前在线人数：' + clients.length) + ' ' + new Date().Format("yyyy/MM/dd hh:mm:ss");
>               });
>               socket.on("close", function () {
>                   clients.splice(clients.indexOf(socket), 1)
>                   console.log('客户端2【' + socket.name + '】已断开连接，当前在线人数：' + clients.length + ' ' + new Date().Format("yyyy/MM/dd hh:mm:ss"))
>               });
>           } else {
>               socket.name='WebServer'
>               client = socket
>               console.log('WebServer【' + socket.name + '】已连接 ' + new Date().Format("yyyy/MM/dd hh:mm:ss"))
>           }
>       });
>       server.on('close', function () {
>           console.log('服务器关闭');
>       });
>       
>       server.on('error', function (error) {
>           console.log('error事件：服务器异常：' + error.message);
>       });
>       server.on('listening', () => {
>           console.log('开始监听')
>       })
>       ```
>* 客户端
>   * 引入net模块：```const net = require('net')```  
>   * 创建socket实例：```const socket =new  net.Socket()```  
>   * 将socket设置成长连接：```socket.setKeepAlive(true, 10*1000)``` // 将当前连接设置成长连接，并设置检测的延时时间
>   * 客户点连接服务端并设置时间监听：
>       ```socket.connect(port, () => {
>           socket.on('data' function (buff[]) {}) // 客户端发送消息的回调  
>           socket.on('close', callback) // 断开连接时触发
>           socket.on('end', callback) // 服务端发出FIN报文时触发
>           socket.on('timeout', callback) // 连接超时触发
>           socket.on('error', function () {socket.destory()}) // 当连接出现异常时关闭该连接（用于检测客户端是否断开连接）
>           })
>       ```

