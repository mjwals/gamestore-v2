import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";

const Card = ({ game }) => {
  const navigate = useNavigate();

  const handleNavigation = (e, url) => {
    // By default clicking a button triggers both the buttons onClick and parent div's onClick e.g
    // <div onClick="parent">
    //   <button onClick="child></button>
    // </div>
    // stopPropagation stops this from happening ("bubbling up")
    e.stopPropagation();
    navigate(url);
  };

  return (
    <div>
      {/*THUMBNAIL*/}
      <div
        style={{ backgroundImage: `url(${game.thumbnailImage})` }}
        className="bg-cover bg-center h-[220px] rounded relative cursor-pointer overflow-hidden group"
        onClick={(e) => handleNavigation(e, `/game/${game.id}`)}
      >
        {/*THUMBNAIL CONTROLS*/}
        <div className="hidden lg:block absolute inset-0">
          {/*THUMBNAIL CONTROLS HOVER BG*/}
          <div className="bg-gray-300/0 group-hover:bg-gray-300/90 transition-colors duration-200 absolute inset-0"></div>

          {/*THUMBNAIL CONTROLS HOVER BTNS*/}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex justify-center items-center absolute inset-0">
            <button
              className="px-3 py-2 bg-gray-500 text-white rounded cursor-pointer hover:bg-purple-500"
              onClick={(e) => handleNavigation(e, `/game/${game.id}`)}
            >
              <FontAwesomeIcon icon={["fas", "eye"]} />
            </button>
            <button
              className="px-3 py-2 bg-gray-500 text-white rounded cursor-pointer hover:bg-purple-500 ml-2.5"
              onClick={(e) => handleNavigation(e, `/`)}
            >
              <FontAwesomeIcon icon={["fas", "shopping-basket"]} />
            </button>
          </div>
        </div>
      </div>
      <Link
        to={`/game/${game.id}`}
        className="leading-none block mt-4 mb-3 font-medium text-gray-900 hover:underline"
      >
        {game.title}
      </Link>

      <p className="leading-none text-sm text-gray-700 mb-1.5">
        by&nbsp;
        <span className="font-medium">{game.developer}</span>
        &nbsp;in&nbsp;
        <span className="font-medium">{game.platform.name}</span>
      </p>

      <p className="text-sm text-purple-500">
        From
        <span className="text-xl font-bold">&nbsp;£{game.price}&nbsp;</span>/
        month
      </p>
    </div>
  );
};

export default Card;
