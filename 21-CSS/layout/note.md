## 三列布局

1. float
缺点：
  - center内容在html中必须放在left和right后面，影响主内容加载

2. position
优点：
  - center内容在html中可以放在最开始，优先加载
缺点：
  - 绝对定位会脱离文档流，内部的子元素也全部脱离文档流，后续不好维护

3. table
优点：
  - 简单
缺点：
  - table-cell无法设置margin，所以无法设置栏间距，但是table-cell可以设置padding

4. flex
优点：
  - 简单
缺点：
  - 可能有兼容性问题，但在移动端已经可以随意使用了

5. grid 栅格布局
优点：
  - 简单直接
缺点：
  - 兼容性问题

6. 圣杯布局
优点：
  - 兼容性好
  - center内容在html中可以放在最前面，优先加载主内容
  - 需要使用负margin
缺点：
  - 写起来比较复杂

7. 双飞翼布局
优点：
  - 兼容性好
  - center内容在html中可以放在最前面，优先加载主内容
  - 需要使用负margin
缺点：
  - 写起来比较复杂