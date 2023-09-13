import { useState } from "react";
import Answers from "./Answers";
import Loading from "./Loading";
import QuizResults from "./QuizResults";

const Questions = ({
  questions,
  setResult,
  result,
  setQuestions,
  setStart,
}) => {
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
      {questions.length === 0 && <Loading />}
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
        <QuizResults
          result={result}
          setQuestions={setQuestions}
          setStart={setStart}
          setResult={setResult}
        />
      )}
    </div>
  );
};

export default Questions;
