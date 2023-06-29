const Answers = ({
  answers,
  correctAnswers,
  showCurrentQuestion,
  setResult,
}) => {
  const onAnswerSelected = (answer) => {
    if (answer === correctAnswers) {
      setResult((prev) => {
        return { ...prev, correctAnswerResult: prev.correctAnswerResult + 1 };
      });
      showCurrentQuestion();
    } else {
      showCurrentQuestion();
      setResult((prev) => {
        return { ...prev, wrongAnswersResult: prev.wrongAnswersResult + 1 };
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {answers.map((answer, index) => (
        <button
          onClick={() => onAnswerSelected(answer)}
          value={answer}
          key={index}
          className="m-2 rounded-md w-72 bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;

