import style from "./Challenge.module.css";

import { useState, useRef, useContext } from "react";

import { gameManagerContext } from "../contexts/gameManagerContext";

export default function Challenge({title, targetTime}){

    const {gameEnded} = useContext(gameManagerContext);

    const [challengeStarted, setChallengeStarted] = useState(false);
    const currentTime = useRef();
    const timer = useRef();
    const interval = 10;

    function countdownTrigger(){
        if(!challengeStarted){//if the timer is not active
            currentTime.current = targetTime * 1000;//initialise startTime and convert the targetTime to miliseconds

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
        gameEnded(targetTime, currentTime.current/1000);
        //if there is still time left, it means the timer was manually halted
        console.log(currentTime.current > 0? `timer halted at ${currentTime.current/1000}s` : "timer ended");
        
        setChallengeStarted(false);
    }

    return (
        <div className={style.challengeCard}>
            <h2>{title}</h2>
            <p className={style.time}>{targetTime} second{targetTime > 1 && "s"}</p>
            <button onClick={countdownTrigger}>{challengeStarted? "Stop" : "Start Challenge"}</button>
            <p>{challengeStarted? "Counting Down..." : "Timer Inactive"}</p>
        </div>
    );
}