import logo from "../../assets/Logo.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="flex flex-row flex-wrap">
        <div className="flex flex-row flex-wrap bg-base-300 text-white p-7 shadow-2xs basis-2/4 items-center">
          <img src={logo} alt="Logo" />
          <p className="ml-2 text-xs md:text-xl xl:text-2xl text-shadow-2xs">Mateo Hoyos Desarrollador Full-Stack</p>
        </div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
