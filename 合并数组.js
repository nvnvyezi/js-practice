let arr = [1, 3, 7, 9, 15 ,17];
let arr1 = [1, 2, 4, 6, 10, 20, 30];

let arr2 = [];

let len1 = arr.length;
let len2 = arr1.length;
let i = 0, j = 0;
while (i < len1 && j < len2) {
  if (arr[i] <= arr1[j]) {
    arr2.push(arr[i++]);
  } else {
    arr2.push(arr1[j++]);
  }
}

if (i < arr.length) {
  arr2 = arr2.concat(arr.slice(i));
}
if (j < arr1.length) {
  arr2 = arr2.concat(arr1.slice(j));
}
console.log(arr2)
