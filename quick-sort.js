// var arr = [2, 3, 4, 1, 5, 6, 2, 4, 9];
// function sort(left, right) {
//   let base = arr[left];
//   while (left < right) {
//     while (left < right && arr[right] > base) {
//       right--;
//     }
//     if (left < right) {
//       arr[left++] = arr[right];
//     }
//     while (left < right && arr[left] < base) {
//       left++;
//     }
//     if (left < right) {
//       arr[right--] = arr[left];
//     }
//   }
//   arr[left] = base;
//   return left;
// }

// function start(left, right) {
//   if (left > right) {
//     return;
//   }
//   let base = sort(left, right);
//   start(left, base - 1);
//   start(base + 1, right);
// }
// // start(0, 8);
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

var arr = [2, 3, 4, 1, 5, 6, 2, 4, 9];
// 每次选择最左边的数作为基数
let count = 0;
function quickSort(arr, left = 0, right = arr.length - 1) {
  const l = left;
  if (left === right) {
    return;
  }
  const base = arr[left];
  while (left < right) {
    while (left < right && arr[right] > base) {
      right--;
    }
    if (left < right) {
      arr[left++] = arr[right];
    }
    while (left < right && arr[left] < base) {
      left++;
    }
    if (left < right) {
      arr[right--] = arr[left];
    }
  }
  arr[left] = base;
  count += 1;
  if (count > 5) {
    return;
  }
  quickSort(arr, l, left - 1);
  quickSort(arr, left + 1, arr.length - 1);
}
quickSort(arr);
//对数组进行排序
console.log(arr);
