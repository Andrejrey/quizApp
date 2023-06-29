import axios from "axios";
import Questions from "./components/Questions";
import { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState({
    correctAnswerResult: 0,
    wrongAnswersResult: 0,
  });

  useEffect(() => {
    axios
      .get("https://wd40-trivia.onrender.com/api/questions")
      .then((response) => {
        setQuestions(response.data);
      });
  }, []);

  return (
    <div className="mb-10 flex flex-col items-center">
      <h1 className="mb-10 text-8xl text-white">Quiz App</h1>
      <Questions questions={questions} setResult={setResult} result={result} />
    </div>
  );
}

export default App;
