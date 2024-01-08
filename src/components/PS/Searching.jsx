import React from "react";
import '../../styles/Topic.css';

const Searching = () => {
  return (
    <div className="topic-content">
      <h1>Searching Algorithms</h1>
      <p>
        Searching is the process of locating a specific element within a collection of elements.
        Different searching algorithms are tailored for various types of data structures and scenarios.
      </p>
      <p>
        <b>Popular Searching Algorithms:</b>
      </p>
      <p>
        <b>1. Linear Search:</b> A simple searching algorithm that sequentially checks each element in the collection until a match is found or the entire collection has been searched.
      </p>
      <p>
        <b>2. Binary Search:</b> This algorithm is applicable to sorted collections and repeatedly divides the search range in half until the target element is found.
      </p>
      <p>
        <b>3. Depth-First Search (DFS):</b> A graph traversal algorithm that explores as far as possible along each branch before backtracking.
      </p>
      <p>
        <b>4. Breadth-First Search (BFS):</b> Another graph traversal algorithm that explores all the vertices of a graph level by level.
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Let's understand Binary Search with an example. Consider a sorted array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Using Binary Search, we look for the element 7:
        <ul>
          <li>Step 1: Compare 7 with the middle element (5). Since 7 &gt; 5, eliminate the left half.</li>
          <li>Step 2: Now, the array is [6, 7, 8, 9, 10]. Compare 7 with the middle element (8). Since 7 &lt; 8, eliminate the right half.</li>
          <li>Step 3: Now, the array is [6, 7]. Compare 7 with the middle element (7). We found the element!</li>
        </ul>
      </p>
      <p>
        Explore the topics in the menu to delve into the details of each searching algorithm, their use cases, and implementations.
      </p>
    </div>
  );
};

export default Searching;
