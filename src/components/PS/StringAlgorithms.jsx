import React from "react";
import '../../styles/Topic.css';

const StringAlgorithms = () => {
  return (
    <div className="topic-content">
      <h1>String Algorithms</h1>
      <p>
        String algorithms play a crucial role in computer science and programming, addressing various tasks related to string manipulation, searching, and pattern matching.
      </p>
      <p>
        <b>Common String Algorithms:</b>
      </p>
      <ul>
        <li><b>String Searching Algorithms:</b> Techniques like Knuth-Morris-Pratt and Rabin-Karp for efficient string search operations.</li>
        <li><b>String Sorting Algorithms:</b> Algorithms such as Radix Sort optimized for sorting strings.</li>
        <li><b>Longest Common Subsequence (LCS):</b> Finding the longest subsequence common to two or more strings.</li>
        <li><b>String Compression and Decompression:</b> Methods to reduce storage space for representing strings.</li>
        <li><b>Regular Expressions:</b> Patterns defining a set of strings, widely used for searching and matching.</li>
      </ul>
      <p>
        Explore the topics in the menu to delve into different concepts and problem-solving techniques in String Algorithms.
      </p>
    </div>
  );
};

export default StringAlgorithms;
