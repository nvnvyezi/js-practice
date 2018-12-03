var s = '    sss   ';
console.log(s);
let flag = true;
for (let i = 0; i < s.length; i++) {
  const element = s[i];
  if (element === ' ' && flag) {
    s = s.slice(i + 1);
    i = -1;
  } else if (element !== ' ' && flag) {
    flag = false;
  } else if (element === ' ' && !flag) {
    s= s.slice(0, i);
    break;
  }
}

console.log(s, s.length)

function trim(str) {
  if (str && typeof str === "string") {
      return str.replace(/(^\s*)|(\s*)$/g,""); //去除前后空白符
  }
}