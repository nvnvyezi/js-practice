Array.prototype._flat = function(level = 1) {
  let res = this;
  if (level !== Infinity) {
    for (let i = 0; i < level; i++) {
      res = res.reduce((pre, item) => {
        if (Array.isArray(item)) {
          return [...pre, ...item];
        } else {
          return [...pre, item];
        }
      }, []);
    }
  } else {
    return this.reduce(
      (pre, cur) =>
        Array.isArray(cur) ? pre.concat(cur._flat(Infinity)) : pre.concat(cur),
      []
    );
  }
  return res;
};

Array.prototype._flatten = function() {
  let res = this;
  while (res.some(item => Array.isArray(item))) {
    res = [].concat(...res);
  }
  return res;
};

/**
 * 已知如下数组：
 *
 * var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
 *
 * 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 */
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
const res = [...new Set(arr._flatten(Infinity))].sort((a, b) => a - b);
