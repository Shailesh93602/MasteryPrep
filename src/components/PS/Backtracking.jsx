import React from "react";
import '../../styles/Topic.css';

const Backtracking = () => {
  return (
    <div className="topic-content">
      <h1>Backtracking</h1>
      <p>
        Backtracking is a powerful algorithmic technique for finding all (or some) solutions to computational problems. It systematically builds candidates for solutions, incrementally explores them, and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot lead to a valid solution.
      </p>
      <p>
        <b>Key Characteristics of Backtracking:</b>
      </p>
      <ul>
        <li><b>Candidate Construction:</b> Solutions are built incrementally, one component at a time.</li>
        <li><b>Candidate Exploration:</b> Each partial candidate is explored further before reaching a valid solution.</li>
        <li><b>Backtracking:</b> If a partial candidate cannot be completed to a valid solution, the algorithm backtracks to the previous decision point.</li>
      </ul>
      <p>
        <b>Common Problems Solved Using Backtracking:</b>
      </p>
      <ul>
        <li><b>N-Queens Problem:</b> Placing N chess queens on an N×N chessboard so that no two queens threaten each other.</li>
        <li><b>Sudoku:</b> Filling a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids contain all of the digits from 1 to 9.</li>
        <li><b>Maze Solving:</b> Finding a path through a maze from start to finish.</li>
      </ul>
      <p>
        Explore the topics in the menu to delve into different concepts and problem-solving techniques in Backtracking.
      </p>
    </div>
  );
};

export default Backtracking;
