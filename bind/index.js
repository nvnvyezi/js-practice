// Function.prototype.bind1 = function(context) {
//   if (typeof this !== "function") {
//     throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
//   }
//   let self = this;
//   let args = Array.from(arguments).slice(1);
//   let Fn = function () {};
//   let bound = function () {
//     let ctxArgs = Array.from(arguments);
//     self.apply(this instanceof self ? this : context, args.concat(ctxArgs));
//   }
//   Fn.prototype = this.prototype;
//   bound.prototype = new Fn();
//   return bound;
// }


// let obj = {
//   name: 'sd'
// }

// function say (num, age) {
//   console.log(this.name, num, age)
// }

// say.bind1(obj, 'sd', 16);

Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('no function');
  }
  let args = [...arguments].slice(1);
  let self = this;
  return function F() {
    console.log(args, ...arguments);

    if (this instanceof F) {
      return new self(...args, ...arguments)
    }
    return self.apply(context, args.concat(arguments));
  }
}

function test() {
  console.log(this.name, ...arguments);
}

let arr = {
  name: 'lly'
}

test.myBind(arr)('sd', 'wewe');