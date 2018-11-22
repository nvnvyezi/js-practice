var obj = {
  name : 'miaorenjie',
  age: 20,
  // like: ['black', 'white'],
};
obj.c = obj

console.log(obj)

// // 浅拷贝
function shallowCopy (arr) {
  let res = {};
  for (const key in arr) {
    if (arr.hasOwnProperty(key)) {
      res[key] = arr[key];
    }
  }
  return res;
}

const obj1 = shallowCopy(obj);
// console.log(obj1, obj);

// 深拷贝
function deepCopy (obj) {
  let arr;
  if (typeof obj === 'object') {
    arr = obj.constructor === Array ? [] : {};
  } else {
    return obj;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr[key] = deepCopy(obj[key]);
    }
  }
  return arr;
}

const obj2 = deepCopy(obj)
console.log(obj2, obj)

// 循环引用

function deepCopy (obj, parent) {
  let res = {};
  let _parent = parent;
  while (_parent) {
    if (_parent.origin === obj) {
      return _parent.currentParent;
    }
    _parent = _parent.parent;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        res[key] = deepCopy(obj[key], {origin: obj, currentParent: res, parent: parent});
      } else {
        res[key] = obj[key];
      }
    }
  }
  return res;
}

console.log(deepCopy(obj))

var a = {
  a1: 1,
  a2: {
      b1: 1,
      b2: {
          c1: 1
      }
  },
  a3: [1, 2, 3]
}
// a.a3 = a;

let count = new Map();

function deep(obj) {
  let o = Array.isArray(obj) ? [] : {};
  const arr = [{
    parent: o,
    key: undefined,
    data: obj
  }]
  while (arr.length) {
    const node = arr.shift();
    const {parent, key, data} = node;
    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = {};
    }
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        if (typeof element === 'object') {
          arr.push({
            parent: res,
            key,
            data: element
          })
        } else {
          res[key] = element;
        }
      }
    }
  }
  return o;
}

console.log(deep(a))