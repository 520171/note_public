# windows安装MongoDB
>* 下载：从MongoDB官网[下载](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.1-signed.msi/download)  
>* 解决net start MongoDB报错：服务名无效：
>   * 相应的位置创建mongodb.log文件和db目录
>   * 以管理员权限启动cmd
>   * 输入```mongod --dbpath "D:\mongodb\data\db" --logpath "D:\mongodb\log\mongodb.log" --install --serviceName "mongo" --logappend```  
>
