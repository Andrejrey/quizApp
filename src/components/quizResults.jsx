const QuizResults = ({ result }) => {
  return (
    <div className="flex flex-col justify-center items-center text-white text-xl">
      <h1>Your Result</h1>
      <p>{result.correctAnswerResult} of 6</p>
      <p>
        Wrong answers:{" "}
        {result.wrongAnswersResult > 4
          ? result.wrongAnswersResult + " your idiot!!!"
          : result.wrongAnswersResult}
      </p>
    </div>
  );
};

export default QuizResults;
