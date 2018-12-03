function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}
let root = null;

function build(t, data) {
  // if (root === null) {
  //   root = true;
  //   t = new Node(data);
  // } else {
    if (data < t.data) {
      if (t.left === null) {
        t.left = new Node(data);
      } else {
        build(t.left, data);
      }
    } else {
      if (t.right === null) {
        t.right = new Node(data);
      } else {
        build(t.right, data);
      }
    }
  // }
}

const bTree = new Node(7);
let arr = [5, 9, 4, 6, 8, 10];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  build(bTree, element)
}

function pre(tree) {
  if (tree !== null) {
    console.log(tree.data);
    pre(tree.left);
    pre(tree.right);
  }
}
function preOrder(tree) {
  let arr = [];
  let temp;
  temp = tree;
  do {
    while (temp) {
      console.log(temp.data);
      arr.push(temp);
      temp = temp.left;
    }
    temp = arr.pop();
    temp = temp.right;
  } while (arr.length || temp);
}
function inOrder(tree) {
  let arr = [];
  temp = tree;
  // arr.push(tree);
  do {
    while (temp !== null) {
      arr.push(temp);
      temp = temp.left;
    }
    temp = arr.pop();
    console.log(temp.data);
    temp = temp.right;
  } while (arr.length || temp);
}
function postOrder(tree) {
  let arr = [];
  let temp, pre = null;
  temp = tree;
  do {
    while (temp) {
      arr.push(temp);
      temp = temp.left;
    }
    temp = arr[arr.length - 1];
    if (temp.right && temp.right !== pre) {
      temp = temp.right;
    } else{
      temp = arr.pop();
      pre = temp;
      console.log(temp.data);
      temp = temp.right;
    }
    // temp = 
  } while (arr.length || temp);
}
function post (tree) {
  if (tree) {
    post(tree.left);
    post(tree.right);
    console.log(tree.data);
  }
}
function lerverOrder(tree) {
  let arr = [];
  arr.push(tree);
  let temp;
  while (arr.length) {
    temp = arr.shift();
    console.log(temp.data);
    if (temp.left) {
      arr.push(temp.left);
    }
    if (temp.right) {
      arr.push(temp.right);
    }
  }
}

// inO(bTree);
// inOrder(bTree);
// lerverOrder(bTree);
// preOrder(bTree)
// postOrder(bTree)
// post(bTree);