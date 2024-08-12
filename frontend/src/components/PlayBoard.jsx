import Timer from "./Timer";
import Card from "./Card";
import Swal from "sweetalert2";
import { useTimer } from "react-timer-hook";
import { useEffect } from "react";

export default function PlayBoard(props) {
  const {
    finish,
    dispatch,
    setLevel,
    products,
    board,
    level,
    addCard,
    setEndGame,
    finalScore,
  } = props;

  //ESTO NOS DEVUELVE LOS SEGUNDOS EN UN CONTADOR DESCENDENTE PARA EL TIMER
  const time = new Date();
  const expiryTimestamp = time;
  time.setSeconds(time.getSeconds() + 4);
  const { totalSeconds, pause, resume } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  

  const handleNextLevel = () => {
    if (products.board.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Ch..ch..ch",
        text: "¡Tenés que completar el tablero!",
        footer: "<p>¡Espero que te esté gustando el juego!</p>",
      });
      return;
    }
    resume();
    // Actualizar el estado utilizando una función callback
    if (level < 4) {
      setLevel((prevLevel) => prevLevel + 1);
    }
    if (level === 3 && products.board.length === 0) {
      dispatch({ type: "FINAL_SCORE", payload: totalSeconds });
      setEndGame(true);
    }
  };



  console.log(products.board.length);
  useEffect(() => {
    if (totalSeconds === 0) {
      dispatch({ type: "FINAL_SCORE", payload: totalSeconds });
      setEndGame(true);
    }
    if (products.board.length === 0) {
      pause();
    }else{
      resume()
    }
  }, [totalSeconds, products.board]);



  return (
    <div className="flex flex-col justify-center items-center bg-yellow-300">
      <div className="overflow-hidden">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <h1 className="mt-24 text-[60px] font-extrabold text-white">
            JUEGO DE MEMORIA
          </h1>
        </div>
      </div>
      <div className="overflow-hidden">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          <p
            className={`${finish ? "hidden" : "block"} text-white text-[25px]`}
          >
            ¡Encuentra los pares de productos y avanza al siguiente nivel!
          </p>
        </div>
      </div>
      <div className={`${products.board ? "flex" : "hidden"}`}>
        <Timer
          totalSeconds={totalSeconds}
          finish={finish}
          dispatch={dispatch}
          setLevel={setLevel}
          finalScore={finalScore}
        />
      </div>

      <div className="flex flex-col gap-x-4 mt-14 container gap-y-14 justify-center items-center">
        <div className="w-full flex flex-wrap justify-center items-center gap-x-6 gap-y-6">
          {products.board &&
            products.board.map((product, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={`${index + 1}00`}
                data-aos-duration="700"
                data-aos-anchor="top-bottom"
                key={product.id + index}
              >
                <Card
                  title={product.title}
                  id={product.id}
                  src={product.thumbnail_id}
                  addCard={addCard}
                  product={product}
                />
              </div>
            ))}
        </div>
        <div>
          <button
            className={`${
              level === 4 ? "hidden" : ""
            } py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg mb-8`}
            onClick={() => handleNextLevel()}
          >
            {board ? (
              <p>{`${level === 3 ? "FINALIZAR JUEGO" : "SIGUIENTE NIVEL"}`}</p>
            ) : (
              <p className="flex">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>...cargando</span>
              </p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
