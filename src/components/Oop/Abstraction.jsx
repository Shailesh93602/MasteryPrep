import React from "react";
import "../../styles/Topic.css";

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

      <h3>1. Abstract Classes</h3>
      <p>
        Abstract classes cannot be instantiated on their own and serve as a
        blueprint for other classes. They may contain abstract methods that must
        be implemented by derived classes.
      </p>

      <h3>2. Abstract Methods</h3>
      <p>
        Abstract methods are declared in an abstract class without providing an
        implementation. Derived classes must provide implementations for these
        methods.
      </p>

      <h3>3. Abstract Properties</h3>
      <p>
        Abstract properties are declared in an abstract class without specifying
        a value. They must be implemented by derived classes, allowing for
        flexibility in representing attributes.
      </p>

      <h3>4. Interfaces</h3>
      <p>
        Interfaces define a contract for classes to implement. They contain only
        method signatures without implementations, promoting code consistency.
      </p>

      <h3>5. Benefits of Abstraction</h3>
      <p>
        Abstraction simplifies complex systems, reduces code redundancy, and
        enhances code maintainability. It allows developers to work at higher
        levels of abstraction, focusing on what needs to be done rather than how
        it's done.
      </p>

      <h3>6. Abstraction Example</h3>
      <p>
        Here's a simple example of abstraction using an abstract class and an
        interface to model different shapes:
      </p>
      <pre>{`
      class Rectangle {
        private:
          int length, width;
        public:
          void set(int x, int y){
            length = x;
            width = y;
          }
          void display(){
            cout << "length = " <<length << endl;
            cout << "width = " <<width << endl;
          }
      };
      int main(){
        Rectangle r;
        r.set(10, 20);
        r.display();
        return 0;
      }
  `}</pre>
      <p>
        Here we are not allowed to access the variables length and width
        directly, however, we can call the function <code>set()</code> to set
        the values of length and width and the function <code>display()</code>{" "}
        to print the values of length and width.
      </p>
      <p>
      Happy learning about Abstraction!
      </p>
    </div>
  );
};

export default Abstraction;
