import Answers from "./components/answers";
import Questions from "./components/questions";

function App() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <h1 className="text-8xl text-white mb-10">Quiz App</h1>
        <Questions />
      </div>
    </>
  );
}

export default App;
