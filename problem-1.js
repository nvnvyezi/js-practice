/**
 * var a = ?;
 * if(a == 1 && a == 2 && a == 3){
 *  	console.log(1);
 * }
 */

var a = {
  count: 1,
  toString() {
    return this.count++;
  }
};

var a = {
  count: 1,
  [Symbol.toPrimitive]() {
    return this.count++;
  }
};
var a = [1, 2, 3];
a.toString = function() {
  return this.shift();
};

Object.defineProperty(global, "a", {
  configurable: true,
  enumerable: false,
  get() {
    return (this.value = this.value ? (this.value += 1) : 1);
  }
});
var a = Object.create({
  count: 0,
  valueOf: function() {
    return ++this.count;
  }
});

var a = {
  fn: (function*() {
    yield 1;
    yield 2;
    yield 3;
  })(),
  valueOf() {
    return this.fn.next().value;
  }
};
if (a == 1 && a == 2 && a == 3) {
  console.log(true);
}
