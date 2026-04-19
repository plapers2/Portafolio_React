import useFetchApi from "../../hooks/useFetchApi";
const Projects = () => {
  const { Datos } = useFetchApi("https://portafolio-react-y0p9.onrender.com/api/projects");
  return (
    <>
      <section className="mt-20 mb-20 pl-10 flex flex-row">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-green-500 uppercase tracking-widest text-sm mb-2">Portfolio</p>
            <h2 className="text-5xl md:text-7xl leading-none">
              <span className="text-white">Proyectos</span>{" "}
              <span className="text-red-400 italic relative">
                Realizados
                <span className="absolute left-0 -bottom-2 w-full h-0.75 bg-red-400/50"></span>
              </span>
            </h2>
          </div>
        </div>
      </section>
      <section className="w-full px-6 py-20 bg-black/60 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Datos.map((project, i) => (
            <div key={i} className="group bg-neutral-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition">
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag.id} className="text-xs px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-2xl">
                      <img src={tag.icon} alt="" srcset="" className="h-10 w-10 p-1" />
                    </span>
                  ))}
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                {/* Description */}
                <p className="text-sm text-gray-400">{project.description}</p>
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
