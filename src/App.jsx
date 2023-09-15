import axios from "axios";
import Questions from "./components/Questions";
import QuizResults from "./components/QuizResults";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [start, setStart] = useState(true);
  const [result, setResult] = useState({
    correctAnswersResult: 0,
    wrongAnswersResult: 0,
  });
  const [questionsWithCorrectAnswer, setQuestionsWithCorrectAnswer] = useState(
    []
  );
  const [questionsWithWrongAnswer, setQuestionsWithWrongAnswer] = useState([]);

  const handleQuestionsApi = () => {
    axios
      .get("https://wd40-trivia.onrender.com/api/questions")
      .then((response) => {
        setQuestions(response.data);
      });
    setStart(false);
  };

  console.log(questions);
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <Home start={start} handleQuestionsApi={handleQuestionsApi} />
          }
        />
        <Route
          path="/questions"
          element={
            <Questions
              questions={questions}
              setResult={setResult}
              result={result}
              setStart={setStart}
              setQuestions={setQuestions}
              setQuestionsWithCorrectAnswer={setQuestionsWithCorrectAnswer}
              questionsWithCorrectAnswer={questionsWithCorrectAnswer}
              setQuestionsWithWrongAnswer={setQuestionsWithWrongAnswer}
              questionsWithWrongAnswer={questionsWithWrongAnswer}
            />
          }
        />
        <Route
          path="/result"
          element={
            <QuizResults
              result={result}
              setQuestions={setQuestions}
              setStart={setStart}
              setResult={setResult}
              questionsWithCorrectAnswer={questionsWithCorrectAnswer}
              questionsWithWrongAnswer={questionsWithWrongAnswer}
              setQuestionsWithCorrectAnswer={setQuestionsWithCorrectAnswer}
              setQuestionsWithWrongAnswer={setQuestionsWithWrongAnswer}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
