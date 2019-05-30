/* es5 */
Array.prototype._reduce = function(fn, init) {
  if (!this.length) {
    throw new TypeError("Reduce of empty array with no initial value");
  }
  let res = init;
  if (!init) {
    res = this.shift();
  }
  for (let i = 0; i < this.length; i++) {
    res = fn.call(this, res, this[i], i, this);
  }
  return res;
};
