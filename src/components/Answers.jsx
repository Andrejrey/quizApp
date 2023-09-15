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
}) => {
  const onAnswerSelected = (answer) => {
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
        },
      ]);
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
        },
      ]);
    }
    showCurrentQuestion();
  };

  console.log("correct:", questionsWithCorrectAnswer);
  console.log("wrong", questionsWithWrongAnswer);

  return (
    <div className="flex flex-col items-center justify-center">
      {answers &&
        answers.map((answer, index) => (
          <button
            onClick={() => onAnswerSelected(answer)}
            value={answer}
            key={index}
            className="m-2 w-72 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"
          >
            {answer}
          </button>
        ))}
    </div>
  );
};

export default Answers;
