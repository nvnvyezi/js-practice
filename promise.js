function Mypromise(fn) {

  let arr = [];
  let status = 'pending';

  this.then = function (fn) {
    if (status === 'fulfilled') {
      arr.push(fn);
    }
    return this;
  }
  function resolve(str) {
    status = 'fulfilled';
    setTimeout(() => {
      arr.forEach(item => {
        item(str);
      })
    }, 0);
  }
  fn(resolve);
}

const test = new Mypromise((resolve) => {
  console.log(22);
  resolve();
}).then(() => {
  console.log(333);
}).then(() => {
  console.log(444);
})