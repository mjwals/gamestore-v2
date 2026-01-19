import Card from "@/components/Card";
import Error from "@/components/Error";

const Grid = ({ search, items }) => {
  return (
    <section className="flex flex-col mt-10">
      {items.length ? (
        <ul className="flex flex-wrap justify-center w-full gap-10">
          {items.map((game) => (
            <li key={game.id} className="flex-[0_1_340px]">
              <Card game={game} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center">
          <Error
            errorHeading={"whoops!"}
            errorMessage={`We could't find any matches for`}
            search={search}
          />
        </div>
      )}
    </section>
  );
};

export default Grid;
