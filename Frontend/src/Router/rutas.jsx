import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/layouts/Header";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
};

export default Rutas;
