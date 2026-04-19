import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Projects from "../components/pages/Projects";
import Skills from "../components/pages/Skills";
import AboutMe from "../components/pages/AboutMe";
import Home from "../components/pages/Home";
import backgroundImg from "../assets/background_home.png";
const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <div className="w-full bg-black">
          <div
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10">
              <Header />

              <main className="p-2">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/about" element={<AboutMe />} />
                </Routes>
              </main>
            </div>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
