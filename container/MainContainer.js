import React from "react";
import styled from "@emotion/styled";
function MainContainer(props) {
    return <MainContainerElement>{props.children}</MainContainerElement>;
}

const MainContainerElement = styled.main`
    padding: 1rem;
    display: flex;
    justify-content: center;
    background-color: #f4f5f7;
`;

export default MainContainer;
