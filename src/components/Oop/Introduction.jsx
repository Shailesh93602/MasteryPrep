import React from "react";
import "../../styles/Topic.css";
import OopsConcepts from '../../assets/images/OOPs-Concepts.jpg';

const Introduction = () => {
  return (
    <div className="topic-content">
      <h1>Welcome to the World of Object-Oriented Programming (OOP)</h1>
      <p>
        Object-oriented programming is like a toolkit for building software
        using a real-world, intuitive approach. Instead of writing code like a
        list of instructions, OOP lets us model our software after real-world
        objects and interactions.
      </p>
      <p>
        Imagine your code as a collection of objects, each with a specific role
        and a set of instructions. <i>Let's explore some key concepts that make OOP
        a powerful and flexible way to create software:</i>
      </p>
      <img src={OopsConcepts} alt="OOPs concepts" />
      <p>
        By understanding these fundamental OOP concepts, you'll be equipped to
        create software that mirrors the real world, making your code more
        intuitive, scalable, and maintainable.
      </p>
      <p>
      Happy learning about OOPs!
      </p>
    </div>
  );
};

export default Introduction;
