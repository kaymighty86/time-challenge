import style from "./Challenge.module.css";

import { useState, useRef } from "react";

export default function Challenge({title, seconds}){

    const [challengeStarted, setChallengeStarted] = useState(false);
    const currentTime = useRef();
    const timer = useRef();
    const interval = 10;

    function countdownTrigger(){
        if(!challengeStarted){//if the timer is not active
            currentTime.current = seconds * 1000;//convert the seconds to miliseconds

            timer.current = setInterval(()=>{
                currentTime.current -= interval;
                if(currentTime.current <= 0){
                    stopTimer();
                }
            },interval);

            console.log("counting down...");

            setChallengeStarted(true);
        }
        else{//if the time is active
            stopTimer();
        }
    }

    function stopTimer(){
        clearInterval(timer.current);

        //if there is still time left, it means the timer was manually halted
        console.log(currentTime.current > 0? `timer halted at ${currentTime.current/1000}s` : "timer ended");
        
        setChallengeStarted(false);
    }

    return (
        <div className={style.challengeCard}>
            <h2>{title}</h2>
            <p className={style.time}>{seconds} second{seconds > 1 && "s"}</p>
            <button onClick={countdownTrigger}>{challengeStarted? "Stop" : "Start Challenge"}</button>
            <p>{challengeStarted? "Counting Down..." : "Timer Inactive"}</p>
        </div>
    );
}