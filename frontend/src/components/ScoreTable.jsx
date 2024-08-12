"use client";

import { useState, Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from 'js-cookie'

export default function ScoreTable(props) {
  const [dbData, setDbData] = useState();
  const router = useRouter();
  const cookies = Cookies.get()
  const token = cookies.token



  const handleRetry = () => {
    router.push('/home');
  };

  const getScoreTable = async () => {
    try {
      const response = await axios.get("https://meli-game-2.onrender.com/api/tasks", { headers: {
        'Authorization': `Bearer ${token}`
      }
    });
      setDbData(response.data)
    } catch (error) {
      console.error("Error fetching scores:", error);
    }
  };


  useEffect(()=>{
    getScoreTable()
  },[])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col justify-center items-center h-screen bg-yellow-300">
        <div className="flex flex-col justify-center items-center mt-44">
          <p className="text-white text-[40px]">¡Gracias por haber jugado! </p>
          <p className="text-white text-[35px]">Espero que te hayas divertido</p>
        </div>
        <h2 className="text-white text-[40px] font-extrabold mt-14">
          {" "}
          TABLA DE POSICIONES
        </h2>
        <button
          onClick={() => handleRetry()}
          className={`py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg hover:scale-110 transition-all duration-500 ease-in-out mt-8 mb-8 shadow-lg`}
        >
          Intentar de nuevo
        </button>
        <div className="flex justify-center bg-yellow-300 items-center w-[800px] px-14 py-14 rounded-xl shadow-2xl ">
          <table className="w-full">
            <tbody>
              {dbData &&
                dbData.map((row, index) => (
                  <tr
                    key={index}
                    className="flex justify-between items-center border-2 p-4 border-blue-700 rounded-lg mb-4"
                  >
                    <td>{index + 1}</td>
                    <td>{row.name}</td>
                    <td>{row.score}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Suspense>
  );
}
