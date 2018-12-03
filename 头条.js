// //1, 跨域

// //2.
// function newPromise() {
//   return new Promise((resolve, reject) => {
//     reject(3333);
//   })
// }

// newPromise().then((x) => {
//   console.log(1, x);
// }).catch(x => {
//   console.log(2, x)
// }).then(x => {
//   console.log(3, x);
// })

// //3.
// console.log('start')
// setTimeout(() => {
//   console.log('setTimeout 1')
//   Promise.resolve()
//     .then(() => {
//       console.log('promise 3')
//     })
//     .then(() => {
//       console.log('promise 4')
//     })
//     .then(() => {
//       setTimeout(() => {
//         console.log('setTimeout 2')
//         Promise.resolve()
//           .then(() => {
//             console.log('promise 5')
//           })
//           .then(() => {
//             console.log('promise 6')
//           })
//           .then(() => {
//             clearInterval(interval)
//           })
//       }, 0)
//     })
// }, 0)
// const interval = setInterval(() => {
//   console.log('setInterval')
// }, 0)
// Promise.resolve()
//   .then(() => {
//     console.log('promise 1')
//   })
//   .then(() => {
//     console.log('promise 2')
//   })
// console.log('script start');

// //4.
// function* bar(x) { 
//   var y = 2 * (yield (x + 1)); 
//   var z = yield (y / 3); 
//   return x + y + z; 
// } 
// var c = bar(5); 
// console.info(c.next(1)); 
// console.info(c.next(1)); 
// console.info(c.next(1)); 
// console.info(c.next(1));

// //5.用reduce实现map
// let arr = [1, 2, 3];
// let arr1 = arr.map((item, val, arr) => {
//   return item * item;
// })
// console.log(arr1);

// Array.prototype._map = function(fn) {
//   return this.reduce((init, item) => {
//     return [...init, fn(item)];
//   }, []);
// }

// let arr2 = arr._map((item, val, arr) => {
//   return item * item;
// });

// console.log(arr2);

// //6.原型链
// class A {
// }
// class B extends A {
// }

// console.log(B.__proto__ === A);
// console.log(B.__proto__.prototype === A.prototype);
// console.log(B.constructor); 
// console.log(B.constructor === B.__proto__.constructor ); 
// console.log(B.constructor === A.__proto__.constructor );
// console.log(B.constructor === B) //false
// console.log(A.__proto__ === Function.prototype)
// console.log(B.constructor.prototype); 
// console.log(B.constructor.prototype === Function.prototype); 
// console.log(B.constructor.prototype.__proto__); 
// console.log(B.constructor.prototype.__proto__ === Object.prototype); 
// console.log(B.prototype);

// //7.深度优先遍历
const nodes = {
  value: 1,  
  children:[{
    value: 2,  
    children:[{ 
      value:3,  
      children:[]
    }]
  },  
  {
    value: 4,  
    children: [{
      value: 5,  
      children:[{ 
        value:6,  
        children:[]
        }]
      },  
      {
        value: 7,  
        children:[{ 
          value:8,  
          children:[]
        }]
      }]
  }]
};
function pth(node, path) {
  if (!node) {
    return ;
  }
  path = path + "->" + node.value;
  pth(node.children[0], path);
  pth(node.children[1], path);
  if (!node.children[0] && !node.children[1]) {
    console.log(path);
  }
}
console.log(pth(nodes, ''));
// let arr =[];
// function dfs(node) {
//   if (!node) {
//     return ;
//   }
//   console.log(node.value);
//   arr.push(node.value)
//   dfs(node.children[0]);
//   dfs(node.children[1]);
// }
// function dfs(node) {
//   if (!node) {
//     return ;
//   }
//   let arr = [];
//   let arr1 = [];
//   let temp = node;
//   do {
//     while (temp) {
//       arr.push(temp);
//       arr1.push(temp.value);
//       temp = temp.children[0];
//     }
//     temp = arr.pop();
//     temp = temp.children[1];
//   } while (temp || arr.length);
//   return arr1;
// }
// function inO(node) {
//   if (!node) {
//     return ;
//   }
//   let arr = [],
//       arr1 = [];
//   let temp = node;
//   do {
//     while (temp) {
//       arr.push(temp);
//       temp = temp.children[0];
//     }
//     temp = arr.pop();
//     arr1.push(temp.value);
//     temp = temp.children[1];
//   } while (arr.length || temp);
//   return arr1;
// }
// function postOrder (node) {
//   if (!node) {
//     return ;
//   }
//   let arr = [];
//   let temp = node;
//   let pre = null;
//   let flag = true;
//   do {
//     while (temp && flag) {
//       arr.push(temp);
//       temp = temp.children[0];
//     }
//     temp = arr[arr.length - 1];
//     // console.log(temp)
//     if (temp.children[1] == pre || temp.children[1] == null) {
//       if (!temp.children[0] && !temp.children[1]) {
//         arr.forEach(item => console.log(item.value));
//         console.log('llll')
//       }
//       temp = arr.pop();
//       // console.log(temp.value);
//       flag = false;
//       pre = temp;
//     } else {
//       flag = true;
//       temp = temp.children[1];
//     }
//   } while (arr.length);
// }
// let result = [];
// function path(node, path, result) {
//   if (!node) {
//     return ;
//   }
//   path = path + node.value;
//   if (node.children[0]) {
//     postOrder(node.children[0], path + '->', result);
//   }
//   if (node.children[1]) {
//     postOrder(node.children[1], path + '->', result);
//   }
//   if (!node.children[0] && !node.children[1]) {
//     result.push(path);
//   }
// }
// function post(node) {
//   if (!node) {
//     return;
//   }
//   let arr = [];
//   let temp = node;
//   let pre = null;
//   let flag = true;
//   do {
//     while (temp && flag) {
//       arr.push(temp);
//       temp = temp.children[0];
//     }
//     temp = arr[arr.length - 1];
//     if (temp.children[1] == null || temp.children[1] == pre) {
//       if (!temp.children[0] && !temp.children[1]) {
//         arr.forEach(item => console.log(item.value));
//         console.log('sdsd');
//       }
//       temp = arr.pop();
//       pre = temp;
//       flag = false;
//     } else {
//       flag = true;
//       temp = temp.children[1];
//     }
//   } while (arr.length);
// }
// // let result = dfs(nodes); 
// // console.log(inO(nodes));
// // console.info(result);
// console.log(path(nodes, '', result));
// // console.log(postOrder(nodes));
// // post(nodes);


// function Foo() {
//   getName = function () { console.log(1); };
//   return this;
// }
// Foo.getName = function () { console.log(2);};
// Foo.prototype.getName = function () { console.log(3);};
// var getName = function () { console.log(4);};
// function getName() { console.log(5);}

// //请写出以下输出结果：
// Foo.getName();
// getName();
// Foo().getName();
// getName();
// new Foo.getName();
// new Foo().getName();
// new new Foo().getName();