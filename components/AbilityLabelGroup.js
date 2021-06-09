import React from "react";
import AbilityLabel from "./AbilityLabel";
import styled from "@emotion/styled";

function AbilityLabelGroup({ abilities }) {
    console.log("aksjdfa", abilities);
    return (
        <Container>
            {abilities.map((ability, i) => (
                <AbilityLabel key={i} ability={ability} />
            ))}
        </Container>
    );
}

const Container = styled.div`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    display: flex;
`;

export default AbilityLabelGroup;
