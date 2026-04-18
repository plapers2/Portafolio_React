import { NavLink } from "react-router-dom";
import linkedinIcon from "../../assets/linkedin_icon.png";
import gitHubIcon from "../../assets/github_icon.png";
import whatsAppIcon from "../../assets/whatsapp_icon.png";
import emailIcon from "../../assets/icono_email.png";
import useFetchApi from "../../hooks/useFetchApi";
const Footer = () => {
  const { Datos } = useFetchApi("https://portafolio-react-y0p9.onrender.com/api/contacts");
  return (
    <>
      <footer className="relative shadow-lg bg-black text-white pt-16 pb-8">
        <div
          className="absolute -top-12 left-0 w-full h-12"
          style={{
            backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=...')",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 relative z-10">
          <div>
            <h2 className="text-2xl font-bold text-green-500 mb-4">Mateo Hoyos</h2>
            <p className="mb-4 leading-relaxed opacity-90">
              Desarrollador enfocado en la creación de soluciones web modernas, combinando arquitectura, código y estrategia para construir
              experiencias digitales eficientes.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-green-500 mb-6 border-b-2 border-green-500 pb-2">Navegacion</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition">
                  <span className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition">
                  <span className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                  Habilidades
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition">
                  <span className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                  Proyectos
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition">
                  <span className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                  Sobre mí
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-green-500 mb-6 border-b-2 border-green-500 pb-2">Contacto</h3>
            {Datos.map((Contact) => {
              return (
                <div key={Contact.id} className="grid grid-flow-col gap-4">
                  <a href={Contact.linkedin}>
                    <img className="w-17 h-12 object-cover rounded-xl" src={linkedinIcon} alt="" />
                  </a>

                  <a href={Contact.whatsapp}>
                    <img className="w-17 h-12 object-cover rounded-xl" src={whatsAppIcon} alt="" />
                  </a>

                  <a href={Contact.github}>
                    <img className="w-17 h-12 object-cover rounded-xl" src={gitHubIcon} alt="" />
                  </a>
                  <a href={Contact.email}>
                    <img className="w-17 h-12 object-cover rounded-xl" src={emailIcon} alt="" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center opacity-70 text-sm">
          <p>Copyright © {new Date().getFullYear()} - Todos los derechos reservados por Mateo Hoyos Hernandez</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
