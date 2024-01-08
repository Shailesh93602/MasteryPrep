import React from "react";
import "../../styles/Topic.css";

const Classes = () => {
  return (
    <div className="topic-content">
      <h1>Classes in Object-Oriented Programming (OOP)</h1>
      <p>
        A class is a <code>user-defined data type</code> that consists of data members and
        member functions. Instances of a class, called objects, can access and
        use these members. It serves as a blueprint, representing the common
        properties and methods shared by all objects of that type.
      </p>
      <p>
        In OOP, a class encapsulates the data (attributes) and behavior
        (methods) that objects will exhibit. It acts as a template for creating
        objects with shared characteristics.
      </p>

      <h2>Example: Car Class</h2>
      <p>
        Consider the class of cars. Although individual cars may vary in brand
        and name, they share common properties like having four wheels, a speed
        limit, and a mileage range. The class "Car" defines these common
        properties.
      </p>

      <h2>Key Concepts Related to Classes</h2>
      <h3>1. Class Definition</h3>
      <p>
        A class is defined using the <code>class</code> keyword, serving as a
        template for creating objects.
      </p>

      <h3>2. Constructors</h3>
      <p>
        Constructors are special methods called when an object is instantiated.
        They initialize the object's state. In JavaScript, the constructor is
        defined using the <code>constructor</code> method.
      </p>

      <h3>3. Members (Attributes and Methods)</h3>
      <p>
        Class members include attributes (properties) and methods (functions).
        Attributes represent the state of the object, while methods define its
        behavior.
      </p>

      <h3>4. Access Modifiers</h3>
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

      <h3>5. Static Members</h3>
      <p>
        Static members belong to the class rather than instances. They are
        accessed using the class name and can be shared among all instances.
      </p>

      <h3>6. Inheritance</h3>
      <p>
        Inheritance allows a class (subclass) to inherit properties and methods
        from another class (superclass). It promotes code reusability and
        establishes an "is-a" relationship between classes.
      </p>
    </div>
  );
};

export default Classes;
