/**
 * 实现：查找一个数组中出现次数最多的元素并返回该元素
 */

/**
 * 思路：对这个数组先排序，排序之后利用一层循环和两个指针遍历，
 * 第一次i和j均指向第一个元素，i不停地后移，如果i指向的元素
 * 和arr[j]中存储的不同，则将arr[j]和i-j set 进一个Map中
 * arr[j]为键，i-j为值，第二次的时候就将i赋给j，再继续遍历
 * 数组遍历完成之后相当于Map已经构建完成，接着就去遍历这个Map
 * 的值将其转为数组，用Math.max求其中的最大值，最后去遍历map
 * 用map中的value值和求得的最大值比较，如果相同，则返回对应的key
 */

function searchNumMax (arr) {
  let left = 0;
  let right = 0;
  arr = arr.sort((a, b) => a - b);
  console.log(arr)
  const map = new Map();
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    if (arr[i] !== arr[i+1]) {
      // right = i+1;
      map.set(arr[i], i + 1 - left);
      left = i+1;
      if (i + 1 === len) {
        console.log(i)
        map.set(arr[i + 1], 1);
      }
    } else {
      if (i + 1 === len) {
        map.set(arr[i], len + 1 - left);
      }
    }
  }
  // console.log(Array.from(map));
  const arr1 = Array.from(map.values());
  const max = Math.max.apply(null, arr1);
  const res = [];
  // console.log(max)
  map.forEach((item, index) => {
    if (item === max) {
      res.push(index)
    }
  })
  console.log(res)
}

searchNumMax([2,1,3,4,5,3,4,5,5,2,1,6,6,6]);
