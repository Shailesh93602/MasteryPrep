import React from 'react';
import '../../styles/Topic.css';

const Abstraction = () => {
  return (
    <div className="topic-content">
      <h1>Abstraction in Object-Oriented Programming (OOP)</h1>
      <p>
        Abstraction is a key principle of OOP, simplifying complex systems by
        modeling classes based on essential properties and behaviors. It allows
        developers to focus on relevant details while hiding unnecessary
        complexity. Let's explore the key aspects of abstraction:
      </p>

      <h2>1. Abstract Classes</h2>
      <p>
        Abstract classes cannot be instantiated on their own and serve as a
        blueprint for other classes. They may contain abstract methods that
        must be implemented by derived classes.
      </p>

      <h2>2. Abstract Methods</h2>
      <p>
        Abstract methods are declared in an abstract class without providing an
        implementation. Derived classes must provide implementations for these
        methods.
      </p>

      <h2>3. Abstract Properties</h2>
      <p>
        Abstract properties are declared in an abstract class without specifying
        a value. They must be implemented by derived classes, allowing for
        flexibility in representing attributes.
      </p>

      <h2>4. Interfaces</h2>
      <p>
        Interfaces define a contract for classes to implement. They contain only
        method signatures without implementations, promoting code consistency.
      </p>

      <h2>5. Benefits of Abstraction</h2>
      <p>
        Abstraction simplifies complex systems, reduces code redundancy, and
        enhances code maintainability. It allows developers to work at higher
        levels of abstraction, focusing on what needs to be done rather than
        how it's done.
      </p>

      <h2>6. Abstraction Example</h2>
      <p>
        Here's a simple example of abstraction using an abstract class and an
        interface to model different shapes:
      </p>
      <pre>
        {`abstract class Shape {
  abstract calculateArea(): number;
}

interface Colorable {
  getColor(): string;
}

class Circle extends Shape implements Colorable {
  private radius: number;
  private color: string;

  constructor(radius: number, color: string) {
    super();
    this.radius = radius;
    this.color = color;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getColor(): string {
    return this.color;
  }
}

const circle = new Circle(5, 'red');
console.log('Area:', circle.calculateArea());
console.log('Color:', circle.getColor());`}
      </pre>
    </div>
  );
};

export default Abstraction;
