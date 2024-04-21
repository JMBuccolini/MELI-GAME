"use client";

import { useRouter } from "next/navigation";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Landing() {
  const router = useRouter();

  return (
    <div className="h-screen bg-yellow-300 text-white font-black w-screen flex flex-col items-center">
      <div className="flex w-full container h-full justify-center items-center">
        <div className="flex flex-col text-[90px] font-black w-full">
          <div className="overflow-hidden">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <p className="shadow-text">BIENVENIDOS</p>
            </div>
          </div>
          <div className="overflow-hiddenƒ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <p className="shadow-text">AL JUEGO DE</p>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <p className="shadow-text">MEMORIA</p>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <p className="shadow-text">CON MELI*</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-left w-full pl-14">
          <ul className="flex flex-col gap-y-2 text-[20px] text-white font-bold ">
            <div className="overflow-hidden">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <li className="shadow-text">INSTRUCCIONES:</li>
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <li className="shadow-text">
                  _ Debes hacer click en las cartas para visualizarlas
                </li>
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <li className="shadow-text">
                  _ Si las cartas coinciden, se irán del tablero. Caso
                  contrario, se darán vuelta nuevamente
                </li>
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <li className="shadow-text">
                  _ Son un total de tres niveles que aumentan de dificultad
                </li>
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <li className="shadow-text">
                  _ Verás un cronómetro, en este se basa tu puntaje final
                </li>
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                <li className="shadow-text">
                  _ Al finalizar podrás colocar tu nombre para guardar tu
                  puntaje en la tabla
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <button
        className="rounded-lg px-[20px] py-[14px] text-[18px] text-white border-2 bg-[#3483fa] border-blue-500 w-[250px] hover:bg-blue-600 hover:scale-110 transition-all duration-500 ease-in-out mb-14"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="800"
        onClick={() => {
          router.push("/home");
        }}
      >
        JUGAR
      </button>
      <div className="w-screen pl-24 mb-4">
        <div className="overflow-hidden">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
            <span className="text-[10px] text-gray-500">
              *Mercado Libre no auspicia, produce ni promociona este juego ni es
              responsable de ninguna manera por el mismo
            </span>
          </div>
        </div>
      </div>
      <div className="w-screen pl-24 mb-14 flex-col items-end justify-center gap-x-8">
        <div className="overflow-hidden">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
            data-aos-anchor="top-bottom"
          >
            <span className="text-[10px] text-gray-500">
              Creado por Juan M. Buccolini - FullStack Developer MERN
            </span>
          </div>
        </div>
        <div className="flex gap-x-2 mt-2">
          <div className="overflow-hidden">
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
                <FiLinkedin size={20} title="Linkedin" stroke="#6B7280" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-delay="900"
              data-aos-anchor="top-bottom"
            >
              <a href="https://github.com/JMBuccolini" target="_blank">
                <FiGithub size={20} stroke="#6B7280" />
              </a>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-anchor="top-bottom"
            >
              <a href="mailto:juanmateobuccolini@gmail.com" target="_blank">
                <MdOutlineMailOutline size={20} className="text-[#6B7280]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
