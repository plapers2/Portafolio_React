import Hero from "../layouts/Hero";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full relative top-10 pb-20 mt-50">
      <div className="lg:px-16 px-8 flex flex-col lg:flex-row gap-10 items-center justify-between mt-20">
        <div className="text-white max-w-xl">
          <h4 className="text-2xl font-semibold bg-gray-900/80 p-3 inline-block">
            Hola, mi nombre es
            <span className="text-green-500 ml-2">Mateo Hoyos</span>
          </h4>

          <h1 className="mt-4 text-4xl">
            Soy <Hero />
          </h1>

          <p className="mt-4 text-lg">Desarrollador full-stack enfocado en React, Node.js y Laravel.</p>
          <div>
            <NavLink to="/about" className="text-green-500 mt-4 inline-block">
              Leer más sobre mí →
            </NavLink>
          </div>
          <div>
            <NavLink to="/skills" className="text-green-500 mt-4 inline-block">
              Leer más sobre mis habilidades →
            </NavLink>
          </div>
          <div>
            <NavLink to="/projects" className="mt-6 inline-block bg-green-500 px-6 py-2 rounded-lg">
              Ver proyectos
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
