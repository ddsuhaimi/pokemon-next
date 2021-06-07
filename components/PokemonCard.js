import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Button from "../components/Button";
import { capitalizeFirstLetter } from "../lib/helpers/stringHelper";
import { useAppContext } from "../context/state";
import { useRouter } from "next/router";
import Image from "next/image";
function Pokemon({ pokemon, isOnMyPokemonPage }) {
    const state = useAppContext();
    const router = useRouter();
    const onClickBtnCard = () => {
        const { setActivePokemon } = state;
        setActivePokemon(pokemon);
    };

    const onClickRemove = () => {
        const { myPokemons } = state;
        state.setMyPokemons(myPokemons.filter((p) => !(p.id === pokemon.id && p.nickname === pokemon.nickname)));
    };
    const onClickCard = () => {
        router.push(`/pokemons/${pokemon.name}`);
    };

    const getNumberOfOwn = () => {
        return state.myPokemons.filter((p) => p.id === pokemon.id).length;
    };
    return (
        <Container className="pokemon" onClick={onClickCard}>
            <ImageContainer>
                <PokemonImg src={pokemon.image} alt={pokemon.name} width={150} height={150} />

                {isOnMyPokemonPage && (
                    <span
                        style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            fontSize: "1rem",
                            color: "red",
                            height: "20px",
                            width: "20px",
                            cursor: "pointer",
                        }}
                    >
                        <Image src="/trash-alt.svg" alt="remove" layout="fill" onClick={onClickRemove} />
                    </span>
                )}
                {/* <Image src={pokemon.image} alt={pokemon.name} layout="fill" /> */}
            </ImageContainer>
            <CardFooter>
                <div className="left" style={{ textAlign: "left" }}>
                    <PokemonName className="pokemon__name">
                        {pokemon.name && capitalizeFirstLetter(pokemon.name)}
                    </PokemonName>
                    {pokemon.nickname && <PokemonNickname>a.k.a {pokemon.nickname}</PokemonNickname>}
                </div>
                <div className="right" style={{ position: "relative" }}>
                    {!isOnMyPokemonPage && <p>owned: {getNumberOfOwn()}</p>}
                    {/* owned:  {getNumberOfOwn()} */}
                    {/* <BtnAction>
                        <Link
                            href={{
                                pathname: `/pokemons/${pokemon.name}`,
                            }}
                        >
                            <Button onClick={onClickBtnCard}>More...</Button>
                        </Link>
                    </BtnAction> */}
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
    cursor: pointer;
    transition: transform 250ms;
    &:hover {
        transform: translateY(-10px);
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
