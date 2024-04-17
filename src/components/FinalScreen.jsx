
export default function FinalScreen({ timeRemaining, resetGame }) {

    const score = timeRemaining + 50 * 2;


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-white text-[20px]">
                {
                    timeRemaining != 0 ?
                        <div className="flex flex-col justify-center items-center ">

                            <p>¡Felicitaciones! Terminaste el juego</p>
                            <p>Tu puntuación es: {score}</p>
                        </div>
                        :
                        <div>
                            <p> Se ha acabdo el tiempo, ¡inténtalo de nuevo!</p>
                            <p>Tu puntuación es: {score}</p>
                        </div>
                }
            </div>

            <div className=" flex justify-center items-center gap-x-14">

                <button
                    onClick={() => resetGame()}
                    className={`py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg`}>
                    Intentar de nuevo
                </button>

                <a href="https://www.mercadolibre.com.ar/">
                    <button className={`py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg`}>
                        Ir a Mercado Libre
                    </button>
                </a>
            </div>

        </div>
    )
}

