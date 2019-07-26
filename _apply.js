Function.prototype._apply = function(context, params) {
  if (typeof this !== "function") {
    throw new Error("not function");
  }
  context.fn = this;
  context.fn(...params);
  delete context.fn;
};
