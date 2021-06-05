import React, { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Button from "../components/Button";
import { capitalizeFirstLetter } from "../lib/helpers/stringHelper";
import { useAppContext } from "../context/state";
function Pokemon({ pokemon }) {
    const state = useAppContext();

    const onClickBtnCard = () => {
        const { setActivePokemon } = state;
        setActivePokemon(pokemon);
    };

    const name = pokemon.name;
    return (
        <Container className="pokemon">
            <ImageContainer>
                <PokemonImg src={pokemon.image} alt={pokemon.name} />
            </ImageContainer>
            <CardFooter>
                <div className="left" style={{ textAlign: "left" }}>
                    <PokemonName className="pokemon__name">{capitalizeFirstLetter(pokemon.name)}</PokemonName>
                    {pokemon.nickname && <PokemonNickname>a.k.a {pokemon.nickname}</PokemonNickname>}
                </div>
                <div className="right" style={{ position: "relative" }}>
                    <BtnAction>
                        <Link
                            onClick={() => console.log("clikc card")}
                            href={{
                                pathname: `/pokemons/${pokemon.name}`,
                            }}
                        >
                            <Button onClick={onClickBtnCard}>More...</Button>
                        </Link>
                    </BtnAction>
                </div>
            </CardFooter>
            {/* <div className="pokemon__detail">
                <Link href={`/pokemons/${pokemon.name}`}>Detail</Link>
            </div> */}
        </Container>
    );
}

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
`;
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const PokemonImg = styled.img`
    width: 150px;
`;
const PokemonName = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    color: #3e5481;
`;
const BtnAction = styled.div`
    display: flex;
    justify-content: flex-end;
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

export default Pokemon;