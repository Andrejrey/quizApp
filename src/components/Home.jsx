import { Link } from "react-router-dom";
const Home = ({ start, handleQuestionsApi }) => {
  return (
    <div className="flex justify-center">
      {start && (
        <Link
          to={"/questions"}
          onClick={handleQuestionsApi}
          className="flex justify-center m-2 p-4 w-80 text-white rounded-md transition-all duration-500 bg-gradient-to-r from-cyan-500 to-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
        >
          Start the Quiz
        </Link>
      )}
    </div>
  );
};

export default Home;
