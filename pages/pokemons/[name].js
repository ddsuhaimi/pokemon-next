import React from "react";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import FixedMainContainer from "../../container/FixedMainContainer";
import Header from "../../components/Header";
import Layout from "../../container/Layout";
import MainContainer from "../../container/MainContainer";
import PokemonDetailContainer from "../../container/PokemonDetailContainer";

import { initializeApollo } from "../../lib/apolloClient";
import { GET_POKEMON } from "../../graphql/apis";
import InfoState from "../../components/InfoState";

const PokemonDetail = (props) => {
    console.log(props);
    const router = useRouter();

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: {
            name: router.query.name,
        },
    });

    const renderPokemonDetailContainer = () => {
        if (error || loading) return <InfoState state={loading ? "loading" : "error"} />;

        return <PokemonDetailContainer pokemon={data.pokemon} />;
    };
    return (
        <Layout title={`Pokedex | ${router.query.name}`} description={`Detail for ${router.query.name}`}>
            <Header />
            <MainContainer>
                <FixedMainContainer>{renderPokemonDetailContainer()}</FixedMainContainer>
            </MainContainer>
        </Layout>
    );
};

export default PokemonDetail;
