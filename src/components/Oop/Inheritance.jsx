import React from 'react';
import '../../styles/Topic.css';

const Inheritance = () => {
  return (
    <div className="topic-content">
      <h1>Inheritance in Object-Oriented Programming (OOP)</h1>
      <p>
        Inheritance is a fundamental concept in OOP that allows a class
        <code>(subclass)</code> to inherit properties and methods from another class
        <code>(superclass)</code>. It promotes code reuse and establishes an "is-a"
        relationship between classes. 
      </p>
      <p>
        Inheritance is an important pillar of OOP (Object-Oriented
        Programming). The capability of a class to derive properties and
        characteristics from another class is called Inheritance. When we
        write a class, we inherit properties from other classes. So when we
        create a class, we do not need to write all the properties and
        functions again and again, as these can be inherited from another
        class that possesses them. Inheritance allows the user to reuse the
        code whenever possible and reduce its redundancy.
      </p>
      <b>Let's explore the important aspects of inheritance:</b>
      <h2>1. Base Class (Superclass)</h2>
      <p>
        The base class, also known as the superclass or parent class, is the
        class that provides common properties and methods. It serves as a
        template for other classes.
      </p>

      <h2>2. Derived Class (Subclass)</h2>
      <p>
        The derived class, also known as the subclass or child class,
        inherits properties and methods from the base class. It can also
        have additional or overridden members.
      </p>

      <h2>3. Inheriting Properties</h2>
      <p>
        Inheritance allows the subclass to inherit attributes (properties)
        from the superclass. This includes both public and protected attributes.
      </p>

      <h2>4. Inheriting Methods</h2>
      <p>
        Subclasses inherit methods from the superclass. These methods can be
        used as-is or overridden to provide specific implementations in the
        subclass.
      </p>

      <h2>5. Overriding Methods</h2>
      <p>
        Subclasses have the option to override (redefine) methods inherited
        from the superclass. This allows customization of behavior in the
        subclass.
      </p>

      <h2>6. Access Modifiers in Inheritance</h2>
      <p>
        Access modifiers control the visibility of inherited members. Common
        access modifiers include public, private, and protected.
      </p>

      <h2>7. Polymorphism through Inheritance</h2>
      <p>
        Inheritance enables polymorphism, allowing objects of the subclass
        to be used wherever objects of the superclass are expected.
      </p>
      <h2>8. Inheritance Example:</h2>
      <p>
        Here's is a simaple example of Inheritance:
      </p>
      <pre>{`
      
      `}</pre>
      <p>
      Happy learning about Inheritance!
      </p>
    </div>
  );
};

export default Inheritance;
