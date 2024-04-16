



export default function FinalScreen({ timeRemaining }) {

    const score = timeRemaining * 2;


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-white text-[20px]">

                <p>¡Felicitaciones! Terminaste el juego</p>
                <p>Tu puntuación es: {score}</p>
            </div>

            <div>
                <button className={`py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg`}>
                    Intentar de nuevo
                </button>
                <button className={`py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg`}>
                    Ver tabla de puntajes
                </button>
                <button className={`py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg`}>
                    Ir a MELI
                </button>
            </div>

        </div>
    )
}

