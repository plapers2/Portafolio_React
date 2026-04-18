import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <section className="flex flex-wrap flex-row h-auto p-2">
          <article className="flex flex-row flex-wrap justify-evenly">
            {/* <Projects /> */}
            {/* <Skills /> */}
          </article>
        </section>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Rutas;
