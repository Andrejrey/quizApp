import { useState } from "react";
import Answers from "./Answers";
import QuizResults from "./QuizResults";

const Questions = ({ questions, setResult, result }) => {
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const showCurrentQuestion = () => {
    if (currentQuestionIndex >= questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      {!showResult ? (
        questions.map((question, index) => (
          <div key={question.id}>
            {index === currentQuestionIndex && (
              <div className="flex flex-col items-center">
                <p className="m-5 text-center font-sans text-lg text-white sm:text-xl">
                  {question.question}
                </p>
                <Answers
                  answers={question.answers}
                  correctAnswer={question.correctAnswer}
                  showCurrentQuestion={showCurrentQuestion}
                  setResult={setResult}
                />
              </div>
            )}
          </div>
        ))
      ) : (
        <QuizResults result={result} />
      )}
    </div>
  );
};

export default Questions;
