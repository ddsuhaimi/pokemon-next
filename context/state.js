// src/context/state.js
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const [activePokemon, setActivePokemon] = useState();
    const [myPokemons, setMyPokemons] = useState([]);

    let sharedState = {
        pokemons,
        setPokemons,
        activePokemon,
        setActivePokemon,
        myPokemons,
        setMyPokemons,
    };

    return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}
