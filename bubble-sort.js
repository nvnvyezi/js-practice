/**
 * 冒泡排序
 */
const arr = [5, 2, 324, 21, 34, 5, 2, 7, 5, 8, 9, 23, 3, 64, 25, 13];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (flag) {
      break;
    }
  }
  return arr;
}
function bubbleSort3(arr) {
  let k = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    let pos = k;
    for (let j = 0; j < k; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false;
        pos = j;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    k = pos;
    if (flag) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort3(arr));
