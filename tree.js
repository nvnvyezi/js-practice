function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

// 建立二叉树
let arr = [7, 5, 9, 4, 6, 8, 10];
const bTree = buildTree(arr);
function buildTree(data) {
  let tree = null;
  if (!data || !data.length) {
    return tree;
  }
  tree = new Node(data[0]);
  for (let i = 1; i < data.length; i++) {
    build(tree, data[i]);
  }
  return tree;
  function build(t, data) {
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
  }
}

// 递归前序
let str = "";
function DLR(tree) {
  if (tree === null) {
    return;
  }
  str += tree.data;
  DLR(tree.left);
  DLR(tree.right);
}
DLR(bTree);
console.log(`递归前序: ${str}`);

// 循环前序
function loopDLR(tree, str) {
  const arr = [];
  let temp = tree;
  do {
    while (temp) {
      str += temp.data;
      arr.push(temp);
      temp = temp.left;
    }
    temp = arr.pop().right;
  } while (arr.length || temp);
  return str;
}
console.log(`循环前序: ${loopDLR(bTree, "")}`);

// 递归中序
let str1 = "";
function LDR(node) {
  if (!node) {
    return;
  }
  LDR(node.left);
  str1 += node.data;
  LDR(node.right);
}
LDR(bTree);
console.log(`递归中序: ${str1}`);

// 循环中序
function loopLDR(tree, str) {
  const arr = [];
  let temp = tree;
  do {
    while (temp) {
      arr.push(temp);
      temp = temp.left;
    }
    temp = arr.pop();
    str += temp.data;
    temp = temp.right;
  } while (arr.length || temp);
  return str;
}
console.log(`循环中序: ${loopLDR(bTree, "")}`);

// 递归后序
let str2 = "";
function LRD(node) {
  if (!node) {
    return;
  }
  LRD(node.left);
  LRD(node.right);
  str2 += node.data;
}
LRD(bTree);
console.log(`递归后序: ${str2}`);

//循环后序
function loopLRD(tree, str) {
  const arr = [];
  let temp = tree,
    pre = 0;
  do {
    while (temp) {
      arr.push(temp);
      temp = temp.left;
    }
    temp = arr[arr.length - 1];
    if (!temp.right) {
      str += temp.data;
      pre = arr.pop();
      temp = arr[arr.length - 1];
      if (temp.right === pre) {
        str += temp.data;
        pre = arr.pop();
        temp = arr[arr.length - 1].right;
        if (temp === pre) {
          str += arr[arr.length - 1].data;
          break;
        }
      } else {
        temp = temp.right;
      }
    } else {
      temp = temp.right;
    }
  } while (arr.length);
  return str;
}
console.log(`循环后序: ${loopLRD(bTree, "")}`);

// 层次遍历
function lerverLoop(tree, str) {
  const arr = [];
  arr.push(tree);
  let temp;
  while (arr.length) {
    temp = arr.shift();
    str += temp.data;
    if (temp.left) {
      arr.push(temp.left);
    }
    if (temp.right) {
      arr.push(temp.right);
    }
  }
  return str;
}
console.log(`层次遍历: ${lerverLoop(bTree, "")}`);
