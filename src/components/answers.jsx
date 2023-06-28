import React from "react";

const Answers = ({ answers }) => {
  return (
    <div className="flex justify-center">
      {answers.map((answer) => (
        <button
          key={answer.id}
          className="m-2 cursor-pointer rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
