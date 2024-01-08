import React from "react";
import '../../styles/Topic.css';

const Queue = () => {
  return (
    <div className="topic-content">
      <h1>Queue in Data Structures</h1>
      <p>
        A queue is a fundamental data structure that follows the First In, First Out (FIFO) principle.
        It operates like a line of people waiting for a service, where the person who arrives first is served first.
      </p>
      <p>
        <b>Declaration:</b>
      </p>
      <p>
        To declare a queue, you can use an array or a linked list. Here's a simple example using an array:
      </p>
      <pre>
        {`// Queue implementation using an array
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }
}

// Example usage
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Outputs 1
console.log(queue.front()); // Outputs 2`}
      </pre>
      <p>
        Queues are used in various scenarios such as print job scheduling, process scheduling, and
        breadth-first search algorithms in graph traversal.
      </p>
      <p>
        Explore the topics in the menu to delve into the details of queues and their applications
        in various algorithms and problems.
      </p>
      <p>
        Happy exploring the world of queues!
      </p>
    </div>
  );
};

export default Queue;
