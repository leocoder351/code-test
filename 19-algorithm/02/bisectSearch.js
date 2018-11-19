// 二分查找
// 最快查找 [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47] 中 31 出现的位置

function find(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (high > low) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] > item) {
      high = mid;
    } else if (arr[mid] < item) {
      low = mid;
    } else {
      return mid;
    }
  }

  return -1;
}

let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
console.log(find(arr, 31));


function find(str) {
  for (var i = 0; i < str.length; i++) {
    let char = str[i]
    let reg = new RegExp(char, 'g');
    let l = str.match(reg).length
    if (l === 1) {
      return char
    }
  }
}

function find(str) {
  for (var i = 0; i < str.length; i++) {
    let char = str[i]
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
}

console.log(find('google'))

function format(num) {
  var str = num + '';
  // ["8", "7", "6", "5", "4", "3", "2", "1"]
  return str.split("").reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev;
  })
}
console.log(format(12345678));


function exchange(num) {
  num += ''; //转成字符串
  if (num.length <= 3) {
    return num;
  }

  num = num.replace(/\d{1,3}(?=(\d{3})+$)/g, (v) => {
    console.log(v)
    return v + ',';
  });
  return num;
}
console.log(exchange(1234567));


(function () {
  const reg = /o/g;
  function isHasO(str) {
    // reg.lastIndex = 0; 这样就可以避免这种情况
    return reg.test(str)
  }
  var str = 'google';
  console.log(isHasO(str))
  console.log(isHasO(str))
  console.log(isHasO(str))
}())