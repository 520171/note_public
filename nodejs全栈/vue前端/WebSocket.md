# WebSocket
>* 判断浏览器是否支持websocket：```'WebSocket' in window```  
>* 创建WebSocket实例：```let ws = new WebSocket(url)```  
>* 给WebSocket实例绑定事件(onerror, onopen, onclose, onmessage)：
>   ```
>   ws.onerror = function (e) {}
>   ws.onopen = function (e) {}
>   ws.onclose = function (e) {}
>   ws.onmessage = function (e) {}
>   ```
>
