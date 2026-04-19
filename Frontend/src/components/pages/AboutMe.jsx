import { NavLink } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";
const AboutMe = () => {
  const { Datos } = useFetchApi("https://portafolio-react-y0p9.onrender.com/api/skills");
  return (
    <>
      <section className="w-full flex bg-black/60" id="about">
        <div className="basis-1/4">
          <h2 className="text-xl m-6 font-bold">01 - Sobre Mí</h2>
        </div>
        <div className="basis-3/4 p-5">
          <p className="p-3 text-xl md:text-2xl xl:text-4xl">
            Mi camino comenzó con una obsesión por la <span className="text-green-500 font-serif">estructura interna</span> de las cosas. No
            se trataba solo de cómo funcionaban, sino de por qué lo hacían de esa manera.
          </p>
          <div className="flex row-auto mt-10">
            <div className="basis-2/4 justify-center flex">
              <p className="w-full p-3 text-sm md:text-xl xl:text-2xl">
                Esa pasión por la lógica pura me llevó inevitablemente al desarrollo Full Stack. Hoy, mi enfoque se centra en orquestar
                soluciones robustas donde el frontend y el backend dialogan sin fricciones. Masterizo el stack moderno, con un enfoque
                especializado en <span className="font-bold text-green-500 font-serif">React</span> para interfaces dinámicas,{" "}
                <span className="font-bold text-green-500 font-serif">Node.js</span> para orquestación eficiente y{" "}
                <span className="font-bold text-green-500 font-serif">Laravel</span> para arquitecturas elegantes y seguras.
              </p>
            </div>
            <div className="basis-2/4 justify-center flex">
              <p className="w-full p-3 text-sm md:text-xl xl:text-2xl">
                Entiendo el desarrollo no como una tarea de "picar código", sino como un ejercicio de diseño sistémico. Cada línea es una
                decisión estratégica que impacta en la mantenibilidad futura y en la experiencia final del usuario.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex bg-black/60 mt-2">
        <div className="basis-1/4">
          <h2 className="text-xl m-6 font-bold">02 - Tecnologias Principales</h2>
        </div>
        <div className="basis-3/4 p-5">
          <div className="flex flex-wrap justify-evenly overflow-x-hidden">
            {Datos.map((skill) => {
              if (
                skill.technology === "Express" ||
                skill.technology === "React" ||
                skill.technology === "Tailwind CSS" ||
                skill.technology === "GitHub"
              ) {
                return (
                  <div
                    key={skill.id}
                    className="flex mt-2 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl p-3"
                  >
                    <div className="card bg-black image-full w-40 h-40 lg:w-60 mr-2 shadow-sm lg:h-full">
                      <figure>
                        <img src={skill.icon} alt={skill.technology} />
                      </figure>
                      <div className="card-body bg-black/60">
                        <h2 className="card-title text-3xl">{skill.technology}</h2>
                        <p className="text-lg">{skill.description}</p>
                        <div className="card-actions justify-end"></div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <NavLink to="/skills" className="text-green-500 mt-4 justify-center flex">
            Conoce todas mis habilidades →
          </NavLink>
        </div>
      </section>
      <section className="w-full flex bg-black/60 mt-2">
        <div className="basis-1/4">
          <h2 className="text-xl m-6 font-bold">03 - Filosofia de Desarrollo</h2>
        </div>
        <div className="basis-3/4 p-5 overflow-x-hidden">
          <div className="flex flex-wrap justify-evenly">
            <div className="flex mt-2 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl p-3">
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="justify-start w-1/4 mt-3 ml-3">
                  <span className="rounded-xl p-4 text-green-500/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                      />
                    </svg>
                  </span>
                </figure>
                <div className="card-body">
                  <h2 className="card-title tracking-widest uppercase text-2xl">Escalabilidad</h2>
                  <p className="text-lg">
                    Arquitecturas diseñadas para crecer. Implementación de microservicios y patrones de diseño que aseguran que el sistema
                    soporte el éxito del negocio sin colapsar.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mt-2 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl p-3">
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="justify-start w-1/4 mt-3 ml-3">
                  <span className="rounded-xl p-4 text-green-500/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                      />
                    </svg>
                  </span>
                </figure>
                <div className="card-body">
                  <h2 className="card-title tracking-widest uppercase text-2xl">Código Limpio</h2>
                  <p className="text-lg">
                    Escribo código para humanos, no para máquinas. Principios SOLID, DRY y una obsesión por la legibilidad que reduce la
                    deuda técnica desde el día uno.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mt-2 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl p-3">
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="justify-start w-1/4 mt-3 ml-3">
                  <span className="rounded-xl p-4 text-green-500/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      />
                    </svg>
                  </span>
                </figure>
                <div className="card-body">
                  <h2 className="card-title tracking-widest uppercase text-2xl">User-Centric</h2>
                  <p className="text-lg">
                    La tecnología es un medio, no un fin. Cada decisión técnica está supeditada a mejorar la vida del usuario y resolver sus
                    problemas reales de forma intuitiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
