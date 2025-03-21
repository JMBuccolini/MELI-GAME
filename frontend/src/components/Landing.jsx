"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Landing() {
  const router = useRouter();

  useEffect(() => {
    const playVideo = () => {
      const bgVideo = document.querySelector("video");
      bgVideo.play();
    };

    playVideo()
  }, []);

  return (
    <div className=" bg-gray-300  text-white font-black w-screen h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-0 left-0 w-full h-full z-1 opacity-50  ">
        <video playsInline autoPlay muted loop className="w-full ">
          <source src="./video-fondo-ml.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex w-full container justify-center items-center">
        <div className="flex flex-col text-[90px] font-black w-full">
          <div className="overflow-hidden">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <p className="shadow-text">
                BIENVENIDOS AL JUEGO DE MEMORIA CON MELI*
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around gap-x-4 pt-24">
        <button
          className="rounded-lg px-[20px] py-[14px] text-[18px] text-white border-2 bg-[#3483fa] border-blue-500 w-[250px] hover:bg-blue-600 hover:scale-110 transition-all duration-500 ease-in-out mb-14"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="800"
          onClick={() => {
            router.push("/profile");
          }}
        >
          INICIAR SESIÓN
        </button>
      </div>
    </div>
  );
}
