// function First (a, b) {
//   this.a = a;
//   this.b =b;
// }

// function Second (a, b) {
//   First.call(this, a, b);
//   this.c = '12';
// }

// let test = new Second('s', 'd');

// console.log(test)

// function say() {
//   console.log(this.name);
// }

// let obj = {
//   name: 'sd'
// }

// say.call(obj);

// let obj = {
//   name: 'sd',
//   say: () =>  {
//     console.log(this, this.name);
//   }
// };

// obj.say();

// Function.prototype.call1 = function (context) {
//   let arr = [];
//   // for (let i = 1; i < arguments.length; i++) {
//   //   arr.push(arguments[i])
//   // }
//   context = context || window;
//   arr = Array.from(arguments).slice(1);
//   context.fn = this;
//   let res = context.fn(...arr);
//   delete context.fn;
//   return res
// }

// let obj = {
//   name: 'sd'
// }

// var name = 'oi';
// function say(age, str) {
//   console.log(this.name);
//   console.log(age, str);
//   return age;
// }

// say.call1(obj, 15, 'lu');
// let res = say.call1(null, 15, 'lu');
// console.log(res)
// var t = '6:20';
// (function(){
//   console.log('undefined' == undefined, !!'undefined', !!undefined)
//   if(typeof t == undefined) {
//     var t = "5:20";
//     console.log(t);
//   } else {
//     console.log(t)
//   }
// })()


const timeout = ms => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, ms);
});

const ajax1 = () => timeout(2000).then(() => {
	console.log('1');
	return 1;
});

const ajax2 = () => timeout(1000).then(() => {
	console.log('2');
	return 2;
});

const ajax3 = () => timeout(2000).then(() => {
	console.log('3');
	return 3;
});

const mergePromise = ajaxArray => {
  // 在这里实现你的代码

};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
	console.log('done');
	console.log(data); // data 为 [1, 2, 3]
});

// 分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]