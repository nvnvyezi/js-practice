Function.prototype._bind = function(context, ...params) {
  if (typeof this !== "function") {
    throw new Error("no function");
  }
  const _self = this;
  function Parent() {}
  function Child(...rest) {
    return _self.apply(
      this instanceof Parent ? this : context,
      params.concat(rest)
    );
  }
  Parent.prototype = _self.prototype;
  Child.prototype = new Parent();
  return Child;
};
