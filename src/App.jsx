import axios from "axios";
import Questions from "./components/questions";
import { useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://wd40-trivia.onrender.com/api/questions")
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-8xl text-white mb-10">Quiz App</h1>
        <Questions key={post.id} questions={post} />
      </div>
    </>
  );
}

export default App;
