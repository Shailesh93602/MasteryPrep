import React from "react";
import '../../styles/Topic.css';

const Subqueries = () => {
  return (
    <div className="topic-content">
      <h1>SQL Subqueries</h1>
      <p>
        SQL Subqueries, also known as nested queries or inner queries, are a powerful feature that allows you to embed one query within another.
        This capability enhances the flexibility and expressiveness of your SQL statements, enabling you to perform complex operations in a more concise manner.
      </p>
      <p>
        <b>Types of SQL Subqueries:</b>
      </p>
      <p>
        SQL Subqueries come in different types, each serving a specific purpose:
        <ul>
          <li><b>Scalar Subqueries:</b> Return a single value and can be used in a place where an expression is expected.</li>
          <li><b>Row Subqueries:</b> Return a single row of results and can be used in a place where a single row is expected, such as comparisons.</li>
          <li><b>Table Subqueries:</b> Return a result set of multiple rows and columns and can be used as a table in the FROM clause.</li>
        </ul>
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Consider a scenario where you want to find employees whose salary is higher than the average salary of their department using a Scalar Subquery:
      </p>
      <pre>
        {`-- SQL Scalar Subquery example
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees GROUP BY department_id);
`}
      </pre>
      <p>
        This query retrieves employees whose salary is higher than the average salary of their respective departments using a Scalar Subquery.
      </p>
      <p>
        Explore various use cases and advanced techniques of SQL subqueries in the menu to elevate your SQL proficiency.
      </p>
      <p>
        Happy querying!
      </p>
    </div>
  );
};

export default Subqueries;
