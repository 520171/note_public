# getUserInfo的理解
>* [wx.getUserInfo(object)的api：](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)
>   * 获取用户信息，用户未授权的情况下调用该api会直接进入fail回调，不会弹出授权弹窗
>   ```
>   wx.getUserInfo({
>       withCredentials: boolean, // 是否带有上次登录状态信息
>       lang: string, // 'en', 'zh_CN', 'zh_TW'
>       success(res) {
>           // res.userInfo, 用户信息，不包含敏感信息   
>           // res.rawData, 原始数据字符串，不包含敏感信息
>           // res.sihnature, 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息
>           // res.encryptedData, 包括敏感数据在内的完整用户信息的加密数据
>           // res.iv, 加密算法的初始向量
>           // res.cloudID, 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据
>       },
>       fail: callback,
>       complete: callback
>   })
>   ```
>   
>
>* [wx.getSetting(object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html)
>   * 获取小程序当前设置（请求过的权限）
>   * [AuthSetting对象的属性](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html)
>   * [SubscriptionsSetting对象的属性](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/SubscriptionsSetting.html)
>   ```
>   wx.getSetting({
>       withSubscriptiond: Boolean, 是否获取用户的订阅状态，默认false
>       success(res) {
>           // res.authSetting // 授权结果，AuthSetting对象
>           // res.subscriptionsSetting // 订阅消息总开关，SubscriptionsSetting对象
>       },
>       fail: callback,
>       complete: callback
>   })
>   ```
>
>
>* [getUserInfo的按键：](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
>   * open-type设置成"getUserInfo"
>   * bindgetuserinfo绑定一个方法，该方法被调用时会传入参数e，e.detail类似于wx.getUserInfo(onject)接口成功回调的res
>   * 在点击该按键时如果没有授权则会弹出授权弹窗
>   ```
>   <view class="userinfo">
>     <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
>     <block wx:else>
>       <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
>       <text class="userinfo-nickname">{{userInfo.nickName}}</text>
>     </block>
>   </view>
>   ```
>
>
>* 小程序例程的getUserInfo的默认逻辑
>   1. app.js:
>       1. wx.getSetting(object)获取scope.userInfo，判断是否获得用户授权
>           * 没有则需要从页面的getUserInfo按键获取
>           * 获得授权则，直接调用wx.getUserInfo(object)获取授权，并将用户信息存储在globalData中
>           * 因为wx.getUserInfo(object)属于耗时行为，有可能globalData的userInfo没来得及初始化，需要执行首页定义的回调方法给index页面的userInfo赋值（先判断后执行）
>   2. index.js:
>       1. 在数据中添加一个flag用于用于判断getUserInfo按键是否可用（wx.canIUse('button.open-type.getUserInfo')）
>       2. 在数据中添加一个flag用于用于判断是否已获取userInfo
>       3. 未授权则需要通过页面的getUserInfo按键获取用户信息，此时给该按键绑定方法，在方法中获取用户信息并赋值给globalData和当前data
>       4. 用户已经授过权则先判断globalData.userInfo是否有值，没有则判断getUserInfo按键是否可用，不行则使用版本兼容，直接调用wx.getUserInfo弹窗获取
>       ```
>       if (app.globalData.userInfo) {
>         this.setData({
>           userInfo: app.globalData.userInfo,
>           hasUserInfo: true
>         })
>       } else if (this.data.canIUse){
>         // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
>         // 所以此处加入 callback 以防止这种情况
>         app.userInfoReadyCallback = res => {
>           this.setData({
>             userInfo: res.userInfo,
>             hasUserInfo: true
>           })
>         }
>       } else {
>         // 在没有 open-type=getUserInfo 版本的兼容处理
>         wx.getUserInfo({
>           success: res => {
>             app.globalData.userInfo = res.userInfo
>             this.setData({
>               userInfo: res.userInfo,
>               hasUserInfo: true
>             })
>           }
>         })
>       }
>       ```
