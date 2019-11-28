# app.html
>* 该文件不会自动创建，作用是用于作为所有pages的模板  
>* 该文件常用于在页面底部添加备案号，版权之类
>* 文件结构：
>   ```
>   <!-- app.html -->
>   <!DOCTYPE html>
>   <html {{ HTML_ATTRS }}>
>     <head {{ HEAD_ATTRS }}>
>       {{ HEAD }}
>     </head>
>     <body {{ BODY_ATTRS }}>
>       {{ APP }}
>     </body>
>   </html>
>   ```
