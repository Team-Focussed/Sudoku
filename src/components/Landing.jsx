import React from "react";
import "../components/stylings/Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landing_container">
        <h1>Sudoku</h1>
        <div className="custom_puzzle">
          <h3>Create Custom Puzzle</h3>
          <select name="level" id="level">
            <option value="easy">EAZY</option>
            <option value="medium">MEDIUM</option>
            <option value="hard">HARD</option>
            <option value="expert">EXPERT</option>
          </select>
          <select name="matrix" id="matrix">
            <option value="4by4">4x4</option>
            <option value="6by6">6x6</option>
            <option value="9by9">9x9</option>
          </select>
          <button>CREATE</button>
        </div>
        <div className="random_puzzle">
          <h3>Puzzle Of The Day</h3>
          <button>9x9</button>
          <button>6x6</button>
          <button>4x4</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
