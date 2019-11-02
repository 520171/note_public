# vue补充
>* 对象克隆(复制对象的数据到新的对象中)：const newObj = Object.assign({}, oldObj1, oldObj2...) // 老对象key相同的属性会被覆盖  
>* 数组的双向绑定刷新的方式：
>   * array.splice(index, num, insert1, insert2...) // 从index下标开始，删除num个元素， 并插入insert1..元素
>   * Vue.$set(this.obj, key, value) // 将this.obj的key的值使用value替换  
