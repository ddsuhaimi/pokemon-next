import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_POKEMON } from "../../graphql/apis";
import Link from "next/link";
import Layout from "../../container/Layout";
import Header from "../../components/Header";
import MainContainer from "../../container/MainContainer";
import FixedMainContainer from "../../container/FixedMainContainer";
import PokemonDetailContainer from "../../container/PokemonDetailContainer";

function PokemonDetail() {
    const router = useRouter();
    console.log("router", router.query);

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
        <Layout>
            <Header />
            <MainContainer>
                <FixedMainContainer>{renderPokemonDetailContainer()}</FixedMainContainer>
            </MainContainer>
        </Layout>
        // <div>
        //     <div className="back-btn">
        //         <Link href="/">
        //             <button>Back to list</button>
        //         </Link>
        //     </div>
        // </div>
    );
}

export default PokemonDetail;
