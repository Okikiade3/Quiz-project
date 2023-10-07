 import { useEffect, useState } from "react"

 export default function Timer({setStopTime, questionNumber}) {

    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if(timer === 0) return setStopTime(true)
        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);
        return () => clearInterval(interval)
    }, [setStopTime, timer])

    useEffect(() => {
        setTimer(30);
    }, [questionNumber]) 

  return timer 
}
