import React from "react";
import styled from "@emotion/styled";

const Button = React.forwardRef(({ onClick, href, children, disabled }, ref) => {
    return (
        <ButtonContainer disabled={disabled} onClick={onClick}>
            {children}
        </ButtonContainer>
    );
});

const ButtonContainer = styled.button`
    color: ${(props) => (props.disabled ? "#ccc" : "#fff")};
    background-color: ${(props) => (props.disabled ? "#F4F5F7" : "#1fcc79")};
    border: none;
    border-radius: 32px;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    &: hover {
        box-shadow: 0 6px 18px 0 rgba(#000, 0.1);
        transform: translateY(-1px);
        background-color: #3ef59d;
    }
`;

export default Button;
