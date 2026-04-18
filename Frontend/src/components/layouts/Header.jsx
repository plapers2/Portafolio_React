import logo from "../../assets/logo_pag.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg bg-black/60">
        <div className="flex-1 flex justify-between items-center">
          <a href="#" className="text-3xl font-semibold font-serif text-green-400">
            <img src={logo} alt="" className="w-60 h-25" />
          </a>
        </div>
        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <NavBar />
        </div>
      </header>
    </>
  );
};

export default Header;
