# wxml
>* wxml，类似于html，用于页面内容的设置
>
>
>* [数据绑定](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/data.html)：
>   * 使用Mustache语法（使用```{{}}```包裹变量）
>   * 使用Mustache展示字面值。如true/false
>   * 使用Mustache展示变量
>   * 使用Mustache动态修改组件内容、组件属性、组件控制属性等
>
>
>* [列表渲染](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/list.html)：
>   * ```wx:for={{列表}}```组件控制属性：使用列表数据重复渲染组件，默认下标通过index访问，元素通过item访问
>   * ```wx:for-item="itemName"```组件控制属性：修改当前列表的元素的访问名为```itemName```
>   * ```wx:for-index="idx"```组件控制属性：修改当前列表的下标访问名为```idx```
>   * ```wx:key="*this"```组件控制属性：不设置会抛出警告，设置每一项的唯一标识符，若item本身就是唯一时，可使用```*this```
>
>
>* [条件渲染](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/conditional.html)：
>   * ```wx:if```组件控制元素：用于判断是否渲染改组件
>   * ```wx:elif```组件控制元素：配合```wx:if```使用
>   * ```wx:else```组件控制元素：配合```wx:if```使用
>   * 注：和```hidden```的区别：hidden是渲染不显示，当需要频繁渲染切换时使用```hidden```，当不常修改时用```wx:if```
>
>
>* block包装元素：block节点没有任何渲染效果，只是将多个组件包装在一起，常用在列表渲染和条件渲染中
>
>
>* [模板](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/template.html)：
>   * 定义模块：
>       ```
>       <template name="模板名">
>           <view>{{a}}</view>
>           <view>{{b}}</view>
>           <view>{{c}}</view>
>       </template>
>       ```
>   * 使用模块：
>       ```
>       // 使用data对模板的自定义属性进行赋值，常用方式是对对象进行拆包赋值
>       <template is="模板的id" data="{{...对象}}"/>
>       ```
>   
>
>* [引用](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/import.html)
>   * import：```<import src="引入的wxml的文件路径"/>```
>   * include：```<include src="引入的wxml的文件路径"/>```，引入除了template节点和wxs节点外的全部代码
>
>
