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

const PokemonDetail = (props) => {
    const router = useRouter();

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: {
            name: router.query.name,
        },
    });

    const renderPokemonDetailContainer = () => {
        if (error) return <div>Error loading players.</div>;
        if (loading) return <div>Loading</div>;

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

// export async function getServerSideProps() {
//     // const router = useRouter();
//     const apolloClient = initializeApollo();

//     const res = await apolloClient.query({
//         query: GET_POKEMON,
//         variables: {
//             name: "ivysaur",
//         },
//     });
//     console.log("res ser", res);

//     return {
//         props: {
//             // data: apolloClient.cache.extract(),
//             data: res.data,
//         },
//     };
// }
