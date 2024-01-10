import React from "react";
import '../../styles/Topic.css';

const Triggers = () => {
  return (
    <div className="topic-content">
      <h1>Database Triggers in SQL</h1>
      <p>
        Database triggers in SQL are powerful mechanisms that automatically execute a set of instructions in response to specific events on a particular table or view.
        These events could include INSERT, UPDATE, DELETE, or even specific data changes. Triggers play a crucial role in enforcing business rules, maintaining data integrity,
        and automating tasks based on database actions.
      </p>
      <p>
        <b>Key Aspects of Database Triggers:</b>
      </p>
      <p>
        Understanding database triggers involves key concepts:
        <ul>
          <li><b>Creation of Triggers:</b> Triggers are defined using the CREATE TRIGGER statement, specifying the triggering event and the associated actions.</li>
          <li><b>Types of Triggers:</b> There are various types of triggers, including BEFORE and AFTER triggers, which execute actions before or after the triggering event.</li>
          <li><b>Applications of Triggers:</b> Triggers are used to enforce complex business rules, maintain data consistency, and automate tasks based on database events.</li>
        </ul>
      </p>
      <p>
        <b>Example:</b>
      </p>
      <p>
        Consider a scenario where you want to automatically update a last modified timestamp whenever a row is updated. A trigger can handle this:
      </p>
      <pre>
        {`-- Creating an AFTER UPDATE Trigger
CREATE TRIGGER UpdateTimestampTrigger
AFTER UPDATE ON YourTable
FOR EACH ROW
BEGIN
  UPDATE YourTable
  SET LastModified = CURRENT_TIMESTAMP
  WHERE ID = NEW.ID;
END;
`}
      </pre>
      <p>
        This trigger ensures that the LastModified column is updated whenever a row in YourTable is updated.
      </p>
      <p>
        Dive into the world of Database Triggers by exploring related topics in the menu. Uncover advanced techniques and best practices to leverage the full potential of SQL triggers.
      </p>
      <p>
        Happy automating!
      </p>
    </div>
  );
};

export default Triggers;
