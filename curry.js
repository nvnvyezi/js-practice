/**
 * 实现：curry(2)(3)(4) = 24
 * 函数柯里化原理：将含有多个参数的函数转换成一系列使用一个参数的函数
 */

function curry(param) {
  const args = [];
  function inlay(...params) {
    args.push(...params);
    const num = args.reduce((pre, cur) => {
      return pre * cur;
    }, 1);
    inlay.num = num;
    return inlay;
  }
  return inlay(param);
}
