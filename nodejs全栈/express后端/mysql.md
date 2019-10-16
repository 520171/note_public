# mysql数据库
>* npm安装mysql模块：```npm i --save mysql```  
>* 创建db目录用于添加数据库操作相关的js文件  
>* 导入mysql模块：```const mysql = require('mysql')```  
>* 创建数据库连接池(user, password, host, database)
>   ```
>   const pool = mysql.createPool({
>       user: '',
>       password： '',
>       database: '',
>       host: ''
>   })
>   ```
>* 创建基本查询函数：
>   ```
>   function base(sql,callback){
>     pool.getConnection(function(err,connection){
>       connection.query(sql, function (err,rows) {
>         callback(err,rows)
>         connection.release()
>       })
>     })
>  }//对数据库进行增删改查操作的基础
>   ```
>* 创建query函数：
>   ```
>   const query = function (sql, replaces) {
>     return new Promise((res, rej) => {
>       sql = mysql.format(sql, replaces)
>       base(sql, (err, rows) => {
>         if (err) {
>           rej(err)
>         }
>         res(rows)
>       })
>     })
>   }
>   ```
>* 完整代码：
>   ```
>   const mysql = require('mysql')
>   const pool = mysql.createPool({
>       host:"localhost",
>       user:"root",
>       password:"19960627jjj",
>       database:"opd_cs"
>   })
>   
>   function base (sql,callback) {
>     pool.getConnection(function(err,connection){
>       connection.query(sql, function (err,rows) {
>         callback(err,rows)
>         connection.release()
>       })
>     })
>   }//对数据库进行增删改查操作的基础
>   
>   const query = function (sql, replaces) {
>     return new Promise((res, rej) => {
>       sql = mysql.format(sql, replaces)
>       base(sql, (err, rows) => {
>         if (err) {
>           rej(err)
>         }
>         res(rows)
>       })
>     })
>   }
>   
>   module.exports = {
>     query
>   }
>
>   ```
