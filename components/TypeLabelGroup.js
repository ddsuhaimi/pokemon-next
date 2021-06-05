import React from "react";
import TypeLabel from "./TypeLabel";
import styled from "@emotion/styled";

function TypeLabelGroup({ types }) {
    return (
        <Container>
            {types.map((type, i) => (
                <TypeLabel key={i} type={type} />
            ))}
        </Container>
    );
}

const Container = styled.div`
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
`;

export default TypeLabelGroup;
