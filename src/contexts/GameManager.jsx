import {createPortal} from "react-dom";
import { useRef } from "react";

import {gameManagerContext} from "./gameManagerContext.js";
import GameEndModal from "../components/modals/GameEndModal";

export default function GameManager({children}){

    const gameEndModal = useRef();

    function gameEnded(targetTime, currentTime){
        const score = Math.floor((1 - (currentTime/targetTime)) * 100);//calculate the score with lower currentTime getting higher score

        gameEndModal.current.open(targetTime, currentTime, score);//show the modal and pass this parameters
    }

    const actions = {
        gameEnded
    }

    return (
        <gameManagerContext.Provider value={actions}>
            {children}
            {createPortal(<GameEndModal ref={gameEndModal}/>, document.getElementById("modal-root"))}
        </gameManagerContext.Provider>
    );
}