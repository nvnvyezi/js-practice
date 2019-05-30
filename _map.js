/* es5 */
Array.prototype._map = function(fn, context) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res[i] = fn.call(context, this[i], i, this);
  }
  return res;
};

/* reduce */
Array.prototype.__map = function(fn, context) {
  return this.reduce((pre, cur, index, src) => {
    return pre.concat(fn.call(context, cur, index, src));
  }, []);
};
