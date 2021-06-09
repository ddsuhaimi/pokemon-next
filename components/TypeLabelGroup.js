import React from "react";
import TypeLabel from "./TypeLabel";
import styled from "@emotion/styled";

function TypeLabelGroup({ types }) {
    return (
        <Container>
            {types.map((type, i) => (
                <TypeLabel key={i} type={type} name={type.type.name} />
            ))}
        </Container>
    );
}

const Container = styled.div`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    display: flex;
`;

export default TypeLabelGroup;
