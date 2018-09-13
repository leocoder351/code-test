## vue 第二天复习

- vue 声明式
- jQuery 命令式
- v-model（如果checkbox，select多选是数组，提供一个value属性）（radio checkbox分组靠的是v-model），checked selected不存在
- 修饰符 .number .lazy
- 按键修饰符 .enter .ctrl .keycode .ctrl.enter
- 事件 
  - @事件.stop
  ```
  stopPropagation, cancelBubble = true;
  ```
  - @事件.capture
  ```
  xxx.addEventListener('click', fn, true)
  true 捕获 false 冒泡 不填默认为false
  ```
  - @事件.prevent
  ```
  e.preventDefault(), returnValue = false;
  ```
  - @事件.once
  ```
  on('click') off('click')
  ```
  - @事件.self
  ```
  e.srcElement && e.target 判断事件源绑定事件 
  ```

## filters 实例上可以使用

```
{{123 | my(1,2,3)}}

filters: {
  my(input, param1, param2, param3) {

  }
}
```

## computed 计算“属性” 不是方法

- 方法不会有缓存，computed会根据依赖（归vue管理的数据，可以响应式变化的）的属性进行缓存
- 两部分组成，有get和set，不能只写set，可以只写get，一般情况下，通过js赋值影响其他人，或者表单元素设置值的时候会调用set
- computed 不支持异步
- watch 支持异步

```
computed: {
  msg() {
    setTimeout(() => {
      return '';
    }, 500);
    // 这里相当于
    return undefined;
  }
}
```

## v-if/v-show

- v-if 操作的是DOM
- v-show 操作的是样式 display: none
- v-if 可以和 v-else-if，v-else一起使用
- v-show 不支持template，只有v-if支持
- 默认情况下，切换DOM时相同的结构会被复用，如果不需要复用，需要加key

## v-bind 简写 :

- 动态绑定“属性”
```
<img :src="xxx" :width="xx" />
```

## 实现单页开发的方式

- 通过hash记录跳转的路径（可以产生历史管理） www.baidu.com/#2 是不会刷新网页的   www.baidu.com/?a=2 会刷新网页 
- 浏览器自带的历史管理的方法 History API
  - history.pushState() 如果没有后台支持可能会导致404错误
  - 开发时使用hash路由的方式
  - 上线时使用history路由的方式

