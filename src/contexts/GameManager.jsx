import {createPortal} from "react-dom";

import {gameManagerContext} from "./gameManagerContext.js";
import GameEndModal from "../components/modals/GameEndModal";

export default function GameManager({children}){

    function gameEnded(){

    }

    const actions = {
        gameEnded
    }

    return (
        <gameManagerContext.Provider value={actions}>
            {children}
            {createPortal(<GameEndModal />, document.getElementById("modal-root"))}
        </gameManagerContext.Provider>
    );
}