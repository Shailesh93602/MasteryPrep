import React from 'react';
import '../../styles/Topic.css';

const DynamicBinding = () => {
  return (
    <div className="topic-content">
      <h1>Dynamic Binding in Object-Oriented Programming (OOP)</h1>
      <p>
        In dynamic binding, the code to be executed in response to the function
        call is decided at runtime. Dynamic binding means that the code
        associated with a given procedure call is not known until the time of
        the call at runtime.
      </p>

      <h2>1. Dynamic Method Binding</h2>
      <p>
        One of the main advantages of inheritance is that some derived class D
        has all the members of its base class B. Once D is not hiding any of
        the public members of B, then an object of D can represent B in any
        context where a B could be used. This feature is known as subtype
        polymorphism.
      </p>

      <p>
        Dynamic binding adds flexibility to the program by allowing decisions
        about method implementation to be made at runtime. This is in contrast
        to static binding, where such decisions are made at compile time.
      </p>
      <p>
      Happy learning about Dynamic Binding!
      </p>
    </div>
  );
};

export default DynamicBinding;
