// 观察者模式
class Observer {
  constructor() {
    this.arr = [];
    this.val = 1;     // 等待这个值更新时，触发被观察者的更新方法
  }

  updateVal(val) {
    this.val = val;
    this.notify();
  }

  notify() {
    let val = this.val;
    this.arr.forEach((s) => {
      s.update(val);
    });
  }

  save(s) {
    this.arr.push(s);
  }
}

// 被观察者，被观察者有一个更新方法
class Subject {
  update(val) {
    console.log('update');
    console.log(val);
  }
}

let s = new Subject();        // 一个个小的被观察者
let observe = new Observer();  // 观察者

observe.save(s);
observe.save(s);
observe.updateVal(100);   // 当值发生变化以后，会自动触发
