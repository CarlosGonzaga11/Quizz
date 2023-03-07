import React, { useState, useEffect } from "react";
import "./Guess.css";
import Back from "../back/Back";
const words = ["int", "float", "char"];
function Guess() {
  const [digited, setDigited] = useState("");
  const [list, setList] = useState([]);
  const [descart, setDescart] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  function handleChange(value) {
    setDigited(value);
    if (words.indexOf(value) !== -1) {
      setList([...list, value]);
      setScore(score + 1);
      setDigited("");
    }
  }
  useEffect(() => {
    if (score === words.length) {
      setShowScore(true);
    }
  });

  return (
    <div className="App">
      <div className="container-guess">
        {showScore ? (
          <p>
            {
              <p className="points">
                Sua pontuação é: {score}/{words.length}{" "}
              </p>
            }
          </p>
        ) : (
          <div className="container-input">
            <p>Tipos de variaveis:</p>
            <input
              type="text"
              value={digited}
              onChange={(e) => handleChange(e.target.value)}
            ></input>
            {words.map((item, index) => {
              if (list.indexOf(item) !== -1) {
                return <p>{item}</p>;
              } else {
                return <p>------</p>;
              }
            })}
          </div>
        )}
      </div>
      <Back />
    </div>
  );
}

export default Guess;

/*  {descart.map((e) => {
        return <li>{e} </li>;
      })} */
/*
     <p>Tipos de variaveis:</p>
      <input
        type="text"
        value={digited}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
   

      {words.map((item, index) => {
        if (list.indexOf(item) !== -1) {
          return <p>{item}</p>;
        } else {
          return <p>------</p>;
        }
      })}
*/
