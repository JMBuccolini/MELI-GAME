import React from "react";
import { useState, useEffect } from "react";

function Card({ title, src, addCard, product }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {}, [flipped]);

  const handleButtonClick = (event) => {
    // Prevent the click event from bubbling up to the parent div
    event.stopPropagation();
    
    // Call the addCard function passed as a prop
    const cardsMatch = addCard(product);
    
    // If cards don't match, flip them back
    if (!cardsMatch) {
      setFlipped(false);
    }
  };

  return (
    <div
      className="flip-card"
      onClick={() => {
        setFlipped(!flipped);
      }}
    >
      <div
        className={`flip-card-inner ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="flip-card-front bg-yellow-400">
          <img src="./imgs/logomeli.png" alt="logo-meli" />
        </div>
        <div className="flip-card-back h-[300px] flex flex-col items-center justify-center">
          <p className="p-2 text-center">{title}</p>
          <img src={src} alt={title} className="w-full rounded-lg" />
          <button onClick={handleButtonClick}>SELECCIONAR</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
