import React from "react";
import '../../styles/Topic.css';

const StoredProcedures = () => {
  return (
    <div className="topic-content">
      <h1>SQL Stored Procedures</h1>
      <p>
        SQL Stored Procedures are powerful constructs that allow you to group multiple SQL statements into a single, named unit.
        These procedures are stored in the database and can be executed later, providing modularity, reusability, and enhanced security in database operations.
      </p>
      <p>
        <b>Key Aspects of SQL Stored Procedures:</b>
      </p>
      <p>
        Understanding SQL Stored Procedures involves knowledge of various aspects, including:
        <ul>
          <li><b>Creating Stored Procedures:</b> Learn the syntax for creating stored procedures in SQL and understand how to define parameters.</li>
          <li><b>Executing Stored Procedures:</b> Explore ways to execute stored procedures and pass parameters for dynamic functionality.</li>
          <li><b>Benefits of Stored Procedures:</b> Understand the advantages of using stored procedures, such as improved performance, code reusability, and enhanced security.</li>
          <li><b>Error Handling:</b> Learn about error handling mechanisms within stored procedures for robust database management.</li>
        </ul>
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Consider a scenario where you want to create a simple stored procedure that retrieves customer information based on a given customer ID:
      </p>
      <pre>
        {`-- SQL Create Stored Procedure example
CREATE PROCEDURE GetCustomerInfo(@CustomerID INT)
AS
BEGIN
  SELECT * FROM Customers WHERE CustomerID = @CustomerID;
END;
`}
      </pre>
      <p>
        This stored procedure, named "GetCustomerInfo," takes a parameter (@CustomerID) and retrieves customer information from the "Customers" table.
      </p>
      <p>
        Dive deeper into the world of SQL Stored Procedures by exploring related topics in the menu and elevate your database development skills.
      </p>
      <p>
        Happy stored procedure crafting!
      </p>
    </div>
  );
};

export default StoredProcedures;
