// function Mypromise(fn) {

//   let arr = [];
//   let status = 'pending';

//   this.then = function (fn) {
//     if (status === 'fulfilled') {
//       arr.push(fn);
//     }
//     return this;
//   }
//   function resolve(str) {
//     status = 'fulfilled';
//     setTimeout(() => {
//       arr.forEach(item => {
//         item(str);
//       })
//     }, 0);
//   }
//   fn(resolve);
// }

// const test = new Mypromise((resolve) => {
//   console.log(22);
//   resolve();
// }).then(() => {
//   console.log(333);
// }).then(() => {
//   console.log(444);
// })

// new Promise((resolve) => {
//   resolve(1)
// }).then (x => {
//   console.log(x)
// }).then(x => console.log(x))   
Promise.test = function (arr) {
  return new Promise((resolve, reject) => {
    let ar = [];
    let temp = null;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      item.then(x => {
        if (!temp) {
          temp = x;
        }
      }, x => ar.push(x))
    }
    setTimeout(() => {
      if (!temp) {
        reject(ar);
      } else {
        resolve(temp);
      }
    }, 0);
  })
}

let a = new Promise((resolve, reject) => {
  reject(2);
})
let b = new Promise((resolve, reject) => {
  reject(3);
})
Promise.test([a, b]).then(x => console.log(x, 222), x=> console.log(x, 3333));