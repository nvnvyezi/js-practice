function _instanceof(left, right) {
  while (left.__proto__ && right.prototype) {
    if (left.__proto__ === right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
  return false;
}
