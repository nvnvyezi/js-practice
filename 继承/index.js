//原型

// function Pf () {
//   this.a = [1];
// }
// Pf.prototype.sayPf = function (num) {
//   console.log(this, this.a, num)
// }

// function Ps () {
//   Pf.call(this);
// }

// Ps.prototype = new Pf();

// Ps.prototype.sayPs = () => {
//   console.log(this.b);
// }

// let test = new Ps();
// let test1 = new Ps();
// test.a.push(2);

// console.log(test.a, test1.a);

// 构造函数
// function Pf (a) {
//   this.a = a;
// }

// function Ps () {
//   Pf.call(this, 2);
//   this.b = 3;
// }

// let test = new Ps();

// console.log(test.a, test.b);


// 组合继承
// function F(num) {
//   this.arr = [1];
//   this.num = num;
// }
// F.prototype.sayArr = function () {
//   return this.arr;
// }
// F.prototype.sayNum = function (params) {
//   return this.num;
// }

// function S(params) {
//   F.call(this, 5);
//   this.snum = 4;
// }
// S.prototype = new F();
// S.prototype.saySnum = function () {
//   return this.snum;
// }

// let test = new S();
// let test1 = new S();
// test.arr.push(4);
// console.log(test.sayArr(), test1.sayArr(), test.sayNum(), test1.sayNum(), test.saySnum(), test1.saySnum());

// 原型式继承
function object (o) {
  function P() {};
  P.prototype = o;
  return new P();
}

let obj = {
  name: 'ppg',
  arr: [1,2]
}

let test = object(obj);
let test1 = object(obj);

test.name = 'test';
test1.name = 'test1';

test.arr.push(3);
test1.arr.push(4);

// let obj = {
//   name: 'ppg',
//   arr: [1,2]
// }

// let test = Object.create(obj);
// let test1 = Object.create(obj);

// test.arr.push(3)

//寄生式继承

// function createAnother (obj) {
//   let o = Object.create(obj);
//   o.say = function (params) {
//     return '1123';
//   }
//   return o;
// }

// let obj = {
//   name: 'ppg',
//   arr: [1,2]
// }

// let o = createAnother(obj);

// 寄生组合式继承

// function inferitproto (s, f) {
//   let o = Object.create(f.prototype);
//   o.constructor = s;
//   s.prototype = o;
// }

// function Pf () {
//   this.name = '23';
//   this.a = [1];
// }
// Pf.prototype.sayPf = function () {
//   console.log(this.name, this.a)
// }

// function Ps () {
//   Pf.call(this);
//   this.num = 888;
// }
// inferitproto(Ps, Pf);

// Ps.prototype.say = function () {
//   return this.num;
// }

// let test = new Ps();