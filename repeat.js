function repeat(func, times, wait) {
  return function (str) {
    while (times--) {
      let start = Date.now();
      while (Date.now() < start + wait) {
        
      }
      func(str);
    }
  }
}

const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc('hello');