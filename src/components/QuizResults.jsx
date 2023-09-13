import { Link } from "react-router-dom";

const QuizResults = ({ result, setStart, setQuestions, setResult }) => {
  const startNewQuiz = () => {
    setStart(true);
    setQuestions([]);
    setResult({
      correctAnswerResult: 0,
      wrongAnswersResult: 0,
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center text-xl text-white">
        <h1 className="font-sans text-4xl font-bold">Your Result</h1>
        <p className="font-sans text-3xl">{result.correctAnswerResult} of 6</p>
        <p className="font-sans text-3xl">
          Wrong answers: {result.wrongAnswersResult}
        </p>
        <Link
          to={"/"}
          className="flex justify-center m-2 mt-8 w-72 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"
          onClick={startNewQuiz}
        >
          Start a new Quiz!
        </Link>
      </div>
    </>
  );
};

export default QuizResults;
