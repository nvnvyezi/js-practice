// 大数相加
function add(a, b) {
  const str1 = a.split("").reverse();
  const str2 = b.split("").reverse();
  // console.log(str1, str2);
  const len1 = a.length;
  const len2 = b.length;
  let str3 = [];
  let temp = 0;
  let i = 0;
  for (i = 0; i < len1 && i < len2; i++) {
    const num = parseInt(str1[i]) + parseInt(str2[i]) + temp;
    str3[i] = num % 10;
    temp = Math.floor(num / 10);
  }

  if (len1 > len2) {
    while (i < len1) {
      const num = parseInt(str1[i]) + temp;
      str3[i++] = num % 10;
      temp = Math.floor(num / 10);
    }
  } else {
    while (i < len2) {
      const num = parseInt(str2[i]) + temp;
      str3[i++] = num % 10;
      temp = Math.floor(num / 10);
    }
  }
  if (temp) {
    str3[i] = temp;
  }
  const end = str3.reverse().join("");
}

function add(str, str2) {
  let len1 = str.length;
  let len2 = str2.length;
  if (len1 > len2) {
    str2 = str2.padStart(len1, "0");
  }
  if (len2 > len1) {
    str = str.padStart(len2, "0");
  }
  const arr = str.split("").reverse();
  const arr2 = str2.split("").reverse();
  let l1 = 0;
  let l2 = 0;
  let carry = 0;
  while (arr[l1] && arr2[l2]) {
    let temp = +arr[l1] + +arr2[l2] + carry;
    arr[l1] = temp % 10;
    carry = ~~(temp / 10);
    l1++;
    l2++;
  }
  if (carry) {
    arr.push(carry);
  }
  return arr.reverse().join("");
}

add("99", "110");
