import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Projects from "../components/pages/Projects";
import Skills from "../components/pages/Skills";
import About from "../components/pages/About";
import Home from "../components/pages/Home";
import backgroundImg from "../assets/background_home.png";
const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <div className="w-full h-full bg-black">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <Header />
            <section className="flex flex-wrap flex-row h-auto p-2">
              <article className="flex flex-row flex-wrap justify-evenly w-full h-full">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/projects" element={<Projects />}></Route>
                  <Route path="/skills" element={<Skills />}></Route>
                  <Route path="/about" element={<About />}></Route>
                </Routes>
              </article>
            </section>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
