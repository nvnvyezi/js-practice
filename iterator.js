function Node (value) {
  this.value = value;
  this.next = null;
}

Node.prototype[Symbol.iterator] = function () {
  let self = this;
  // console.log(2);
  return {
    next: function () {
      if (self) {
        const value = self.value;
        self = self.next;
        return {
          value: value,
          done: false
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node3;
node3.next = node2;
node2.next = node1;

for (const key of node1) {
  console.log(key)
}
// 死循环 haha