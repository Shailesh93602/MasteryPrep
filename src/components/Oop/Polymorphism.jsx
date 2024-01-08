import React from 'react';
import '../../styles/Topic.css';

const Polymorphism = () => {
  return (
    <div className="topic-content">
      <h1>Polymorphism in Object-Oriented Programming (OOP)</h1>
      <p>
        Polymorphism is a powerful concept in OOP that allows objects to be
        treated as instances of their base class, even when they are
        instantiated from derived classes. It promotes flexibility and
        extensibility in your code. Let's explore the key aspects of
        polymorphism:
      </p>

      <h2>1. Types of Polymorphism</h2>
      <p>
        There are two main types of polymorphism: compile-time (static) and
        runtime (dynamic).
      </p>

      <h3>Compile-Time Polymorphism</h3>
      <p>
        Also known as static polymorphism, it is achieved through method
        overloading. Method overloading allows a class to have multiple
        methods with the same name but different parameters.
      </p>

      <h3>Runtime Polymorphism</h3>
      <p>
        Also known as dynamic polymorphism, it is achieved through method
        overriding. Method overriding allows a subclass to provide a specific
        implementation of a method that is already defined in its superclass.
      </p>

      <h2>2. Method Overloading</h2>
      <p>
        Method overloading involves defining multiple methods in the same class
        with the same name but different parameter types or a different number
        of parameters.
      </p>

      <h2>3. Method Overriding</h2>
      <p>
        Method overriding occurs when a subclass provides a specific
        implementation for a method that is already defined in its superclass.
        This allows the subclass to customize the behavior of the inherited
        method.
      </p>

      <h2>4. Achieving Polymorphism</h2>
      <p>
        Polymorphism allows objects to be treated as instances of their base
        class, providing flexibility and extensibility in code design. It
        enables a single interface to represent multiple types.
      </p>

      <h2>5. Benefits of Polymorphism</h2>
      <p>
        Polymorphism contributes to code reusability, flexibility, and the
        ability to write more generic and extensible code. It enhances the
        adaptability of the software system.
      </p>

      <p>
        The word polymorphism means having many forms. In simple words, we can
        define polymorphism as the ability of a message to be displayed in
        more than one form. For example, a person at the same time can have
        different characteristics. Like a man at the same time is a father, a
        husband, an employee. So the same person possesses different behavior
        in different situations. This is called polymorphism.
      </p>
    </div>
  );
};

export default Polymorphism;
