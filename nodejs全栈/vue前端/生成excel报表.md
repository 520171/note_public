# 生成excel报表
>* npm安装组件
>   >* ```npm --save i xlsx```
>   >* ```npm --save i file-saver```
>   >* ```npm --save-dev i script-loader```
>* 创建excel目录并添加Blob.js和Export2Excel.js文件
>* 创建用于导出excel的js文件
>   ```
>   // list是需要转换成excel的json数据
>   // columns参数是一个数组,用于映射标题头和数据[{title:'列的头', key:'list数据的key'}, ...]
>   export function export2Excel(columns,list){
>         require.ensure([], () => {
>           const { export_json_to_excel } = require('../excel/Export2Excel');
>           let tHeader = []
>           let filterVal = []
>           columns.forEach(item =>{
>             tHeader.push(item.title)
>             filterVal.push(item.key)
>           })
>           const data = list.map(v => filterVal.map(j => v[j]))
>           export_json_to_excel(tHeader, data, '数据列表');
>         })
>   }
>   ```
