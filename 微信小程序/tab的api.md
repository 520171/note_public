# [tab的api](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBarRedDot.html)
>* TabBar的红点提示：
>   * [显示红点,wx.showTabBarRedDot(object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBarRedDot.html)：
>       ```
>       wx.showTabBarRedDot({
>           index: number, // 需要添加红点的tab的序号，从左向右，由0开始
>           success: callback,
>           fail: callback,
>           complete: callback
>       })
>       ```
>   * [隐藏红点,wx.hideTabBarRedDot(object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBarRedDot.html)：
>       ```
>       wx.hideTabBarRedDot({
>           index: number, // 需要取消红点的tab序号，从左向右，由0开始
>           success: callback,
>           fail: calback,
>           complete: callback
>       })
>       ```
>     
>
>* TabBar右上角的文本提示：
>   * 常常配合wx.setTabBarRedDot和wx.hideTabBarRedDot使用
>   * [显示文字, wx.setTabBarBadge(object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarBadge.html)
>       ```
>       wx.setTabBarBadge({
>           index: number, // 从左向右，需要设置的TabBar的item的下标
>           text: string, // 文本内容
>           success: callback,
>           fail: callback,
>           complete: callback
>       })
>       ```
>   * [移除文字, wx.removeTabBarBadge(object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.removeTabBarBadge.html)
>       ```
>       wx.removeTabBarBadge({
>           index: number, // 需要移除文字的item下标
>           success: callback,
>           fail: callback,
>           complete: callback
>       })
>       ```
>
>* 隐藏和显示TabBar：
>   * [隐藏TabBar,wx.hideTabBar(object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBar.html)
>       ```
>       wx.hideTabBar({
>           animation: boolean, // 是否使用动画
>           success: callback,
>           fail: callback,
>           complete: callback
>       })
>       ```
>   * [显示TabBar,wx.showTabBar(object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBar.html)
>       ```
>       wx.showTabBar({
>           animation: boolean, // 是否使用动画，
>           success: callback,
>           fail: callback,
>           complete: callback
>       })
>       ```
>
>
>* [修改TabBar的样式,wx.setTabBarStyle](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html)
>   ```
>   wx.setTabBarStyle({
>       color: string, // hexcolor, tab上的字体颜色
>       selectedColor: string, // hexcolor, 被选中时的字体颜色
>       backgroundColor: string, // hexcolor, tab的背景色
>       borderColor: string, // 设置边框颜色，white/black
>       success: callback,
>       fail: callback,
>       complete: callback
>   })
>   ```
>   
>
>* [修改TabBar某一项的配置，wx.setTabBarItem(object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html)
>   ```
>   wx.setTabBarItem({
>       index: number, // 需要修改的项
>       iconPath: string, // 设置图标地址
>       selectedIconPath: string, // 选中时的图标地址
>       text: string, // 显示的文字
>       success: callback,
>       fail: callback,
>       complete: callback
>   })
>   ```
>
>
