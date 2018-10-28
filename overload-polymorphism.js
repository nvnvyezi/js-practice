// 重载
// 重载可认为是静态的多态，静态联编，发生在编译阶段；

// 重载就是一组具有相同名字、不同参数列表的函数（方法）。

// 重载，函数特征之一，表现为在一个类中同名不同参的方法分别被调用会产生不同的结果。

// 参数个数
function add() {
  if (arguments.length == 2) {
    console.log('我进行两个数相加');
    return arguments[0] + arguments[1];
  }
  if (arguments.length == 3) {
    console.log('我进行三个数相加');
    return arguments[0] + arguments[1] + arguments[2];
  }
}

console.log(add(1, 2));
console.log(add(1, 2, 3));

// 参数类型
function type () {
  if (typeof arguments[0] === 'number') {
    console.log(`number,相加`)
    return arguments[0] + arguments[1];
  }
  if (typeof arguments[0] === 'string') {
    console.log('string');
    return `I am string, ${arguments[0]}+${arguments[1]}`;
  }
}

console.log(type(1, 2));
console.log(type('nvnv', 'yezi'));


// 多态
function Animal (name) {
  this.name = name;
}
Animal.prototype.say = () => {
  console.log('i am animal');
}

function Dog (name) {
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.say = function() {
  console.log(`i am ${this.name}`);
}

const ani = new Animal('animal');
const dog = new Dog('dog');

ani.say();
dog.say();