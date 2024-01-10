import React from "react";
import '../../styles/Topic.css';

const SqlBasics = () => {
  return (
    <div className="topic-content">
      <h1>SQL Basics</h1>
      <p>
        SQL (Structured Query Language) serves as a powerful tool for interacting with relational databases. It provides a set of
        standardized commands to perform various operations on databases, making it an essential skill for database management and
        data manipulation.
      </p>
      <p>
        <b>Key SQL Operations:</b>
      </p>
      <ul>
        <li>SELECT: Retrieve data from a database</li>
        <li>INSERT: Add new records to a table</li>
        <li>UPDATE: Modify existing records in a table</li>
        <li>DELETE: Remove records from a table</li>
      </ul>
      <p>
        <b>Example of a SQL SELECT Statement:</b>
      </p>
      <pre className="code">
        {`-- SQL SELECT statement
SELECT column1, column2
FROM table
WHERE condition;
`}
      </pre>
      <p>
        This SQL query retrieves specific columns from a table based on a specified condition.
      </p>
      <p>
        <b>Basic SQL Commands:</b>
      </p>
      <ul>
        <li>CREATE: Create a new table or database</li>
        <li>ALTER: Modify the structure of a table</li>
        <li>DROP: Delete a table or database</li>
        <li>GRANT and REVOKE: Manage user permissions</li>
      </ul>
      <p>
        Explore the subtopics in the menu to gain a deeper understanding of SQL basics, advanced queries, and database design.
        Enhance your SQL skills to effectively manage and manipulate data in relational databases.
      </p>
      <p>
        Happy learning the SQL basics in the world of DBMS!
      </p>
    </div>
  );
};

export default SqlBasics;
