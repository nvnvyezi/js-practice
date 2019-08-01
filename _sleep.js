/**
 * 实现一个 sleep 函数，比如 sleep(1000) 意味着等待1000毫秒
 * 可从 Promise、Generator、Async/Await 等角度实现
 */

/**normal */
function _sleep(waiting) {
  const start = Date.now();
  while (Date.now() <= waiting + start) {}
  console.log("耗时: " + (Date.now() - start));
}

/**Promise */
function _sleep(waiting) {
  return new Promise(resolve => setTimeout(resolve, waiting));
}

console.log("sleep --- start");
const start = Date.now();
_sleep(1000).then(() => {
  console.log("耗时: " + (Date.now() - start));
  console.log("sleep---end");
});

/**generator */
function* _sleep(waiting) {
  console.log("sleep --- start");
  yield new Promise(resolve => setTimeout(resolve, waiting));
}

const start = Date.now();
_sleep(1000)
  .next()
  .value.then(() => {
    console.log("耗时: " + (Date.now() - start));
    console.log("sleep --- end");
  });

/**async/await */
async function _sleep(waiting) {
  console.log("sleep --- start");
  const start = Date.now();
  await new Promise(resolve => setTimeout(resolve, waiting));
  console.log("耗时: " + (Date.now() - start));
  console.log("sleep --- end");
}
_sleep(1000);
