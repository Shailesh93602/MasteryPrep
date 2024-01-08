import React from "react";
import '../../styles/Topic.css';

const GreedyAlgorithms = () => {
  return (
    <div className="topic-content">
      <h1>Greedy Algorithms</h1>
      <p>
        Greedy Algorithms are powerful problem-solving techniques that follow a simple and intuitive strategy: make locally optimal choices at each stage with the hope of finding a global optimum.
      </p>
      <p>
        The key idea behind Greedy Algorithms is to make the best possible decision at each step, without worrying about the consequences in the future. This often leads to efficient and near-optimal solutions.
      </p>
      <p>
        <b>Common Problems Solved Using Greedy Algorithms:</b>
      </p>
      <ul>
        <li><b>Fractional Knapsack Problem:</b> Maximizing the total value of items placed into a knapsack with a limited capacity.</li>
        <li><b>Huffman Coding:</b> Efficiently encoding characters in a way that minimizes the total encoded length.</li>
        <li><b>Dijkstra's Shortest Path Algorithm:</b> Finding the shortest path between nodes in a graph with non-negative weights.</li>
      </ul>
      <p>
        Explore the topics in the menu to delve into different concepts and problem-solving techniques in Greedy Algorithms.
      </p>
    </div>
  );
};

export default GreedyAlgorithms;
