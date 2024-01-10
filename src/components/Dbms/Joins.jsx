import React from "react";
import '../../styles/Topic.css';

const Joins = () => {
  return (
    <div className="topic-content">
      <h1>SQL Joins</h1>
      <p>
        SQL Joins are a cornerstone of relational databases, providing a powerful mechanism to combine rows from multiple tables based on related columns.
        Mastering different types of joins is essential for crafting sophisticated queries and retrieving comprehensive datasets.
      </p>
      <p>
        <b>Types of SQL Joins:</b>
      </p>
      <p>
        There are several types of SQL joins, each serving a specific purpose:
        <ul>
          <li><b>INNER JOIN:</b> Retrieves rows where there is a match in both tables.</li>
          <li><b>LEFT JOIN (or LEFT OUTER JOIN):</b> Retrieves all rows from the left table and the matched rows from the right table.</li>
          <li><b>RIGHT JOIN (or RIGHT OUTER JOIN):</b> Retrieves all rows from the right table and the matched rows from the left table.</li>
          <li><b>FULL JOIN (or FULL OUTER JOIN):</b> Retrieves all rows when there is a match in either the left or right table.</li>
        </ul>
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Consider a scenario where you want to retrieve a list of employees along with their department names using an INNER JOIN:
      </p>
      <pre>
        {`-- SQL INNER JOIN example
SELECT employees.first_name, employees.last_name, departments.department_name
FROM employees
INNER JOIN departments ON employees.department_id = departments.department_id;
`}
      </pre>
      <p>
        This query fetches the first name and last name of employees along with their corresponding department names by joining the "employees" and "departments" tables.
      </p>
      <p>
        Explore more SQL join variations and advanced techniques in the menu to deepen your understanding and elevate your database querying skills.
      </p>
      <p>
        Happy querying!
      </p>
    </div>
  );
};

export default Joins;
