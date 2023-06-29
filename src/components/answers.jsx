
const Answers = ({
  answers,
  correctAnswers,
  showCurrentQuestion,
  setResult,
}) => {


import { useState } from "react";

const Answers = ({ answers, correctAnswers, showCurrentQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [result, setResult] = useState({
    correctAnswer: 0,
    wrongAnswers: 0,
  });


  const onAnswerSelected = (answer) => {
    if (answer === correctAnswers) {
      setResult((prev) => {
        return { ...prev, correctAnswerResult: prev.correctAnswerResult + 1 };
      });
      showCurrentQuestion();
    } else {
      showCurrentQuestion();
      setResult((prev) => {
        return { ...prev, wrongAnswersResult: prev.wrongAnswersResult + 1 };
      });
    }
  };


import React from "react";

const Answers = ({ answers }) => {

  return (
    <div className="flex flex-col justify-center items-center">
      {answers.map((answer, index) => (
        <button

          onClick={() => onAnswerSelected(answer)}
          value={answer}
          key={index}
          className="m-2 rounded-md w-72 bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"


          onClick={(e) => onAnswerSelected(e, answer)}
          value={answer}
          key={index}
          className="m-2 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"

          key={answer}
          className="m-2 cursor-pointer rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"


        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
