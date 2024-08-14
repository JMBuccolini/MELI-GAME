"use client";

import React, { useEffect, useState, useReducer } from "react";
import PlayBoard from "@/components/PlayBoard";
import axios from "axios";
import { cardsInitialState, cardsReducer } from "@/reducer/reducer";
import AOS from "aos";
import "aos/dist/aos.css";
import FinalScreen from "./FinalScreen";


function Main() {
  const [products, dispatch] = useReducer(cardsReducer, cardsInitialState);
  const [level, setLevel] = useState(1);
  const [board, setBoard] = useState(false);
  const [finish, setFinish] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isClickable, setIsClickable] = useState(true);
  const maxFlippedCards = 2;
 
  const { finalScore } = products;

  //Función para desordenar el array con cards gemelas:

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  //Función para obtener data de la API de MELI
  const handleFetchData = async (
    inicio = 0,
    limite = 2,
    producto = "iphone"
  ) => {
    await axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${producto}`)
      .then((response) => {
        const originalProducts = response.data.results.slice(inicio, limite); // Limitamos a 4 productos
        const duplicatedProducts = [...originalProducts, ...originalProducts]; // Duplicar los productos
        const shuffledProducts = shuffleArray(duplicatedProducts); // Reordenar aleatoriamente los productos
        dispatch({ type: "FILL_BOARD", payload: shuffledProducts }); // Enviar al reducer para llenar el estado global
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setBoard(true));
  };

  //AGREGAR UNA CARTA AL QUEUE:

  const addCard = (product, index) => {
    if (!isClickable) return;
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);
    if (newFlippedCards.length === maxFlippedCards) {
      setIsClickable(false);
      setTimeout(() => {
        setFlippedCards([]);
        setIsClickable(true);
      }, 1000); // Ajusta el tiempo según sea necesario
    }
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
    AOS.init();
    handleFetchData();
  }, []);

  //useEffect va leyendo las actualizaciones del estado y modificando los llamados a la API para incrementar el nivel de dificultad
  useEffect(() => {
    setBoard((prev) => !prev);
    if (level === 2) {
      handleFetchData(0, 3, "motorola");
    } else if (level === 3) {
      handleFetchData(0, 4, "xiaiomi");
    } else if (level === 4) {
      setBoard(false);
    }
  }, [level]);

  
    if (!endGame)
      return (
        <div>
          <PlayBoard
            finish={finish}
            dispatch={dispatch}
            setLevel={setLevel}
            setEndGame={setEndGame}
            products={products}
            board={board}
            level={level}
            addCard={addCard}
            finalScore={finalScore}
            isClickable={isClickable}
          />
        </div>
      );

    if (endGame)
      return (
        <FinalScreen finalScore={finalScore} resetGame={handleFetchData} />
      );
  
}

export default Main;
