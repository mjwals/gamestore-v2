import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataGames } from "@/data/data";

// Used for React.Fragment works same as Vue <template></template>
// With shorthand <></> we can't bind key={} when looping
// Use React.Fragment instead
import React from "react";
import IconNintendo from "@/components/icons/IconNintendo";
import Error from "@/components/Error";

const PageGameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const matchedGame = dataGames.find((i) => i.id === id);
    setGame(matchedGame || null);
  }, [id]);

  return (
    <>
      {game ? (
        <div>
          {/*HERO*/}
          <section
            style={{
              backgroundImage: `url(${game.heroImage})`,
            }}
            className="relative h-[664px] bg-cover bg-center bg-no-repeat"
          >
            <div className="absolute inset-0 top-[40%] bg-linear-to-t from-gray-900 to-transparent"></div>
          </section>

          {/*GAME DETAILS*/}
          <section className="relative max-w-[1400px] mx-auto px-5 py-10 2xl:px-0">
            <h1 className="leading-none text-[26px] text-center lg:text-left text-gray-900 font-bold mb-4">
              {game.title}
            </h1>

            {/*PLATFORM*/}
            {game.platform.name.toLowerCase() === "nintendo" ? (
              <div className="flex justify-center lg:justify-start items-center text-gray-700">
                <IconNintendo />
                <span>&nbsp;&nbsp;{game.platform.name}</span>
              </div>
            ) : (
              <div className="flex justify-center lg:justify-start items-center text-gray-700">
                <FontAwesomeIcon
                  icon={game.platform.icon}
                  className="text-[26px]"
                />
                <span>&nbsp;{game.platform.name}</span>
              </div>
            )}

            {/*BASKET CARD*/}
            <div className="bg-white shadow-[0_1px_6px_rgba(0,0,0,0.25)] mt-10 p-5 w-full lg:absolute lg:top-[-33px] lg:right-5 lg:w-[calc(40%-16px)] lg:mt-0 2xl:right-0 2xl:w-[40%]">
              <h2 className="leading-none text-purple-500 text-center mb-5">
                <span>from&nbsp;</span>
                <span className="text-[26px] font-bold">{game.price}</span>
                <span>&nbsp;/&nbsp;month</span>
              </h2>
              <button className="flex justify-center items-center w-full h-10 rounded cursor-pointer bg-gray-500 hover:bg-purple-500 text-white uppercase font-bold">
                add to basket
              </button>
            </div>
          </section>

          {/*GAME DESCRIPTION*/}
          <section className="flex flex-col lg:flex-row max-w-[1400px] mx-auto px-5 py-10 pt-0 2xl:px-0 gap-10">
            <section className="flex-1">
              {/*HEADING*/}
              <section className="flex w-full border-b-2 border-gray-300 mb-5">
                <h3 className="capitalize border-b-2 border-gray-900 pb-3.5 -mb-0.5 text-gray-900 font-medium">
                  description
                </h3>
              </section>

              {/*CONTENT*/}
              {game.description.map((i, index) => (
                <React.Fragment key={index}>
                  <p key={index} className="text-gray-900 text-base/7">
                    {i.txt}
                  </p>
                  <img
                    src={i.img}
                    alt={`${game.title.toLowerCase()} image ${index}`}
                    className="rounded mt-8 mb-8 last:mb-0 w-full max-w-[320px]"
                  />
                </React.Fragment>
              ))}
            </section>

            {/*GAME RATING*/}
            <section className="flex-[0_0_40%]">
              {/*HEADING*/}
              <section className="flex w-full border-b-2 border-gray-300 mb-5">
                <h3 className="capitalize border-b-2 border-gray-900 pb-3.5 -mb-0.5 text-gray-900 font-medium">
                  details
                </h3>
              </section>

              {/*CONTENT*/}
              <ul className="text-base/7">
                <li className="flex items-center">
                  <label className="w-[116px] text-gray-700 capitalize">
                    release date:
                  </label>
                  <p>{game.releaseDate}</p>
                </li>
                <li className="flex items-center">
                  <label className="w-[116px] text-gray-700 capitalize">
                    Developer:
                  </label>
                  <p>{game.developer}</p>
                </li>
                <li className="flex items-start">
                  <label className="w-[116px] text-gray-700 capitalize">
                    Pegi rating:
                  </label>
                  <div className="flex flex-col xl:flex-row">
                    {game.pegiRating.map((i, index) => (
                      <React.Fragment key={index}>
                        <img
                          src={i}
                          alt={`rating image ${index}`}
                          className="w-[60px] h-[60px] mt-2.5 xl:mr-2.5 xl:last:mr-0"
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </li>
              </ul>
            </section>
          </section>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[calc(100%-166px)]">
          <Error
            errorHeading={"whoops!"}
            errorMessage={"The game you're looking for doesn't exist"}
          />
          <Link
            to="/"
            className="flex justify-center items-center w-[140px] h-10 bg-gray-500 hover:bg-purple-500 text-white font-bold rounded uppercase mt-8.5"
          >
            Back home
          </Link>
        </div>
      )}
    </>
  );
};

export default PageGameDetails;
