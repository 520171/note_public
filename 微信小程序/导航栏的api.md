# 导航栏的api
>* 导航栏的加载菊花（常用在网络请求中）：
>   * [显示导航栏的加载菊花,showNavigationBarLoading(object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html)
>       ```
>       wx.showNavigationBarLoading({
>           success: callback,
>           fail: callback,
>           complete: callback
>       })
>       ```
>   * [隐藏导航栏的加载菊花,hideNavigationBarLoading(object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideNavigationBarLoading.html)
>       ```
>       wx.hideNavigationBarLoading({
>           success: callback,
>           fail: callback,
>           complete: callback
>       })
>       ```
>     
>
>* [修改导航栏的标题,wx.setNavigationBarTitle(object)：](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html)
>   ```
>   wx.setNavigationBarTitle({
>       title: string,
>       success: callback,
>       fail: callback,
>       complete: callback
>   })
>   ```
>
>
>* [修改导航栏的颜色，wx.setNavigationBarColor(object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarColor.html)
>   ```
>   wx.setNavigationBarColor({
>       fontColor: string, // hexcolor
>       backgroundColor, // hexcolor
>       animation: {
>           duration: nmber, // 动画时间
>           timingFunc: string // 'linear', 'easeIn', 'easeOut', 'easeInOut'
>       },
>       success: callback,
>       fail: callback,
>       complete: callback
>   })
>   ```
>
>
