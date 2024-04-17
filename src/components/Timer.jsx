
import { useTimer } from 'react-timer-hook'
import { useEffect } from 'react';
import FinalScreen from './FinalScreen'

export default function Timer({ expiryTimestamp, finished, handleFetchData, dispatch, setLevel }) {

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') })


    useEffect(() => {
        if (finished) {
            pause(); // Pausar el cronómetro cuando finished es true
        }
    }, [finished]);

    useEffect(()=>{
        if(totalSeconds === 0){
            setLevel(4)
            dispatch({type:'CLEAR_BOARD'})
        }
    })


    return (
        <div>
            <div className={`${finished ? 'hidden' : 'flex'}`}>

                <span>
                    {totalSeconds}
                </span>

            </div>

            <div className={`${finished || totalSeconds === 0 ? 'flex' : 'hidden'}`}>

                <FinalScreen timeRemaining={totalSeconds} resetGame = {handleFetchData}/>
            </div>





        </div>
    )
}