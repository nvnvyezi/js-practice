/**
 * 编写一个javscript函数 fn，
 * 该函数有一个参数 n（数字类型），
 * 其返回值是一个数组，该数组内是 n 个随机且不重复的整数，
 * 且整数取值范围是 [2, 32]。
 */

function fn (n) {
  let arr = [];
  while (arr.length !== n) {
    const num = Math.floor(Math.random() * 31) + 2;
    if (arr.includes(num)) {
      continue;
    }
    arr.push(num);
  }
  return arr;
}

console.log(fn(31).sort((a, b) => a-b));