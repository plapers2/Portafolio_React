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
              <span className="text-red-400 italic relative">
                Habilidades
                <span className="absolute left-0 -bottom-2 w-full h-0.75 bg-red-400/50"></span>
              </span>
            </h2>
          </div>
        </div>
      </section>
      {Datos.map((skill) => {
        return (
          <section className="w-full flex bg-black/60 m-2 overflow-x-hidden" key={skill.id}>
            <div className="flex transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
              {/* Imagenes */}
              <div className="basis-1/4 flex flex-col justify-center">
                <div className="justify-center flex">
                  <h2 className="text-xl m-6 font-bold">
                    0{skill.id} - {skill.technology}
                  </h2>
                </div>
                <div className="justify-center flex h-30">
                  <img src={skill.icon} alt={skill.technology} className="h-full rounded-2xl" />
                </div>
              </div>
              {/* Informacion sobre tecnologia */}
              <div className="basis-3/4 p-5">
                <p className="w-9/10 p-3 text-xl md:text-2xl xl:text-4xl">{skill.description}</p>
                <div className="flex row-auto mt-10">
                  <p className="w-9/10 p-3 text-sm md:text-xl xl:text-2xl">{skill.long_description}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Skills;
