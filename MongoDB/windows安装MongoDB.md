# windows安装MongoDB，配置数据库
>* 下载：从MongoDB官网[下载](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.1-signed.msi/download)  
>* 将mongodb安装目录的bin目录添加至环境变量  
>* 启动数据库服务器（mongod指令）：```mongod --dbpath 数据库路径 --port 使用的端口号```  
>* 启动shell客户端（mongo指令）：```mongo```  
>* 将mongoed服务提升为系统服务：  
>   * 相应的位置创建mongodb.log文件和db目录  
>   * 以管理员权限启动cmd  
>   * 输入```mongod --dbpath "D:\mongodb\data\db" --logpath "D:\mongodb\log\mongodb.log" --install --serviceName "MongoDB" --logappend```  
>   
