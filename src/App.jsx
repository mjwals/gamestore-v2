import { Outlet } from "react-router";
import "./App.css";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      {/*HEADER*/}
      <Header />

      {/*PAGES RENDER HERE*/}
      <Outlet />
    </>
  );
};

export default App;
