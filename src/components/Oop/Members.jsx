import React from "react";

const Members = () => {
  return (
    <div className="topic-content">
      <h1>Members (Attributes and Methods)</h1>
      <p>
        Class members include attributes(properties) and methods(functions).
        Attributes represent the state of the object, while methods define its
        behavior.
      </p>
      <h3>Example:</h3>
      <pre>{`
      class Temp {
        public:  
            int a; // Attribute or Property
            int b;
            int method(int val) { // method or function
                a = val;
                b = a/2;
                return b;
            }
      };
      `}</pre>
      <p>
      Happy learning about Members!
      </p>
    </div>
  );
};

export default Members;
