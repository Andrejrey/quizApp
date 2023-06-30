import { useState } from "react";

const QuizResults = ({ result }) => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  const wrongAnswerText =
    result.wrongAnswersResult > 4
      ? `${result.wrongAnswersResult} your idiot!!!`
      : result.wrongAnswersResult;

  return (
    <div className="flex flex-col items-center justify-center text-xl text-white">
      <h1 className="font-sans text-2xl font-bold sm:text-4xl">Your Result</h1>
      <p className="font-sans text-lg sm:text-3xl">
        {result.correctAnswerResult} of 6
      </p>
      <p className="font-sans text-lg sm:text-3xl">
        Wrong answers: {wrongAnswerText}
      </p>
      <button
        className="m-2 mt-8 w-48 rounded-md bg-orange-400 p-3 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900 sm:w-72 sm:p-4"
        onClick={refreshPage}
      >
        Start a new Quiz!
      </button>
    </div>
  );
};

export default QuizResults;
