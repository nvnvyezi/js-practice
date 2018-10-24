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
obj1.like.push('sd');
// console.log(obj1, obj);

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