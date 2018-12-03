let arr = [];
function LazyMan(str) {
  let a = function () {
    console.log(`Hi! This is ${str}!`);
  }
  arr.push(a);
  setTimeout(() => {
    arr.forEach(item => {
      item();
    });
  }, 0);
  return LazyMan;
}
LazyMan.sleep = function (num) {
  let a = function () {
    let start = Date.now();
    while (Date.now() < num + start) {
    };
    console.log(`Wake up after ${num}`);
  }
  arr.push(a);
  return this;
}
LazyMan.eat = function (str) {
  let a = function () {
    console.log(`Eat ${str}`);
  }
  arr.push(a);
  return this;
}
LazyMan.sleepFirst = function (num) {
  let a = function () {
    let start = Date.now();
    while (Date.now() < num * 1000 + start) {
    };
    console.log(`sleepFirst ${num}`);
  }
  arr.unshift(a);
  return this;
}

LazyMan('Hank');
LazyMan('Hank').sleep(5000).eat('dinner');
LazyMan('Hank').eat('dinner').eat('supper');
LazyMan('Hank').sleepFirst(5).eat('supper');

