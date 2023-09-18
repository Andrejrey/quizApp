import { useEffect, useState } from "react";

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
    "m-2 w-72 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500"
  );
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  console.log("selectedAnswer", selectedAnswer);
  console.log(correctAnswer);

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
        "answer correct m-2 w-72 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500"
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
        "answer wrong m-2 w-72 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500"
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
              : "m-2 w-72 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500"
          }
          disabled={buttonDisabled}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
