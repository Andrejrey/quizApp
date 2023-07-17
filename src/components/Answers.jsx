import { useState } from "react";

const Answers = ({
  answers,
  correctAnswer,
  showCurrentQuestion,
  setResult,
}) => {
  const onAnswerSelected = (answer) => {
    if (answer === correctAnswer) {
      setResult((prev) => ({
        ...prev,
        correctAnswerResult: prev.correctAnswerResult + 1,
      }));
    } else {
      setResult((prev) => ({
        ...prev,
        wrongAnswersResult: prev.wrongAnswersResult + 1,
      }));
    }
    showCurrentQuestion();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {answers.map((answer, index) => (
        <button
          onClick={() => onAnswerSelected(answer, index)}
          value={answer}
          key={index}
          className="m-2 w-72 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
