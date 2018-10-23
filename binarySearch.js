// 二分查找
function binarySearch (arr, target, order = 1) {
  !order && arr.sort();
  let end = arr.length - 1;
  let start = 0;
  while (start <= end ) {
    const middle = (start + end) / 2;
    if (target === arr[middle]) {
      console.log(`找到${middle}`);
      break;
    } else if (target > arr[middle]) {
      start = middle;
      // console.log(start, end)
      continue;
    } else if(start == end - 1) {
      if (arr[start] === target) {
        console.log(`找到${start}`);
      }
      if (arr[end] === target) {
        console.log(`找到${end}`);
      }
      break;
    } else {
      end = middle;
    }
  }
  console.log("没有");
}

binarySearch([5,7,7,8,10], 12, 1);