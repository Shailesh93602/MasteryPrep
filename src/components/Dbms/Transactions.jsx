import React from "react";
import '../../styles/Topic.css';

const Transactions = () => {
  return (
    <div className="topic-content">
      <h1>SQL Transactions</h1>
      <p>
        SQL Transactions play a critical role in ensuring the integrity and consistency of a database by grouping a set of SQL statements into a single execution unit.
        They adhere to the ACID (Atomicity, Consistency, Isolation, Durability) properties, providing a reliable mechanism for managing complex database operations.
      </p>
      <p>
        <b>Key Aspects of SQL Transactions:</b>
      </p>
      <p>
        Understanding SQL Transactions involves knowledge of various aspects, including:
        <ul>
          <li><b>Starting a Transaction:</b> Learn how to initiate a transaction using the "BEGIN TRANSACTION" statement.</li>
          <li><b>Committing a Transaction:</b> Explore the process of making changes permanent in the database using the "COMMIT" statement.</li>
          <li><b>Rollback:</b> Understand the concept of rollback and how it helps undo changes in case of errors or unforeseen issues.</li>
          <li><b>Isolation Levels:</b> Explore different isolation levels to control the visibility of changes made by transactions to other transactions.</li>
        </ul>
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Consider a scenario where you want to transfer funds between two bank accounts atomically. A SQL transaction for this might look like:
      </p>
      <pre>
        {`-- SQL Transaction example
BEGIN TRANSACTION;

UPDATE Account SET Balance = Balance - 100 WHERE AccountID = 123;
UPDATE Account SET Balance = Balance + 100 WHERE AccountID = 456;

COMMIT;
`}
      </pre>
      <p>
        This transaction deducts $100 from account 123 and credits the same amount to account 456, ensuring atomicity.
      </p>
      <p>
        Dive deeper into the world of SQL Transactions by exploring related topics in the menu and master the art of database management.
      </p>
      <p>
        Happy transaction handling!
      </p>
    </div>
  );
};

export default Transactions;
