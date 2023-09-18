import { useState } from "react";
import Answers from "./Answers";
import Loading from "./Loading";
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
          <p className="w-84 mb-3 m-2 flex justify-center text-center font-sans text-2xl text-white">
            {questions[currentQuestionIndex] && currentQuestionIndex + 1 + "."}{" "}
            {questions[currentQuestionIndex]?.question}
          </p>
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
