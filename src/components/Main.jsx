"use client";

import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import Card from "./Card";
import Timer from "@/components/Timer";
import { cardsInitialState, cardsReducer } from "@/reducer/reducer";

function Main() {
  const [products, dispatch] = useReducer(cardsReducer, cardsInitialState);
  const [level, setLevel] = useState(1);
  const [board, setBoard] = useState(false);
  const [finish, setFinish] = useState(false);

  //ESTO NOS DEVUELVE LOS SEGUNDOS EN UN CONTADOR DESCENDENTE PARA EL TIMER
  const time = new Date();
  time.setSeconds(time.getSeconds() + 400);

  //Función para obtener data de la API de MELI
  const handleFetchData = async (inicio = 0, limite = 2, producto = 'iphone') => {
    await axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${producto}`)
      .then((response) => {
        const originalProducts = response.data.results.slice(inicio, limite); // Limitamos a 6 productos
        const duplicatedProducts = [...originalProducts, ...originalProducts]; // Duplicar los productos
        const shuffledProducts = shuffleArray(duplicatedProducts); // Reordenar aleatoriamente los productos
        dispatch({ type: "FILL_BOARD", payload: shuffledProducts }); // Enviar al reducer para llenar el estado global

      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      }).finally(() => setBoard(true));
  };

  //AGREGAR UNA CARTA AL QUEUE:

  const addCard = (product) => {
    if (products.queue.length != 0) {
      const [firstCard] = products.queue;
      const secondCard = product;
      const match = firstCard.id === secondCard.id;
      if (match) {
        // Cards match
        setTimeout(() => {
          dispatch({ type: "COMPARE_CARDS", payload: product });
          return true;
        }, "1000");
      } else {
        // Cards don't match
        dispatch({ type: "COMPARE_CARDS", payload: product });
        return false;
      }
    }
    dispatch({ type: "ADD_CARD", payload: product });
    return false;
  };

  //Llamado a la API de MELI:
  useEffect(() => {
    handleFetchData();
  }, []);

  //Función para desordenar el array con cards gemelas:

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  //Función para avanzar de nivel

  const handleNextLevel = () => {
    if (products.board.length > 0) {
      alert('Tenés que terminar este tablero primero')
      return
    }
    //por cada nivel, aumenta la cantidad-dificultad
    setLevel(level + 1);

    if (level === 2) {
      handleFetchData(0, 2, 'motorola');
    } else if (level === 3) {
      handleFetchData(0, 2, 'xiaiomi');
    } else if (level === 4) {

      setBoard(false)
      setFinish(true)
    }

  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-24 text-[30px] text-white">Juego de memoria</h1>
      <p className="text-white">
        ¡Encuentra los pares de productos y avanza al siguiente nivel!
      </p>

      <Timer expiryTimestamp={time} finished={finish} />


      <div className="flex gap-x-4 mt-14 container flex-wrap gap-y-14 justify-center items-center">
        {products.board &&
          products.board.map((product, index) => (
            <Card
              title={product.title}
              id={product.id}
              src={product.thumbnail}
              key={product.id + index}
              addCard={addCard}
              product={product}
            />
          ))}

        <button
          className={`${board ? 'block' : 'hidden'}  py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg`}
          onClick={() => handleNextLevel()}>SIGUIENTE NIVEL

        </button>

      </div>
    </div>
  );
}

export default Main;
