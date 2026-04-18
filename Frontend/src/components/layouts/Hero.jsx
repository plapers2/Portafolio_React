import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Desarrollador FullStack", "Desarrollador Frontend", "Desarrollador Backend", "Desarrollador de Apps Móviles"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} className="text-green-500"></span>;
};

export default Hero;
