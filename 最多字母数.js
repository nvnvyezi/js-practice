var str = "aaaabbbccccddfgh";

let map = new Map();

for (let i = 0; i < str.length; i++) {
  const element = str[i];
  if (map.has(element)) {
    let num = map.get(element);
    map.set(element, ++num);
  } else {
    map.set(element, 1);
  }
}

console.log(Array.from(map));
console.log(map.values())