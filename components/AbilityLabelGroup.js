import React from "react";
import styled from "@emotion/styled";

import AbilityLabel from "./AbilityLabel";

const AbilityLabelGroup = ({ abilities }) => {
    return (
        <Container>
            {abilities.map((ability, i) => (
                <AbilityLabel key={i} ability={ability} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    display: flex;
`;

export default AbilityLabelGroup;
