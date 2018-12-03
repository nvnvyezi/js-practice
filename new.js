function myNew () {
  let o = new Object();
  let constructor = Array.prototype.shift.call(arguments);
  o.__proto__ = constructor.prototype;
  let re = constructor.apply(o, arguments);
  return typeof re === 'object' ? re : o;
}
