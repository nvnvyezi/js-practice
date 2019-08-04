/**
 * 随机生成一个长度为 10 的整数类型的数组，
 * 例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下
 * 例如 [[2, 3, 4, 5], [10, 11], [20]]。
 */

function getRandom(start, end, num) {
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push(~~(Math.random() * (end - start) + start));
  }
  return [...new Set(res)].sort((a, b) => a - b);
}

const arr = getRandom(10, 99, 10);

function getNew(arr) {
  return arr.reduce((init, cur, index, target) => {
    if (index === 0) {
      init.push([cur]);
      return init;
    }
    let temp = init[init.length - 1];
    if (cur === temp[temp.length - 1] + 1) {
      temp.push(cur);
    } else {
      init.push([cur]);
    }
    return init;
  }, []);
}

console.log(getNew(arr));
