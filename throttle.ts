function throttle(
  func: (args?: string) => void,
  wait: number,
  immediately: boolean
) {
  let timerId = 0;
  let startTimer = 0;
  return function(...rest: string[]) {
    const now = Date.now();
    if (!startTimer && !immediately) {
      startTimer = now;
    }
    const remaining = wait - (now - startTimer);
    if (!startTimer && remaining <= 0) {
      if (timerId) {
        clearTimeout(timerId);
      }
      startTimer = now;
      func(...rest);
    } else if (!timerId) {
      timerId = setTimeout(() => {
        timerId = null;
        func(...rest);
      }, remaining);
    }
  };
}

function fn() {
  console.log("throttle");
}

const thro = throttle(fn, 2000, true);

thro();
setTimeout(thro, 500);
setTimeout(thro, 500);
