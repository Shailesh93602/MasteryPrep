import React from "react";

const AccessModifiers = () => {
  return (
    <div className="topic-content">
      <h1>Access Modifiers</h1>
      <p>
        Access modifiers controls the visibility of class members(i.e,
        properties and methods).
      </p>
      <b>There are mainly three access modifiers commonly used.</b>
      <ul>
        <li>Public</li>
        <li>Private</li>
        <li>Protected</li>
      </ul>
      <h2>1. Public</h2>
      <p>
        If a variable or method is declared as public then it can be accessed
        from anywhere.
      </p>
      <h3>Example:</h3>
      <pre>{`
        class Rectangle {
            public:
                int length;
                int width;
                int findArea() {
                    return length*width;
                }
        };
        int main(){
            Rectangle r;
            r.length = 10;
            r.width = 20;
            cout <<r.findArea() <<endl;

            return 0;
        }
      `}</pre>
      <p>
        Here the variables length and width are declared as public so it could
        be accessed outside the class and thus was allowed to access from the
        main().{" "}
      </p>
      <h2>2. Private</h2>
      <p>
        If a variable or method is declared as private then it can only be
        accessed within the class and cannot be accessed outside the class not
        even inside a child class.
      </p>
      <h3>Example:</h3>
      <pre>{`
        class Rectangle {
            private: 
                int length;
                int width;
            public:
                void findArea(int a, int b){
                    length = a;
                    width = b;
                    cout <<"Area is: " <<length*width <<endl;
                }
        };
        int main() {
            Rectangle r;
            r.findArea(10, 20);

            return 0;
        }
      `}</pre>
      <p>
        Here the variables length and width are declared as private so they
        cannot be accessed outside the class. so we cannot use them directly in
        main() so here we use them inside the method findArea() and print the
        area inside that.
      </p>
      <h3>3. Protected</h3>
      <p>
        If a variable or method is stated as protected then it cannot be
        accessed outside the class but can be accessed by child class.
      </p>
      <h3>Example:</h3>
      <pre>{`
      class Rectangle {
        protected:
            int length;
            int width;
      };
      class Square : public Rectangle {
        public:
            void setVal(int a) {
                length = a;
                width = a;
            }
            void display() {
                cout <<length <<" " <<width <<endl;
            }
      };
      int main() {
        Square sq;
        sq.setVal(10);
        sq.display();

        return 0;
      }
      `}</pre>
      <p>
        Here the variables length and width are set as protected so they cannot
        be access outside the class except the child class. So, here we have the
        child class square inside which we can access and modify the values of
        length and width.
      </p>
      <p>
      Happy learning about Access Modifiers!
      </p>
    </div>
  );
};

export default AccessModifiers;
