//头条 设计一个简单的任务队列，要求分别在1,3,4秒后打印出1， 2， 3

function Queue() {
  this.time = 0;
  this.queue = [];
}
Queue.prototype.task = function (t, fn) {
  this.time = this.time + t;
  this.queue.push([this.time, fn]);
  return this;
}
Queue.prototype.start = function () {
  this.queue.forEach(item => {
    setTimeout(() => {
      item[1]();
    }, item[0]);
  })
}

new Queue().task(1000, () => {console.log(1)}).task(2000, () => {console.log(2)}).task(1000, () => {console.log(3)}).start();