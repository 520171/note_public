# 背景的api
>* [设置背景文字的样式, wx.setBackgroundTextStyle(object)：](https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundTextStyle.html)
>   ```
>   wx.setBackgroundTextStyle({
>       textStyle: string // 设置背景的三个圆点的样式，dark/light
>       success: callback,
>       fail: callback,
>       complete: callback
>   })
>   ```
>   
>
>* [设置背景色, wx.setBackgroundColor(object)：](https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html)
>   * 背景色分三种
>       * backgroundColor(整体背景色，包含backgroundColorTop和backgroundColorBottom)
>       * backgroundColorTop(顶部背景色，顶部loading时的背景色)
>       * backgroundColorBottom(底部背景色)
>   ```
>   wx.setBackgroundColor({
>       backgroundColor: string, // hexcolor
>       backgroundColorTop: string, // hexcolor
>       backgroundColorBottom: string, // hexcolor
>       success: callback,
>       fail: callback,
>       complete: callback 
>   })
>   ```
