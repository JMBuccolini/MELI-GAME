import React from "react";
import { useState, useEffect } from "react";

function Card({ title, src, addCard, product }) {
  const [flipped, setFlipped] = useState(false);
  const [glow, setGlow] = useState(false)

  useEffect(() => {}, [flipped]);

  const handleButtonClick = (product) => {
    setGlow(true)
    // Call the addCard function passed as a prop
    const cardsMatch = addCard(product);
    
    // If cards don't match, flip them back
    if (!cardsMatch) {
      setTimeout(()=>{
        
        setFlipped(false);

      },"2000")
    }
  };

  return (
    <div
      className={`flip-card  transition-all duration-200 ease-in-out`}
      onClick={() => {
        handleButtonClick(product)
        setFlipped(!flipped);
      }}
    >
      <div
        className={`flip-card-inner ${
          flipped && glow ? "[transform:rotateY(180deg)] shadow-custom transition-all duration-500 ease-in-out" : ""
        }`}
      >
        <div className="flip-card-front bg-yellow-400">
          <img src="./imgs/logomeli.png" alt="logo-meli" />
        </div>
        <div className="flip-card-back h-[300px] flex flex-col items-center justify-center">
          <p className="p-2 text-center">{title}</p>
          <img src={src} alt={title} className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Card;
