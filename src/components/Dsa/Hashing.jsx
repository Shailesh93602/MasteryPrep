import React from "react";
import '../../styles/Topic.css';

const Hashing = () => {
  return (
    <div className="topic-content">
      <h1>Hashing in Data Structures</h1>
      <p>
        Hashing is a powerful technique used to map data to a fixed-size array, known as a hash table.
        It employs a hash function to convert input data into an index, providing fast and efficient data retrieval.
      </p>
      <p>
        <b>Declaration:</b>
      </p>
      <p>
        Let's consider a simple example of a hash table using JavaScript. In this example, we'll create a basic
        hash function and handle collisions using chaining.
      </p>
      <pre>
        {`// Hash table implementation using chaining
class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }

  search(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let item of this.table[index]) {
        if (item.key === key) {
          return item.value;
        }
      }
    }
    return null;
  }
}

// Example usage
let hashTable = new HashTable(10);
hashTable.insert("name", "John");
hashTable.insert("age", 25);
console.log(hashTable.search("name")); // Outputs "John"
console.log(hashTable.search("city")); // Outputs null`}
      </pre>
      <p>
        Hashing finds applications in indexing data in databases, implementing caches, and ensuring quick
        data retrieval in hash maps. Explore the topics in the menu to understand the intricacies of hashing
        and its applications in solving real-world problems efficiently.
      </p>
      <p>
        Happy hashing in the world of Data Structures!
      </p>
    </div>
  );
};

export default Hashing;
