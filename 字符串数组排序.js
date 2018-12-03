var input = 'Hello my best friend';
function reverse(str){
  let arr = str.split(' ');
  // arr = arr.map((item) => {
  //   return item.split('').reverse().join('');
  // })
  arr.reverse();
  return arr.join(' ');
};
console.log(reverse(input));//'friend best my Hello'