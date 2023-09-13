import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white ">
      <h1 className="text-4xl">Page Not Found</h1>
      <Link
        className={
          "flex justify-center text-lg font-bold m-2 mt-8 w-72 rounded-md bg-orange-400 p-4 font-sans  text-white shadow-inner hover:bg-amber-500 hover:text-gray-900"
        }
        to={"/"}
      >
        Back To Start
      </Link>
    </div>
  );
};

export default NotFound;
