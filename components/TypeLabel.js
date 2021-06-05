import React from "react";
import styled from "@emotion/styled";
function TypeLabel({ type }) {
    console.log(type);
    return <TypeLabelContainer>{type.type.name}</TypeLabelContainer>;
}

const TypeLabelContainer = styled.span`
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 3px;
    background: #e74c3c;
    color: white;
    text-transform: uppercase;
    font-size: 0.8em;
    margin-right: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
`;

export default TypeLabel;
