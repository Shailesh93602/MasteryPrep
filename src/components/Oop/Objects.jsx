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

      <h3>1. Creating Objects</h3>
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

      <h3>2. Object Properties</h3>
      <p>
        Objects have properties, representing their state. These properties can
        be of various data types such as strings, numbers, or even other
        objects.
      </p>

      <h3>3. Object Methods</h3>
      <p>
        Methods are functions associated with objects, defining their behavior.
        They allow objects to perform actions or provide information.
      </p>

      <h3>4. Object Initialization</h3>
      <p>
        During object instantiation, you can initialize its properties and
        perform necessary setup using a constructor method.
      </p>

      <h3>5. Using Objects</h3>
      <p>
        Objects are utilized to model and interact with entities in your
        application. They enhance code organization, making it modular and
        reusable.
      </p>

      <h3>6. Object Relationships</h3>
      <p>
        Objects can have relationships with each other, such as associations,
        aggregations, and compositions. These relationships describe how objects
        interact and collaborate within a system.
      </p>
      <p>
      Happy learning about Objects!
      </p>
    </div>
  );
};

export default Objects;
