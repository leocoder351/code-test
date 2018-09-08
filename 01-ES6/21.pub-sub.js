let fs = require('fs');
let path = require('path');

// 发布订阅模式 发布者和订阅者是没有依赖关系的
// 观察者模式 发布和订阅的被观察者是依赖于观察者的

let dep = {
  arr: [],
  on: function(callback) {
    this.arr.push(callback);
  },
  emit: function() {
    this.arr.forEach((item) => {
      item();
    });
  }
};

let school = {};

dep.on(function() {
  if (Object.keys(school).length === 2) {
    console.log(school);
  }
});

fs.readFile(path.join(__dirname, './age.txt'), 'utf8', function(err, data) {
  if (err) return;
  school['age'] = data;
  dep.emit();
});

fs.readFile(path.join(__dirname, './name.txt'), 'utf8', function(err, data) {
  if (err) return;
  school['name'] = data;
  dep.emit();
})