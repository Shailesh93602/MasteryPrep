import React from "react";
import '../../styles/Topic.css';

const Trees = () => {
  return (
    <div className="topic-content">
      <h1>Trees in Data Structures</h1>
      <p>
        Trees are fundamental hierarchical data structures comprising nodes connected by edges.
        In a tree, each node has a parent (except for the root) and zero or more child nodes.
      </p>
      <p>
        <b>Declaration:</b>
      </p>
      <p>
        Let's consider a simple example of a binary tree using JavaScript. In this example, we'll define
        a basic structure and demonstrate tree traversal methods.
      </p>
      <pre>
        {`// Binary tree implementation
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Example method: In-order traversal
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// Example usage
let tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log("In-order Traversal:");
tree.inOrderTraversal(tree.root);
// Outputs: 4, 2, 5, 1, 3
`}
      </pre>
      <p>
        Trees come in various types, such as binary trees, binary search trees, AVL trees, and more.
        Each type serves specific purposes in algorithm design and problem-solving.
      </p>
      <p>
        Explore the topics in the menu to delve into the fascinating world of trees and understand their
        applications in organizing and processing data efficiently.
      </p>
      <p>
        Happy exploring the world of Trees in Data Structures!
      </p>
    </div>
  );
};

export default Trees;
