/** 斐波那契 */
function* fibonacci(count) {
  let [prev, curr] = [0, 1];
  let start = -1;
  while (count > start) {
    start++;
    [prev, curr] = [curr, prev + curr];
    yield prev;
  }
}

// for (const value of fibonacci(3)) {
// console.log(value);
// }

/** 实现迭代对象 */
const iterable = {
  [Symbol.iterator]() {
    return {
      value: 0,
      next() {
        if (this.value === 5) {
          return { value: undefined, done: true };
        }
        return { value: this.value++, done: false };
      }
    };
  }
};

// for (const value of iterable) {
// console.log(value);
// }

/* 使用迭代器遍历二维数组并转换成一维数组 */
const arr = ["a", ["b", ["c", ["d", "e"]]]];
function* iterarr(arr) {
  if (Array.isArray(arr)) {
    for (const value of arr) {
      yield* iterarr(value);
    }
  } else {
    yield arr;
  }
}

for (const value of iterarr(arr)) {
  console.log(value);
}

const res = [...iterarr(arr)];
console.log(res);
