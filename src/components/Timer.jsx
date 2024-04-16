
import { useTimer } from 'react-timer-hook'
import { useEffect } from 'react';
import FinalScreen from './FinalScreen'

export default function Timer({ expiryTimestamp, finished }) {

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


    return (
        <div>
            <div className={`${finished ? 'hidden' : 'flex'}`}>

                <span>
                    {totalSeconds}
                </span>

            </div>

            <div className={`${finished ? 'flex' : 'hidden'}`}>

                <FinalScreen timeRemaining={totalSeconds} />
            </div>





        </div>
    )
}