import { useState } from "react";
import { decode } from "he";

const Answers = ({
  answers,
  correctAnswer,
  showCurrentQuestion,
  setResult,
  currentQuestion,
  setQuestionsWithCorrectAnswer,
  questionsWithCorrectAnswer,
  setQuestionsWithWrongAnswer,
  questionsWithWrongAnswer,
  currentQuestionIndex,
}) => {
  const [className, setClassName] = useState(
    "m-2 w-80 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner sm:hover:bg-amber-500"
  );
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onAnswerSelected = (answer) => {
    setButtonDisabled(true);
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      setResult((prev) => ({
        ...prev,
        correctAnswersResult: prev.correctAnswersResult + 1,
      }));
      setQuestionsWithCorrectAnswer([
        ...questionsWithCorrectAnswer,
        {
          question: currentQuestion,
          answer: answer,
          questionNumber: currentQuestionIndex + 1,
        },
      ]);
      setClassName(
        "answer correct m-2 w-80 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner"
      );
    } else {
      setResult((prev) => ({
        ...prev,
        wrongAnswersResult: prev.wrongAnswersResult + 1,
      }));
      setQuestionsWithWrongAnswer([
        ...questionsWithWrongAnswer,
        {
          question: currentQuestion,
          userAnswer: answer,
          correctAnswer: correctAnswer,
          questionNumber: currentQuestionIndex + 1,
        },
      ]);
      setClassName(
        "answer wrong m-2 w-80 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner"
      );
    }
    setTimeout(() => {
      showCurrentQuestion();
      setButtonDisabled(false);
    }, 3300);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {answers?.map((answer, index) => (
        <button
          onClick={() => onAnswerSelected(answer)}
          value={answer}
          key={index}
          className={
            selectedAnswer === answer
              ? className
              : "m-2 w-80 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner sm:hover:bg-amber-500"
          }
          disabled={buttonDisabled}
        >
          {decode(answer)}
        </button>
      ))}
    </div>
  );
};

export default Answers;
