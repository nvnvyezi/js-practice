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

// function proxy(a, b) {
//   Object.defineProperty(a, 'name', {
//     configurable: true,
//     enumerable: true,
//     set: val => {
//       b.name =  val;
//     }
//   })
// }

// var Animal = {};
// var Cat = {
//   name: 'Hoe'
// };

// proxy(Animal, Cat);
// Animal.name = 'ssd';

// console.log(Cat.name);

let o = {
  a: 1,
  b: '22'
}
let obj = new Proxy(o, {
  get: function (obj, item) {
    if (item in obj) {
      return obj[item];
    } else {
      throw new Error('不存在');
    }
    // return 2;
  }
})

console.log(obj.a, obj.b);