import React from "react";
import '../../styles/Topic.css';

const Arrays = () => {
  return (
    <div className="topic-content">
      <h1>Arrays in Data Structures</h1>
      <p>
        Arrays are fundamental data structures used to organize and store elements of the same type.
        They provide a systematic way to represent and access a collection of items, each identified
        by an index or a key.
      </p>
      <p>
        <b>Declaration and Initialization:</b>
      </p>
      <p>
        Arrays are declared by specifying the data type of elements and the array's name. They can
        be initialized during declaration or later in the program. Here's an example in JavaScript:
      </p>
      <pre className="code">
        {`// Declaration
let numbers;

// Initialization
numbers = [1, 2, 3, 4, 5];`}
      </pre>
      <p>
        <b>Accessing Elements:</b>
      </p>
      <p>
        Elements in an array are accessed using their index. The index starts at 0, so the first
        element is at index 0, the second at index 1, and so on.
      </p>
      <pre className="code">
        {`// Accessing elements
let firstElement = numbers[0]; // 1
let secondElement = numbers[1]; // 2`}
      </pre>
      <p>
        <b>Common Operations:</b>
      </p>
      <p>
        Arrays support various operations like searching, sorting, and adding/removing elements.
        Here's an example of searching for an element in an array:
      </p>
      <pre>
        {`// Searching in an array
let targetValue = 3;
let indexOfTarget = numbers.indexOf(targetValue); // 2 (index of 3 in the array)`}
      </pre>
      <p>
        Understanding arrays is crucial for efficient problem-solving. Explore the topics in the
        menu to delve deeper into array concepts, algorithms, and their applications in computer science.
      </p>
      <p>
        Happy coding with arrays!
      </p>
    </div>
  );
};

export default Arrays;
