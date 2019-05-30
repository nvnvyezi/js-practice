Array.prototype._flat = function(level = 1) {
  let res = this;
  if (level !== Infinity) {
    for (let i = 0; i < level; i++) {
      res = res.reduce((pre, item) => {
        if (Array.isArray(item)) {
          return [...pre, ...item];
        } else {
          return [...pre, item];
        }
      }, []);
    }
  } else {
    return this.reduce(
      (pre, cur) =>
        Array.isArray(cur) ? pre.concat(cur._flat(Infinity)) : pre.concat(cur),
      []
    );
  }
  return res;
};
