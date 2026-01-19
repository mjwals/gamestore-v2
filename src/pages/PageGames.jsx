import { useState } from "react";

import { dataGames } from "@/data/data";
import { dataFilters } from "@/constants/common";

import Search from "@/components/Search";
import TagSummary from "@/components/TagSummary";
import Filters from "@/components/Filters";
import Grid from "@/components/Grid";

const PageGames = () => {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [gameItems, setGameItems] = useState(dataGames);
  const [filterItems, setFilterItems] = useState(dataFilters);

  const gameDataFiltered = gameItems.filter((game) => {
    // If the search is empty OR if there is a game title that matches the search
    const searchByInput =
      !search || game.title.toLowerCase().includes(search.toLowerCase());

    // If the selectedFilters array is empty OR selectedFilters array contains a matching platform
    const searchByCategory =
      selectedFilters.length === 0 ||
      selectedFilters.some((i) => i.value === game.platform.name.toLowerCase());

    return searchByInput && searchByCategory;
  });

  const gameDataSorted = gameDataFiltered.sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  );

  // Sets the singular/plural of our search results text
  const searchResultMessages = search.length
    ? `matching ${gameDataFiltered.length === 1 ? "result" : "results"}`
    : `amazing ${gameDataFiltered.length === 1 ? "game" : "games"}`;

  // Combines both search and selectedFilters into a single array
  const tagSummaryData = (search, selectedFilters) => {
    const summary = [];

    if (search && search.length) {
      summary.push({ text: search, value: search });
    }

    if (selectedFilters && selectedFilters.length > 0) {
      // Spread and push the individal array items
      summary.push(...selectedFilters);
    }

    return summary;
  };

  return (
    <>
      <div className="flex mx-auto max-w-[1400px] min-h-[calc(100%-156px)]">
        {/*FILTERS*/}
        <Filters
          items={filterItems}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

        {/*MAIN CONTENT*/}
        <section className="flex-1 p-10">
          {/*SEARCH*/}
          <Search
            search={search}
            setSearch={setSearch}
            setSelectedFilters={setSelectedFilters}
          />

          {/*SEARCH RESULT MESSAGES*/}
          <p className="leading-none text-lg text-gray-700 mt-10">
            {gameDataFiltered.length} {searchResultMessages}
          </p>

          <div className="border-2 border-gray-300 mt-4"></div>

          {/*TAGS*/}
          <TagSummary
            search={search}
            setSearch={setSearch}
            items={tagSummaryData(search, selectedFilters)}
            setSelectedFilters={setSelectedFilters}
          />

          {/*GAMES GRID*/}
          <Grid search={search} items={gameDataSorted} />
        </section>
      </div>
    </>
  );
};

export default PageGames;
