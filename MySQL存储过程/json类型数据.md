# json相关
>* json类型相关(json数组、json对象)
>   * 创建json数组：```set @jarray = json_array(val1, val2,val3..);```  
>   * 创建json对象：```set @jobject = json_object();```  
>* json相关方法(json对象的路径匹配：数组('$[index]'), json对象('$.key'))：
>   * json_array_insert(json_array对象, '$[index1]', value1, '$[index2]', value2...)
>       * 功能：将数据插入json数组中，但不替换已有的值
>       * 注意1：'$[index]'项必须是字符串，否则报错
>       * 注意2：该方法只能操作json数组
>   * json_insert(json_object对象, '$.key', value, ...)
>       * 功能：向json对象新的键值对，不能修改已有的键值对
>       * 注意1：该方法也可以作用于json数组对象，只能在数组末端插入数据：```select json_insert(jsonarray, '$[lastindex+1]', value)```
>       * 注意2：'$.key'项必须是字符串，否则报错
>   * json_set(json_array/json_object, '$[index]/$.key', value, ...)
>       * 功能：替换已存在的json数组或json对象的值，不存在则插入值
>       * 注意1：'$[index]'项必须是字符串，否则报错
>       * 注意2：'$.key'项必须是字符串，否则报错
>   * json_replace(json_array/json_object, '$[index]/$.key', value, ...)
>       * 功能：替换已存在的json数组或json对象的值，不存在则不处理
>       * 注意1：'$[index]'项必须是字符串，否则报错
>       * 注意2：'$.key'项必须是字符串，否则报错
>   * json_array_append(json_array/json_object, '$[index]/$.key', value, ...)
>       * 功能：将目标项转换成json数组，并向该数组追加数据。
>   * json_extract(json_array/json_object, '$[index]/$.key', '$[index]/$.key', ...)
>       * 功能：从json对象中返回指定的值，不存在则返回null
>       * eg：```select json_extract(字段名, '$[0]', '$[1]') from tb_test2;```
>       * eg2：```select 字段名->'$[index]/$.key' from tb_test2;```
>   * json_remove(json_array/json_object, '$[index]/$.key', ...);
>       * 功能：用于删除json对象中的键值对，或者删除json数组的项
>       * 注意：当用于删除json数组中的多个项时需考虑每一项被删除后的对序号的影响
>   * json_contains_path(json_array/json_object, 'one/all', '$[index]/$.key', '$[index]/$.key', ...)
>       * 功能：判断json对象或数组是否包含指定路径，包含则返回1，否则返回0
>       * 注意：one/all：该值必须为'one'或者'all',one则包含其中一个路径则返回1，all必须包含所有的路径才返回1
>   * json_contains(json_array/json_object, '[value, value2,..]'/'{"key": value, "key2": value2, ...}')
>       * 功能：判断json数组或对象是否包含该值，包含返回1，否则返回0
>       * eg：```select json_contains(@jarray, '[value, value2,value3...]');```
>       * eg2：```select json_contains(@jobject, '{"key": value, "key2": value2, ...}');```
>   * json_pretty(json_array/json_object)
>       * 功能：在控制台中格式化json数据结构，更加美观
>   * json_length(json_object/json_array)
>       * 功能：返回当前json数组/对象的值的个数
>* 对表中的json数据进行增删改一般是通过调用json函数，将结果通过update语句整体覆盖给字段数据
>* 
