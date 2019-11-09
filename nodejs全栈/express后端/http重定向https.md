# http重定向https
> 代码：
>   ```
>   app.all("*", (req, res, next) => {
>       // console.log(req.cookies)
>       if('https' === req.protocol && req.hostname.startsWith('www.')){
>       next()
>       } else {
>       console.log(`https://www.opdgr.cn${req.path}`)
>       res.redirect(307, `https://www.opdgr.cn${req.path}`)
>       }
>   })
>   ```
