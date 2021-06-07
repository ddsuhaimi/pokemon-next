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
import { initializeApollo } from "../../lib/apolloClient";

export default function PokemonDetail(props) {
    const router = useRouter();

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: {
            name: router.query.name,
        },
    });

    const renderPokemonDetailContainer = () => {
        if (error) return <div>Error loading players.</div>;
        if (loading) return <div>Loading</div>;
        console.log(data);

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
