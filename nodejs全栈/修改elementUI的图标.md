# 修改elementUI的图标  
>* 进入[阿里巴巴矢量图标库](https://www.iconfont.cn)
>* 创建项目，将需要的图标添加至项目，下载项目
>* 在vue项目的assets目录下创建icon目录
>* 将图标项目中的文件复制到assets目录下
>* 将iconfont.css文件中以下位置的下方添加代码
>   >```
>   >.iconfont {
>   >  font-family: "iconfont" !important;
>   >  font-size: 16px;
>   >  font-style: normal;
>   >  -webkit-font-smoothing: antialiased;
>   >  -moz-osx-font-smoothing: grayscale;
>   >}
>   >// 添加
>   >[class^="el-icon-opd"], [class*=" el-icon-opd"]/*这里有空格*/
>   >{
>   >  font-family: "iconfont" !important;
>   >  font-size: 16px;
>   >  font-style: normal;
>   >  -webkit-font-smoothing: antialiased;
>   >  -moz-osx-font-smoothing: grayscale;
>   >}
>   >```  
