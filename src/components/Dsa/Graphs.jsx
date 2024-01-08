import React from "react";
import '../../styles/Topic.css';

const Graphs = () => {
  return (
    <div className="topic-content">
      <h1>Graphs in Data Structures</h1>
      <p>
        Graphs are versatile data structures that consist of nodes (or vertices) connected by edges.
        These edges can be directed or undirected, and they may have weights representing the cost or distance
        between nodes.
      </p>
      <p>
        <b>Declaration:</b>
      </p>
      <p>
        Let's consider a simple example of an undirected graph using JavaScript. In this example, we'll define a basic
        structure and demonstrate how to represent a graph using adjacency lists.
      </p>
      <pre>
        {`// Graph implementation using adjacency list
class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.vertices.get(vertex1).push(vertex2);
    this.vertices.get(vertex2).push(vertex1);
  }
}

// Example usage
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");

console.log("Graph representation using adjacency list:");
console.log(graph.vertices);
// Outputs: Map { 'A' => ['B'], 'B' => ['A', 'C'], 'C' => ['B'] }
`}
      </pre>
      <p>
        Graphs are widely used to model relationships between entities, and they find applications in various domains
        like social networks, transportation systems, and computer networks.
        Explore the topics in the menu to delve into the properties and algorithms associated with graphs.
      </p>
      <p>
        Happy exploring the world of Graphs in Data Structures!
      </p>
    </div>
  );
};

export default Graphs;
