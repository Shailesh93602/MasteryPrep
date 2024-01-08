import React from "react";
import '../../styles/Topic.css';

const Stack = () => {
  return (
    <div className="topic-content">
      <h1>Stack in Data Structures</h1>
      <p>
        A stack is a fundamental data structure that follows the Last In, First Out (LIFO) principle.
        It behaves like a collection of elements with two main operations: push, which adds an element
        to the top, and pop, which removes the top element.
      </p>
      <p>
        <b>Declaration:</b>
      </p>
      <p>
        To declare a stack, you can use an array or a linked list. Here's a simple example using an array:
      </p>
      <pre>
        {`// Stack implementation using an array
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

// Example usage
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Outputs 3
console.log(stack.peek()); // Outputs 2`}
      </pre>
      <p>
        Stacks are widely used in programming for managing function calls, undo mechanisms,
        and expression evaluation (e.g., checking balanced parentheses).
      </p>
      <p>
        Explore the topics in the menu to delve into the details of stacks and their applications
        in various algorithms and problems.
      </p>
      <p>
        Happy exploring the world of stacks!
      </p>
    </div>
  );
};

export default Stack;
