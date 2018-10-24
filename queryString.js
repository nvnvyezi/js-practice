function del (str, delKey) {
  str = str.split('&');
  let map = new Map();
  str.forEach(item => {
    let arr = item.split('=');
    map.set(arr[0], arr[1]);
  });
  map.forEach((item, key) => {
    console.log(item, key);
    if (key === delKey) {
      map.delete(delKey);
    }
  })
  let res = [];
  map.forEach((item, key) => {
    res.push(`${key}=${item}`);
  })
  return res.join('&');
}

console.log(del('a=1&b=2&c=3', 'b'));