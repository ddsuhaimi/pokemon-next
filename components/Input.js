import React, { useState } from "react";
import styled from "@emotion/styled";
function Input(props) {
    return <Container {...props} autoFocus />;
}

const Container = styled.input`
    background-color: #f4f5f7;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    width: 70%;
    border-radius: 20px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0rem;
    width: 95%;
`;
export default Input;
