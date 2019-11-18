# mongoose  
>* mongoose是一个nodejs模块  
>* 安装：```npm i --save mongoose```  
>* 引入mongoose模块：```const mongoose = require("mongoose")```  
>* 连接数据库：```mongoose.connect(url, { useNewUrlParser: true })```  // url="mongodb://"
>* 断开数据库连接：```mongoose.disconnect()```  
>* 获取数据库连接对象：```const connection = mongoose.connection```  
>   * connection对象的作用是：用于监听数据库连接的状态  
>   * 设置数据库连接的监听：```connection.once("open", callback)```  
>   * 设置数据库连接断开的监听：```connection.once("close", callback)```  
>   * 设置数据库错误监听：```connection.on("error", callback)```  
>* 获取Schema：```const Schema= mongoose.Schema```
>   * Schema对象的作用是：用于约束集合的文档的结构，每一个集合都应该有对应一个Schema
>   * 给集合创建Schema：const collectionsNameSchema = new Schema({})/new mongoose.Schema({})
>       ```
>       const studnetsSchema = new Schema({
>           name: String, // 字段名: 类型 ，用于约束该字段的数据类型
>           gender: {   // 通过该方式给为字段设置默认值
>               type: Number, // 字段类型
>               default: 0 // 默认值
>           }
>       })
>       ```
>* 获取model：```const model = mongoose.model("集合名称", 集合对于的Schema对象)```  
>   * model对象的作用是：通过model对象操作数据库集合（对文档进行CURD）  
>   * model的实例是文档  
>   * model对象的方法：
>       * create()：
>           * model.create(文档, callback(err))
>           * model.create(文档1, 文档2, 文档3, calback(err))
>           * model.create([文档1, 文档2], callback(err))
>       * find(filter, projection, options, callback)
>           * filter：条件，筛选文档的条件
>           * projection：投影，用于筛选展示的字段，通过{字段名:0/1}，0表示不显示，1表示显示；或"字段1, -字段2"的方式筛选，-表示不显示该字段；
>           * options：用于配置查询结果，如{skip:2, limit: 3} 表示跳过2个文档后显示3个文档  
>           * callback(err, docs) // 回调函数必须设置，查询的文档结果集会通过回调函数的第二个参数返回  
>           ```Students.find({}, {name: 1, _id: 0}, {limit: 3}, function(err, docs) {console.log(docs)})```  
>       * findOne(filter, projection, options, callback)：
>           * 用法类似于find(),但是callback(err, doc)的第二参数为文档对象
>       * findById(id, projection, options, callback)
>           * id为字符串，为_id的值
>           * callback(err, doc),查询的到的文档对象通过回调方法的第二参数返回
>           * 其余参数和find()一样
>       * update(conditions, doc, options, callback)
>           * conditions：筛选条件
>           * doc：替换的文档
>           * options：配置选项，multi等  
>           * callback(err) // 回调函数  
>           ```Students.update({"name": "fff"}, {$set: {"name": "fffc"}}, {multi: true}, function(err) {if (!err) {console.log("修改成功！！！")}})```  
>       * updateOne, updateMany, replaceOne三个方法的参数和update一致，但replaceOne是将文档直接替换而不是更新指定字段  
>       * remove(conditions, callback) // 删除符合条件的文档  
>           * conditions：筛选条件  
>           * callback(err)：回调函数  
>           ```Students.remove({"name": "fffd"}, function (err) {if (!err) console.log("删除成功！！！")})```  
>       * deleteOne, deleteMany,这两个方法参数和remove一致，可认为deleteOne, deleteMany是remove方法的细分  
>       * count(conditions, callback) // 查询符合条件的文档数  
>           * conditions：筛选条件  
>           * callback(err, count)：查询的文档数会通过回调函数的第二个参数返回  
>           ```Students.count({}, function (err, count) {if (!err) console.log(count)})```  
>* 关于document对象：  
>   * document对象是model的实例  
>   * document对象的获取：通过对集合的查询/new model()得到  
>   * document对象的方法：
>       * save(callback) // 将document实例保存在数据库中  
>           ```
>           const mstudent = new Students({
>             name: "红红火火恍恍惚惚",
>             addr: "hhhhhhhh"
>           })
>           mstudent.save((err) => {if (!err) console.log("保存成功")})
>           ```
>       * update(doc, options, callback)
>           * doc：更新的文档
>           * options：
>           * callback(err)：回调方法
>           ```
>           Students.find(function (err, docs) {
>             if (!err) {
>               docs[0].update({$set: {"addr": "广东汕头"}}, (err) => {if (!err) {
>                 console.log("更新成功")}})
>             }
>           })
>           ```
>       * remove(callback) // 从数据库中删除该文档
>       * toString(), toObject(), toJson()
>       * 
>* mongoose模块化：
>   * 创建conn_mongo.js文件，引入该文件时会自动创建连接
>       ```
>       const mongoose = require("mongoose")
>       const URL = "mongodb://localhost/test"
>       mongoose.connect(URL)
>       const connection = mongoose.connection
>       connection.once("open", (err) => {if (!err) {
>         console.log("连接成功！！！")}})
>       connection.once("close", (err) => {if (!err) {
>         console.log("断开连接！！！")}})
>       ```
>   * 创建models目录，在models目录中按需创建model.js文件,并导出model对象
>       ```
>       const mongoose = require("mongoose")
>       const Schema = mongoose.Schema
>       const stuSchema = new Schema({
>         gender: {
>           default: 0,
>           type: Number
>         },
>         name: String,
>         addr: String
>       })
>       module.exports = mongoose.model("students", stuSchema)
>       ```
>   * 使用
>       ```
>       require("./tools/conn_mongo") // 创建连接
>       const stuModel = require("./models/studentsModel") // 获取model对象
>       stuModel.find((err, docs) => { // CURD
>         if (!err) {
>           console.log(docs)
>         }
>       })
>       ```
>           
