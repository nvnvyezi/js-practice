// // 发布订阅
// class EventEmeitter {
//   constructor () {
//     this._events = this._events || new Map();
//     this._maxListeners = this._maxListeners || 10;
//   }
//   emit (type, ...args) {
//     let handler;
//     handler = this._events.get(type);
//     // console.log(handler, args.length)
//     if (Array.isArray(handler)) {
//       for (const i in handler) {
//         console.log(i)
//         if (handler.hasOwnProperty(i)) {
//           if (args.length > 0) {
//             console.log(8)
//               handler[i].apply(this, args);
//           } else {
//             handler[i].call(this);
//           }
//         }
//       }
//     } else {
//       if (args.length > 0) {
//           handler.apply(this, args);
//       } else {
//         handler.call(this);
//       }
//     }
//     return true;
//   }
//   addListener (type, fn) {
//     const handler = this._events.get(type);
//     if (!handler) {
//       this._events.set(type, fn);
//     } else if (handler && typeof handler === 'function') {
//       this._events.set(type, [handler, fn]);
//     } else {
//       handler.push(fn);
//     }
//   }

//   removeListener (type, fn) {
//     const handler = this._events.get(type);
//     if (handler && typeof handler === 'function') {
//       this._events.delete(type, fn);
//     } else {
//       let postion;
//       for (let i = 0; i < handler.length; i++) {
//         // console.log(handler[i].toString(), fn.toString())
//         if (handler[i].toString() === fn.toString()) {
//           postion = i;
//           // console.log(i);
//         } else {
//           postion = -1;
//         }
//       }
//       // console.log(postion)
//       if (postion !== -1) {
//         // console.log(handler.length, 3)
//         handler.splice(postion, 1);
//         // console.log(handler.length, 2)
//         if (handler.length === 1) {
//           this._events.set(type, handler[0]);
//         }
//       } else {
//         return this;
//       }
//     }
//   }
// }

// const emitter = new EventEmeitter();

// emitter.addListener('arson', man => {
//   console.log(`expel ${ man }`);
// })

// // emitter.emit('arson', 'low-end');


// emitter.addListener('arson', man => {
//   console.log(`save ${ man }`);
// })

// emitter.removeListener('arson', man => {
//   console.log(`save ${ man }`);
// })

// emitter.emit('arson', 'low-end');

// const events = {
//   arr: new Map(),
//   emit (name, str) {
//     if (this.arr.has(name)) {
//       const item = this.arr.get(name);
//       if (typeof item === 'function') {
//         item(str)
//       } else {
//         item.forEach(item => {
//           item(str);
//         });
//       }
//     }
//   },
//   on (name, fn) {
//     const handle = this.arr.get(name);
//     if (!handle) {
//       this.arr.set(name, fn);
//     } else if (handle && typeof handle === 'function') {
//       this.arr.set(name, [handle, fn]);
//     } else {
//       handle.push(fn);
//     }
//   }
// }



// function Event() {
//   this.queue = new Map();
// }
// Event.prototype.on = function (name, fn) {
//   let o = this.queue.get(name);
//   if (!o) {
//     this.queue.set(name, fn);
//   } else if(o && typeof o === 'function') {
//     this.queue.set(name, [o, fn]);
//   } else {
//     o.push(fn);
//   }
// }
// Event.prototype.emit = function (name, str) {
//   let o = this.queue.get(name);
//   if (typeof o === 'function') {
//     o(str);
//   }
//   if (typeof o === 'object') {
//     o.forEach(element => {
//       element(str); 
//     });
//   }
// }

// let events = new Event();
// events.on('say',function(name){
//    console.log('Hello',name)
// });
// events.on('say',function(name){
//   console.log('Hello1',name)
// });
// events.on('sy',function(name){
//   console.log('Hello1',name)
// });
// events.emit('say','Jony yu');

let o = {
    a: 1
}

let arr = [1, 2, 3];
arr.forEach(item => {
    console.log(item, this)
}, o);