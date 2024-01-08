import React from "react";
import '../../styles/Topic.css';

const Introduction = () => {
  return (
    <div className="topic-content">
      <h1>Introduction to SQL</h1>
      <p>
        Structured Query Language (SQL) is a powerful and standard programming language designed for managing and manipulating
        relational databases. It plays a crucial role in handling data operations, allowing users to interact with databases
        effectively.
      </p>
      <p>
        <b>Basics of SQL:</b>
      </p>
      <p>
        SQL provides a set of commands to perform various operations on databases. The fundamental SQL operations include:
        querying data, inserting new records, updating existing records, and deleting records. These operations are expressed
        using SQL statements.
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Let's consider a simple SQL SELECT statement to retrieve data from a hypothetical "employees" table:
      </p>
      <pre>
        {`-- SQL SELECT statement
SELECT employee_id, first_name, last_name, job_title
FROM employees
WHERE department = 'IT';
`}
      </pre>
      <p>
        This SQL query retrieves employee details (employee_id, first_name, last_name, and job_title) from the "employees" table
        for those who belong to the 'IT' department.
      </p>
      <p>
        Explore the topics in the menu to delve deeper into specific aspects of SQL, including advanced queries, data modification,
        and database design. Enhance your database management skills to efficiently handle and organize data in relational databases.
      </p>
      <p>
        Happy exploring the world of SQL!
      </p>
    </div>
  );
};

export default Introduction;
