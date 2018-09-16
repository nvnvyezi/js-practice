// // // // // // Function.prototype.bind1 = function(context) {
// // // // // //   if (typeof this !== "function") {
// // // // // //     throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
// // // // // //   }
// // // // // //   let self = this;
// // // // // //   let args = Array.from(arguments).slice(1);
// // // // // //   let Fn = function () {};
// // // // // //   let bound = function () {
// // // // // //     let ctxArgs = Array.from(arguments);
// // // // // //     self.apply(this instanceof self ? this : context, args.concat(ctxArgs));
// // // // // //   }
// // // // // //   Fn.prototype = this.prototype;
// // // // // //   bound.prototype = new Fn();
// // // // // //   return bound;
// // // // // // }


// // // // // // let obj = {
// // // // // //   name: 'sd'
// // // // // // }

// // // // // // function say (num, age) {
// // // // // //   console.log(this.name, num, age)
// // // // // // }

// // // // // // say.bind1(obj, 'sd', 16);
// // // // // // // var a = 20;
// // // // // // // function fn() {
// // // // // // //     console.log(this.a, this);
// // // // // // // }
// // // // // // // fn();

// // // // // // // var a = 20;
// // // // // // // function fn() {
// // // // // // //   var b = 10;
// // // // // // //   console.log(this)
// // // // // // //     function foo() {
// // // // // // //         console.log(this.a, this);
// // // // // // //     }
// // // // // // //     foo();
// // // // // // // }
// // // // // // // fn();
// // // // // // // var a = 20;
// // // // // // // var ob = {
// // // // // // //     a: 10,
// // // // // // //     c: this.a + 20,
// // // // // // //     fn: function () {
// // // // // // //         return this.a;
// // // // // // //     }
// // // // // // // }

// // // // // // // console.log(ob.c);
// // // // // // // console.log(ob.fn());
// // // // // // // var a = 20;
// // // // // // // function foo () {
// // // // // // //     var a = 1;
// // // // // // //     var obj = {
// // // // // // //         a: 10,
// // // // // // //         c: this.a + 20,
// // // // // // //         fn: function () {
// // // // // // //             return this.a;
// // // // // // //         }
// // // // // // //     }
// // // // // // //     return obj.c;

// // // // // // // }
// // // // // // // console.log(foo());    // ？
// // // // // // // console.log(window.foo());  // ?
// // // // // // // function foo() {
// // // // // // //   console.log(this.a)
// // // // // // // }

// // // // // // // function active(fn) {
// // // // // // //   fn(); // 真实调用者，为独立调用
// // // // // // // }

// // // // // // // var a = 20;
// // // // // // // var ob = {
// // // // // // //   a: 10,
// // // // // // //   getA: foo
// // // // // // // }

// // // // // // // active(ob.getA);

// // // // // // // var a=function(){
// // // // // // //   console.log("a")
// // // // // // //   console.log('a:', typeof this, this);
// // // // // // //   if(typeof this == 'function'){
// // // // // // //       this()
// // // // // // //   }
// // // // // // // }

// // // // // // // var b=function(){
// // // // // // //   console.log("b")
// // // // // // //   console.log('b:', typeof this, this);
// // // // // // //   if(typeof this == 'function'){
// // // // // // //       this()
// // // // // // //   }
// // // // // // // }

// // // // // // // var c=function(){
// // // // // // //   console.log("c")
// // // // // // //   console.log('c:', typeof this);
// // // // // // //   if(typeof this == 'function'){
// // // // // // //       this()
// // // // // // //   }
// // // // // // // }

// // // // // // // var d=a.bind(b)
// // // // // // // var e=d.bind(c)
// // // // // // // d()
// // // // // // // console.log(22, d)
// // // // // // // e()

// // // // // // // var a=function(){
// // // // // // //   console.log("a", this)
// // // // // // //   if(this){
// // // // // // //       this()
// // // // // // //   }
// // // // // // // }

// // // // // // // var b=function(){
// // // // // // //   console.log("b")
// // // // // // // }

// // // // // // // var c=function(){
// // // // // // //   console.log("c")
// // // // // // // }

// // // // // // // var d=a.bind(b)
// // // // // // // var e=d.bind(c)
// // // // // // // // d()
// // // // // // // // e()


// // // // // // // var f=function(){
// // // // // // //   var obj=b
// // // // // // //   obj.func=a
// // // // // // //   obj.func()
// // // // // // // }

// // // // // // // var g=function(){
// // // // // // //   var obj=c
// // // // // // //   obj.func=f
// // // // // // //   obj.func()
// // // // // // // }

// // // // // // // f()
// // // // // // // g()
// // // // // // function Otaku (name, age) {
// // // // // //   this.name = name;
// // // // // //   this.age = age;

// // // // // //   this.habit = 'Games';
// // // // // // }

// // // // // // Otaku.prototype.strength = 60;

// // // // // // Otaku.prototype.sayYourName = function () {
// // // // // //   console.log('I am ' + this.name);
// // // // // // }

// // // // // // function objectFactory() {
// // // // // //   console.log(arguments)
// // // // // //   var obj = new Object(),
// // // // // //   Constructor = [].shift.call(arguments);
// // // // // //   console.log(Constructor, Constructor.prototype)
// // // // // //   obj.__proto__ = Constructor.prototype;
// // // // // //   Constructor.apply(obj, arguments);
// // // // // //   return obj;
// // // // // // };

// // // // // // var person = objectFactory(Otaku, 'Kevin', '18')

// // // // // // console.log(person.name) // Kevin
// // // // // // console.log(person.habit) // Games
// // // // // // console.log(person.strength) // 60

// // // // // // person.sayYourName(); // I am Kevin


// // // // // const timeout = ms => new Promise((resolve, reject) => {
// // // // // 	setTimeout(() => {
// // // // // 		resolve();
// // // // // 	}, ms);
// // // // // });

// // // // // const ajax1 = () => timeout(2000).then(() => {
// // // // // 	console.log('1');
// // // // // 	return 1;
// // // // // });

// // // // // const ajax2 = () => timeout(1000).then(() => {
// // // // // 	console.log('2');
// // // // // 	return 2;
// // // // // });

// // // // // const ajax3 = () => timeout(2000).then(() => {
// // // // // 	console.log('3');
// // // // // 	return 3;
// // // // // });

// // // // // const mergePromise = ajaxArray => {
// // // // //   // 在这里实现你的代码
// // // // //   // return new Promise((resolve, reject) => {
// // // // //   //   let p = new Promise((resolv, reject) => {
// // // // //   //     resolv(
// // // // //   //     ajaxArray.reduce((previousValue, currentValue) => {
// // // // //   //       return previousValue.then((data) => {
// // // // //   //         return new Promise((reso, reject) => {

// // // // //   //           reso(currentValue());
// // // // //   //         })
// // // // //   //       })
// // // // //   //     }, Promise.resolve()))

// // // // //   //   })
// // // // //   //   p.then(() => {
// // // // //   //     resolve([1,2,3]);
// // // // //   //   })
// // // // //   // })

// // // // //   item = function() {
// // // // //     timeout(2000).then(() => {
// // // // //       console.log('1');
// // // // //       return 1;
// // // // //     });
// // // // //   }

// // // // //   let a = Promise.resolve();
// // // // //   ajaxArray.forEach(item => {
// // // // //     // console.log(item);
// // // // //     a = a.then(item);

// // // // //     // a = a.then(() => {
// // // // //     //   (() => timeout(2000).then(() => {
// // // // //     //     console.log('1');
// // // // //     //     return 1;
// // // // //     //   }))();
// // // // //     // });
// // // // //     a = a.then(function() {
// // // // //       item();
// // // // //     })
// // // // //   })
// // // // //   return a;
// // // // //   // return new Promise((resolve, reject) => {
// // // // //   //   let arr = [];
// // // // //   //   new Promise((resolve,reject) => {
// // // // //   //     ajaxArray[0]().then(num => {
// // // // //   //       resolve(num);
// // // // //   //     });
// // // // //   //   }).then(num => {
// // // // //   //     arr[0] = num;
// // // // //   //     Promise.all([ajaxArray[1](), ajaxArray[2]()]).then(data => {
// // // // //   //       arr = [arr[0], data[0], data[1]];
// // // // //   //       resolve(arr);
// // // // //   //     })
// // // // //   //   });
// // // // //   // })

// // // // // };
// // // // //   // Promise.all([ajax1(), timeout(1000).then(()=>{return ajax2()}), ajax3()]).then((data)=>{
// // // // //   //   console.log(data);
// // // // //   // })

// // // // // mergePromise([ajax1, ajax2, ajax3]).then(data => {
// // // // // 	console.log('done');
// // // // // 	console.log(data); // data 为 [1, 2, 3]
// // // // // });

// // // // // // ajax1()

// // // // // // 分别输出
// // // // // // 1
// // // // // // 2
// // // // // // 3
// // // // // // done
// // // // // // [1, 2, 3]

// // // // function search(arr) {
// // // //   let j = 0;
// // // //   let map = new Map();
// // // //   arr = arr.sort();
// // // //   console.log(arr)
// // // //   for (let i = 0; i < arr.length; i++) {
// // // //     if (arr[j] !== arr[i]) {
// // // //       map.set(arr[j], i-j);
// // // //       j = i;
// // // //     }
// // // //   }
// // // //   console.log(map, Math.max.apply(null ,Array.from(map.values())));
// // // // }

// // // // search([3,1,2,1,3,5,2,2,1,3,4]);
// // // // console.log(Math.max(3,1,2,1,3,5,2,2,1,3,4))

// // // // Object.prototype.execArr = function (params) {
// // // //   var arr = this;
// // // //   var n = {}, r = [], len = arr.length, val, type;
// // // //   for (var i = 0; i < arr.length; i++) {
// // // //     val = arr[i];
// // // //     type = typeof val;
// // // //     if (!n[val]) {
// // // //       n[val]=[type];
// // // //       r.push(val);
// // // //     } else if (n[val].indexOf(type) < 0) {
// // // //       n[val].push(type);
// // // //       r.push(val)
// // // //     }
// // // //   }
// // // //   return r;
// // // // }

// // // // var obj = [1,5,4,4,5,6,7,3,3,2];
// // // // console.log(obj.execArr())

// // // function get(url, params) {
// // //   var arr = [];
// // //   if(typeof params === 'object'){
// // //       for(var param in params){
// // //           arr.push(encodeURIComponent(param) + '=' + encodeURIComponent(params[param]));
// // //       }
// // //       arr = arr.join('&');    //将拼接成功的字符串数组继续赋给arr数组
// // //   }
// // //   return `${url}?${arr}`
// // // }
// // // // console.log(get('12', {a:1, b:2}))

// // // function del(obj, key) {
// // //   let arr = obj.split('&');
// // //   let flag;
// // //   arr.forEach((item, index) => {
// // //     arr1 = item.split('=');
// // //     if (key == arr1[0]) {
// // //       flag = index;
// // //     }
// // //   });
// // //   arr.splice(flag, 1);
// // //   return arr.join('&');
// // // }
// // // // console.log( del('a=1&b=2', 'b'))




// // // function fn(n) {
// // //   let arr = [];
// // //   for (let i = 0; i < n; i++) {
// // //     let num = Math.floor(Math.random() * 33) + 2;
// // //     if (arr.toString().includes(num)) {
// // //       i--;
// // //     } else {
// // //       arr.push(num)
// // //     }
// // //   }
// // //   return arr;
// // // }

// // // console.log(fn(6));

// // // let obj = {p:1, q: {r: 3}};
// // // let obj1 = {p:1, q: {r: 3}};
// // // let obj2 = {p:1, q: {s: 3}};

// // // function f(a, b) {
// // //   // 0
// // //   if (a === b) {
// // //     return a !==0 || 1 / a === 1 / b;
// // //   }
// // //   if (a == null || b == null) {
// // //     return false;
// // //   }
// // //   if (a !== a) {
// // //     return b !== b;
// // //   }
// // //   if (typeof a !== 'function' && typeof a !== 'object' && typeof b != 'object') {
// // //     return false;
// // //   }

// // // }

// // // f(0, 0);
// // // f(obj, obj2);

// // // let toString = Object.prototype.toString;

// // // function deepEq(a, b, aStack, bStack) {
// // //   let className = toString.call(a);
// // //   if (className !== toString.call(b)) {
// // //     return false;
// // //   }
// // //   switch (className) {
// // //     case '[object RegExp]':
// // //     case '[object String]':
// // //         return '' + a === '' + b;
// // //     case '[object Number]':
// // //         if (+a !== +a) return +b !== +b;
// // //         return +a === 0 ? 1 / +a === 1 / b : +a === +b;
// // //     case '[object Date]':
// // //     case '[object Boolean]':
// // //           return +a === +b;
// // //   }
// // // }

// // // var a = 1;
// // // var b = new Number(1);

// // // console.log('' + a ,'' + b) // true

// // var moveDiv = document.getElementById('moveDiv');
// // var out = document.getElementById('ou');
// // var disTop;
// // var disLeft;
// // var t, l;
// // var ot,ol,or,ob;

// // function mousedown() {
// //   disTop = event.clientY;
// //   disLeft = event.clientX;
// //   var a = moveDiv.getBoundingClientRect();  //获取红色框的属性，高宽　top left right bottom 6个值
// //   var b = ou.getBoundingClientRect();
// //   ot=b.top;
// //   ol = b.left;
// //   or=b.right;
// //   ob = b.bottom;
// //   t = a.top;
// //   l = a.left;
// //   document.addEventListener('mousemove', mousemove, false);
// //   document.addEventListener('mouseup', mouseup, false);
// // }

// // function mousemove() {
// //   var realTop = event.clientY - disTop + t ;
// //   var realLeft = event.clientX - disLeft + l;
// //   // console.log(realTop, realLeft)
// //   if (realTop < ot || realTop + 200 > ob || realLeft < ol || realLeft + 200 > or) {
// //     return ;
// //   }
// //   //你那个写错了　　　ｄｏｗｎ里面的，继续写　
// //  // 那两个是全局变量  disTop  disLeft
// //   moveDiv.style.left = realLeft + 'px';
// //   moveDiv.style.top = realTop + 'px';
// // }

// // function mouseup() {
// //   document.removeEventListener('mousemove', mousemove, false)
// // }
// // document.addEventListener('mousedown', mousedown, false);


// // function add(a , b){
// //   var str1 = a.split("").reverse();
// //   var str2 = b.split("").reverse();
// //   var str1len = str1.length;
// //   var str2len = str2.length;
// //   if(str1len > str2len )
// //   for (let i = 0; i < str1len - str2len; i++) {
// //     str2.push('0')
// //   }
// //   if(str1len < str2len )
// //   for (let i = 0; i < str2len - str1len; i++) {
// //     str1.push('0')
// //   }
// //   var addNumber = 0;
// //   var i = 0;
// //   var result = [];
// //   // console.log(str1len, 99999)
// //   for(i = 0; i < str2len;i++) {
// //     // console.log((parseInt(str1[i])+parseInt(str2[i])+addNumber))
// //       result[i] =  (parseInt(str1[i])+parseInt(str2[i])+addNumber)%10;//看是否进位，对10取余就是进位后的结果
// //       // console.log(result[i], 000)
// //       addNumber = parseInt((parseInt(str1[i])+parseInt(str2[i])+addNumber)/10);//看进位是几，9以内就为0,10以上就为1
// //       // console.log(addNumber,4444)
// //   }
// //   // console.log(result, 888, addNumber, 34343)
// //   // if (addNumber != 0) {
// //   //   result.push(addNumber)
// //   // }
// //   // console.log(i, result, addNumber)
// // //   if(i<str1len + 1) {
// // //       for(;i<str1len + 1;i++){
// // //         if (isNaN(str1[i])) {
// // //           str1[i] = 0;
// // //         }
// // //           result[i] = (str1[i]+addNumber)%10;
// // //           addNumber = (str1[i]+addNumber)/10;
// // //       }
// // //   } else{
// // //       for(;i<str2len + 1;i++){
// // //         if (isNaN(str2[i])) {
// // //           str2[i] = 0;
// // //         }
// // //           result[i] = (str2[i]+addNumber)%10;
// // //           addNumber = (str2[i]+addNumber)/10;
// // //       }
// // //   }
// // //   return result.reverse().map(item => {
// // //     return parseInt(item);
// // //   }).join('');
// // // }

// // // console.log(add('9999999999999999999999999999999', '99999999999999999999999999999999'))

// // key = 0;
// // function s(key) {
// //   console.log(key%2 === 0,key/2 ===0,2);
// //   switch (key) {
// //     case key:
// //     console.log(key%2 == 0, key/2);
// //     case key/2 == 0:
// //     console.log(key,3);
// //       const t = 5;
// //       key = t;
// //     // case key%2 == 0:{
// //     //   console.log(key,32);
// //     //   const t = 10;
// //     //   key = t;
// //     // }
// //     default:
// //     console.log(key,322);
// //       return 10;
// //   }
// // }

// // s(key);
// // console.log(key,1);

// // let x = 300000/(30*12);
// // let result = 0;
// // for(let i = 0;i<(30*12);i++){
// //   result += (300000 - i*x)*0.005;
// // }
// // console.log(result);

// // var a = [{a:1},{}];
// // a.forEach(function(item, index){
// // 	item.b=index;
// // })
// // console.log(a)

// // let arr = [1, 2, '1', 3, 2];
// // let arr1 = [];

// // // 双重循环
// // let arr1 = []
// // for (let i = 0; i < arr.length; i++) {
// //   for (var j = 0; j < arr.length; j++) {
// //     if(arr[i] === arr1[j]){
// //       break;
// //     }
// //   }
// //   if (j === arr.length) {
// //     arr1.push(arr[i]);
// //   }
// // }

// // for (let i = 0; i < arr.length; i++) {
// //   if (arr1.indexOf(arr[i]) == -1) {
// //     arr1.push(arr[i])
// //   }
// // }

// // let arr2 = arr.sort();
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr2[i]!==arr2[i+1]) {
// //     arr1.push(arr2[i])
// //   }
// // }

// // arr1 = arr.filter((item, index, arr) => {
// //   return arr.indexOf(item) === index;
// // })

// // arr1 = arr.sort().filter((item, index, arr) => {
// //   return !index || item !== arr[index - 1];
// // })
// // let obj = {};
// // arr1 = arr.filter((item, index, arr) => {
// //   return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : obj[typeof item + JSON.stringify(item)] = true;
// // })

// // arr1 = Array.from(new Set(arr));
// // arr1 = [... new Set(arr)];
// // let map = new Map();
// // arr1 = arr.filter(item => {
// //   return map.has(item) ? false : map.set(item, 1)
// // })

// // console.log(arr1);

// // // 迷宫找路
// // const map = [
// //   [0,0,7,8,9],
// //   [0,5,6,0,10],
// //   [0,4,13,12,11],
// //   [2,3,14,15,0],
// //   [1,0,0,16,0]
// // ]
// // let snake=[{step: 1, x: 0, y:4}]
// // // console.log(map[3][0]);
// // let i = 4, j = 0, flag = 2;
// // function visit() {
// //   if (i-1>= 0 &&  map[i - 1][j] == flag) {
// //     snake.push({state: flag, x: j, j: i-1})
// //     flag++;
// //     i--;
// //     visit()
// //   }
// //   if (i+1< 5 && map[i + 1][j] == flag) {
// //     snake.push({state: flag, x: j, j: i+ 1})
// //     flag++;
// //     i++;
// //     visit()
// //   }
// //   if (j-1 >= 0&&map[i][j - 1] == flag) {
// //     snake.push({state: flag, x: j-1, j: i})
// //     flag++;
// //     j--;
// //     visit()
// //   }
// //   if (j+1<5 && map[i][j + 1] == flag) {
// //     snake.push({state: flag, x: j+1, j: i})
// //     flag++;
// //     j++;
// //     visit()
// //   }
// // }
// // visit()
// // console.log(snake)

// // console.log('A'.charCodeAt());
// let flag = false;
// let f;
// function next(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr.push(str[i].charCodeAt())
//   }
//   console.log(arr);
//   for (let i = str.length -1; i >=0; i--) {
//     if (flag) {
//       parseInt(arr[i])++;
//       if(parseInt(arr[i]) + 1 == 58){
//         flag = true;
//         arr[i] = 48;
//         f = 1;
//       } else if(parseInt(arr[i]) + 1 ==123) {
//         flag = true;
//         arr[i] = 97;
//         f =2;
//       }else if(parseInt(arr[i]) + 1 ==91) {
//         flag = true;
//         arr[i] = 65;
//         f= 3;
//       } else {
//         flag  = false;
//       }
//     }
//   }
//   if (flag) {
//     switch (f) {
//       case 1:
//         break;
//       case 2:
//       arr.unshift(97)
//         break;
//       case 1:
//       arr.unshift(65);
//         break;
//       default:
//         break;
//     }
//   }
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr1.push(arr[i].fromCharCode())
//   }
//   return arr1;
// }
// // console.log(next('erty'));

// next('exty')


// function sort(students) {

// students = students.sort(function(a, b){
//     return a.class - b.class;
//   });
//   console.log(students)
//   for(let i=0; i< students.length-1; i++){
//     console.log(students[i].class, students[i+1].class,students[i].score, students[i+1].score, students[i].name, students[i+1].name);
//     if(students[i].class === students[i+1].class && students[i].score < students[i+1].score){
//         let t = students[i];
//           students[i] = students[i+1];
//           students[i+1] = t;
//       }
//   }
//   console.log(students);
//   return students;

// }

// console.log(
//   sort([
//     {name: 'g', class: 2, score: 64},
//     {name: 'a', class: 2, score: 64},
//     {name: 'b', class: 1, score: 80},
//     {name: 'e', class: 2, score: 80},
//     {name: 'c', class: 1, score: 60},
//     {name: 'd', class: 4, score: 94}]));



// function version(end) {
//   let count = 0;
//   let flag  = true;
//   let arr = [0];
//   for (let i = 1; flag; i++) {
//     // console.log(i,888)
//     count++;
//     let len = arr.length;
//     // console.log(len);
//     for (let j = 0; j < len; j++) {
//       // console.log(arr);
//       if (arr[j] + i == end) {
//         flag = false;
//         break;
//       } else {
//         // let arr1 = JSON.parse(JSON.stringify(arr));
//         // console.log(arr1[j], 999);
//         arr.push(arr[j] - i);
//         arr.push(arr[j] + i);
//         // arr.shift()
//         // console.log(arr, 777);
//       }
//     }
//     arr.splice(0, len)
//     // console.log(arr, 4444);
//     // if (i == 3) {
//     //   break;
//     // }
//   }
//   console.log(count);
// }

// version(10);
// version(5)
// version(4);
// version(3);
// version(2);
// version(7);


