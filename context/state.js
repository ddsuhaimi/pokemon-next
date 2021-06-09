import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const [activePokemon, setActivePokemon] = useState();
    const [myPokemons, setMyPokemons] = useState([]);

    const saveState = () => {
        const state = {
            pokemons: pokemons,
            activePokemon: activePokemon,
            myPokemons: myPokemons,
        };
        localStorage.setItem("state", JSON.stringify(state));
    };

    const loadState = () => {
        let state = localStorage.getItem("state");
        state = JSON.parse(state);
        setPokemons(state.pokemons);
        setActivePokemon(state.activePokemon);
        setMyPokemons(state.myPokemons);
    };

    useEffect(() => {
        if (localStorage.getItem("state")) {
            loadState();
        }
    }, []);

    useEffect(() => {
        saveState();
    }, [pokemons, activePokemon, myPokemons]);

    let sharedState = {
        pokemons,
        setPokemons,
        activePokemon,
        setActivePokemon,
        myPokemons,
        setMyPokemons,
        saveState,
        loadState,
    };

    return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}
