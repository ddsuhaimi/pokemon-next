import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import FixedMainContainer from "../../container/FixedMainContainer";
import Layout from "../../container/Layout";
import MainContainer from "../../container/MainContainer";
import PokemonListContainer from "../../container/PokemonListContainer";
import { useAppContext } from "../../context/state";
import Link from "next/link";

function index() {
    const [data, setData] = useState([]);
    const state = useAppContext();

    useEffect(() => {
        generateMyPokemonsData();
    }, [state.myPokemons]);

    const generateMyPokemonsData = () => {
        const { myPokemons, pokemons } = state;
        let data = [];
        myPokemons.map((p) => {
            const matchedPokemon = pokemons.find((poke) => poke.id === p.id);
            data = [...data, { ...matchedPokemon, nickname: p.nickname }];
        });
        setData({
            pokemons: {
                results: data,
            },
        });
    };

    const noPokemon = () => {
        return (
            <div style={{ width: "100%", padding: "1rem", height: "300px", background: "#fff" }}>
                <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>😟You have no pokemons.</p>
                <p style={{ color: "#9FA5C0", fontStyle: "normal" }}>
                    Go to <Link href="/">Index page</Link> to add one.
                </p>
            </div>
        );
    };

    return (
        <Layout>
            <Header />
            <MainContainer>
                <FixedMainContainer>
                    {state.myPokemons.length > 0 ? (
                        <PokemonListContainer data={data} isOnMyPokemonPage={true} />
                    ) : (
                        noPokemon()
                    )}

                    {/* {state.myPokemons.length > 0 ? (
                    ) : (
                        noPokemon()
                    )} */}
                </FixedMainContainer>
            </MainContainer>
        </Layout>
    );
}

export default index;
