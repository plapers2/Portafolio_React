import Hero from "../layouts/Hero";
import prueba from "../../assets/imagen_referencia.jpeg";
const Home = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center gap-10 px-6 lg:px-16">
        <div className="text-white max-w-xl">
          <h4 className="text-lg sm:text-xl font-semibold bg-gray-900/80 p-3 inline-block rounded-lg">
            Hola, mi nombre es
            <span className="text-green-500 ml-2">Mateo Hoyos</span>
          </h4>
          <h1 className="mt-4 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Soy <Hero />
          </h1>
          <p className="mt-4 text-base sm:text-lg opacity-80">Desarrollador full-stack enfocado en React, Node.js y Laravel.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href="#about" className="text-green-500">
              Sobre mí →
            </a>
            <a href="#skills" className="text-green-500">
              Habilidades →
            </a>
          </div>
          <div className="mt-6">
            <a href="#projects" className="inline-block bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600 transition">
              Ver proyectos
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={prueba} alt="Imagen representativa" className="rounded-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover" />
        </div>
      </section>
    </>
  );
};

export default Home;
