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
    <div>
      {!showResult ? (
        questions.map((question, index) => (
          <div key={question.id}>
            {index === currentQuestionIndex && (
              <div>
                <p className="m-5 flex justify-center font-sans text-xl text-white">
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
