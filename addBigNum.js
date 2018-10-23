// 大数相加
function add (a, b) {
  const str1 = a.split('').reverse();
  const str2 = b.split('').reverse();
  // console.log(str1, str2);
  const len1 = a.length;
  const len2 = b.length;
  let str3 = [];
  let temp = 0;
  let i = 0;
  for(i = 0; i < len1 && i < len2; i++) {
    const num = parseInt(str1[i]) + parseInt(str2[i]) + temp;
    str3[i] = (num) % 10;
    temp =  Math.floor(num / 10);
  }

  if (len1 > len2) {
    while (i<len1){
      const num = parseInt(str1[i]) + temp;
      str3[i++] = (num) % 10;
      temp =  Math.floor(num / 10);
    }
  } else {
    while(i < len2){
      const num = parseInt(str2[i]) + temp;
      str3[i++] = (num) % 10;
      temp =  Math.floor(num / 10);
    }
  }
  if (temp) {
    str3[i] = temp;
  }
  const end = str3.reverse().join('');
  console.log(end);
}

add('2187638126874826348034732980', '923478371231312094839047834232')