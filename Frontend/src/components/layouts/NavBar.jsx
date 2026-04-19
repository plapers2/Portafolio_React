const NavBar = () => {
  return (
    <nav>
      <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0 gap-10">
        <li>
          <a href="#" className="hover:text-green-500">
            Inicio
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-green-500">
            Habilidades
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-green-500">
            Proyectos
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-green-500">
            Sobre mí
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
