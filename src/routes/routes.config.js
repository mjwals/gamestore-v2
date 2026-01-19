import { createBrowserRouter } from "react-router";

import App from "@/App";
import PageGames from "@/pages/PageGames";
import PageGameDetails from "@/pages/PageGameDetails";
import PageError from "@/pages/PageError";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: App,
      // Loads each page into the Outlet component in App
      children: [
        { index: true, Component: PageGames },
        { path: "game/:id", Component: PageGameDetails },
      ],
    },
    {
      path: "*",
      Component: PageError,
    },
  ],
  {
    basename: "/gamestorev2/",
  }
);
