import React from "react";
import '../../styles/Topic.css';

const Normalization = () => {
  return (
    <div className="topic-content">
      <h1>Database Normalization</h1>
      <p>
        Database normalization is a systematic process used to organize a relational database to reduce data redundancy and improve data integrity.
        It aims to structure data in a way that minimizes the chances of data anomalies and ensures efficient storage and retrieval of information.
      </p>
      <p>
        <b>Key Aspects of Database Normalization:</b>
      </p>
      <p>
        Understanding database normalization involves key concepts:
        <ul>
          <li><b>First Normal Form (1NF):</b> Ensures that a table's rows and columns are organized, and each attribute contains atomic (indivisible) values.</li>
          <li><b>Second Normal Form (2NF):</b> Builds on 1NF and eliminates partial dependencies, ensuring that non-key attributes are fully functionally dependent on the primary key.</li>
          <li><b>Third Normal Form (3NF):</b> Further refines the normalization process by removing transitive dependencies, ensuring that non-key attributes depend only on the primary key.</li>
        </ul>
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Consider a denormalized table storing both customer information and orders. Through normalization, you might create separate tables for customers and orders:
      </p>
      <pre>
        {`-- Customer Table
CREATE TABLE Customers (
  CustomerID INT PRIMARY KEY,
  FirstName VARCHAR(50),
  LastName VARCHAR(50),
  -- Other customer details
);

-- Orders Table
CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  CustomerID INT,
  OrderDate DATE,
  -- Other order details
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
`}
      </pre>
      <p>
        This normalization process reduces redundancy and establishes a clear relationship between customers and their orders.
      </p>
      <p>
        Dive deeper into the world of Database Normalization by exploring related topics in the menu and master the art of designing efficient databases.
      </p>
      <p>
        Happy normalizing!
      </p>
    </div>
  );
};

export default Normalization;
