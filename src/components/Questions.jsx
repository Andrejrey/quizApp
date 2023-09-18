import { useState } from "react";
import Answers from "./Answers";
import Loading from "./Loading";
import { decode } from "he";
import { useNavigate } from "react-router-dom";

const Questions = ({
  questions,
  setResult,
  result,
  setQuestionsWithCorrectAnswer,
  questionsWithCorrectAnswer,
  setQuestionsWithWrongAnswer,
  questionsWithWrongAnswer,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const showCurrentQuestion = () => {
    if (currentQuestionIndex < 5) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <div>
      {questions.length === 0 && <Loading />}
      <div>
        <div>
          {questions.length > 0 && (
            <div className="mb-3 m-5 flex flex-col  p-3 rounded-md justify-center font-sans text-2xl text-white">
              <p className="mb-3 text-center">
                Question{" "}
                {questions[currentQuestionIndex] &&
                  currentQuestionIndex + 1 + ":"}
              </p>
              <p className="text-center mb-2">
                {" "}
                {decode(questions[currentQuestionIndex]?.question)}
              </p>
            </div>
          )}
          <Answers
            answers={questions[currentQuestionIndex]?.answers}
            correctAnswer={questions[currentQuestionIndex]?.correctAnswer}
            showCurrentQuestion={showCurrentQuestion}
            setResult={setResult}
            currentQuestion={questions[currentQuestionIndex]?.question}
            result={result}
            setQuestionsWithCorrectAnswer={setQuestionsWithCorrectAnswer}
            questionsWithCorrectAnswer={questionsWithCorrectAnswer}
            setQuestionsWithWrongAnswer={setQuestionsWithWrongAnswer}
            questionsWithWrongAnswer={questionsWithWrongAnswer}
            currentQuestionIndex={currentQuestionIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
