// 快速排序 - 复杂度 O(nlogn) - 不稳定
var quickSort = function (array) {
  var quick = function (array, left, right) {
    var index;

    if (array.length > 1) {
      index = partition(array, left, right);

      if (left < index - 1) {
        // 对左边递归排序
        quick(array, left, index - 1);
      }

      if (index < right) {
        // 对右边递归排序
        quick(array, index, right);
      }
    }
  };

  var partition = function (array, left, right) {
    var pivot = array[Math.floor((left + right) / 2)];
    var i = left;
    var j = right;

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        [array[j], array[i]] = [array[i], array[j]];
        i++;
        j--;
      }
    }
    return i;
  };

  quick(array, 0, array.length - 1);
};

var arr = [2,9,6,8,7,3,4,10];
debugger
quickSort(arr);
console.log(arr)