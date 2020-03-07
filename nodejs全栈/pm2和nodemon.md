# pm2和nodemon
***
>* pm2进程管理
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
>   * 将node更换成pm2 start即可
>       ```
>       "start": "cross-env NODE_ENV=production node server/index.js"
>       "pm2": "cross-env NODE_ENV=production pm2 start server/index.js --name nuxt-test"
>       ```
>   * 使用pm2配置文件启动项目
>       * pm2的配置文件是一个.json文件 
>       * 将创建的配置文件添加到package.json的scripts启动项中：```"scripts":{ "pm2": "pm2 start pm2配置文件（包括路径，后缀名）" }```  
>       * 需要启动多个项目则将apps配置成一个数组：```"apps": [{}, {}]```
>           ```
>           {
>               "apps": [{
>                   "name": "test",                             // 项目名          
>                   "script": "./bin/www",                      // 执行文件
>                   "cwd": "./",                                // 根目录
>                   "args": "",                                 // 传递给脚本的参数
>                   "interpreter": "",                          // 指定的脚本解释器
>                   "interpreter_args": "",                     // 传递给解释器的参数
>                   "watch": false,                             // 是否监听文件变动然后重启
>                   "ignore_watch": [                           // 不用监听的文件
>                       "node_modules",
>                       "logs"
>                   ],
>                   "exec_mode": "cluster_mode",                // 应用启动模式，支持fork和cluster模式
>                   "instances": 1,                             // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
>                   "max_memory_restart": 8,                    // 最大内存限制数，超出自动重启
>                   "error_file": "./logs/app-err.log",         // 错误日志文件
>                   "out_file": "./logs/app-out.log",           // 正常日志文件
>                   "merge_logs": true,                         // 设置追加日志而不是新建日志
>                   "log_date_format": "YYYY-MM-DD HH:mm:ss",   // 指定日志文件的时间格式
>                   "min_uptime": "60s",                        // 应用运行少于时间被认为是异常启动
>                   "max_restarts": 30,                         // 最大异常重启次数，即小于min_uptime运行时间重启次数；
>                   "autorestart": false,                       // 默认为true, 发生异常的情况下自动重启
>                   "cron_restart": "",                         // crontab时间格式重启应用，目前只支持cluster模式;
>                   "restart_delay": "60s",                     // 异常重启情况下，延时重启时间
>                   "env": {
>                      "NODE_ENV": "production",                // 环境参数，当前指定为生产环境 process.env.NODE_ENV
>                      "REMOTE_ADDR": "爱上大声地"               // process.env.REMOTE_ADDR
>                   },
>                   "env_dev": {
>                       "NODE_ENV": "development",              // 环境参数，当前指定为开发环境 pm2 start app.js --env_dev
>                       "REMOTE_ADDR": ""
>                   },
>                   "env_test": {                               // 环境参数，当前指定为测试环境 pm2 start app.js --env_test
>                       "NODE_ENV": "test",
>                       "REMOTE_ADDR": ""
>                   }
>               }]
>           }
>           ```
>* 设置windows pm2项目开机自启：
>   1. 安装windows自启包：```npm install -g pm2-windows-startup```
>   2. 启动项目
>   3. 将保存项目信息：```pm2 save```
>   4. 将save的项目设置开机自启：```pm2-startup install```
>
>
