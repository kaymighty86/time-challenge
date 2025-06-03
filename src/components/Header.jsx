import style from "./Header.module.css";

import { useState, useRef } from "react";

export default function Header(){
    const [playerName, setPlayerName] = useState("Player");

    const playerNameInput = useRef();

    function handleNameChange(){
        if(playerNameInput.current.value != ""){
            setPlayerName(playerNameInput.current.value);
            playerNameInput.current.value = "";
        }
    }

    return (
        <header className={style.header}>
            <h1>-<b>TIMER</b> CHALLENGE-</h1>
            <p>Test your time perception skils!</p>
            <p>Stop the timer once you estimate that time is almost up. The closer the time stops to '0' without reaching '0', the higher the points.</p>
            <h2>Welcome {playerName}!</h2>
            <div className={style.nameInputSection}>
                <input ref={playerNameInput} type="text" name="player-name" placeholder="Enter your name"/>
                <button onClick={handleNameChange}>Set Name</button>
            </div>
        </header>
    );
}