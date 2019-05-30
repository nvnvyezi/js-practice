function _new() {
  const constructor = Array.prototype.shift.call(arguments);
  const o = Object.create(constructor.prototype);
  const res = constructor.apply(o, arguments);
  return typeof res === "object" ? res : o;
}
