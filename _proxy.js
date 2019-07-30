/**
 * 要求：
 * function proxy(a, b){
 *  //TODO
 * }
 * var Animal = {};
 * var Cat = {
 *  name: 'Hoe'
 * };
 * proxy(Animal, Cat);
 * Animal.name = 'Tom';
 * console.log(Cat.name); //Tom
 */

var Animal = {};
var Cat = {
  name: "Hoe"
};
function _proxy(obj1, obj2) {
  return new Proxy(obj1, {
    set: function(target, key, value, receiver) {
      console.log(target, key, value, receiver);
      Reflect.set(obj2, key, value);
    }
  });
}
Animal = _proxy(Animal, Cat);
Animal.name = "Tom";
console.log(Cat.name);

function _proxy(obj1, obj2) {
  Reflect.defineProperty(obj1, "name", {
    configurable: true,
    enumerable: false,
    get() {
      return "this";
    },
    set: val => {
      obj2.name = val;
    }
  });
}

_proxy(Animal, Cat);
Animal.name = "Tom";

console.log(Cat.name);
