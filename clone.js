var obj = {
  name : 'miaorenjie',
  age: 20,
  like: ['black', 'white'],
};
obj.c = obj

// 浅拷贝
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
  if (typeof obj !== 'object') {
    return obj
  }
  arr = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr[key] = deepCopy(obj[key]);
    }
  }
  return arr;
}

// const obj2 = deepCopy(obj)
// console.log(obj2, obj)

// 循环引用
const memory = new Map()
function deepCopy2(param) {
  if (typeof param !== 'object') {
    return param
  }
  const arr = Array.isArray(param) ? [] : {}
  const res = memory.get(param)
  if (res) {
    return res
  }
  memory.set(param, param)
  for (const key in param) {
    if (param.hasOwnProperty(key)) {
      const item = param[key];
      arr[key] = deepCopy2(item)
    }
  }
  return arr
}
console.log(deepCopy2(obj))