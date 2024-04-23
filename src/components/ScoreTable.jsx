"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";

export default function ScoreTable() {
  const [dbData, setDbData] = useState();
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get("score");

  const handleRetry = () => {
    router.push('/')
};


  const getScoreTable = async () => {
    try {
      const response = await axios.get("https://meli-game-back.onrender.com/scores");
      const usersData = response.data.usersData;
      setDbData(usersData); // Assuming response is an object with a `data` property containing the actual data
    } catch (error) {
      console.error("Error fetching scores:", error);
    }
  };

  useEffect(() => {
    Swal.fire({
      title: "Coloca tu nombre para guardar el puntaje!",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      confirmButtonText: "Guardar",
      showLoaderOnConfirm: true,
      preConfirm: async (name) => {
        try {
          if (!name) {
            // Si el nombre está vacío, muestra un mensaje de validación
            Swal.showValidationMessage("Por favor, ingresa tu nombre.");
            return;
          }

          const postData = {
            name: name,
            score: score,
          };
          const response = await fetch("https://meli-game-back.onrender.com/scores", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
          });
          if (!response.ok) {
            const errorMessage = await response.json();
            throw new Error(errorMessage);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Puntaje guardado!",
          text: "¡Gracias por jugar!",
          icon: "success",
        });
        fetchData();
      }
    });

    const fetchData = async () => {
      await getScoreTable();
    };
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center mt-14">
      <div className="flex flex-col justify-center items-center">
        <p className="text-white text-[60px]">¡Gracias por haber jugado! </p>
        <p className="text-white text-[50px]">Espero que te hayas divertido</p>
      </div>
      <h2 className="text-white text-[50px] font-extrabold mt-14">
        {" "}
        TABLA DE POSICIONES
      </h2>
      <button
        onClick={() => handleRetry()}
        className={`py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg hover:scale-110 transition-all duration-500 ease-in-out mt-8 mb-8`}
      >
        Intentar de nuevo
      </button>
      <div className="flex justify-center bg-yellow-300 items-center w-[800px] px-14 py-14">
        <table className="w-full">
          <tbody>
            {dbData &&
              dbData.map((row, index) => (
                <tr
                  key={index}
                  className="flex justify-between items-center border-2 p-4 border-black mb-4"
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
  );
}
