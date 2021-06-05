import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/apis";
import PokemonCard from "../components/PokemonCard";
import styled from "@emotion/styled";
import { useAppContext } from "../context/state";

function PokemonListContainer({ data, isOnMyPokemonPage }) {
    // const state = useAppContext();
    // const { loading, error, data } = useQuery(GET_POKEMONS, {
    //     variables: {
    //         limit: 10,
    //         offset: 0,
    //     },
    // });

    // useEffect(() => {
    //     console.log("state update cuy", state);
    // }, [state]);

    // useEffect(() => {
    //     if (data) state.setPokemons(data.pokemons.results);
    // }, [data]);

    return (
        <Container className="pokemonListContainer">
            {data?.pokemons?.results.map((pokemon, i) => (
                <PokemonCard key={pokemon.id + (isOnMyPokemonPage ? pokemon.nickname : 0)} pokemon={pokemon} />
            ))}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export default PokemonListContainer;
