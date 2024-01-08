import React from 'react';
import '../../styles/Topic.css';

const MessagePassing = () => {
  return (
    <div className="topic-content">
      <h1>Message Passing in Object-Oriented Programming (OOP)</h1>
      <p>
        Message passing is a fundamental concept in object-oriented programming
        where objects communicate by sending and receiving messages. It enables
        objects to interact with each other by invoking methods or requesting
        services.
      </p>

      <h2>1. Communication Between Objects</h2>
      <p>
        In OOP, objects interact through message passing. When one object needs
        to request an action or information from another object, it sends a
        message to that object. The receiving object then processes the
        message, and the interaction is based on the methods defined in the
        objects' classes.
      </p>

      <h2>2. Object Collaboration</h2>
      <p>
        Message passing promotes collaboration between objects. Each object
        encapsulates its data and behavior, and communication occurs through
        well-defined interfaces. This enhances modularity and allows for
        changes in one object without affecting others, as long as the
        interface remains consistent.
      </p>

      <h2>3. Method Invocation</h2>
      <p>
        Message passing involves invoking methods or functions on objects. When
        an object receives a message, it processes the request by executing the
        corresponding method. This supports the concept of encapsulation,
        keeping the internal implementation of objects hidden.
      </p>

      <h2>4. Benefits of Message Passing</h2>
      <p>
        Message passing contributes to the flexibility and extensibility of
        OOP. It allows objects to interact in a loosely coupled manner,
        promoting code reusability and maintainability. Message passing is
        essential for achieving polymorphism and dynamic binding in OOP.
      </p>
    </div>
  );
};

export default MessagePassing;
