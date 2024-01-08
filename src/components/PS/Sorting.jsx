import React from "react";
import '../../styles/Topic.css';

const Sorting = () => {
  return (
    <div className="topic-content">
      <h1>Sorting Algorithms</h1>
      <p>
        Sorting is a crucial operation in computer science that involves arranging elements in a specific order.
        Different sorting algorithms offer various approaches to achieve this task, each with its own strengths and weaknesses.
      </p>
      <p>
        <b>Popular Sorting Algorithms:</b>
      </p>
      <p>
        <b>1. Bubble Sort:</b> A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
      </p>
      <p>
        <b>2. Selection Sort:</b> This algorithm divides the input list into a sorted and an unsorted region, iteratively selects the smallest (or largest) element from the unsorted region, and swaps it with the first unsorted element.
      </p>
      <p>
        <b>3. Insertion Sort:</b> Builds the sorted array one item at a time, taking each element from the unsorted list and inserting it into its correct position in the sorted part.
      </p>
      <p>
        <b>4. Merge Sort:</b> A divide-and-conquer algorithm that recursively divides the input into smaller parts, sorts them, and then merges the sorted parts to produce a fully sorted result.
      </p>
      <p>
        <b>5. Quick Sort:</b> Another divide-and-conquer algorithm that selects a 'pivot' element and partitions the other elements into two sub-arrays, then recursively sorts the sub-arrays.
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Let's take an example to understand Bubble Sort, a simple but less efficient sorting algorithm.
        Consider an array: [5, 2, 9, 1, 5]. The Bubble Sort process would look like this:
        <ul>
          <li>Pass 1: [2, 5, 1, 5, 9]</li>
          <li>Pass 2: [2, 1, 5, 5, 9]</li>
          <li>Pass 3: [1, 2, 5, 5, 9]</li>
        </ul>
      </p>
      <p>
        Explore the topics in the menu to delve into the details of each sorting algorithm, their implementations, and when to use them.
      </p>
    </div>
  );
};

export default Sorting;
