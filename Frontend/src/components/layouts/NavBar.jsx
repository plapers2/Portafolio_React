import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
          <li>
            <a className="md:p-4 py-3 px-0 block text-green-500 hover:text-green-500" href="/">
              Inicio
            </a>
          </li>
          <li>
            <a className="md:p-4 py-3 px-0 block hover:text-green-500" href="/skills">
              Habilidades
            </a>
          </li>
          <li>
            <a className="md:p-4 py-3 px-0 block hover:text-green-500" href="/projects">
              Proyectos
            </a>
          </li>
          <li>
            <a className="md:p-4 py-3 px-0 block hover:text-green-500" href="/about">
              Sobre mí
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
