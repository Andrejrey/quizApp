import { useState } from "react";

const Answers = ({ answers, correctAnswers, showCurrentQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [result, setResult] = useState({
    correctAnswer: 0,
    wrongAnswers: 0,
  });

  const onAnswerSelected = (answer) => {
    if (answer === correctAnswers) {
      setSelectedAnswer(true);
      showCurrentQuestion();
      //countMyScore();
    } else {
      setSelectedAnswer(false);
      showCurrentQuestion();
    }
  };

  /*
  const countMyScore = () => {
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
  };
*/
  return (
    <div className="flex justify-center">
      {answers.map((answer, index) => (
        <button
          onClick={(e) => onAnswerSelected(e, answer)}
          value={answer}
          key={index}
          className="m-2 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
