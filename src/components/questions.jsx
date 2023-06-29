import { useState } from "react";
import Answers from "./answers";
import QuizResults from "./QuizResults";

const Questions = ({ questions, setResult, result }) => {
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function showCurrentQuestion() {
    if (currentQuestionIndex > 4) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  return (
    <div>
      {!showResult ? (
        <>
          {questions.map((question, index) => {
            return (
              <div key={question.id}>
                {index === currentQuestionIndex ? (
                  <>
                    <div>
                      <p className="m-5 flex justify-center font-sans text-xl text-white">
                        {question.question}
                      </p>
                      <Answers
                        answers={question.answers}
                        correctAnswers={question.correctAnswer}
                        uresAnswer={question.userAnswer}
                        answersId={question.id}
                        questionsIndex={index}
                        showCurrentQuestion={showCurrentQuestion}
                        key={question.answers}
                        setResult={setResult}
                      />
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </>
      ) : (
        <QuizResults result={result} />
      )}
    </div>
  );
};

export default Questions;
