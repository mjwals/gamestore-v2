import { Link } from "react-router";
import Label from "@/components/Label";

const Header = () => {
  return (
    <>
      {/*APP INFO*/}
      <section className="bg-sky-100 p-5 relative z-6">
        <h2 className="text-xl font-bold text-sky-900 mb-3">
          Game e-commerce app
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          <Label text={"React - v19.2"} />
          <Label text={"React-Router - v7.9"} />
          <Label text={"Tailwindcss - v4.1"} />
        </div>
      </section>

      {/*HEADER*/}
      <header className="sticky top-0 left-0 z-5 bg-white shadow-[0_1px_6px_rgba(0,0,0,0.25)]">
        <nav className="flex justify-between items-center mx-auto max-w-[1400px] h-[60px] px-5 2xl:px-0">
          <Link to="/">
            <h1 className="uppercase text-gray-900">
              Game<span className="font-bold">store</span>
            </h1>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
