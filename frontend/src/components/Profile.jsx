"use client";

import axios from "axios";
import { useAuth } from "@/context/AuthContetx";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Profile() {
  const { user } = useAuth();
  const [score, setScore] = useState([]);

  // https://meli-game-2.onrender.com/api/usertasks

  const getTasks = async (token) => {
    await axios
      .post(
        "https://meli-game-2.onrender.com/api/usertasks",
        { username: user.username } // Aquí se envía el username en el body
      )
      .then((res) => setScore(res.data.tasks));
  };



  useEffect(() => {
    const cookies = Cookies.get();
    const token = cookies.token;

    getTasks(token);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-300 via-gray-400 to-gray-500 flex flex-col items-center pb-14 ">
      <p className=" mt-8 text-[60px] font-extrabold text-blue-900 pt-14 pb-14">
        BIENVENIDO A TU PERFIL
      </p>
      {/* Contenedor de card: */}
        {
          user? (
            <div className="flex w-[685px] h-[131px] bg-white shadow-xl rounded-xl gap-x-14 items-center p-[20px]">
        <img
          src={user.image}
          alt={user.username}
          width={90}
          height={60}
          className="rounded-full border-2 border-blue-500"
        />

        <div>
          <h2 className="text-xl font-bold">{user.username}</h2>
          <p className="text-md font-light pb-2">{user.email}</p>
          <p className="text-blue-500 text-md">último puntaje:{' '}{score.length > 0 ? score[0].score : "-"}</p>
        </div>
      </div>
          ) :
          <div>cargando...</div>
        }
      
      {/*Contenedor de puntajes:*/}

      {score ?
        score.slice(1).map((data, index) => (
          <div
            key={index}
            className="flex w-[685px] h-[65px] bg-white shadow-xl rounded-xl gap-x-14 items-center p-[20px] mt-4"
          >
            <div className="flex justify-center items-center gap-x-44 w-full">
              <p className="text-blue-500 text-md">
                {" "}
                Fecha:
                <span className="text-black">
                  {" "}
                  {new Date(data.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </p>
              <p className="text-blue-500 text-md">
                {" "}
                Puntaje: <span className="text-black"> {data.score}</span>
              </p>
            </div>
          </div>
        )) 
        : 
        <div
        className="flex w-[685px] h-[65px] bg-white shadow-xl rounded-xl gap-x-14 items-center p-[20px] mt-4"
      >
        <div className="flex justify-center items-center gap-x-44 w-full">
          <p>Hasta ahora no tienes puntajes guardados</p>
        </div>
      </div>}
    </div>
  );
}
