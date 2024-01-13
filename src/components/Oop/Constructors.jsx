import React from "react";

const Constructor = () => {
  return (
    <div className="topic-content">
      <h1>Constructors</h1>
      <p>
        Constructor is a special kind of method or function which has the same
        name as class and has no data type(not even void).
      </p>
      <p>
        Constructors are special methods called when an object is instantiated.
        They initialize the object's state.
      </p>
      <h3>Types of Constructors</h3>
      <ul>
        <li>Default Constructor</li>
        <li>Parameterized Constructor</li>
        <li>Copy Constructor</li>
      </ul>
      <h4>1. Default Constructor</h4>
      <p>
        Default Constructor doesn't have any parameter and called by default
        when the object is declared without any parameter. There is only one
        default constructor per class if not declared in the class then it by
        default present in most of the programming languages.
      </p>
      <h4>2. Parameterized Constructor</h4>
      <p>
        Parameterized Constructors has one or more parameters that need to
        specified while declaring a class. There are multiple parameterized
        constructors can be created with different number of parameters and
        different data types of parameters.
      </p>
      <h4>3. Copy Constructor</h4>
      <p>
        Copy Constructors are the types of constructor that has another
        constructor as their parameter to copy the parameters of that
        constructor.
      </p>
      <h2>Example:</h2>
      <pre>{`
      class Rectangle {
        private:
          int length; 
          int width;
        public:  
          //Default Constructor
          Rectangle() {
            length = 0;
            width = 0;
          }
          //Parameterized Constructor
          Rectangle(int l, int b) { 
            length = l;
            width = b;
          }
          //Copy Constructor
          Rectangle(Rectangle &i) {
            length = i.length;
            width = i.width;
          }
      };
      int main() {
        Rectangle r; //default constructor will be called
        Rectangle r1(10, 20); //calling parametrized constructor
        Rectangle r2(r1); //calling copy constructor 
        cout <<r2.length <<" " <<r2.width <<endl;
      }
      `}</pre>
      <p>Happy learning about Constructors!</p>
    </div>
  );
};

export default Constructor;
