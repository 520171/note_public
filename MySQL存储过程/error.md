# 错误记录
>1. 关联mysql失败_Server returns invalid timezone. Go to 'Advanced' tab and set 'serverTimezon'
>   * 解决方法：```set global time_zone = '+8:00';```
>2. [HY000][1418] This function has none of DETERMINISTIC, NO SQL, or READS SQL DATA in its declaration and binary logging is enabled (you *might* want to use the less safe log_bin_trust_function_creators variable)  
>   * 解决方法：```set global log_bin_trust_function_creators=TRUE;```
