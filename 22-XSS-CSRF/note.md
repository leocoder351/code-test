## XSS 与 CSRF

- XSS - Cross Site Scripting
- CSRF - Cross Site Request Forgery  

## XSS

1. 反射型
2. DOM-Based
```
// <img src="xxx" onerror="alert(1)">   粘贴 xxx" onerror="alert(1)" 到输入框
// <img src="xxx"><script>alert(1)</script>  粘贴 xxx"><script>alert(1)</script> 到输入框

解决办法：encodeURI()

$('#box').html(`<img src="${encodeURI($('#web').val())}">`);

encodeURI()对URL进行转义，encodeURIComponent()对参数进行转义
```
3. 持久型
恶意脚本被存入到数据库中
```
解决方法：Html转义

function encodeHtml(str) {
  return str.replace(/&/g, '&amp;').
              replace(/"/g, '&quot;').
              replace(/'/g, '&apos;').
              replace(/</g, '&lt;').
              replace(/>/g, '&gt;');
}

let content = encodeHtml($('#content').val());
```

## CSRF

#### 如何防止

1. 添加验证码（体验不好）
2. 判断来源 3001 -> 3000，referer
3. token