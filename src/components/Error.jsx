import { getImage } from "@/constants/utils";

const Error = ({ errorHeading, errorMessage, search = "" }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={getImage("assets/confused.gif")}
        alt="confused girl"
        className="w-[200px] h-[200px] rounded-full"
      />
      <p className="leading-none text-5xl text-center font-bold text-gray-900 capitalize mt-5">
        {errorHeading}
      </p>
      <p className="leading-none text-lg text-center text-gray-700 mt-7">
        {errorMessage}
        {search.length > 0 && (
          <span className="font-bold text-purple-500"> "{search}"</span>
        )}
      </p>
    </div>
  );
};

export default Error;
