'use client'

import {useRouter} from 'next/navigation'

export default function Landing(){

    const router = useRouter()

    return(
        <div className="h-screen bg-yellow-300 text-white font-black w-full flex flex-col items-center">
            <div className='flex w-full container px-14'>
                <div className='flex text-[80px] font-black w-[200px]'>
                    BIENVENIDOS AL JUEGO DE MERCADO LIBRE
                </div>
                <div className="flex flex-col  items-center w-full">
                    <p>Instrucciones:</p>
                    <ul>
                        <li>Instrucción 1</li>
                        <li>Instrucción 2</li>
                        <li>Instrucción 3</li>
                        <li>Instrucción 4</li>
                        <li>Instrucción 5</li>
                    </ul>
                </div>
            </div>
            <button 
            className='rounded-lg px-[20px] py-[14px] text-[18px] text-white border-2 border-blue-500 w-[250px] hover:bg-blue-600 transition-all duration-300 ease-in-out'
            onClick={()=>{
                router.push('/home')
            }}>
                ¡Jugar!
            </button>
        </div>
    )
}