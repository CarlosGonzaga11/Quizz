import React, { useState } from "react";
import "./Quizz.css";
import Back from "../back/Back";
const quizzQuestions = [
  {
    id: 1,
    question: "De onde é a invenção do chuveiro elétrico?",
    alternative: [
      { answer: "França", isCorrect: false },
      { answer: "Brasil", isCorrect: true },
      { answer: "Austrália", isCorrect: false },
      { answer: "Itália", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "De quem é a famosa frase “Penso, logo existo”?",
    alternative: [
      { answer: "Platão", isCorrect: false },
      { answer: "Galileu ", isCorrect: false },
      { answer: "Descartes", isCorrect: true },
      { answer: "Sócrates", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Quais o menor e o maior país do mundo?",
    alternative: [
      { answer: "Vaticano e Rússia", isCorrect: true },
      { answer: "Nauru e China ", isCorrect: false },
      { answer: "Mônaco e Canadá", isCorrect: false },
      { answer: "São Marino e Índia", isCorrect: false },
    ],
  },
  {
    id: 4,
    question:
      "4.Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
    alternative: [
      {
        answer: "Jânio Quadros",
        isCorrect: false,
      },
      {
        answer: "Jacinto Anjos",
        isCorrect: false,
      },
      { answer: "Getúlio Vargas", isCorrect: false },
      { answer: "João Goulart", isCorrect: true },
    ],
  },
];

function Quizz() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  function onClicked(value) {
    if (value) {
      setScore(score + 1);
    }
    const nextQuestion = count + 1;
    if (nextQuestion < quizzQuestions.length) {
      setCount(nextQuestion);
    } else {
      setShowScore(true);
    }
  }
  function reset() {
    setCount(0);
    setScore(0);
    setShowScore(false);
  }
  return (
    <div className="container-app">
      {showScore ? (
        <div className="score">
          <p>
            Sua pontuação foi de: {score} / {quizzQuestions.length}
          </p>
          <button onClick={reset}>Try again</button>
        </div>
      ) : (
        <div className="container-card">
          <div className="question">Question {count + 1}</div>
          <div className="asking">
            <p>{quizzQuestions[count].question}</p>
          </div>
          <div className="res">
            {quizzQuestions[count].alternative.map((ans, index) => (
              <button onClick={() => onClicked(ans.isCorrect)}>
                {ans.answer}
              </button>
            ))}
          </div>
        </div>
      )}
      <Back />
    </div>
  );
}
export default Quizz;
