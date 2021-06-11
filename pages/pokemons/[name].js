import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import FixedMainContainer from "../../container/FixedMainContainer";
import Header from "../../components/Header/Header";
import Layout from "../../container/Layout";
import MainContainer from "../../container/MainContainer";
import PokemonDetailContainer from "../../container/Pokemon/PokemonDetailContainer";

import { GET_POKEMON } from "../../graphql/apis";
import InfoState from "../../components/InfoState/InfoState";

const PokemonDetail = (props) => {
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
