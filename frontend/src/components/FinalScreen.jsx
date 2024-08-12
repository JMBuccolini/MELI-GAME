import { useRouter } from "next/navigation";
import ContactMe from '@/components/ContactMe'
import axios from 'axios'
import { useAuth } from "@/context/AuthContetx";
import Cookies from 'js-cookie'

export default function FinalScreen({finalScore}) {
    const router= useRouter()
    
    const {user} = useAuth()
  
    const handleRetry = () => {
        router.push('/')
    };

    const cookies = Cookies.get()
    const token = cookies.token
  
    const handleScore = async ()=> {
       const res =  await axios.post('https://meli-game-2.onrender.com/api/tasks',{name: user.username, score: finalScore, user:user.id},
       { headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        router.push('/score')
   
    }


    return (
        <div className="flex flex-col  items-center h-screen bg-yellow-300 pt-32">
            <div className="text-white text-[20px]">
                {
                  true ?
                        <div className="flex flex-col justify-center items-center text-2xl font-bold">

                            <p>{`¡Felicitaciones ${user.username}!`} Terminaste el juego</p>
                            <p>Tu puntuación es: {finalScore}</p>
                        </div>
                        :
                        <div className="flex flex-col justify-center items-center gap-y-8">
                            <p> Se ha acabado el tiempo, ¡mejor suerte la próxima! 
                            </p>
                            <p>Tu puntuación es: {finalScore}</p>
                        </div>
                }
            </div>

            <div className=" flex justify-center items-center gap-x-14 mt-14">
                <button 
                className={`py-[14px] px-[20px] text-white bg-blue-400 hover:bg-blue-600 rounded-lg hover:scale-110 transition-all duration-500 ease-in-out`}
                onClick={()=> handleScore()}>
                    Guardar puntaje
                </button>
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

