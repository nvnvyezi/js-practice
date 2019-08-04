/**
 * 要求设计 LazyMan 类，实现以下功能
 * LazyMan('Tony');
 * Hi I am Tony
 *
 * LazyMan('Tony').sleep(10).eat('lunch');
 * Hi I am Tony
 * 等待了10秒...
 * I am eating lunch
 *
 * LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
 * Hi I am Tony
 * I am eating lunch
 * 等待了10秒...
 * I am eating diner
 *
 * LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
 * Hi I am Tony
 * 等待了5秒...
 * I am eating lunch
 * I am eating dinner
 * 等待了10秒...
 * I am eating junk food
 */

class LazyManClass {
  constructor(name) {
    this.name = name;
    this.tashList = [];
    console.log(`Hi I am ${name}`);
    setTimeout(() => {
      this.tashList.forEach(fn => fn());
    }, 0);
  }

  sleepFirst(waiting) {
    let fn = () => {
      let start = Date.now();
      while (Date.now() <= start + waiting * 1000) {}
      console.log(`等待了${waiting}秒...`);
    };
    this.tashList.unshift(fn);
    return this;
  }

  sleep(waiting) {
    let fn = () => {
      let start = Date.now();
      while (Date.now() <= start + waiting * 1000) {}
      console.log(`等待了${waiting}秒...`);
    };
    this.tashList.push(fn);
    return this;
  }

  eat(food) {
    let fn = () => console.log(`I am eating ${food}`);
    this.tashList.push(fn);
    return this;
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

// LazyMan("Tony");

// LazyMan("Tony")
//   .sleep(3)
//   .eat("lunch");

// LazyMan("Tony")
//   .eat("lunch")
//   .sleep(4)
//   .eat("dinner");

LazyMan("Tony")
  .eat("lunch")
  .eat("dinner")
  .sleepFirst(5)
  .sleep(10)
  .eat("junk food");
