import { Link } from "react-router";
import Error from "@/components/Error";

const PageError = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Error
        errorHeading={"whoops!"}
        errorMessage={`This page doesn't exist.`}
      />
      <Link
        to="/"
        className="flex justify-center items-center w-[140px] h-10 bg-gray-500 hover:bg-purple-500 text-white font-bold rounded uppercase mt-8.5"
      >
        Back home
      </Link>
    </div>
  );
};

export default PageError;
