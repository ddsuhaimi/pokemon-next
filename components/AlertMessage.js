import React from "react";
import styled from "@emotion/styled";
function AlertMessage({ text, icon }) {
    return (
        <Container>
            <Icon>{icon}</Icon>
            <div>{text}</div>
        </Container>
    );
}

const Container = styled.div`
    font-size: 0.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background: #ffe281;
    border-radius: 16px;
`;
const Icon = styled.div`
    width: 1rem;
    margin-right: 1rem;
    color: orange;
`;

export default AlertMessage;
