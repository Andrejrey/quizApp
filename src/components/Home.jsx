import { Link } from "react-router-dom";
const Home = ({ start, handleQuestionsApi }) => {
  return (
    <div className="flex justify-center">
      {start && (
        <Link
          to={"/questions"}
          onClick={handleQuestionsApi}
          className="flex justify-center m-2 w-72 rounded-md bg-orange-400 p-4 font-sans font-bold text-white shadow-inner hover:bg-amber-500"
        >
          Start the Quiz
        </Link>
      )}
    </div>
  );
};

export default Home;
