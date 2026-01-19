import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tag = ({ filter, handleRemoveFilter }) => {
  return (
    <button
      className="bg-gray-500 hover:bg-red-500 text-white cursor-pointer rounded-full text-sm px-2 py-0.5 flex justify-center items-center"
      onClick={() => handleRemoveFilter(filter)}
    >
      <span className="capitalize font-medium mr-1">{filter.text}</span>
      <FontAwesomeIcon icon={["fas", "circle-xmark"]} />
    </button>
  );
};

export default Tag;
