import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useAppContext } from "../context/state";
import { capitalizeFirstLetter } from "../lib/helpers/stringHelper";
import Button from "../components/Button";
import TypeLabelGroup from "../components/TypeLabelGroup";
import Link from "next/link";
import Modal from "../components/Modal";
import Input from "../components/Input";
import AlertMessage from "../components/AlertMessage";
import Image from "next/image";
function PokemonDetailContainer(props) {
    const state = useAppContext();

    const [isCatched, setIsCatched] = useState(false);
    const [hasNickname, setHasNickname] = useState(false);
    const [showDuplicateNickname, setShowDuplicateNickame] = useState(false);
    const [inputNicknameValue, setInputNicknameValue] = useState("");
    const [catchResult, setCatchResult] = useState(null);

    const { activePokemon } = state;
    const { pokemon } = props;
    const onCLickCatch = () => {
        setCatchResult(null);
        const willChange = Math.random() < 0.5;
        console.log(willChange);

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
    };

    const getPokemonImage = () => {
        return state.pokemons.find((p) => p.id === pokemon.id).image;
    };

    const isDuplicate = () => {
        return state.myPokemons.filter((p) => p.id === pokemon.id && p.nickname === inputNicknameValue).length > 0;
    };
    useEffect(() => {
        console.log(showDuplicateNickname, isDuplicate(inputNicknameValue));
        if (!showDuplicateNickname && isDuplicate(inputNicknameValue)) {
            setShowDuplicateNickame(true);
        }

        if (showDuplicateNickname && !isDuplicate(inputNicknameValue)) {
            setShowDuplicateNickame(false);
        }
    }, [inputNicknameValue]);

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

            setMyPokemons([...myPokemons, { id: props.pokemon.id, nickname: inputNicknameValue }]);
            cleanup();
        };
        const cleanup = () => {
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

        // const warningIcon = <FontAwesomeIcon size="1x" icon={faExclamationTriangle}></FontAwesomeIcon>;
        const warningIcon = <Image src="/exclamation-triangle.svg" height={30} width={30} />;

        return (
            <Modal show={true} onClose={onClickGiveNickname} actionBtn={btn} title="Add nickname">
                {/* <p style={{ marginBottom: "1rem" }}>Nickname for pokemon:</p> */}
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
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "24px", cursor: "pointer" }}>
                        <Link passHref href="/">
                            <span onClick={onClickBack}>
                                <Image src="/chevron-circle-left.svg" height={30} width={30} />
                                {/* <FontAwesomeIcon size="1x" icon={faChevronCircleLeft}></FontAwesomeIcon> */}
                            </span>
                        </Link>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {/* {!isCatched ? "try again" : "success"} */}
                        {catchResult && (
                            <span style={{ fontSize: "0.8rem", marginRight: "1rem", color: "#9FA5C0" }}>
                                {catchResult}
                            </span>
                        )}
                        <Button onClick={onCLickCatch}>Catch</Button>
                    </div>
                </div>
                <PokemonName>{capitalizeFirstLetter(pokemon.name)}</PokemonName>
                <TypeLabelGroup types={pokemon.types} />
            </Header>
            <div style={{ width: "100%" }}>
                <PokemonImage src={getPokemonImage()} alt={pokemon.name} />
            </div>
        </Container>
    );
}

export default PokemonDetailContainer;

const Container = styled.div`
    width: 100%;
    background: white;
    height: 100vh;
    padding: 1em;
`;

const PokemonImage = styled.img`
    width: 100%;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    border-radius: 16px;
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
