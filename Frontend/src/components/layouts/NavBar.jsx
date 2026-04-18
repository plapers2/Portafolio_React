import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
        <li>
          <NavLink to="/" className={({ isActive }) => `md:p-4 py-3 px-0 block ${isActive ? "text-green-500" : "hover:text-green-500"}`}>
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => `md:p-4 py-3 px-0 block ${isActive ? "text-green-500" : "hover:text-green-500"}`}
          >
            Habilidades
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => `md:p-4 py-3 px-0 block ${isActive ? "text-green-500" : "hover:text-green-500"}`}
          >
            Proyectos
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `md:p-4 py-3 px-0 block ${isActive ? "text-green-500" : "hover:text-green-500"}`}
          >
            Sobre mí
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
