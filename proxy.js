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

function proxy(a, b) {
  Object.defineProperty(a, 'name', {
    configurable: true,
    enumerable: true,
    set: val => {
      b.name =  val;
    }
  })
}

var Animal = {};
var Cat = {
  name: 'Hoe'
};

proxy(Animal, Cat);
Animal.name = 'ssd';

console.log(Cat.name);