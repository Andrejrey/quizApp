const QuizResults = ({ result }) => {
  function refreshPage() {
    window.location.reload(false);
  }

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
      <button
        className="m-2 mt-8 rounded-md w-72 bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"
        onClick={refreshPage}
      >
        Start a new quiz!
      </button>
    </div>
  );
};

export default QuizResults;
