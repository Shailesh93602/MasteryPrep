import React from "react";
import '../../styles/Topic.css';

const LinkedList = () => {
  return (
    <div className="topic-content">
      <h1>Linked List in Data Structures</h1>
      <p>
        A linked list is a dynamic data structure where elements, called nodes, are connected
        together through links. Each node contains data and a reference (or link) to the next node
        in the sequence.
      </p>
      <h3>1. Declaration</h3>
      <p>
        To declare a linked list, you define a node structure and maintain a reference to the
        first node, often called the head.
      </p>
      <pre>{`
        //Node class to to represent a node of the linked list
        class Node {
          public:
            int data;
            Node* next;
            //Default Constructor
            Node() {
              data = 0;
              next = NULL;
            }
            //Parameterized Constructor
            Node(int data) {
              this->data = data;
              this->next = NULL;
            }
        };
        //LinkedList class to implement a linked list.
        class LinkedList {
          Node* head;
          public:
            LinkedList() {
              head = NULL;
            }
            void insertNode(int);
            void printList();
            void deleteNode(int);
        };
        int main() {
          LinkedList list;
        }
      `}</pre>
      <h3>2. Operations</h3>
      <p>
        Linked lists support operations like insertion, deletion, and traversal.<i>Here's an example
        of inserting a new node at the end of the linked list: </i>
      </p>
      <pre>{`
        //insertion 
        void LinkedList::insertNode(int data) {
          Node* newNode = new Node(data);
          if(head == NULL) {
            head = newNode;
            return;
          }
          Node* temp = head;
          while(temp->next != NULL) {
            temp = temp->next;
          }
          temp->next = newNode;
        };
        int main() {
          LinkedList list;
          list.insertNode(1);
          list.insertNode(2);
          list.insertNode(3);
          list.insertNode(4);
          list.insertNode(5);
        }

      `}</pre>
      <p>
        Linked lists offer advantages in dynamic memory allocation and efficient insertion/deletion
        but have trade-offs in terms of access time compared to arrays.
      </p>
      <p>
        Explore the topics in the menu to delve into the details of linked lists and their
        applications in various algorithms and problems.
      </p>
      <p>
        Happy learning about linked lists!
      </p>
    </div>
  );
};

export default LinkedList;
