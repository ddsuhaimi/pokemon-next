import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Button from "./Button";
import { useAppContext } from "../context/state";

function Header() {
    const state = useAppContext();
    return (
        <HeaderContainer>
            {/* <div></div> */}
            <MenuContainer>
                <MenuItem>
                    <Link passHref href="/">
                        <Button>Pokemon list</Button>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/mypokemons">
                        <Button>
                            My pokemon
                            <label
                                style={{
                                    marginLeft: "10px",
                                    background: "#FF5842",
                                    padding: "0 10px",
                                    borderRadius: "5px",
                                }}
                            >
                                {state.myPokemons.length}
                            </label>
                        </Button>
                    </Link>
                </MenuItem>
            </MenuContainer>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    padding: 1rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-bottom: 0.5rem;
    background-color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 99;
`;
const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const MenuItem = styled.div`
    margin-left: 1rem;
    margin-rigth: 1rem;
`;

export default Header;
