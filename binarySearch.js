// 二分查找
function binarySearch (arr, target, order = 1) {
  !order && arr.sort((a, b) => a - b);
  let end = arr.length - 1;
  let start = 0;
  while (start <= end ) {
    const middle = Math.floor((start + end) / 2);
    // console.log(middle);
    if (target === arr[middle]) {
      // console.log(`找到${middle}`);
      break;
    } else if (target > arr[middle]) {
      start = middle + 1;
      // console.log(start, end)
      continue;
    } else {
      end = middle - 1;
    }
  }
  console.log("没有");
}

binarySearch([0,1,2,3,4,5], 5, 1);