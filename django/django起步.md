# django起步
>* 操作：
>   * pip安装django：```pip install django```djan
>   * 创建django项目：```django-admin startproject 项目名```
>   * 创建应用：```python manage.py startapp 应用名```或```django-admin startapp 应用名```
>       * 创建应用后必须在项目的settings文件的INSTALLED_APPS列表中注册该应用
>   * 跑服务/启动项目：```python manage.py runserver ip:端口```，开发者服务器性能低
>   * 将应用下的模型类迁移到应用下的migrations包下：```python manage.py makemigrations```
>   * 在数据库中创建映射表：```python manage.py migrate```
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
>   2. 执行```python manage.py startapp 应用名```后新增的目录结构：
>       * 应用名同名包：
>           * migrations包，用于数据库迁移
>               * __init__.py：包初始化文件
>           * admin.py：用于django的后台管理
>           * __init__.py：包初始化文件
>           * apps.py：应用的配置文件
>           * models.py：mtv中的m，对数据的操作，ORM
>           * tests.py：测试
>           * views.py：视图函数，mtv中的
>
>
>* <span id="temp">配置模板（Templates）：</span>
>   * 在应用中配置模板：
>       * 在应用根中创建模板目录并标记
>       * 必须在项目的settings文件中的INSTALLED_APPS列表中注册该应用
>   * 在项目根上添加模板：
>       * 在项目根上创建模板文件并标记
>       * 必须在项目的settings文件中的TEMPLATES列表的DIRS列表中注册该模板目录
>
>
>* 路由优化配置：
>   * 如果项目过于复杂可将路由进行拆分，将各个app设置成子路由
>   * 步骤：
>       * 给各个app添加一个urls.py文件，并创建一个urlpatterns列表，添加当前应用的路由
>           ```
>           from django.conf.urls import url
>           from App import views
>           urlpatterns = [
>               url(r'uri', views.func_name)
>           ]
>           ```
>       * 在项目的urls.py文件中，试用include()方法引入各个app的路由
>           ```
>           from django.contrib import admin
>           from django.urls import path, include
>           urlpatterns = [
>               path('uri', include('应用名.urls')),
>           ]
>           ```
>           
>       
>* 
>
>
