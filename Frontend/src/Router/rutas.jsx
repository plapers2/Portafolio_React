import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Projects from "../components/pages/Projects";
import Skills from "../components/pages/Skills";
const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <section className="flex flex-wrap flex-row h-auto p-2">
          <article className="flex flex-row flex-wrap justify-evenly">
            <Routes>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/skills">
                <Skills />
              </Route>
            </Routes>
          </article>
        </section>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Rutas;
