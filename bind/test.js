// let b = require('./test1.js');
// let a = 'we';
//   console.log(b, 6);
// exports.a = a;

console.log('y'.charCodeAt());
let flag = true;
let f;
function next(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i].charCodeAt())
  }
  for (let i = str.length -1; i >=0; i--) {
    if (flag) {
      arr [i] = parseInt(arr[i]) + 1;
      if(parseInt(arr[i]) == 58){
        flag = true;
        arr[i] = 48;
        f = 1;
      } else if(parseInt(arr[i]) ==123) {
        flag = true;
        arr[i] = 97;
        f =2;
      }else if(parseInt(arr[i])==91) {
        flag = true;
        arr[i] = 65;
        f= 3;
      } else {
        flag  = false;
      }
    }
  }
  if (flag) {
    switch (f) {
      case 1:
        break;
      case 2:
      arr.unshift(97)
        break;
      case 1:
      arr.unshift(65);
        break;
      default:
        break;
    }
  }
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    arr1.push(String.fromCharCode(arr[i]))
  }
  return arr1.join('');
}
// console.log(next('erty'));

next('ZZZ99')