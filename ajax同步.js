const arr = [1000, 2000, 3000];

const arr1 = arr.map(item => {
  return new Promise((resolve, reject) => {
    // $.ajax({
    //   url: item,
    //   type: 'get',
    //   success: () => {
    //     resolve();
    //   },
    //   error: () => {
    //     reject();
    //   }
    // })
    setTimeout(() => {
      if (item === 2000) {
        reject(2000)
      }
      resolve(item);
    }, item);
  })
})
let start = Date.now();
Promise.all(arr1).then((x) => {
  console.log(x, Date.now() - start);
}, x => console.log(x, 44, Date.now() - start))
.catch(x => console.log(x, Date.now() - start))