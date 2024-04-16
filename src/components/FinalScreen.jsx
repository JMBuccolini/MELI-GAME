



export default function FinalScreen({ timeRemaining }) {

    const score = timeRemaining * 2;


    return (
        <div>
            <div>

                <p>¡Felicitaciones! Terminaste el juego</p>
                <p>Tu puntuación es: {score}</p>
            </div>

        <div>
            <button>Intentar de nuevo</button>
            <button>Ver tabal de puntajes</button>
            <button>ir a MELI</button>
        </div>

        </div>
    )
}

