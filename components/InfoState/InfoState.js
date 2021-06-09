import React from "react";
import styled from "@emotion/styled";

const InfoState = ({ state }) => {
    if (state === "loading") {
        return (
            <LoadingContainer>
                <i className="icon fas fa-spinner"></i>
                <span>Loading...</span>
            </LoadingContainer>
        );
    }
    return (
        <ErrorContainer>
            <i className="icon fas fa-exclamation-triangle"></i>
            <span>Error. Make sure your internet is working</span>
        </ErrorContainer>
    );
};

const LoadingContainer = styled.div`
    .icon {
        font-size: 3rem;
        margin-bottom: 2rem;
        -webkit-animation: rotating 1s linear infinite;
        -moz-animation: rotating 1s linear infinite;
        -ms-animation: rotating 1s linear infinite;
        -o-animation: rotating 1s linear infinite;
        animation: rotating 1s linear infinite;
    }
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @-webkit-keyframes rotating /* Safari and Chrome */ {
        from {
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes rotating {
        from {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;

const ErrorContainer = styled.div`
    .icon {
        font-size: 3rem;
        margin-bottom: 2rem;
    }
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export default InfoState;
