import logo from "../../assets/logo_pag.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="lg:px-16 px-4 grid grid-cols-1 sm:grid-cols-3 items-center py-4 shadow-lg bg-black/60">
        <div className="flex justify-center items-center sm:col-span-1">
          <a href="#" className="w-5/10">
            <img src={logo} alt="" className="w-full h-full" />
          </a>
        </div>
        <div id="menu" className="sm:col-span-2 sm:justify-end sm:flex">
          <NavBar />
        </div>
      </header>
    </>
  );
};

export default Header;
