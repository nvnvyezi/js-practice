// /* 每隔一定时间段执行函数 */
function repeat(fn, count, time) {
  return function(str) {
    while (count--) {
      const start = Date.now();
      while (Date.now() < start + time) {}
      fn(str);
    }
  };
}

function repeat2(fn, count, time) {
  return async function(str) {
    while (count--) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          fn(str);
          resolve();
        }, time);
      });
    }
  };
}

const test = repeat(console.log, 4, 3000);
const test2 = repeat2(console.log, 2, 2000);
// test("hello");
test2("a");
