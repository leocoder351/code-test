var targetObj = {
  name: 'liu'
};

var obj = new Proxy(targetObj, {
  get: function (target, key, receiver) {
    console.log(`getting`);
    console.log(key);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting`);
    console.log(key);
    console.log(value);
    return Reflect.set(target, key, value, receiver);
  }
});

obj.name = 'wang';

console.log(obj.name);

console.log(obj);