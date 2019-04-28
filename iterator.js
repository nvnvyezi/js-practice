/* for-of迭代生成器 */

function* generator(i) {
  yield i;
  yield i + 10;
}

// for (const value of generator(1)) {
//   console.log(value);
// }
/* 斐波那契 */
function* fibonacci(count) {
  let [prev, curr] = [0, 1];
  let start = -1;
  while (count > start) {
    start++;
    [prev, curr] = [curr, prev + curr];
    yield prev;
  }
}

// for (const value of fibonacci(1)) {
//   console.log(value);
// }

/* 实现迭代对象 */
const iterable = {
  [Symbol.iterator]() {
    return {
      count: 0,
      next() {
        if (this.count === 5) {
          return { value: this.count, done: true };
        }
        return { value: this.count++, done: false };
      }
    };
  }
};

// for (const value of iterable) {
//   console.log(value);
// }

function iteratorFn(letter) {
  this.letter = letter || "A";
}

iteratorFn.prototype[Symbol.iterator] = function() {
  const self = this;
  return {
    next() {
      if (self.letter === "F") {
        return {
          value: "f",
          done: true
        };
      }
      self.letter = String.fromCharCode(self.letter.charCodeAt(0) + 1);
      return {
        value: self.letter,
        done: false
      };
    }
  };
};

const node1 = new iteratorFn("E");

for (const key of node1) {
  console.log(key);
}
