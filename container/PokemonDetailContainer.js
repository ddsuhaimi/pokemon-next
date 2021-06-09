import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import { useAppContext } from "../context/state";

import AbilityLabelGroup from "../components/AbilityLabelGroup";
import AlertMessage from "../components/AlertMessage";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import TypeLabelGroup from "../components/TypeLabelGroup";

import { capitalizeFirstLetter } from "../lib/helpers/stringHelper";

const PokemonDetailContainer = ({ pokemon }) => {
    const state = useAppContext();
    const router = useRouter();

    const [isCatched, setIsCatched] = useState(false);
    const [hasNickname, setHasNickname] = useState(false);
    const [showDuplicateNickname, setShowDuplicateNickame] = useState(false);
    const [inputNicknameValue, setInputNicknameValue] = useState("");
    const [catchResult, setCatchResult] = useState(null);

    useEffect(() => {
        state.saveState();
    }, [state]);

    useEffect(() => {
        if (!showDuplicateNickname && isDuplicate(inputNicknameValue)) {
            setShowDuplicateNickame(true);
        }

        if (showDuplicateNickname && !isDuplicate(inputNicknameValue)) {
            setShowDuplicateNickame(false);
        }
    }, [inputNicknameValue]);

    const onCLickCatch = () => {
        setCatchResult(null);

        const willChange = Math.random() < 0.5;
        if (willChange) {
            setIsCatched(true);
            setCatchResult("Success 😀");
        } else {
            setCatchResult("Failed 😔");
            setTimeout(() => {
                setCatchResult(null);
            }, 1000);
        }
    };

    const onClickBack = () => {
        state.setActivePokemon(null);
        router.back();
    };

    const isDuplicate = () => {
        return state.myPokemons.filter((p) => p.id === pokemon.id && p.nickname === inputNicknameValue).length > 0;
    };

    const renderModalInputNickname = () => {
        const onClickGiveNickname = () => {
            setHasNickname(true);
        };
        const onChangeInputNickname = (e) => {
            setInputNicknameValue(e.target.value);
        };
        const onClickConfirm = () => {
            const { myPokemons, setMyPokemons } = state;
            setHasNickname(true);
            setMyPokemons([...myPokemons, { id: pokemon.id, nickname: inputNicknameValue }]);
            cleanup();
        };
        const cleanup = () => {
            state.saveState();
            setIsCatched(false);
            setHasNickname(false);
            setCatchResult(null);
            setInputNicknameValue("");
        };
        const btn = (
            <Button disabled={inputNicknameValue.length === 0 || showDuplicateNickname} onClick={onClickConfirm}>
                Confirm
            </Button>
        );

        const warningIcon = <i className="fas fa-exclamation-triangle"></i>;

        return (
            <Modal show={true} onClose={onClickGiveNickname} actionBtn={btn} title="Add nickname">
                <Input
                    value={inputNicknameValue}
                    onChange={onChangeInputNickname}
                    fullWidth={true}
                    placeholder="Type the nickname here"
                />

                {showDuplicateNickname && (
                    <AlertMessage icon={warningIcon} text="Name already exists. Choose another one." />
                )}
            </Modal>
        );
    };

    return (
        <Container>
            {isCatched && !hasNickname && renderModalInputNickname()}
            <Header>
                <HeaderTop>
                    <div className="going-back">
                        <span onClick={onClickBack} className="icon">
                            <i className="fas fa-chevron-circle-left"></i>
                        </span>
                    </div>
                    <div className="catch">
                        {catchResult && (
                            <span className="catch-result" style={{}}>
                                {catchResult}
                            </span>
                        )}
                        <Button onClick={onCLickCatch}>Catch</Button>
                    </div>
                </HeaderTop>
                <PokemonName>{capitalizeFirstLetter(pokemon.name)}</PokemonName>
            </Header>
            <ImageMove>
                <PokemonImageInfoContainer>
                    <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} width={300} height={300} />
                    <InfoContainer>
                        <HeightWeight>
                            <div className="block">
                                <span className="label">Height: </span> {pokemon.height / 10} m
                            </div>
                            <div className="block">
                                <span className="label">Weight: </span> {pokemon.weight / 10} kg
                            </div>
                        </HeightWeight>
                        <TypeAbility>
                            <div className="block">
                                <span className="label">Types: </span> <TypeLabelGroup types={pokemon.types} />
                            </div>
                            <div className="block ability">
                                <span className="label">Abilities: </span>{" "}
                                <AbilityLabelGroup abilities={pokemon.abilities} />
                            </div>
                        </TypeAbility>
                    </InfoContainer>
                </PokemonImageInfoContainer>
                <MoveContainer>
                    <div className="move-title">Moves: </div>
                    <div className="move-list">
                        {pokemon.moves.map((move) => (
                            <MoveLabel key={move.move.name} style={{ paddingRight: 5, paddingLeft: 5 }}>
                                {move.move.name}
                            </MoveLabel>
                        ))}
                    </div>
                </MoveContainer>
            </ImageMove>
        </Container>
    );
};

export default PokemonDetailContainer;

const Container = styled.div`
    background: white;
    padding: 1em;
`;

const HeaderTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .going-back {
        width: 24px;
        cursor: pointer;
        .icon {
            font-size: 1.2rem;
            color: #e74c3c;
            &:hover {
                color: red;
            }
        }
    }
    .catch {
        display: flex;
        align-items: center;
        .catch-result {
            fontsize: 0.8rem;
            marginright: 1rem;
            color: #9fa5c0;
        }
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flexwrap: wrap;
    flex-direction: column;
`;

const HeightWeight = styled.div`
    display: flex;
    justify-content: space-between;
    .block {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .label {
            margin-right: 10px;
        }
    }
`;

const TypeAbility = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    .block {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        .label {
            margin-right: 10px;
        }
        .ability-item,
        .type-item {
            margin-right: 10px;
        }
    }
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        .block.ability {
            .label {
                margin-right: 0;
                text-align: right;
            }
            .ability-item {
                margin-right: 0;
                margin-left: 10px;
            }
        }
    }
`;

const PokemonImageInfoContainer = styled.div`
    min-width: 300px;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    flex-direction: column;
`;

const PokemonImage = styled.img`
    object-fit: contain;
    border-radius: 16px;
    margin: 0 auto;
    flex-grow: 1;
`;

const ImageMove = styled.div`
    display: flex;
    flex-direction: column;
    > div {
        margin-top: 1rem;
    }
`;

const MoveLabel = styled.span`
    padding: 0px 7px;
    border: 1px solid #3e5481;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
    font-size: 0.8rem;
    line-height: 1rem;
`;

const MoveContainer = styled.div`
    padding: 1rem;
    background: #ececec;
    border-radius: 10px;
    .move-list {
        display: flex;
        flex-wrap: wrap;
    }
    .move-title {
        margin-bottom: 1rem;
        text-transform: uppercase;
        font-weight: 600;
        color: #3e5481;
    }
`;
const PokemonName = styled.div`
    font-size: 1.5rem;
    margin-top: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #3e5481;
`;
const Header = styled.div`
    margin-bottom: 1rem;
`;
