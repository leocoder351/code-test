function Parent() {
  this.name = 'parent';
}

Parent.prototype.smoking = function() {
  console.log('smoking');
};

function Child() {
  this.name = 'child';
}

// 继承公有属性
Child.prototype = Object.create(Parent.prototype);

let child = new Child();
console.log(child.name);
child.smoking();

/*------------------------------------------------------- */
function Parent() {
  this.name = 'parent';
}

Parent.prototype.smoking = function() {
  console.log('smoking');
};

function Child() {
  this.name = 'child';
}

function create(parentPrptotype) {
  let Fn = function() {}; // 创建一个空函数，没有私有属性和公有属性
  Fn.prototype = parentPrptotype; // 将父类的公有属性放在这个函数上
  return new Fn();  // 产生的实例只有公有属性
}

Child.prototype = create(Parent.prototype);
