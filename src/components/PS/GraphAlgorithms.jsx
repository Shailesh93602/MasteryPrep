import React from "react";
import '../../styles/Topic.css';

const GraphAlgorithms = () => {
  return (
    <div className="topic-content">
      <h1>Graph Algorithms</h1>
      <p>
        Graph algorithms are fundamental in computer science and play a key role in solving problems related to entities and their relationships.
      </p>
      <p>
        <b>Common Graph Algorithms:</b>
      </p>
      <ul>
        <li><b>Breadth-First Search (BFS):</b> Traversing a graph level by level, useful for finding the shortest path.</li>
        <li><b>Depth-First Search (DFS):</b> Exploring as far as possible along each branch before backtracking, used for topological sorting and connected components.</li>
        <li><b>Dijkstra's Shortest Path Algorithm:</b> Finding the shortest path in a weighted graph.</li>
        <li><b>Prim's Algorithm:</b> Constructing a minimum spanning tree of a connected, undirected graph.</li>
        <li><b>Kruskal's Algorithm:</b> Finding a minimum spanning tree for a connected, weighted graph.</li>
      </ul>
      <p>
        Explore the topics in the menu to delve into different concepts and problem-solving techniques in Graph Algorithms.
      </p>
    </div>
  );
};

export default GraphAlgorithms;
