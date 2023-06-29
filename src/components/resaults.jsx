// Result.js
import React, { useState } from "react";

const Result = ({ correctAnswers }) => {
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState([]);

  const handleCheckAnswers = () => {
    let correctCount = 0;
    const mistakesArr = [];

    correctAnswers.forEach((correctAnswer, index) => {
      if (correctAnswer === "right") {
        correctCount++;
      } else {
        mistakesArr.push(index + 1);
      }
    });

    setScore(correctCount);
    setMistakes(mistakesArr);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-6 text-4xl text-white">Result</h1>
      <h2 className="mb-2 text-xl text-white">Score: {score}</h2>
      {mistakes.length > 0 && (
        <div className="mb-6">
          <h3 className="mb-2 text-white">Mistakes:</h3>
          <ul className="list-inside list-disc text-white">
            {mistakes.map((mistake) => (
              <li key={mistake}>Question {mistake}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={handleCheckAnswers}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Check Answers
      </button>
    </div>
  );
};

export default Result;
