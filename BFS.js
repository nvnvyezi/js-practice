const BFSTree = {
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
          val: "child-2-3",
          children: [
            {
              val: "child-2-3-1"
            }
          ]
        }
      ]
    }
  ]
};

function BFS(root) {
  const nodeList = [];
  const temp = [];
  if (root) {
    nodeList.push(root);
    temp.push(...root.children);
  }
  while (temp.length) {
    const node = temp.shift();
    nodeList.push(node);
    if (node.children) {
      temp.push(...node.children);
    }
  }
  return nodeList;
}

console.log(BFS(BFSTree));
