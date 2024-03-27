"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Main() {
  const [products, setProducts] = useState([]);
  let selectedCards = [];
  const [counter, setCounter] = useState(0);
  const [matchedCards, setMatchedCards] = useState();
  const [score, setScore] = useState(0)

  const handleFetchData = (inicio = 0, limite = 6, product = "iphone") => {
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
      .then((response) => {
        const originalProducts = response.data.results.slice(inicio, limite); // Limitamos a 6 productos por simplicidad
        const duplicatedProducts = [...originalProducts, ...originalProducts]; // Duplicar los productos
        const shuffledProducts = shuffleArray(duplicatedProducts); // Reordenar aleatoriamente los productos
        setProducts(shuffledProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const handleNextLevelClick = () => {
    setCounter(counter + 1);
    setMatchedCards(false);
  };

  useEffect(() => {
    console.log("entró al use effect");
    if (counter > 0 && counter < 4) {
      handleFetchData(0, 6);
    }
  }, [counter]);

  useEffect(() => {
    if (counter === 3) {
      // Finalizar juego
    }
  }, [counter]);

  useEffect(() => {
    //llamado a la API de MELI
    handleFetchData();
    let fecha = Date.now()/30000000
    
    setScore(fecha)
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleResetGame = () => {
    setCounter(0);
    handleFetchData(0, 6);
  };

  const handleCardClick = (selectedProduct) => {
    if (selectedCards.length === 0) {
      selectedCards.push(selectedProduct);
    } else if (selectedCards.length === 1) {
      // Verificar si las dos cartas seleccionadas son iguales
      selectedCards.push(selectedProduct);
      if (selectedCards[0].id === selectedCards[1].id) {
        setMatchedCards(true);
        let filteredProd = products.filter(
          (el) => el.id != selectedCards[0].id
        );
        setProducts(filteredProd);
      } else {
        selectedCards = [];
      }
    } else if (selectedCards.length === 2) {
      return;
    }
    console.log("Array de cards", selectedCards);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-24 text-[30px] text-white">Juego de memoria</h1>
      <p className="text-white">
        elige los pares de productos y avanza al siguiente nivel!
      </p>
      
      <div className="flex gap-x-4 mt-14 container flex-wrap gap-y-14 justify-center items-center">
        {products.length != 0 ? (
          products.map((product, index) => (
            <Card
              title={product.title}
              src={product.thumbnail}
              key={index}
              onclick={handleCardClick}
              product={product}
            />
          ))
        ) : counter < 3 ? (
          <button onClick={handleNextLevelClick}>
            AVANZA AL SIGUIENTE NIVEL
          </button>
        ) : (
          <div>
            <p>{`¡Excelente memoria! este es tu puntaje: ${score} , ¿te animas a intentarlo de nuevo?`}</p>
            <button onClick={handleResetGame}>Intentalo de nuevo</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
