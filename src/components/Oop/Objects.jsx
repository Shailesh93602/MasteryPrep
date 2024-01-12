import React from "react";
import "../../styles/Topic.css";

const Objects = () => {
  return (
    <div className="topic-content">
      <h1>Objects in Object-Oriented Programming (OOP)</h1>
      <p>
        Objects are fundamental units of OOP, representing real-life entities
        and enabling the modeling of complex systems. Let's delve into key
        concepts related to objects:
      </p>

      <h2>1. Creating Objects</h2>
      <p>
        Objects are instances of classes. They are created using the{" "}
        <code>new</code> keyword. The process of creating an object is called
        instantiation.
      </p>
      <p>Example:</p>
      <pre>{`
      class Dog {
        public: 
          string name;
          string breed;
          Dog(name, breed) {
            this.name = name;
            this.breed = breed;
          }
          bark() {
            cout <<"Bhau..." <<endl;
          }
      };
      int main() {
        Dog dog = new Dog("Monty", "Golden Retriever");
        dog.bark(); // prints: Bhau...
      }
      `}</pre>

      <h2>2. Object Properties</h2>
      <p>
        Objects have properties, representing their state. These properties can
        be of various data types such as strings, numbers, or even other
        objects.
      </p>

      <h2>3. Object Methods</h2>
      <p>
        Methods are functions associated with objects, defining their behavior.
        They allow objects to perform actions or provide information.
      </p>

      <h2>4. Object Initialization</h2>
      <p>
        During object instantiation, you can initialize its properties and
        perform necessary setup using a constructor method.
      </p>

      <h2>5. Using Objects</h2>
      <p>
        Objects are utilized to model and interact with entities in your
        application. They enhance code organization, making it modular and
        reusable.
      </p>

      <h2>6. Object Relationships</h2>
      <p>
        Objects can have relationships with each other, such as associations,
        aggregations, and compositions. These relationships describe how objects
        interact and collaborate within a system.
      </p>
    </div>
  );
};

export default Objects;
