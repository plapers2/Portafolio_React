import useFetchApi from "../../hooks/useFetchApi";
const Projects = () => {
  const { Datos } = useFetchApi("https://portafolio-react-y0p9.onrender.com/api/projects");
  return (
    <>
      <section className="mt-20 mb-20 pl-10 flex flex-row" id="projects">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl leading-none">
              <span className="text-white">Proyectos</span>{" "}
              <span className="text-green-500 italic relative">
                Realizados
                <span className="absolute left-0 -bottom-2 w-full h-0.75 bg-green-500/50"></span>
              </span>
            </h2>
          </div>
        </div>
      </section>
      <section className="w-full px-6 py-20 bg-black/60 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {Datos.map((project) => (
            <div key={project.id} className="group bg-neutral-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition">
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag.id} className="text-xs px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-2xl">
                      <img src={tag.icon} alt="" srcset="" className="h-10 w-10 p-1" />
                    </span>
                  ))}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm lg:text-lg xl:text-xl text-gray-400">{project.description}</p>
                <a href={project.link} className="text-green-500 mt-4 inline-block">
                  Ver más →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
