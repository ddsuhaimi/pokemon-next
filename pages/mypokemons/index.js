import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import FixedMainContainer from "../../container/FixedMainContainer";
import Layout from "../../container/Layout";
import MainContainer from "../../container/MainContainer";
import PokemonListContainer from "../../container/PokemonListContainer";
import { useAppContext } from "../../context/state";

function index() {
    const [data, setData] = useState([]);
    const state = useAppContext();

    useEffect(() => {
        generateMyPokemonsData();
    }, [state.myPokemons]);

    const generateMyPokemonsData = () => {
        const { myPokemons, pokemons } = state;
        let data = [];
        myPokemons.map((p) => {
            const matchedPokemon = pokemons.find((poke) => poke.id === p.id);
            data = [...data, { ...matchedPokemon, nickname: p.nickname }];
        });
        setData({
            pokemons: {
                results: data,
            },
        });
    };

    return (
        <Layout>
            <Header />
            <MainContainer>
                <FixedMainContainer>
                    <PokemonListContainer data={data} isOnMyPokemonPage={true} />
                </FixedMainContainer>
            </MainContainer>
        </Layout>
    );
}

export default index;
