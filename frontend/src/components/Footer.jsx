import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <div className="w-full h-[25vh] flex-col items-center justify-center bg-white pt-6 relative z-2 mt-auto">
      {/* ESTE ES EL CONTENEDOR DEL TEXTO */}
      <div className="overflow-hidden w-full flex justify-center items-center text-center">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
          data-aos-anchor="top-bottom"
          className="flex flex-col gap-y-8"
        >
          <span className="text-24 font-bold text-blue-950">
            *Mercado Libre no auspicia, produce ni promociona este juego ni es
            responsable de ninguna manera por el mismo
          </span>
          <span className="text-24 text-blue-950">
            Creado por Juan M. Buccolini - Software Developer
          </span>
        </div>
      </div>

      {/* ESTE ES EL CONTENEDOR DE ICONOS */}
      <div className="flex gap-x-2 pt-4 w-full justify-center items-center">
        <div className="overflow-hidden hover:scale-110 transition-all duration-500 ease-in-out">
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-delay="800"
            data-aos-anchor="top-bottom"
          >
            <a
              href="https://www.linkedin.com/in/juan-mateo-buccolini/"
              target="_blank"
            >
              <FiLinkedin size={30} title="Linkedin" stroke="#6B7280" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden hover:scale-110 transition-all duration-500 ease-in-out">
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-delay="900"
            data-aos-anchor="top-bottom"
          >
            <a href="https://github.com/JMBuccolini" target="_blank">
              <FiGithub size={30} stroke="#6B7280" />
            </a>
          </div>
        </div>
        <div className="overflow-hidden hover:scale-110 transition-all duration-500 ease-in-out">
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-anchor="top-bottom"
          >
            <a href="mailto:juanmateobuccolini@gmail.com" target="_blank">
              <MdOutlineMailOutline size={30} className="text-[#6B7280]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
