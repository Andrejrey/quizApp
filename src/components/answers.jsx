import { useState } from "react";

const Answers = ({ answers, correctAnswers }) => {
  function handleInput(e) {
    console.log(e.target.value);
  }

  return (
    <div className="flex justify-center">
      {answers.map((answer, index) => (
        <button
          onClick={(e) => handleInput(e, answer)}
          value={answer}
          key={index}
          className="m-2 cursor-pointer rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
