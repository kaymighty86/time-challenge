import { createContext } from "react";

export const gameManagerContext = createContext(
    {
        gameEnded: (targetTime = 0, currentTime = 0)=>{}
    }
);