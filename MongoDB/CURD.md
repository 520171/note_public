# CURD:
>* 增删改查：
>   * CREATE：
>       * insert()：插入一条或多条文档
>           * 插入一条文档：db.集合名字.insert(文档)：
>           * 插入多条文档：db.集合名字.insert([文档1, 文档2..])  
>       * insertOne()：只能插入一条文档：db.collectionName.insertOne(文档)
>       * insertMany()：必须传数组，传入多个文档：db.collectionName.insertMany([文档1, 文档2..])  
>   * READ：
>       * find()：以数组形式返回符合条件的所有文档： db.collectionName.find(conditions)
>       * findOne()：以文档形式返回符合条件的第一条文档：db.collectionName.findOne(conditions)
>       * 查询处理（链式编程）：
>           * .count()/.length() ：常用.count(),返回查询结果的文档数
>           * .limit(num)：限制返回num条文档  
>           * .skip(num)：跳过num条文档  
>           * .sort({字段1:1, 字段2:-1}) // 查询结果按照字段进行排序，多个字段则复合排序，-1为降序，1为升序
>       * 内嵌文档的查询：db.collectionName.find({"xxx.xxx": "值"}) // 条件的键的""不能省略  
>       * 条件查询：使用各种运算符
>           * 大于($gt)：db.collectionName.find({"num": {$gt: 500}}) // 筛选num大于500的文档  
>           * 大于等于($gte)：db.collectionName.find({"num": {$gte: 500}}) // 筛选num大于等于500的文档  
>           * 小于($lte)：db.collectionName.find({"num": {$lte: 500}}) // 筛选num小于500的文档  
>           * 小于等于($lte)：db.collectionName.find({"num": {$lte: 500}}) // 筛选num小于等于500的文档  
>           * 不等于($ne)：db.collectionName.find({"num": {$ne: 500}}) // 筛选不等于500的文档  
>           * 大于20且小于50：db.collectionName.find({"num": {$gt: 20, $lt: 50}})  // 筛选num大于20小于50的文档  
>           * 或条件/or($or)：db.collectionName.find({$or: [{"num": {$gt: 50}}, {"num": {$lt: 20}}]}) // 筛选num大于50或小于20的文档  
>       * 分页查询（.skip().limit()）：
>           * skip()和limit()使用顺序不限制，mongodb会自动调整  
>           * 分页：db.collectionName.find(conditions).skip((pageNum-1) * pageSize).limit(pageSize)  
>       * 筛选字段/投影：db.collectionName.find(conditions, {字段:1, 字段2:0}) // 第二个参数添加需要筛选的字段，0表示不显示，1表示显示
>   * UPDATA：  
>       * 须知：  
>           * update(conditions, doc)：默认情况下是用替换的文档将满足条件的第一个文档整个替换  
>       * update()：update(conditions, doc, config)  
>           * 更新第一条文档：db.collectionName.update(conditions, doc)  
>           * 更新全部的文档：db.collection.update(conditions, doc, {multi: true}) // 全部更新只支持字段更新，不支持将整个文档替换  
>       * updateOne()：只能更新第一条符合条件的文档：db.collectionName.updateOne(conditions, {$set: 替换的文档}) //updateOne更新时必须使用$运算符  
>       * updateMany()：更新所有符合条件的文档：db.collectionName.updateMany(conditions, {$set: 替换的文档}) //updateMany更新时必须使用$运算符  
>       * replaceOne()：将符合条件的第一条文档整个替换掉：db.replaceOne(conditions, doc)  
>       * 特殊操作（使用运算符）：
>           * $set：更新/添加字段：db.collectionName.update(conditions, {$set: {字段: 值}}, options)  // 修改或添加符合条件的文档的指定的字段  
>           ```db.c_test.update({ name: 'bbb' }, {$set:{name: 'BBB'}},{multi: true})```  
>           * $unset：删除字段：db.collectionName.update(conditions, {$unset: {字段: 值}}, options)  // 将满足条件的文档指定的字段删除  
>           ```db.c_test.update({name: 'BBB'}, {$unset: {gender: ""}}, {multi: true})```  
>           * $push/$addToSet：内嵌文档的数组数据的更新/插入：db.collectionName.updateMany(conditions, {$push/$addToSet:{"xxx.xx": 'xxxx'}}) // $push和$addToSet的区别，$addToSet会查重，$push不查重  
>           * $inc：给文档的某个字段自增400：db.collectionName.updateMany(conditions, {$inc: {"num": 400}})
>   * DELETE：
>       * remove()：db.collectionName.remove(conditions, justOne)：justOne默认为fasle,即将满足条件的所有的文档删除，justOne为ture时只删除第一条满足条件的文档  
>       * deleteOne()：db.collectionName.deleteOne(conditions)：将符合条件的第一条文档删除  
>       * deleteMany()：db.collectionName.deleteMany(conditions)：将符合条件的所有的文档删除  
>       * db.collectionName.drop()：删除集合，直接删除集合比逐条删除文档的效率高  
>       * db.dropDatabase()：删除数据库。跑路  
>       
>
