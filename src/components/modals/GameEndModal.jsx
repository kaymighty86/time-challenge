import style from "./GameEndModal.module.css";

import { useRef, forwardRef, useImperativeHandle, useState } from "react";

const GameEndModal = forwardRef(function GameEndModal({onClose}, ref){

    const dialogModal = useRef();
    const[scoreData, setScoreData] = useState({
        targetTime: 0,
        currentTime: 0,
        score: 0
    });

    useImperativeHandle(ref, ()=>{
        return {
            open: (targetTime = 0, currentTime = 0, score = 0)=>{
                setScoreData({
                    targetTime,
                    currentTime,
                    score
                });

                dialogModal.current.showModal();
            }
        }
    });

    function onCloseDialog(){
        onClose && onClose();//execute any function here if there is any
    }

    return (
        <dialog ref={dialogModal} className={style.GameEndModal} onClose={onCloseDialog}>
            {scoreData.currentTime > 0? <h1>YOUR SCORE: {scoreData.score}</h1> : <h1>YOU LOST</h1>}
            <p>The target time was <b>{scoreData.targetTime} second{scoreData.targetTime > 1 && "s"}</b></p>
            <p>You stopped the time with <b>{scoreData.currentTime} second{scoreData.currentTime > 1 && "s"} left</b></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default GameEndModal;