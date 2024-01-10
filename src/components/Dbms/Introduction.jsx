import React from "react";
import '../../styles/Topic.css';

const Introduction = () => {
  return (
    <div className="topic-content">
      <h1>Introduction to Database Management Systems (DBMS)</h1>
      <p>
        A Database Management System (DBMS) is a software application that interacts with the user, applications, and the database
        itself to capture and analyze data. It serves as an efficient and organized solution for storing, managing, and retrieving
        vast amounts of information.
      </p>
      <p>
        <b>Basics of DBMS:</b>
      </p>
      <p>
        DBMS provides a systematic way to create, update, and manage databases. Key operations in DBMS include defining the database
        structure, inserting new data, updating existing data, querying data, and ensuring data integrity through various constraints.
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Let's consider a simple query to retrieve employee details from a hypothetical "employees" table:
      </p>
      <pre>
        {`-- SQL SELECT statement
SELECT employee_id, first_name, last_name, job_title
FROM employees
WHERE department = 'IT';
`}
      </pre>
      <p>
        This query retrieves employee details (employee_id, first_name, last_name, and job_title) from the "employees" table for
        those who belong to the 'IT' department.
      </p>
      <p>
        Explore the topics in the menu to delve deeper into specific aspects of DBMS, including advanced queries, data modification,
        normalization, and database design. Enhance your database management skills to efficiently handle and organize data in
        relational databases.
      </p>
      <p>
        Happy exploring the world of Database Management Systems!
      </p>
    </div>
  );
};

export default Introduction;
