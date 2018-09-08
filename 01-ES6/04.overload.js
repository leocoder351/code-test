var people = {
  values: ['Dean Edwards', 'Sam Stephenson', 'Alex Russell', 'Dean Tom']
};

/*-------------------------------------------------------------
// 1. 利用arguments和switch实现重载

people.find = function () {
  switch (arguments.length) {
    case 0:
      return this.values;

    case 1:
      return this.values.filter((value) => {
        var firstName = arguments[0];
        return value.indexOf(firstName) !== -1 ? true : false;
      });

    case 2:
      return this.values.filter((value) => {
        var fullName = `${arguments[0]} ${arguments[1]}`;
        return value.indexOf(fullName) !== -1 ? true : false;
      });
  }
};

console.log(people.find());
console.log(people.find('Dean'));
console.log(people.find('Dean', 'Edwards'));
-------------------------------------------------------------*/


/*-------------------------------------------------------------
// 2. 利用arguments和闭包实现重载

function addMethod (object, name, fn) {
  // 把前一次添加的方法存在一个临时变量old中
  var old = object[name];

  // 重写object[name]方法
  object[name] = function () {
    if (fn.length === arguments.length) {
      // 如果调用object[name]方法时，如果实参和形参个数一致，则直接调用
      return fn.apply(this, arguments);
    } else if (typeof old === 'function') {
      // 如果实参形参不一致，判断old是否是函数，如果是，就调用old
      return old.apply(this, arguments);
    }
  };
}

addMethod(people, 'find', function() {
  return this.values;
});

addMethod(people, 'find', function(firstName) {
  return this.values.filter((value) => {
    return value.indexOf(firstName) !== -1 ? true : false;
  });
});

addMethod(people, 'find', function(firstName, lastName) {
  return this.values.filter((value) => {
    var fullName = `${firstName} ${lastName}`;
    return value.indexOf(fullName) !== -1 ? true : false;
  });
});

console.log(people.find());
console.log(people.find('Dean'));
console.log(people.find('Dean', 'Edwards'));
-------------------------------------------------------------*/

// 3. 利用Proxy和arguments实现重载
var proxy = new Proxy(people, {
  get: function (target, key, receiver) {
    if (key === 'find') {
      return function () {
        switch (arguments.length) {
          case 0:
            return this.values;
      
          case 1:
            return this.values.filter((value) => {
              var firstName = arguments[0];
              return value.indexOf(firstName) !== -1 ? true : false;
            });
      
          case 2:
            return this.values.filter((value) => {
              var fullName = `${arguments[0]} ${arguments[1]}`;
              return value.indexOf(fullName) !== -1 ? true : false;
            });
        }
      };
    }

    return Reflect.get(target , key , receiver);
  },

  set: function (target, key, value, receiver) {
    return Reflect.set(target, key, value, receiver);
  }
});

console.log(proxy.find());
console.log(proxy.find('Dean'));
console.log(proxy.find('Dean', 'Edwards'));
