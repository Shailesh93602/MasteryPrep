import React from "react";
import '../../styles/Topic.css';

const Heaps = () => {
  return (
    <div className="topic-content">
      <h1>Heaps in Data Structures</h1>
      <p>
        Heaps are specialized tree-based data structures that adhere to the heap property. There are two main types of heaps:
        max heap, where the value of each node is greater than or equal to its children, and min heap, where the value of
        each node is less than or equal to its children.
      </p>
      <p>
        <b>Declaration:</b>
      </p>
      <p>
        Let's consider a simple example of a max heap using JavaScript. In this example, we'll define a basic structure and
        demonstrate the heapify operation.
      </p>
      <pre>
        {`// Max heap implementation
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Example method: Heapify up
  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] > this.heap[parentIndex]) {
        // Swap elements if the current node is greater than its parent
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }
}

// Example usage
let maxHeap = new MaxHeap();
maxHeap.heap.push(20, 15, 10, 8, 12, 7);

console.log("Max Heap after insert 25:");
maxHeap.heap.push(25);
maxHeap.heapifyUp(maxHeap.heap.length - 1);
console.log(maxHeap.heap);
// Outputs: [25, 15, 20, 8, 12, 7, 10]
`}
      </pre>
      <p>
        Heaps play a crucial role in various applications, such as priority queues and heap sort algorithms.
        Explore the topics in the menu to understand the intricacies of heaps and how they contribute to efficient
        algorithmic solutions.
      </p>
      <p>
        Happy exploring the world of Heaps in Data Structures!
      </p>
    </div>
  );
};

export default Heaps;
