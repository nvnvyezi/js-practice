function Sup(name) {
  this.name = name;
}
Sup.prototype.say = function () {
  console.log(this.name);
}

function Sub(name) {
  Sup.call(this, name);
}

function inherit(sub, sup) {
  let o = Object.create(sup.prototype);
  o.constructor = sub;
  sub.prototype = o;
}

// Sub.prototype = new Sup();
inherit(Sub, Sup);
Sub.prototype.sayis = function () {
  console.log(this.name);
}

const test = new Sub();