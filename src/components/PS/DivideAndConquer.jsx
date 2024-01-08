import React from "react";
import '../../styles/Topic.css';

const DivideAndConquer = () => {
  return (
    <div className="topic-content">
      <h1>Divide and Conquer</h1>
      <p>
        Divide and Conquer is a powerful problem-solving technique that breaks a complex problem into smaller, more manageable subproblems, solves them independently, and then combines their solutions to solve the original problem.
      </p>
      <p>
        <b>Key Steps in Divide and Conquer:</b>
      </p>
      <ul>
        <li><b>Divide:</b> Break the problem into smaller subproblems.</li>
        <li><b>Conquer:</b> Solve the subproblems independently.</li>
        <li><b>Combine:</b> Combine the solutions of subproblems to solve the original problem.</li>
      </ul>
      <p>
        <b>Common Algorithms Using Divide and Conquer:</b>
      </p>
      <ul>
        <li><b>Merge Sort:</b> Sorting elements by dividing the array, sorting each part, and merging them back together.</li>
        <li><b>Quick Sort:</b> Sorting elements by partitioning the array into smaller sections and sorting each partition.</li>
        <li><b>Binary Search:</b> Searching for a target element in a sorted array by repeatedly dividing the search space.</li>
        <li><b>Strassen's Matrix Multiplication:</b> Efficiently multiplying matrices using recursive divide and conquer.</li>
      </ul>
      <p>
        Explore the topics in the menu to delve into different concepts and problem-solving techniques in Divide and Conquer.
      </p>
    </div>
  );
};

export default DivideAndConquer;
