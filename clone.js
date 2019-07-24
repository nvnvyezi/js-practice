function isTypeOf(obj, type) {
  const typeMap = {
    array: "Array",
    object: "Object",
    function: "Function",
    string: "String",
    null: "Null",
    undefined: "Undefined",
    boolean: "Boolean",
    number: "Number"
  };
  return Object.prototype.toString.call(obj) === `[object ${typeMap[type]}]`;
}

/**深度优先遍历拷贝 */
function DFSdeepClone(param, visitList = []) {
  if (isTypeOf(param, "function")) {
    return eval(`(${param.toString()})`);
  }
  if (!isTypeOf(param, "array") && !isTypeOf(param, "object")) {
    return param;
  }
  if (visitList.includes(param)) {
    return visitList[visitList.indexOf(param)];
  }
  visitList.push(param);
  let res = isTypeOf(param, "array") ? [] : {};
  for (const key in param) {
    if (param.hasOwnProperty(key)) {
      res[key] = DFSdeepClone(param[key], visitList);
    }
  }
  return res;
}
