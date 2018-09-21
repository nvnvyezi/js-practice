Function.prototype.myCall = function (context) {
  context = context || window;
  context.fn = this;
  let res = context.fn(...[...arguments].slice(1));
  delete context.fn;
  return res;
}

Function.prototype.myApply = function (context) {
  context = context || window;
  context.fn = this;
  let res = context.fn(...arguments[1]);
  delete context.fn;
  return res;
}

let obj = {
  name: 'sd'
}

var name = 'oi';
function say(age, str) {
  console.log(this.name);
  console.log(age, str);
  return age;
}

// say.myCall(obj, 15, 'lu');
// let res = say.myCall(null, 15, 'lu');
// console.log(res)

say.myApply(obj, [15, 'lly'])