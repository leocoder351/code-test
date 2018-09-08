/*
> 普通函数

普通函数的this是在运行时候决定的。

1. **默认绑定**。

函数直接执行，非严格模式window，严格模式undefined
*/

var a = 1;
var obj = {
    a: 2,
    fn: function () {
        console.log(this.a);
    }
};

var foo = obj.fn;
obj.fn();               // 2    隐式绑定
foo();                  // 1    默认绑定

/*
2. **隐式绑定**。

函数通过对象的属性调用执行
*/

var a = 1;
var obj = {
    a: 2,
    fn: function () {
        console.log(this.a);
    }
};

var foo = obj.fn;
obj.fn();               // 2    隐式绑定
foo();                  // 1    默认绑定


/*
3. **显式绑定**。

函数通过apply，call，bind绑定this
*/

var a = 1;
var obj = {
    a: 2,
    fn: function (...args) {
        console.log(args);
        console.log(this.a);
    }
};

var foo = obj.fn;
obj.fn();                       // 2    隐式绑定
foo();                          // 1    默认绑定
foo.call({a: 3}, 1, 2, 3);      // 3    显示绑定
foo.apply({a: 3}, [1, 2, 3]);   // 3    显示绑定
foo = foo.bind({a: 3}, 1);
foo(2, 3);                          // 3    显示绑定


/*
bind可以看成是柯里化，接收一个参数，返回一个接收剩余参数的函数。

4. **new绑定**。

new 会执行4个步骤：

- 创建一个空对象
- 让构造函数的this指向这个空对象
- 将对象的__proto__指向构造函数的prototype
- 判断构造函数的返回值类型，如果是普通类型，则返回这个对象，如果是引用类型，则返回该引用类型值。也就是说，构造函数中returen xxx，如果xxx是JavaScript普通类型，则不会影响返回值，如果是引用类型，则会用此值代替新创建的对象返回。
*/

var a = 1;
function Foo () {
    this.a = 2;
}

Foo.prototype.sayA = function () {
    console.log(this.a);
};

var f1 = new Foo();
console.log(f1.a);              // 2    new绑定
f1.sayA();                      // 2

/*
> 箭头函数
箭头函数并不绑定this，也就是说当在箭头函数内使用this, arguments,等变量时，是找不到的，它会沿着当前作用域链向上寻找，直到找到最近的this值
*/


var a = 1;
var obj = {
    a: 2,
    foo: () => {
        console.log(this.a);
    }
};

obj.foo();      // 1    

/*
因为foo在定义时所处的词法作用域（也叫静态作用域）是在window全局作用域下面，obj的{}并不具备作用域的效果，JavaScript中作用域只有全局作用域和函数作用域，并没有块作用域。
*/


var a = 1;
var obj = {
    a: 2,
    foo: function () {
        setTimeout(function () {
            console.log(this.a);
        }, 1000);
    }
};

obj.foo();          // 1    默认绑定

// 修改为箭头函数的形式

var a = 1;
var obj = {
    a: 2,
    foo: function () {
        setTimeout(() => {
            console.log(this.a);
        }, 1000);
    }
};

obj.foo();          // 2 沿着作用域链向上寻找this，找到了foo()中的this是指向obj，所以obj.a是2
