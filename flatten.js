// 数组对象扁平化处理

let arr = {
  a: 1,
  b: [1, 2, {c: true}, [3]],
  d: {e: 2, f:3},
  g: null,
}

function flatten (obj) {
  let res = {};
  const toString = Object.prototype.toString;
  (function a(obj, prop) {
    if (toString.call(obj) === '[object Object]') {
      let flag = true;
      for (const key in obj) {
        flag = false;
        a(obj[key], prop ? prop + '.' + key : key)
      }
      if (flag && prop) {
        res[prop] = {};
      }
    } else if (toString.call(obj) == '[object Array]') {
      const len = obj.length;
      if (len > 0) {
        obj.forEach((item, index) => {
          a(item, prop ? prop + '[' + index + ']' : index);
        });
      } else {
        res[prop] = [];
      }
    } else {
      res[prop] = obj;
    }
  })(obj)
  return res;
}

console.log(flatten(arr));