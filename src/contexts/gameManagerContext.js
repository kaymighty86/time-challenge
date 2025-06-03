import { createContext } from "react";

export const gameManagerContext = createContext(
    {
        gameEnded: ()=>{}
    }
);