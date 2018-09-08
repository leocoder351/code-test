var lis = document.getElementsByTagName('li');

// 都会打印 6
/*
for (var i = 0; i < lis.length; i++) {
  lis[i].onclick = function () {
    console.log(i);
  };
}
*/


// 用3种办法正确输出里面的数字

// 1. 闭包

for (var i = 0; i < lis.length; i++) {
  (function (i) {
    lis[i].onclick = function () {
      console.log(i+1);
    };
  })(i)
}


// 2. 用 let 声明变量 块级作用域
/*
for (let i = 0; i < lis.length; i++) {
  lis[i].onclick = function () {
    console.log(i+1);
  };
}
*/


// 3. 直接打印innerText
/*
for (var i = 0; i < lis.length; i++) {
  lis[i].onclick = function () {
    console.log(this.innerText);
  };
}
*/

function fun(n, o) {
  console.log(o);
  return {
    fun: function(m) {
      return fun(m, n);
    }
  }
}

var a = fun(0);
a.fun(1);
a.fun(2);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1);
c.fun(2);
c.fun(3);

/**
undefined
0
0
undefined
0
1
2
undefined
0
1
1
 */