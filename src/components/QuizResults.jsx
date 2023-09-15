import { Link } from "react-router-dom";

const QuizResults = ({
  result,
  setStart,
  setQuestions,
  setResult,
  questionsWithCorrectAnswer,
  questionsWithWrongAnswer,
  setQuestionsWithCorrectAnswer,
  setQuestionsWithWrongAnswer,
}) => {
  const startNewQuiz = () => {
    setStart(true);
    setQuestions([]);
    setResult({
      correctAnswersResult: 0,
      wrongAnswersResult: 0,
    });
    setQuestionsWithCorrectAnswer([]);
    setQuestionsWithWrongAnswer([]);
  };

  return (
    <>
      <div className=" text-xl text-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-sans text-4xl font-bold">Your Result</h1>
          <p className="font-sans text-3xl">
            {result.correctAnswersResult} of 6
          </p>
          <p className="font-sans text-3xl">
            Wrong answers: {result.wrongAnswersResult}
          </p>
        </div>
        <h1 className="text-green-600 mt-12">Correctly answered:</h1>
        {questionsWithCorrectAnswer.map((correct, index) => (
          <div key={index} className="flex flex-col items-start mt-5">
            <p className="flex items-center">&#8226; {correct.question}</p>
            <p>- {correct.answer}</p>
          </div>
        ))}
        <h1 className="text-red-600 mt-5">Incorrectly answered:</h1>
        {questionsWithWrongAnswer.map((wrong, index) => (
          <div key={index} className="flex flex-col items-start mt-5">
            <p>&#8226; {wrong.question}</p>
            <p className="font-semibold">
              {" "}
              - Your Answer:{" "}
              <span className="font-normal">{wrong.userAnswer}</span>
            </p>
            <p className="font-semibold">
              {" "}
              - Correct Answer:
              <span className="font-normal"> {wrong.correctAnswer}</span>
            </p>
          </div>
        ))}
        <div className="flex justify-center">
          <Link
            to={"/"}
            className="flex justify-center m-2 mt-8 mb-12 w-72 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"
            onClick={startNewQuiz}
          >
            Start a new Quiz!
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuizResults;
