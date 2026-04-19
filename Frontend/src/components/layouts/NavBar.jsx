const NavBar = () => {
  return (
    <nav>
      <ul className="grid grid-cols-1 sm:grid-cols-4 text-base text-white pt-4 md:pt-0 gap-5 lg:gap-10">
        <li className="flex justify-center">
          <a href="#" className="hover:text-green-500 text-xl xl:text-2xl">
            Inicio
          </a>
        </li>

        <li className="flex justify-center">
          <a href="#about" className="hover:text-green-500 text-xl xl:text-2xl">
            Sobre mí
          </a>
        </li>

        <li className="flex justify-center">
          <a href="#skills" className="hover:text-green-500 text-xl xl:text-2xl">
            Habilidades
          </a>
        </li>

        <li className="flex justify-center">
          <a href="#projects" className="hover:text-green-500 text-xl xl:text-2xl">
            Proyectos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
