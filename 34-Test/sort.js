// 冒泡排序
function bubble (arr) {
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }

  return arr;
}

let arr = [1,12,4,2,13,54,2,3,5];

console.log(bubble(arr))

// 快速排序
function quickSort (arr) {

  var quick = function (arr, left, right) {
    var index;

    if (arr.length > 1) {
      index = partition(arr, left, right);

      if (left < index - 1) {
        quick(arr, left, index - 1);
      }

      if (index < right) {
        quick(arr, index, right);
      }
    }
  };

  var paritition = function (arr, left, right) {
    var pivot = arr[Math.floor((left+right)/2)];
    var i = left;
    var j = right;

    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }

      while (arr[j] > pivot) {
        j--;
      }

      if (i <= j) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        i++;
        j--;
      }
    }

    return i;
  }

  quick(arr, 0, arr.length-1);
}

let arr2 = [1,12,4,2,13,54,2,3,5];

console.log(bubble(arr2))