/* 封装一个函数，参数是定时器的时间*/
function sleep(ms) {
  const start = Date.now();
  const end = start + ms;
  while (Date.now() < end) {}
  console.log(`耗时${(Date.now() - start) / 1000}s`);
  return 23;
}
// sleep(1500);

function promiseSleep(ms) {
  return new Promise(resolve => {
    const start = Date.now();
    setTimeout(() => {
      resolve(start);
    }, ms);
  });
}

// promiseSleep(1500).then(start => {
//   console.log(`耗时${(Date.now() - start) / 1000}s`);
// });

async function asyncSleep(ms) {
  const start = await promiseSleep(ms);
  console.log(`耗时${(Date.now() - start) / 1000}s`);
}

asyncSleep(3000);
