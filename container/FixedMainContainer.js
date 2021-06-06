import React from "react";
import styled from "@emotion/styled";

function FixedMainContainer(props) {
    return <FixedMainContainerElement>{props.children}</FixedMainContainerElement>;
}

const FixedMainContainerElement = styled.div`
    max-width: 760px;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export default FixedMainContainer;
