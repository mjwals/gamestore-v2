import Tag from "@/components/Tag";

const TagSummary = ({ search, setSearch, items, setSelectedFilters }) => {
  const handleRemoveFilter = (filter) => {
    if (search === filter.value) {
      setSearch("");
    } else {
      setSelectedFilters((prev) => {
        // Matches will be REMOVED showing only NON matches
        return prev.filter((i) => i.value !== filter.value);
      });
    }
  };

  return (
    <>
      {(search.length > 0 || items.length > 0) && (
        <ul className="flex mt-4">
          {items.map((filter, index) => (
            <li key={index} className="mr-2">
              <Tag filter={filter} handleRemoveFilter={handleRemoveFilter} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TagSummary;
