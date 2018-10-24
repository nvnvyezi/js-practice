/**实现：ES5实现一个Animal类和Dog类，
 * 最终效果如下：
 * a = new Animal('xx');
 * console.log(a.name); // xx
 * console.log(a.say); // 不打印
 * b = new Dog('Doggy');
 * console.log(b.name); // Doggy
 * console.log(b.say); // Doggy say wangwang
 */

function Animal(name) {
  this.name = name;
}

function Dog (name) {
  Animal.call(this, name);
  Dog.prototype.say = (function(name){
    return `${name} say wangwang`;
  })(this.name)
  // Dog.prototype.say = `${this.name} say wangwang`
}

var a = new Animal('xx');
console.log(a.name);
console.log(a.say);

var b = new Dog('Doggy');
console.log(b.name);
console.log(b.say);