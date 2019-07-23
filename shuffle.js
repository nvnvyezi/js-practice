/**数组乱序 */

// function shuffle(arr) {
// return arr.sort(() => Math.random() - 0.5);
// }

// function shuffle(arr) {
//   const res = [];
//   while (arr.length) {
//     const random = Math.floor(Math.random() * arr.length);
//     res.push(arr[random]);
//     arr.splice(random, 1);
//   }
//   return res;
// }

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const random = ~~(Math.random() * (arr.length - i) + i);
    if (random !== i) {
      let temp = arr[i];
      arr[i] = arr[random];
      arr[random] = temp;
    }
  }
  return arr;
}

console.log(shuffle([1, 4, 7, 32, 7, 35, 85, 2, 76, 32]));
