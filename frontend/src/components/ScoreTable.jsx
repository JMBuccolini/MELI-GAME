"use client";

import { useState, Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { GiLaurelsTrophy, GiTrophy, GiTrophyCup } from "react-icons/gi";
export default function ScoreTable(props) {
  const [dbData, setDbData] = useState();
  const [table,setTable] = useState();
  const router = useRouter();
  const cookies = Cookies.get();
  const token = cookies.token;

  const handleRetry = () => {
    router.push("/home");
  };
  // 
  const getScoreTable = async () => {
    try {
      const response = await axios.get("https://meli-game-2.onrender.com/api/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDbData(response.data);
      const sliced = response.data.slice(3,10)
      setTable(sliced)
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching scores:", error);
    }
  };

  useEffect(() => {
    getScoreTable();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col justify-center items-center bg-gradient-to-t from-gray-300 via-gray-400 to-blue-900 ">
        {/* <div className="flex flex-col justify-center items-center mt-14">
          <p className="text-white text-[40px]">¡Gracias por haber jugado! </p>
          <p className="text-white text-[35px]">
            Espero que te hayas divertido
          </p>
        </div> */}

        <div className="flex flex-col items-center justify-center">
          <p className="text-white font-bold text-center text-[40px] pt-8">PODIO DE GANADORES</p>
          <div className="flex gapx-6 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <GiTrophy size={100} />
              <span className="rounded-md border-1 bg-blue-400 px-4 py-2 text-white">{dbData && dbData[1].score}</span>
              <span>{dbData && dbData[1].name}</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2">
              <GiLaurelsTrophy size={300} />
              <span className="rounded-md border-1 bg-blue-400 px-4 py-2 text-white">{dbData && dbData[0].score}</span>
              <span>{dbData && dbData[0].name}</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2">
              <GiTrophyCup size={70} />
              <span className="rounded-md border-1 bg-blue-400 px-4 py-2 text-white">{dbData && dbData[2].score}</span>
              <span>{dbData && dbData[2].name}</span>
            </div>
          </div>
          <h2 className="text-white text-[40px] font-extrabold mt-14">
          {" "}
          TABLA DE POSICIONES
        </h2>
          <div className="flex justify-center bg-yellow-300 items-center w-[800px] px-14 py-14 rounded-xl shadow-2xl ">
            <table className="w-full">
              <tbody>
                {table &&
                  table.map((row, index) => (
                    <tr
                      key={index}
                      className="flex justify-between items-center shadow-md p-4 bg-white text-blue-900 rounded-lg mb-4"
                    > <td>{index + 4}</td>
                      <td className="font-bold">{row.name}</td>
                      <td className="rounded-md border-1 bg-blue-400 px-4 py-2 text-white">{row.score}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <button
          onClick={() => handleRetry()}
          className={`py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg hover:scale-110 transition-all duration-500 ease-in-out mt-8 mb-8 shadow-lg`}
        >
          Intentar de nuevo
        </button>
      </div>
    </Suspense>
  );
}
