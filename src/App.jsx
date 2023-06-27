import Answers from "./components/answers";
import Questions from "./components/questions";

function App() {
  return (
    <>
      <div className="flex items-center flex-col">
        <h1>Quiz App</h1>
        <Questions />
      </div>
    </>
  );
}

export default App;
