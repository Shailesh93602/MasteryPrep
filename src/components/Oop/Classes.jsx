import React from "react";
import "../../styles/Topic.css";

const Classes = () => {
  return (
    <div className="topic-content">
      <h1>Classes in Object-Oriented Programming (OOP)</h1>
      <p>
        A class is a <code>user-defined data type</code> that consists of data
        members and member functions. Instances of a class, called objects, can
        access and use these members. It serves as a blueprint, representing the
        common properties and methods shared by all objects of that type.
      </p>
      <p>
        Class in any programming language is the building block that tends to
        Object-Oriented Programming.
      </p>
      <p>
        In OOP, a class encapsulates the data (attributes) and behavior
        (methods) that objects will exhibit. It acts as a template for creating
        objects with shared characteristics.
      </p>
      <p>
        <b>Example:</b> <i>Car Class</i>
      </p>
      <p>
        Consider the class of cars. Although individual cars may vary in brand
        and name, they share common properties like having four wheels, a speed
        limit, and a mileage range. The class "Car" defines these common
        properties.
      </p>
      <h2>Declaration of a Class</h2>
      <p>
        A class is defined by using keyword class followed by the name of the
        class. The body of the class is defined inside the curly brackets and
        terminated by a semicolon at the end.
      </p>
      <pre>{`
      class className {
        //data 
        //functions
      };
      `}</pre>

      <h2>Example</h2>
      <pre>{`
      class Car {
        public: 
          int maxSpeed;

          void setMaxSpeed(int speed) {
            maxSpeed = speed;
          }
          int getMaxSpeed() {
            return maxSpeed;
          }
      };
      `}</pre>
      <p>
      Happy learning about Classes!
      </p>
    </div>
  );
};

export default Classes;
