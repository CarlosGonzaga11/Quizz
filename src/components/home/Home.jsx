import React from "react";
import "./Home.css";
import Quizz from "../Quizz/Quizz";
import Guess from "../guess/Guess";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-app">
      <div className="title">
        <p>Choose one</p>
      </div>

      <div className="container-game">

        <Link className="link" to="/quizz">
          <div className="game">
            <p>This's a quizz of the four alternatives, try to solve </p>
            <button className="button-game">Start</button>
          </div>
        </Link>

        <Link className="link" to="/guess">
          <div className="game">
            <p>This a game where you have to guess the words </p>
            <button className="button-game">Start</button>

          </div>
        </Link>

      </div>
    </div>
  );
}
export default Home;
