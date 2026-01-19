import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ search, setSearch, setSelectedFilters }) => {
  const handleSetSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearch("");
    setSelectedFilters([]);
  };

  const searchInput = useRef(null);

  useEffect(() => {
    // Set focus on component load
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, []);

  return (
    <div className="relative">
      <input
        type="text"
        className="appearance-none outline-hidden border-2 border-transparent focus:border-2 focus:border-violet-500 w-full px-5 py-4 rounded bg-white text-gray-700 text-lg font-bold"
        placeholder="Search..."
        value={search}
        ref={searchInput}
        onChange={handleSetSearch}
      />

      {search.length > 0 && (
        <div className="absolute top-0 right-5 bottom-0 flex justify-center items-center">
          <button onClick={handleClearSearch}>
            <FontAwesomeIcon
              icon={["fas", "circle-xmark"]}
              className="text-gray-500 hover:text-red-500 cursor-pointer"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
