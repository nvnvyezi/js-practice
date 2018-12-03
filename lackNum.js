let arr = [4,3,2,7,8,2,3,1];

function search (arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    const element = Math.abs(arr[i]) - 1;
    arr[element] = arr[element] > 0 ? -arr[element] : arr[element];
  }
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 0) {
      a.push(i+ 1);
    }
  }
  return a;
}

console.log(search(arr));