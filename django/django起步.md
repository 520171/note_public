# django起步
>* 操作：
>   * pip安装django：```pip install django```djan
>   * 创建django项目：```django-admin startproject 项目名```
>   * 创建应用：```python manage.py startapp 应用名```或```django-admin startapp 应用名```
>   * 跑服务/启动项目：```python manage.py runserver ip:端口```，开发者服务器性能低
>
>
>* 注：
>   1. ```django-admin```基本等同于```python manage.py```
>   2. 
>
>
>* 项目目录结构：
>   1. 执行```django-admin startproject 项目名```后新增的目录结构：
>       * 项目同名包
>           * __init__.py：包的初始化文件
>           * settings.py：项目的全局设置文件
>           * urls：路由
>           * wsgi.py：web服务器网关接口，web服务器和web应用之间的标准接口
>           * asgi.py：是wsgi的扩展，异步的服务网关接口，wsgi是基于http模式的，asgi兼容并扩展其他协议模式，如websocket
>       * manage.py：django服务器操作的入口，用于管理工程```python manage.py ```
>
>   2. 执行```python manage.py startapp 应用名```后新增的目录结构
>       * 应用名同名包：
>           * migrations包，用于数据库迁移
>               * __init__.py：包初始化文件
>           * admin.py：用于django的后台管理
>           * __init__.py：包初始化文件
>           * apps.py：应用的配置文件
>           * models.py：mtv中的m，对数据的操作
>           * tests.py：测试
>           * views.py：视图函数，mtv中的
>
>
