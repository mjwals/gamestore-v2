import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filters = ({ items, selectedFilters, setSelectedFilters }) => {
  const handleChange = (isChecked, selectedCheckbox) => {
    if (isChecked) {
      setSelectedFilters((prev) => [...prev, { ...selectedCheckbox }]);
    } else {
      setSelectedFilters((prev) =>
        prev.filter((i) => i.value !== selectedCheckbox.value)
      );
    }
  };

  return (
    <aside className="hidden xl:block basis-[220px] py-10 border-r-2 border-gray-300">
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <label
              htmlFor={i.id}
              className="flex items-center pl-10 py-2 hover:bg-gray-300 cursor-pointer"
            >
              {/*HIDE DEFAULT CHECKBOX*/}
              <input
                type="checkbox"
                className="hidden peer"
                id={i.id}
                value={i.value}
                checked={selectedFilters.some(
                  (selectedFilter) => selectedFilter.value === i.value
                )}
                onChange={(e) => handleChange(e.target.checked, i)}
              />

              {/*CUSTOM CHECKBOX*/}
              <div className="flex justify-center items-center w-[18px] h-[18px] rounded bg-white peer-checked:bg-violet-500">
                <FontAwesomeIcon
                  icon={["fas", "check"]}
                  className="text-white hidden peer-checked:block"
                />
              </div>

              {/*CHECKBOX LABEL*/}
              <span className="ml-2 text-gray-700">{i.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Filters;
