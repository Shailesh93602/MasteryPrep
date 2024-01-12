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
      };`}</pre>
      <h2>Key Concepts Related to Classes</h2>
      <h3>1. Members (Attributes and Methods)</h3>
      <p>
        Class members include attributes (properties) and methods (functions).
        Attributes represent the state of the object, while methods define its
        behavior.
      </p>
      <h3>2. Constructors</h3>
      <p>
        Constructors are special methods called when an object is instantiated.
        They initialize the object's state. In JavaScript, the constructor is
        defined using the <code>constructor</code> method.
      </p>
      <h3>3. Access Modifiers</h3>
      <p>
        Access modifiers control the visibility of class members. Common access
        modifiers include:
      </p>
      <ul>
        <li>
          <code>public</code>: Accessible from anywhere.
        </li>
        <li>
          <code>private</code>: Accessible only within the class.
        </li>
        <li>
          <code>protected</code>: Accessible within the class and its
          subclasses.
        </li>
      </ul>

      <h3>4. Static Members</h3>
      <p>
        Static members belong to the class rather than instances. They are
        accessed using the class name and can be shared among all instances.
      </p>

      <h3>Example:</h3>
      <pre>{`
      class Rectangle {
        private: //access modifier
          int length; // attribute or property
          int width;
        public:  //access modifier
          Rectangle(int l, int b) { // Constructor
            length = l;
            width = b;
          }
          void set(int l, int b) { // method or function
            length = l;
            width = b;
          }
          void display() {
            cout <<length <<" " <<width <<endl;
          }
      };
      `}</pre>
    </div>
  );
};

export default Classes;
