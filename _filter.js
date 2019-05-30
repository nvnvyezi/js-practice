/* es5 */
Array.prototype._filter = function(fn, context) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    const temp = fn.call(context, this[i], i, this);
    if (temp) {
      res.push(this[i]);
    }
  }
  return res;
};

/* reduce */
Array.prototype.__filter = function(fn, context) {
  return this.reduce((pre, cur, index, src) => {
    const temp = fn.call(context, cur, index, src);
    if (temp) {
      pre.push(cur);
    }
    return pre;
  }, []);
};
