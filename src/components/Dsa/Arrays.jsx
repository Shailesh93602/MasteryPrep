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
      <h3>1. Declaration and Initiation</h3>
      <p>
        Arrays are declared by specifying the data type of elements and the array's name. They can
        be initialized during declaration or later in the program.<i>Here's an example in C++:</i>
      </p>
      <pre className="code">{`
      //Declaration
      int arr[size];
      //Initialization
      for(int i=0; i<size; i++) arr[i] = i;
      `}</pre>
      <h3>2. Accessing Elements</h3>
      <p>
        Elements in an array are accessed using their index. The index starts at 0, so the first
        element is at index 0, the second at index 1, and so on.
      </p>
      <pre className="code">{`
      // Accessing Elements
      int firstElement = arr[0]; //1
      int secondElement = arr[1]; //2
      `}</pre>
      <h3>3. Common Operations</h3>
      <p>
        Arrays support various operations like searching, sorting, and adding/removing elements.
        <i>Here's an example of searching for an element in an array:</i>
      </p>
      <pre>{`
      //Searching in an Array
      int target = 3;
      int indexOfTarget;
      for(int i=0; i<size; i++) {
        if(arr[i] == target) indexOfTarget = i; //finds index of target element as 2
      }
      cout <<indexOfTarget+1 <<endl; //prints index in 1's indexing
      `}</pre>
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
