const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, {a: 'end'}]]]], ['a', 'b', ['c', 'd', ['e', 'end']]]];

// reduce
function flatten (arr) {
  let res = [];
  console.log(res);
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = [...res, ...flatten(arr[i])];
    } else {
      res.push(arr[i])
    }
  }
  return res;
}

function flatten (arr) {
  return arr.reduce((init, item) => {
    return init.concat(Array.isArray(item) ? flatten(item) : item);
  }, [])
}

console.log(flatten(arr));