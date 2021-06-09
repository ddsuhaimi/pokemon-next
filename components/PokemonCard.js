import React from "react";
import styled from "@emotion/styled";
import { capitalizeFirstLetter } from "../lib/helpers/stringHelper";
import { useAppContext } from "../context/state";
import { useRouter } from "next/router";
const Pokemon = ({ pokemon, isOnMyPokemonPage }) => {
    const state = useAppContext();
    const router = useRouter();

    const onClickRemove = (e) => {
        const { myPokemons } = state;
        state.setMyPokemons(myPokemons.filter((p) => !(p.id === pokemon.id && p.nickname === pokemon.nickname)));
    };
    const onClickCard = (e) => {
        // only go to detail page when clicked outside delete icon
        if (isOnMyPokemonPage && !e.target.className.includes("fas")) {
            router.push(`/pokemons/${pokemon.name}`);
        }

        if (!isOnMyPokemonPage) {
            router.push(`/pokemons/${pokemon.name}`);
        }
    };

    const getNumberOfOwn = () => {
        return state.myPokemons.filter((p) => p.id === pokemon.id).length;
    };
    return (
        <Container className="pokemon" onClick={onClickCard}>
            <ImageContainer>
                <PokemonImg src={pokemon.image} alt={pokemon.name} width={150} height={150} />

                {isOnMyPokemonPage && (
                    <IconDelete onClick={onClickRemove}>
                        <i className="fas fa-trash-alt"></i>
                    </IconDelete>
                )}
            </ImageContainer>
            <CardFooter>
                <div className="left" style={{ textAlign: "left" }}>
                    <PokemonName className="pokemon__name">
                        {pokemon.name && capitalizeFirstLetter(pokemon.name)}
                    </PokemonName>
                </div>
                <div className="right" style={{ position: "relative" }}>
                    {isOnMyPokemonPage ? (
                        <PokemonNickname>a.k.a {pokemon.nickname}</PokemonNickname>
                    ) : (
                        <p>owned: {getNumberOfOwn()}</p>
                    )}
                </div>
            </CardFooter>
        </Container>
    );
};

const Container = styled.div`
    padding: 1rem;
    background: #fff;
    border-radius: 16px;
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    transition: transform 250ms;
    &:hover {
        transform: translateY(-3px);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 50px 0px;
    }
`;
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 150px;
    position: relative;
`;
const PokemonImg = styled.img`
    width: 150px;
`;
const PokemonName = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    color: #3e5481;
`;

const PokemonNickname = styled.div`
    color: #9fa5c0;
`;
const CardFooter = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const IconDelete = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    fontsize: 1rem;
    color: #ff5842;
    height: 20px;
    width: 20px;
    cursor: pointer;
    &:hover {
        color: red;
    }
`;

export default Pokemon;
