# nodejs入门
>* 安装项目依赖的模块：
>   * 生产环境：```npm install --save/-S```
>   * 开发环境：```npm install -D/--save-dev```
>
>
>* 安装cnpm：```npm install -g cnpm --registry=https://registry.npm.taobao.org```
>
>
>* 安装nodemon：```cnpm install nodemon -g```，使用nodemon指令代替node指令，实现保存自动编译
>
>
>* 使用npm初始化nodejs项目：```npm init```
>
>
>* node项目目录：
>   * package.json（项目的配置文件）：
>       ```
>       {
>           "name": "项目名",
>           "version": "项目版本号",
>           "description": "项目介绍",
>           "main": 默认值为"index.js"，当你require("项目名")时会自动加载该属性指定的文件,
>           "author": 作者名,
>           "keywords": 关键字,
>           "scripts": {
>               "指令1": "内容",
>               "指令2": "内容",
>               "指令3": "内容"
>           },
>           "dependencies": {"模块名": "版本号"},
>           "devDependencies": {"模块名": "版本号"},
>           "comment_scripts": "scripts是一些自定义的指令，在控制台中通过npm run 执行",
>           "comment_dependencies": "dependencies是项目生产环境模块依赖，当通过npm i -S安装模块时会添加"
>           "comment_devDependencies": "devDependencies是项目开发环境模块依赖，当通过npm i -D安装模块时会添加"
>       }
>       ```
>   * package-lock.json：记录项目所依赖的模块和模块所依赖的模块
>   * node_modules目录：项目所有安装的模块都下载在该目录下
>
>
