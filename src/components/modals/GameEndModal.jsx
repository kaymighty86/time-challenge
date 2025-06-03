import style from "./GameEndModal.module.css";

import { useEffect, useRef } from "react";

export default function GameEndModal({targetTime = 0}){

    const dialogModal = useRef();

    useEffect(()=>{
        dialogModal.current.showModal();
    },[]);

    return (
        <dialog ref={dialogModal} className={style.GameEndModal}>
            <h1>YOU LOST</h1>
            <p>The target tie was <b>{targetTime} second{targetTime > 1 && "s"}</b></p>
            <p>You stopped the time with <b>x seconds left</b></p>
            <form>
                <button>Close</button>
            </form>
        </dialog>
    );
}