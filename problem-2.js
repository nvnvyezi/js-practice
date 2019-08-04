/**
 * 某公司 1 到 12 月份的销售额存在一个对象里面，如下：{1:222, 2:123, 5:888}，
 * 请把数据处理为如下结构：
 * [222, 123, null, null, 888, null, null, null, null, null, null, null]。
 */
function transform(obj) {
  const res = Array(13).fill(null);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = obj[key];
    }
  }
  return res.slice(1);
}

function transform(obj) {
  return Array.from({ length: 13 })
    .map((item, index) => (obj[index] ? obj[index] : null))
    .slice(1);
}

function transform(obj) {
  return Array.from({ length: 13 }, (item, index) => obj[index] || null).slice(
    1
  );
}

function transform(obj) {
  return Object.assign(Array(13).fill(null), obj).slice(1);
}

const obj = { 1: 222, 2: 123, 5: 888 };
console.log(transform(obj));
