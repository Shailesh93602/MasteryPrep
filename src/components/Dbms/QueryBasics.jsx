import React from "react";
import '../../styles/Topic.css';

const QueryBasics = () => {
  return (
    <div className="topic-content">
      <h1>Query Basics</h1>
      <p>
        Query basics are the foundation of SQL, involving the essential components of constructing meaningful database queries.
        It encompasses selecting data, applying filters, and specifying conditions to retrieve relevant information.
      </p>
      <p>
        <b>Components of a SQL Query:</b>
      </p>
      <p>
        A typical SQL query consists of the following components:
        <ul>
          <li><b>SELECT:</b> Specifies the columns to be retrieved.</li>
          <li><b>FROM:</b> Identifies the table from which data is selected.</li>
          <li><b>WHERE:</b> Filters data based on specified conditions.</li>
          <li><b>ORDER BY:</b> Sorts the result set based on one or more columns.</li>
        </ul>
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Let's consider a simple SQL query to retrieve employee names from a "employees" table:
      </p>
      <pre>
        {`-- SQL SELECT query
SELECT first_name, last_name
FROM employees
WHERE department = 'IT'
ORDER BY last_name ASC;
`}
      </pre>
      <p>
        This SQL query selects the first and last names of employees from the "employees" table who belong to the 'IT' department
        and orders the results alphabetically by last name.
      </p>
      <p>
        Explore more SQL topics in the menu to enhance your query-building skills and gain a deeper understanding of database management.
        Mastering these basics will empower you to efficiently retrieve and manipulate data from relational databases.
      </p>
      <p>
        Happy querying!
      </p>
    </div>
  );
};

export default QueryBasics;
