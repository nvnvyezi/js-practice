/**
 * 手动实现一个apply方法
 * apply() 方法调用一个函数, 其具有一个指定的this值，
 * 以及作为一个数组（或类似数组的对象）提供的参数。
 * 返回值为调用有指定this值和参数的函数的结果。
 * 语法：func.apply(thisArg, [argsArray]);
 */

/**
 * 实现思路：apply() 与 call() 的区别在于传入参数的形式不同。
 * apply() 接受两个参数，第一个参数指定了函数体内 this 对象的指向，
 * 第二个参数为一个数组或类数组。apply() 方法把这个集合中的元素
 * 作为参数传递给被调用的函数。以下基本与call相同
 */

// Function.prototype.myCall = function (content) {
//   content = content || global;
//   content.fn = this;
//   const args = Array.from(arguments).slice(1);
//   const res = content.fn(...args);
//   delete content.fn;
//   return res;
// }

Function.prototype.myCall = function (context = global) {
  context.fn = this;
  const args = Array.from(arguments).slice(1);
  const res = context.fn(...args);
  delete context.fn;
  return res;
}

function test (name, clas) {
  this.name = name;
  console.log(name, this.age, clas);
  return clas;
}

// test.myCall({age: 17}, 'sds', 34)

// Function.prototype.myApply = function (content) {
//   content = content || global;
//   content.fn = this;
//   const res = content.fn(...arguments[1]);
//   delete content.fn;
//   return res;
// }

Function.prototype.myApply = function (context = global) {
  if (typeof context !== 'object') {
    context = Object(context);
  }
  context._fn = this;
  const res = context._fn(...arguments[1]);
  delete context._fn;
  return res;
}

// test.myApply({age: 17}, ['sd', '12']);
// test.myApply(Symbol(1), ['age', '12'])
// test.apply(Symbol(1), ['age', '12'])

// Function.prototype.myBind = function (context) {
//   context = context || window;
//   let args = [...arguments].slice(1);
//   const self = this;
//   var P = function() {};
//   var p = function () {
//     args = [...args, ...arguments];
//     return self.apply(this instanceof P ? this : context, args);
//   }
//   P.prototype = this.prototype;
//   p.prototype = new P();
//   return p;
// }

Function.prototype.myBind = function (context = global) {
  let self = this;
  let args = Array.from(arguments).slice(1);
  function P() {};
  function p () {
    args = [...args, ...arguments];
    self.apply(this instanceof P ? this : context, args);
  }
  P.prototype = this.prototype;
  p.prototype = new P();
}


const res = test.myBind({age: 17}, 'sd');
const nres = new res();
// res('12')
console.log(nres)
