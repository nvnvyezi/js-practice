/* 实现const */
function _const(data, val) {
  global[data] = val;
  console.log(global.a);
  Object.defineProperty(global, data, {
    enumerable: false,
    configurable: false,
    get() {
      return val;
    },
    set() {
      throw new TypeError("不允许重新赋值");
    }
  });
}

_const("a", 1);
global.a = 2;
console.log(global.a);
