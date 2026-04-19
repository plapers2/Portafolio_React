import { NavLink } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";
const Skills = () => {
  const { Datos } = useFetchApi("https://portafolio-react-y0p9.onrender.com/api/skills");
  return (
    <>
      <section className="mt-20 mb-20 pl-10 flex flex-row" id="skills">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl leading-none">
              <span className="text-white">Mis</span>{" "}
              <span className="text-green-500 italic relative">
                Habilidades
                <span className="absolute left-0 -bottom-2 w-full h-0.75 bg-green-500/50"></span>
              </span>
            </h2>
          </div>
        </div>
      </section>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 bg-black/60 p-4 auto-rows-fr">
        {Datos.map((skill) => {
          return (
            <div key={skill.id} className="flex transition-all duration-300 hover:-translate-y-2 hover:scale-105 h-full">
              <div className="card sm:card-side bg-base-100 shadow-sm w-full overflow-hidden justify-center flex items-center">
                <figure className="p-4 flex items-center justify-center w-auto sm:w-lg lg:w-xl h-50 ">
                  <img src={skill.icon} alt="tech" className="w-full h-full object-contain" />
                </figure>

                <div className="card-body">
                  <h2 className="card-title text-xl lg:text-2xl">{skill.technology}</h2>
                  <p className="xl:text-lg">{skill.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Skills;
