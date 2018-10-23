/**
 * 实现一个function 可以兼容所有类型的数据判断
 * 对于基本数据类型使用 typeof 检测，引用类型使用
 * Object.prototype.toString.call(obj)检测
 * 注意：IE6中，null 和 undefined 会被 Object.prototype.toString
 * 识别为[object Object]类型
 */

function checkType (variable) {
  if (!variable) {
    if (variable === null) {
      return 'null'
    } else {
      return 'undefined';
    }
  }
  let typeList = {}; 
  "Boolean Number String Function Array Date RegExp Object Error".split(" ").map(item => {typeList[`[object ${item}]`] = item.toLowerCase()});
  const toString = Object.prototype.toString;
  console.log(typeList[toString.call(variable)])
  return typeList[toString.call(variable)];
}

checkType(new Date());
checkType(/^23/);
checkType(() => console.log(2));