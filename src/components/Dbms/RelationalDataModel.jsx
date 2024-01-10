import React from "react";
import '../../styles/Topic.css';

const RelationalDataModel = () => {
  return (
    <div className="topic-content">
      <h1>Relational Data Model</h1>
      <p>
        The Relational Data Model is a foundational concept in Database Management Systems (DBMS) that defines how data is organized
        and manipulated in a relational database. It was introduced by Edgar F. Codd in 1970 and has since become the standard for
        managing structured data.
      </p>
      <p>
        <b>Key Components of the Relational Data Model:</b>
      </p>
      <ul>
        <li>Tables (Relations)</li>
        <li>Attributes (Columns)</li>
        <li>Rows (Tuples)</li>
        <li>Primary Keys</li>
        <li>Foreign Keys</li>
        <li>Normalization</li>
      </ul>
      <p>
        <b>Tables (Relations):</b>
      </p>
      <p>
        In the relational data model, data is organized into tables, also known as relations. Each table consists of rows and columns,
        where each row represents a record, and each column represents an attribute.
      </p>
      <p>
        <b>Attributes (Columns):</b>
      </p>
      <p>
        Attributes define the properties of a table and represent the different pieces of information stored in a database. Each column
        in a table corresponds to a specific attribute.
      </p>
      <p>
        <b>Rows (Tuples):</b>
      </p>
      <p>
        Rows, also known as tuples, represent individual records in a table. Each row contains a unique combination of values for each
        attribute.
      </p>
      <p>
        Explore the subtopics in the menu to delve deeper into each aspect of the Relational Data Model. Gain a comprehensive understanding
        of how to design, implement, and query relational databases.
      </p>
      <p>
        Happy exploring the Relational Data Model in the world of DBMS!
      </p>
    </div>
  );
};

export default RelationalDataModel;
