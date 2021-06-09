import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import { useAppContext } from "../../context/state";

import FixedMainContainer from "../../container/FixedMainContainer";
import Header from "../../components/Header/Header";
import Layout from "../../container/Layout";
import MainContainer from "../../container/MainContainer";
import PokemonListContainer from "../../container/PokemonListContainer";

const Index = () => {
    const [pokemons, setPokemons] = useState([]);
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
        setPokemons(data);
    };

    const renderNoPokemon = () => {
        return (
            <NoPokemon>
                <p className="headline">😟You have no pokemons.</p>
                <p className="info">
                    Go to <Link href="/">Index page</Link> to add one.
                </p>
            </NoPokemon>
        );
    };

    return (
        <Layout title={"Pokedex | My pokemon"} description={"My pokemon list"}>
            <Header />
            <MainContainer>
                <FixedMainContainer>
                    {state.myPokemons.length > 0 && state.pokemons.length > 0 ? (
                        <PokemonListContainer pokemons={pokemons} isOnMyPokemonPage={true} />
                    ) : (
                        renderNoPokemon()
                    )}
                </FixedMainContainer>
            </MainContainer>
        </Layout>
    );
};

const NoPokemon = styled.div`
    width: 100%;
    padding: 1rem;
    height: 300px;
    text-align: center;
    .headline {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
    .info {
        color: #9fa5c0;
        font-style: normal;
    }
`;

export default Index;
