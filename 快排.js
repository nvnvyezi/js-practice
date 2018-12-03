var arr = [2, 3, 4 ,1 ,5 ,6 , 2, 4, 9];

function sort(left, right) {
  let base = arr[left];
  while (left < right) {    
    while (left < right && arr[right] > base) {
      right--;
    }
    if (left < right) {
      arr[left++] = arr[right];
    }
    while (left < right && arr[left] < base) {
      left++;
    }
    if (left < right) {
      arr[right--] = arr[left];
    }
  }
  arr[left] = base;
  return left;
}

function start(left, right) {
  if (left > right) {
    return;
  }
  let base = sort(left, right);
  start(left, base - 1);
  start(base + 1, right);
}
start(0, 8);


console.log(arr);