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
    correctAnswerResult: 0,
    wrongAnswersResult: 0,
  });

  const handleQuestionsApi = () => {
    axios
      .get("https://wd40-trivia.onrender.com/api/questions")
      .then((response) => {
        setQuestions(response.data);
      });
    setStart(false);
  };

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
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
