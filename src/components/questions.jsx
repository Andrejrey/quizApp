import { useState } from "react";
import Answers from "./answers";
import QuizResults from "./quizResults";

const Questions = ({ questions }) => {
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  console.log("currentQuestionIndex:", currentQuestionIndex);

  function showCurrentQuestion() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  return (
    <div>
      {!showResult ? (
        <>
          {questions.map((question, index) => {
            return (
              <>
                {index === currentQuestionIndex ? (
                  <>
                    <div key={question.id}>
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
                      />
                    </div>
                  </>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </>
      ) : (
        <QuizResults />
      )}
    </div>
  );
};

export default Questions;
