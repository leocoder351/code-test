function deepClone (obj) {
  let objClone = Array.isArray(obj) ? [] : {};

  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }

  return objClone;
}

// 测试用例
let obj = {
  name: 'liu',
  school: {
    name: 'yaohua',
    address: 'hedong'
  },
  student: ['sss', 'fff', 'vvv']
};

let obj2 = deepClone(obj);

console.log(obj);
console.log(obj2);

obj.school.name = 'sizhong';

console.log(obj);
console.log(obj2);