function partial (fn) {
  let args = [...(Array.from(arguments).slice(1))];
  return function () {
    args = args.concat(...arguments);
    return fn.apply(this, args);
  }
}
function add(a, b) {
  console.log(a, b, this.value)
  return a + b + this.value;
}
var value = 1;
var addOne = partial(add, 1);
var obj = {
    value: 2,
    addOne: addOne
}


console.log(obj.addOne(2));