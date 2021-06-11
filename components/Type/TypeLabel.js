import React from "react";
import styled from "@emotion/styled";
import { TYPE_COLOR } from "../../constants/enums";
const TypeLabel = ({ type }) => {
  return (
    <TypeLabelContainer
      className="type-item"
      style={{ backgroundColor: TYPE_COLOR[type.type.name] ? TYPE_COLOR[type.type.name] : "#eee" }}
    >
      {type.type.name}
    </TypeLabelContainer>
  );
};

const TypeLabelContainer = styled.span`
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 3px;
  color: white;
  text-transform: uppercase;
  font-size: 0.8em;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`;

export default TypeLabel;
