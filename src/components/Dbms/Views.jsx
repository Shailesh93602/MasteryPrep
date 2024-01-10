import React from "react";
import '../../styles/Topic.css';

const Views = () => {
  return (
    <div className="topic-content">
      <h1>Database Views in SQL</h1>
      <p>
        Database views in SQL provide a powerful mechanism for creating virtual tables based on the result of a SELECT query. They allow you to present data from one
        or more tables in a structured and organized manner, offering a simplified and tailored view for users or applications.
      </p>
      <p>
        <b>Key Aspects of Database Views:</b>
      </p>
      <p>
        Understanding database views involves key concepts:
        <ul>
          <li><b>Creation of Views:</b> Views are created using the CREATE VIEW statement, defining the SELECT query that determines the view's content.</li>
          <li><b>Usage of Views:</b> Once created, views can be queried like regular tables, simplifying complex queries by encapsulating logic and relationships.</li>
          <li><b>Benefits of Views:</b> Views enhance database management by providing a layer of abstraction, improving security, and offering a logical organization of data.</li>
        </ul>
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Consider a scenario where you have a complex join involving multiple tables. A view can simplify this by encapsulating the logic:
      </p>
      <pre>
        {`-- Creating a View
CREATE VIEW EmployeeDetails AS
SELECT Employees.EmployeeID, Employees.FirstName, Employees.LastName, Departments.DepartmentName
FROM Employees
JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;

-- Querying the View
SELECT * FROM EmployeeDetails;
`}
      </pre>
      <p>
        This view provides a simplified representation of employee details along with their associated departments.
      </p>
      <p>
        Dive into the world of Database Views by exploring related topics in the menu. Uncover advanced techniques and best practices to make the most out of SQL views.
      </p>
      <p>
        Happy querying!
      </p>
    </div>
  );
};

export default Views;
