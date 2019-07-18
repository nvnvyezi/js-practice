function debounce(
  func: (arg?: string) => void,
  wait: number,
  immediately: boolean
) {
  let timerId = 0;

  const later = () =>
    setTimeout(() => {
      timerId = null;
      console.log(Date.now() - startTimer);
      if (!immediately) {
        func();
      }
    }, wait);

  return function() {
    if (!timerId) {
      timerId = later();
      if (immediately) {
        func();
      }
    } else {
      clearTimeout(timerId);
      timerId = later();
    }
  };
}
function fun(name = "test") {
  console.log(`name: ${name}`);
}
let startTimer = Date.now();
const test = debounce(fun, 2000, true);

test();

setTimeout(test, 1500);
