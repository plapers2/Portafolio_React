import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import linkedinIcon from "../../assets/linkedin_icon.png";
import gitHubIcon from "../../assets/github_icon.png";
import whatsAppIcon from "../../assets/whatsapp_icon.png";
const Footer = () => {
  const [contacts, setContact] = useState([]);

  async function consumirApi() {
    const url = "https://portafolio-react-y0p9.onrender.com/api/contacts";
    const peticion = await fetch(url, { method: "GET" });
    const datos = await peticion.json();
    if (datos.Status === "success") {
      setContact(datos.results);
    }
  }
  useEffect(() => {
    consumirApi();
  }, []);

  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 text-xs md:text-xl xl:text-2xl">
        <nav className="grid grid-flow-col gap-4">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/projects">Proyectos</NavLink>
          <NavLink to="/skills">Habilidades</NavLink>
        </nav>
        <nav>
          <h1 className="mb-4">Contactame:</h1>
          {contacts.map((Contact) => {
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
