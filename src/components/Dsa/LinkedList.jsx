import React from "react";
import '../../styles/Topic.css';

const LinkedList = () => {
  return (
    <div className="topic-content">
      <h1>Linked List in Data Structures</h1>
      <p>
        A linked list is a dynamic data structure where elements, called nodes, are connected
        together through links. Each node contains data and a reference (or link) to the next node
        in the sequence.
      </p>
      <p>
        <b>Declaration:</b>
      </p>
      <p>
        To declare a linked list, you define a node structure and maintain a reference to the
        first node, often called the head.
      </p>
      <pre>
        {`// Node structure
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Linked List declaration
let head = new Node(1);
let secondNode = new Node(2);
head.next = secondNode;`}
      </pre>
      <p>
        <b>Operations:</b>
      </p>
      <p>
        Linked lists support operations like insertion, deletion, and traversal. Here's an example
        of inserting a new node at the end of the linked list:
      </p>
      <pre>
        {`// Insertion at the end
function insertAtEnd(data) {
  let newNode = new Node(data);
  let current = head;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;
}`}
      </pre>
      <p>
        Linked lists offer advantages in dynamic memory allocation and efficient insertion/deletion
        but have trade-offs in terms of access time compared to arrays.
      </p>
      <p>
        Explore the topics in the menu to delve into the details of linked lists and their
        applications in various algorithms and problems.
      </p>
      <p>
        Happy learning about linked lists!
      </p>
    </div>
  );
};

export default LinkedList;
