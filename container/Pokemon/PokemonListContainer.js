import React from "react";
import styled from "@emotion/styled";

import PokemonCard from "../../components/Pokemon/PokemonCard";

const PokemonListContainer = ({ pokemons, isOnMyPokemonPage }) => {
  return (
    <Container className="pokemonListContainer">
      {pokemons.map((pokemon, i) => (
        <PokemonCard
          key={pokemon.id + (isOnMyPokemonPage ? pokemon.nickname : 0)}
          pokemon={pokemon}
          isOnMyPokemonPage={isOnMyPokemonPage}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default PokemonListContainer;
