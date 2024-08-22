import React from "react";
import { useState, useEffect } from "react";

function Card({ title, src, addCard, product,isClickable, index,shipping,link,price }) {
  const [flipped, setFlipped] = useState(false);
  const [glow, setGlow] = useState(false)

  const thumbnail_id = src;
  const baseURL = "https://http2.mlstatic.com/D_NQ_NP_";
  const newURL = `${baseURL}${thumbnail_id}-F.jpg`;

  useEffect(() => {}, [flipped]);

  const handleButtonClick = (product, index) => {
   
    setGlow(true)
    // Call the addCard function passed as a prop
    const cardsMatch = addCard(product, index);
    
    // If cards don't match, flip them back
    if (!cardsMatch) {
      setTimeout(()=>{
        
        setFlipped(false);

      },"2000")
    }
  };


  return (
    <div
      className={`flip-card  transition-all duration-200 ease-in-out ${isClickable ? '' : 'pointer-events-none'}  `}
      onClick={() => {
        handleButtonClick(product)
        setFlipped(true);
      }}
    >
      <div
        className={`flip-card-inner shadow-2xl ${
          flipped && glow ? "[transform:rotateY(180deg)] shadow-custom transition-all duration-500 ease-in-out" : ""
        }`}
      >
        <div className="flip-card-front bg-yellow-400">
          <img src="./imgs/logomeli.png" alt="logo-meli" />
        </div>
        <div className="flip-card-back h-[300px] flex flex-col items-center justify-center overflow-hidden relative">
          <img src={newURL} alt={title} className="w-full rounded-lg object-contain h-full" />
          <div className="absolute top-[30%] left-0 text-white font-bold backdrop-blur-md w-full py-5">
            <p className="text-white font-bold">{title}</p>
            <p className="font-normal">Precio:{price}</p>
            <p className="font-normal pb-4">Envío gratis: {`${shipping ? 'SI' : 'NO'}  `}</p>
            <a href={link} target="_blank" className="rounded-xl bg-blue-600 p-[5px]"
            onClick={(event) => {
              event.stopPropagation(); // Evita que el evento de click se propague al contenedor de la carta y se desarme el tablero
            }}
            >Click para comprar!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
