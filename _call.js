Function.prototype._call = function(context = global, ...rest) {
  if (typeof this !== "function") {
    throw new TypeError("not function");
  }
  const _self = this;
  context.fn = _self;
  context.fn(...rest);
  delete context.fn;
};
