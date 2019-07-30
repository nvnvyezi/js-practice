/**
 * @description 观察者模式
 *
 * @param {*} params
 */
const observers = new Set();

function observe(fn) {
  observers.add(fn);
}

function observable(obj) {
  return new Proxy(obj, {
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver);
      observers.forEach(fn => fn());
      return res;
    }
  });
}

const person = observable({
  name: "张三",
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`);
}

observe(print);
person.name = "李四";
person.age = 15;
