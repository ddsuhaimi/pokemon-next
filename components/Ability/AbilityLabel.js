import React from "react";
import styled from "@emotion/styled";

const AbilityLabel = ({ ability }) => {
  return <Container className="ability-item">{ability.ability.name}</Container>;
};

const Container = styled.span`
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 3px;
  background: #e74c3c;
  color: white;
  text-transform: uppercase;
  font-size: 0.8em;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`;

export default AbilityLabel;
