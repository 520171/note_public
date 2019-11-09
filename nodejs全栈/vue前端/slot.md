# 插槽  
>* 未名插槽：当组件中定义了多个未名插槽时，该组件的内容会被复制到所有的未名插槽上
>* 具名插槽：组件中有多个插槽，不同插槽展示不同内容
>   * 定义具名插槽，给插槽节点添加name属性即可：```<slot name='slotname'></slot>```  
>   * 使用具名插槽：```<子组件><template v-slot:slotname></template></子组件>```
>   * 未名插槽的name默认是default
>   * v-slot可简写为#,即使用时：```<子组件><template v-slot:slotname></template></子组件>```
>* 作用域插槽：父组件使用子组件组件时，通过插槽访问子组件的内容  
>   * 声明插槽时添加v-bind:：```<slot name='test' :aa='msg'></slot>``` // 通过v-bind将子组件中的msg数据绑定到插槽的aa属性中
>   * 使用插槽时：```<template #test='data'>{{ data.aa }}</template>```
