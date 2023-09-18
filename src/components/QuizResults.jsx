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
          <h1 className="font-sans text-4xl font-bold">
            Your Result: {result.correctAnswersResult} of 6
          </h1>
          <p className="font-sans text-3xl"></p>
        </div>{" "}
        <div className="mt-6">
          <div className="p-6">
            {questionsWithCorrectAnswer.length > 0 && (
              <h1 className="text-green-600 ">Correctly answered:</h1>
            )}
            {questionsWithCorrectAnswer.map((correct, index) => (
              <div key={index} className="flex flex-col items-start mt-5">
                <p className="flex items-center">
                  {correct.questionNumber}. {correct.question}
                </p>
                <p>- {correct.answer}</p>
              </div>
            ))}
            {questionsWithWrongAnswer.length > 0 && (
              <h1 className="text-red-600 mt-5">Incorrectly answered:</h1>
            )}
            {questionsWithWrongAnswer.map((wrong, index) => (
              <div key={index} className="flex flex-col items-start mt-5">
                <p>
                  {wrong.questionNumber}. {wrong.question}
                </p>
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
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to={"/"}
            className="flex justify-center m-2 p-4 mb-6 w-80 text-white rounded-md transition-all duration-500 bg-gradient-to-r from-cyan-500 to-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
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
