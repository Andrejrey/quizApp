import { useState } from "react";
import Answers from "./answers";

const Questions = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => {
        return (
          <div key={question.id}>
            <p className="m-5 flex justify-center font-sans text-xl text-white">
              {question.question}
            </p>
            <Answers
              answers={question.answers}
              correctAnswers={question.correctAnswer}
              uresAnswer={question.userAnswer}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
