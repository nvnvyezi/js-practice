/**
 * @description 发布订阅模式
 * @author nvnvyezi
 */

class EventEmitter {
  constructor() {
    this._observers = new Map();
  }
  on(name, fn) {
    let handle = Reflect.get(this._observers, name);
    if (!handle) {
      handle = [fn];
    } else {
      handle.push(fn);
    }
    Reflect.set(this._observers, name, handle);
  }
  emit(name, ...rest) {
    const handles = Reflect.get(this._observers, name);

    handles.forEach(handle => {
      if (typeof handle !== "function") {
        throw new TypeError("no function");
      }
      Reflect.apply(handle, this, rest);
    });
  }
  remove(name, fn) {
    const handles = Reflect.get(this._observers, name);

    handles.forEach((handle, index) => {
      if (fn === handle || fn.toString() === handle.toString()) {
        handles.splice(index, 1);
      }
    });
  }
}
let events = new EventEmitter();
events.on("say", function(name) {
  console.log("Hello1", name);
});
events.on("say", function(name) {
  console.log("Hello2", name);
});
function say(name) {
  console.log("Hello3", name);
}
events.on("say", say);

events.on("say", function(name) {
  console.log("Hello4", name);
});

events.on("sy", function(name) {
  console.log("Hello1", name);
});
events.emit("say", "Jony yu");

console.log("remove start --------");

events.remove("say", say);
events.remove("say", function(name) {
  console.log("Hello1", name);
});
events.emit("say", "Jony yu");
