let str = 'abcba';
let arr = str.split('');
arr.sort();
console.log(arr)
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (i === 0) {
    if (element !== arr[i+1]) {
      // return element;
      console.log(element, 1)
      break;
    }
  } else if (i === arr.length - 1) {
    if (element !== arr[i - 1]) {
      // return element;
      console.log(element, 1)
      break;
    }
  } else {
    if (element !== arr[i - 1] && element !== arr[i + 1]) {
      // return element;
      console.log(element, 1)
      break;
    }
  }
}

