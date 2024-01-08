import React from "react";
import '../../styles/Topic.css';

const Indexes = () => {
  return (
    <div className="topic-content">
      <h1>SQL Indexes</h1>
      <p>
        SQL Indexes are essential elements that enhance the speed of data retrieval operations on database tables.
        They significantly contribute to optimizing query performance by providing efficient access to specific rows based on the indexed columns.
      </p>
      <p>
        <b>Key Aspects of SQL Indexes:</b>
      </p>
      <p>
        Understanding SQL Indexes involves knowledge of various aspects, including:
        <ul>
          <li><b>Types of Indexes:</b> Explore different types, such as clustered and non-clustered indexes, each with its advantages and use cases.</li>
          <li><b>Creating Indexes:</b> Learn how to create indexes on one or more columns to speed up queries.</li>
          <li><b>Managing Indexes:</b> Discover techniques for managing indexes, including modifying and dropping indexes when necessary.</li>
          <li><b>Index Best Practices:</b> Understand best practices for using indexes effectively to improve overall database performance.</li>
        </ul>
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Consider a scenario where you want to create a non-clustered index on the "product_name" column of a "products" table:
      </p>
      <pre>
        {`-- SQL Create Non-Clustered Index example
CREATE INDEX idx_product_name ON products(product_name);
`}
      </pre>
      <p>
        This SQL statement creates a non-clustered index on the "product_name" column of the "products" table, improving search performance for queries involving this column.
      </p>
      <p>
        Dive deeper into the world of SQL indexes by exploring related topics in the menu and master the art of optimizing database queries.
      </p>
      <p>
        Happy indexing!
      </p>
    </div>
  );
};

export default Indexes;
