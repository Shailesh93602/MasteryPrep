import React from "react";
import '../../styles/Topic.css';

const DynamicProgramming = () => {
  return (
    <div className="topic-content">
      <h1>Dynamic Programming (DP)</h1>
      <p>
        Dynamic Programming is a powerful method for solving complex problems by breaking them down into simpler overlapping subproblems.
        It aims to optimize solutions by efficiently storing and reusing the results of subproblems, leading to more efficient algorithms.
      </p>
      <p>
        <b>Key Concepts in Dynamic Programming:</b>
      </p>
      <p>
        <b>1. Memoization:</b> Storing the results of expensive function calls and returning the cached result when the same inputs occur again.
      </p>
      <p>
        <b>2. Tabulation:</b> Building a table (usually a 2D array) and filling it iteratively, starting from the smallest subproblems.
      </p>
      <p>
        <b>3. Longest Common Subsequence (LCS):</b> A classic problem where DP is often applied to find the longest subsequence present in given sequences.
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Let's consider the Fibonacci sequence using Dynamic Programming:
        <ul>
          <li>Recursive Fibonacci: F(n) = F(n-1) + F(n-2)</li>
          <li>Dynamic Programming (Memoization): Save and reuse results to avoid redundant computations.</li>
        </ul>
      </p>
      <pre>
        {`
          function fibonacci(n, memo = {}) {
            if (n <= 1) return n;
            if (memo[n]) return memo[n];

            memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
            return memo[n];
          }

          console.log(fibonacci(5)); // Output: 5
        `}
      </pre>
      <p>
        Explore the topics in the menu to delve into different concepts and problem-solving techniques in Dynamic Programming.
      </p>
    </div>
  );
};

export default DynamicProgramming;
