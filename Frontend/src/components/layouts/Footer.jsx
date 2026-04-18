import { NavLink } from "react-router-dom";
import linkedinIcon from "../../assets/linkedin_icon.png";
import gitHubIcon from "../../assets/github_icon.png";
import whatsAppIcon from "../../assets/whatsapp_icon.png";
import useFetchApi from "../../hooks/useFetchApi";
const Footer = () => {
  const { Datos } = useFetchApi("https://portafolio-react-y0p9.onrender.com/api/contacts");

  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 text-xs md:text-xl xl:text-2xl">
        <nav className="grid grid-flow-col gap-4">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/projects">Proyectos</NavLink>
          <NavLink to="/skills">Habilidades</NavLink>
          <NavLink to="/about">Sobre Mí</NavLink>
        </nav>
        <nav>
          <h1 className="mb-4">Contactame:</h1>
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
              </div>
            );
          })}
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - Todos los derechos reservados por Mateo Hoyos Hernandez</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
