# pm2和nodemon
>* pm2
>   * 安装：npm i pm2 -g
>   * 常用操作：
>       * 启动(express项目进程)：```pm2 start ./bin/www --name rename``` // 启动express项目并重命名为rename  
>       * 启动已停止的项目进程：```pm2 start name```  
>       * 停止指定项目进程：```pm2 stop name```  
>       * 停止所有项目进程：```pm2 stop all```  
>       * 删除已存在的项目进程：```pm2 delete name```
>       * 删除所有已存在的项目进程：```pm2 delete all```
>       * 重启指定项目：```pm2 restart name```
>       * 重启所有项目：```pm2 restart all```
>* 将node更换成pm2 start即可
>   ```
>   "start": "cross-env NODE_ENV=production node server/index.js"
>   "pm2": "cross-env NODE_ENV=production pm2 start server/index.js --name nuxt-test"
>   ```
