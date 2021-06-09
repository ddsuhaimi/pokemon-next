import React, { useEffect, useState, useRef } from "react";
import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";

import { useAppContext } from "../context/state";

import Button from "../components/Button";
import FixedMainContainer from "../container/FixedMainContainer";
import Header from "../components/Header";
import Layout from "../container/Layout";
import MainContainer from "../container/MainContainer";
import PokemonListContainer from "../container/PokemonListContainer";

import { initializeApollo } from "../lib/apolloClient";
import { GET_POKEMONS } from "../graphql/apis";

const Home = (props) => {
    const state = useAppContext();
    const firstUpdate = useRef(true);

    const [pokemons, setPokemons] = useState(state.pokemons);
    const [showReadMore, setShowReadMore] = useState(null);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
        variables: {
            limit: 10,
            offset: pokemons.length,
        },
    });

    useEffect(() => {
        if (props.sPokemons.length > state.pokemons.length) {
            setPokemons(props.sPokemons);
            state.setPokemons(props.sPokemons);
            setShowReadMore(true);
        } else {
            setPokemons(state.pokemons);
            state.setPokemons(state.pokemons);
            setShowReadMore(true);
        }
    }, [state.pokemons]);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        if (!isLoadingMore && data) {
            const currentPokemons = pokemons;
            const newPokemons = data.pokemons.results;
            const allPokemons = currentPokemons.concat(newPokemons);
            setPokemons(allPokemons);
            state.setPokemons(allPokemons);
        }
    }, [isLoadingMore]);

    const onClickLoadMore = async () => {
        setIsLoadingMore(true);
        await fetchMore({
            variables: {
                limit: 10,
                offset: pokemons.length,
            },
        });

        setIsLoadingMore(false);
    };

    return (
        <Layout title={"Pokedex"} description={"Simple pokedex app using next.js"}>
            <Header />
            <MainContainer>
                <FixedMainContainer>
                    {pokemons && <PokemonListContainer pokemons={pokemons} />}
                    <ReadMoreContainer>
                        {showReadMore && <Button onClick={onClickLoadMore}>Load more</Button>}
                    </ReadMoreContainer>
                </FixedMainContainer>
            </MainContainer>
        </Layout>
    );
};

const ReadMoreContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

export default Home;

export async function getServerSideProps() {
    const apolloClient = initializeApollo();

    const res = await apolloClient.query({
        query: GET_POKEMONS,
        variables: {
            limit: 10,
            offset: 0,
        },
    });

    return {
        props: {
            sPokemons: res.data.pokemons.results,
        },
    };
}
