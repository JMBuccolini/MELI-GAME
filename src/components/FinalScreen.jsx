import { useRouter } from "next/navigation";
import ContactMe from '@/components/ContactMe'
;
export default function FinalScreen({ timeRemaining, resetGame }) {
    const router= useRouter()
    const score = timeRemaining + 50 * 2;
    const handleRetry = () => {
        router.back()
    };

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="text-white text-[20px]">
                {
                    timeRemaining != 0 ?
                        <div className="flex flex-col justify-center items-center ">

                            <p>¡Felicitaciones! Terminaste el juego</p>
                            <p>Tu puntuación es: {score}</p>
                        </div>
                        :
                        <div className="flex flex-col justify-center items-center gap-y-8">
                            <p> Se ha acabado el tiempo, ¡mejor suerte la próxima! 
                            </p>
                            <p>Tu puntuación es: {score}</p>
                        </div>
                }
            </div>

            <div className=" flex justify-center items-center gap-x-14 mt-14">

                <button
                    onClick={() => handleRetry()}
                    className={`py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg hover:scale-110 transition-all duration-500 ease-in-out`}>
                    Intentar de nuevo
                </button>

                <a href="https://www.mercadolibre.com.ar/">
                    <button className={`py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg hover:scale-110 transition-all duration-500 ease-in-out`}>
                        Ir a Mercado Libre
                    </button>
                </a>
            </div>
            <div>
                <ContactMe/>
            </div>

        </div>
    )
}

