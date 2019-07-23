const dfsArr = {
  val: "parent",
  children: [
    {
      val: "child-1",
      children: [
        {
          val: "child-1-1",
          children: [
            {
              val: "child-1-1-1"
            }
          ]
        },
        {
          val: "child-1-2",
          children: [
            {
              val: "child-1-2-1"
            }
          ]
        },
        {
          val: "child-1-3"
        }
      ]
    },
    {
      val: "child-2",
      children: [
        {
          val: "child-2-1"
        },
        {
          val: "child-2-2"
        },
        {
          val: "child-3",
          children: [
            {
              val: "child-3-1"
            }
          ]
        }
      ]
    }
  ]
};

function DFS(node, nodeList = []) {
  nodeList.push(node);
  const children = node.children;
  if (children) {
    for (let i = 0; i < children.length; i++) {
      DFS(children[i], nodeList);
    }
  }
  return nodeList;
}

function DFS(node) {
  const nodeList = [];
  const temp = [];
  if (node) {
    nodeList.push(node);
    temp.push(...node.children);
  }
  while (temp.length) {
    let child = temp.shift();
    nodeList.push(child);
    if (child.children) {
      temp.unshift(...child.children);
    }
  }
  return nodeList;
}

console.log(DFS(dfsArr));
