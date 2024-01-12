import React from 'react';
import '../../styles/Topic.css';

const Encapsulation = () => {
  return (
    <div className="topic-content">
      <h1>Encapsulation in Object-Oriented Programming (OOP)</h1>
      <p>
        Encapsulation is a fundamental principle of OOP, emphasizing the
        bundling of data (attributes) and methods (functions) that operate on
        the data into a single unit known as a class.
      </p>
      <p>
        Encapsulation is defined as the wrapping up of data under a single unit.
        It is the mechanism that binds together code and the data it manipulates.
        In Encapsulation, the variables or data of a class are hidden from any other
        class and can be accessed only through any member function of their class
        in which they are declared. As in encapsulation, the data in a class is
        hidden from other classes, so it is also known as data-hiding.
      </p>

      <p>
        Consider a real-life example of encapsulation, in a company, there are
        different sections like the accounts section, finance section, sales section,
        etc. The finance section handles all the financial transactions and keeps
        records of all the data related to finance. Similarly, the sales section
        handles all the sales-related activities and keeps records of all the sales.
        Now there may arise a situation when for some reason an official from the
        finance section needs all the data about sales in a particular month. In
        this case, he is not allowed to directly access the data of the sales section.
        He will first have to contact some other officer in the sales section and then
        request him to give the particular data. This is what encapsulation is. Here
        the data of the sales section and the employees that can manipulate them are
        wrapped under a single name “sales section”.
      </p>
      <b>Let's explore the key aspects of encapsulation:</b>

      <h2>1. Data Hiding</h2>
      <p>
        Encapsulation allows for data hiding, ensuring that the internal details
        of an object are hidden from the outside world. Access to the internal
        state is controlled through methods.
      </p>

      <h2>2. Private Members</h2>
      <p>
        In encapsulation, certain members (attributes or methods) of a class can
        be designated as private. Private members are only accessible within
        the same class and are not directly accessible from outside the class.
      </p>

      <h2>3. Public Interface</h2>
      <p>
        The public interface of a class consists of the methods and properties
        that are intended to be accessed by external code. It serves as a
        contract for interacting with the object.
      </p>

      <h2>4. Accessors (Getters) and Mutators (Setters)</h2>
      <p>
        Encapsulation often involves providing accessors (getters) and mutators
        (setters) to manipulate the internal state of an object. Accessors
        retrieve the value of an attribute, while mutators modify it.
      </p>

      <h2>5. Benefits of Encapsulation</h2>
      <p>
        Encapsulation enhances the modularity of code, reduces complexity,
        improves code maintainability, and provides a clear separation between
        the internal implementation and the external interface.
      </p>

      <h2>6. Encapsulation Example</h2>
      <p>
        Here's a simple example of encapsulation using a class to represent a
        bank account:
      </p>
      <pre>{`
      class square {
        int number;
        public:
          int findSquare(int n) {
            number = n*n;
            return number;
          }
      };
      int main() {
        int number;
        cin >>number;
        square sq;
        int ans = sq.findSquare(number);
        cout <<ans <<endl;
      }
      `}</pre>
    </div>
  );
};

export default Encapsulation;
