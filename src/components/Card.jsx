import React from "react";

function Card({ title, src, onclick, product }) {
  return (
    <div
      className="flex flex-col justify-center w-[300px] h-[365px] bg-white rounded-lg"
      onClick={() => onclick(product)}
    >
      <p className="p-2 text-center">{title}</p>
      <img src={src} alt={title} className="w-full h-full rounded-lg" />
    </div>
  );
}

export default Card;
