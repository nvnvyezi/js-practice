/* 判断两个对象是否相等 */

const obj = {
  a: 1,
  b: "aaa",
  c: [1, 2],
  d: {
    a: 1
  },
  e: true
};
const obj1 = {
  a: 1,
  b: "aaa",
  c: [1, 2],
  d: {
    a: 1
  },
  e: true
};

// JSON.stringify()
console.log(
  `JSON.stringify(): ${JSON.stringify(obj) === JSON.stringify(obj1)}`
);

// 函数实现

function eq(a, b) {
  // +0 -0
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }
  // 一个为null
  if (a === null || b === null) {
    return false;
  }
  // NaN
  if (a !== a) {
    return b !== b;
  }
  // 2 new Number(2)
  if (
    typeof a !== "function" &&
    typeof a !== "object" &&
    typeof b !== "object"
  ) {
    return false;
  }
  return deepEQ(a, b);
}
function deepEQ(a, b) {
  const typeA = Object.prototype.toString.call(a);
  const typeB = Object.prototype.toString.call(b);
  if (typeA !== typeB) {
    return false;
  }
  switch (typeA) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a) {
        return +b !== +b;
      }
      return +a === 0 ? 1 / +a === 1 / +b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
    default:
      break;
  }
  const isArray = Array.isArray(a);
  if (!isArray) {
    if (typeof a !== "object" || typeof b !== "object") {
      return false;
    }
    const aCtor = a.constructor;
    const bCtor = b.constructor;
    if (
      aCtor === bCtor &&
      !(
        isFunction(aCtor) &&
        aCtor instanceof aCtor &&
        isFunction(bCtor) &&
        bCtor instanceof bCtor
      ) &&
      ("constructor" in a && "constructor" in b)
    ) {
      return false;
    }
  }
  if (isArray) {
    let len = a.length;
    if (len !== b.length) {
      return false;
    }
    while (len--) {
      if (!eq(a[len], b[len])) {
        return false;
      }
    }
  } else {
    const keys = Object.keys(a);
    let len = keys.length;
    if (len !== Object.keys(b).length) {
      return false;
    }
    while (len--) {
      const key = keys[len];
      if (!(b.hasOwnProperty(key) && eq(a[key], b[key]))) {
        return false;
      }
    }
  }
  return ture;
}
function isFunction(obj) {
  return toString.call(obj) === "[object Function]";
}
const a = new Object();
const b = new Object();

console.log(`function: ${eq(a, b)}`);
