// 双层循环

const arr = [
  1,
  -1,
  "1",
  { a: 1 },
  { a: 1 },
  { a: "1" },
  2,
  3,
  2,
  [1, 2],
  [1, 2],
  ["1", 2],
  "sd",
  "sd",
  /^12/,
  /^12/,
  NaN,
  NaN
];

/**
 * 双层循环
 * 对象和NaN不去
 * 保持原来的顺序
 */

const arr1 = [];
for (let i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr1.length; j++) {
    if (arr[i] === arr1[j]) {
      break;
    }
  }
  if (j === arr1.length) {
    arr1.push(arr[i]);
  }
}
// [ 1,
// -1,
// '1',
// { a: 1 },
// { a: 1 },
// { a: '1' },
// 2,
// 3,
// [ 1, 2 ],
// [ 1, 2 ],
// [ '1', 2 ],
// 'sd',
// /^12/,
// /^12/,
// NaN,
// NaN ]

/**
 * indexof || includes
 * 对象和NaN
 * 保持原顺序
 */
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (!arr2.includes(arr[i])) {
    arr2.push(arr[i]);
  }
}
// [ 1,
//   -1,
//   '1',
//   { a: 1 },
//   { a: 1 },
//   { a: '1' },
//   2,
//   3,
//   [ 1, 2 ],
//   [ 1, 2 ],
//   [ '1', 2 ],
//   'sd',
//   /^12/,
//   /^12/,
//   NaN,
//   NaN ]

/**
 * filter
 * 对象不去，忽略NaN
 * 保持原顺序
 */
const arr3 = arr.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});
/**
 * deduce
 * 对象不去
 * 保持原顺序
 */
const arr14 = arr.reduce((pre, cur, index) => {
  // 忽略NaN
  // if (arr.indexOf(cur) === index) {
  //   pre.push(cur);
  // }
  //去重NaN
  if (!pre.includes(cur)) {
    pre.push(cur);
  }
  return pre;
}, []);

/**
 * 全部去重
 * object键值对
 */
const obj = {};
const arr4 = arr.filter((item, index, arr) => {
  return obj.hasOwnProperty(`${typeof item}${JSON.stringify(item)}`)
    ? false
    : (obj[`${typeof item}${JSON.stringify(item)}`] = true);
});

/**
 * es6
 * 对象不去
 */
const arr5 = [...new Set(arr)];
