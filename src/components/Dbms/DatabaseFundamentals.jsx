import React from "react";
import '../../styles/Topic.css';

const DatabaseFundamentals = () => {
  return (
    <div className="topic-content">
      <h1>Database Fundamentals</h1>
      <p>
        Database Fundamentals are essential concepts that provide the groundwork for understanding the structure and functionality
        of databases within the realm of Database Management Systems (DBMS).
      </p>
      <p>
        <b>Key Concepts in Database Fundamentals:</b>
      </p>
      <ul>
        <li>Data Types and Fields</li>
        <li>Primary Keys and Foreign Keys</li>
        <li>Normalization</li>
        <li>Database Relationships</li>
        <li>SQL (Structured Query Language)</li>
        <li>Indexing and Searching</li>
        <li>Data Integrity</li>
      </ul>
      <p>
        <b>Data Types and Fields:</b>
      </p>
      <p>
        In databases, data is organized into fields, each with a specified data type. Common data types include INTEGER, VARCHAR,
        DATE, etc. Understanding data types is crucial for efficient storage and retrieval of information.
      </p>
      <p>
        <b>Primary Keys and Foreign Keys:</b>
      </p>
      <p>
        Primary Keys uniquely identify records in a table, while Foreign Keys establish relationships between tables. These keys play
        a vital role in maintaining data integrity and enforcing relationships.
      </p>
      <p>
        <b>Normalization:</b>
      </p>
      <p>
        Normalization is the process of organizing data to reduce redundancy and dependency. It involves breaking down large tables
        into smaller, related tables to improve efficiency and minimize data anomalies.
      </p>
      <p>
        Explore the subtopics in the menu to delve deeper into each aspect of Database Fundamentals. Gain a comprehensive understanding
        of the principles that govern the design and management of databases.
      </p>
      <p>
        Happy learning Database Fundamentals in the world of DBMS!
      </p>
    </div>
  );
};

export default DatabaseFundamentals;
