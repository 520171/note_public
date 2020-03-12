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
>
>
