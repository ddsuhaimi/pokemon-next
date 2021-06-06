import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";

function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title || ""}</title>
                <meta name="description" content={props.description || ""} />
                <meta charSet="UTF-8" />
                <meta name="theme-color" content="#1fcc79" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
                {/* <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                /> */}
                {/* <link rel="icon" sizes="192x192" href="/static/images/icons-192.png" />
                <link rel="apple-touch-icon" href="/static/images/icons-192.png" />
                <link rel="icon" href="/static/favicon.ico" />
                <link rel="manifest" href="/manifest.json" /> */}
            </Head>
            <Container>{props.children}</Container>
        </>
    );
}

const Container = styled.main`
    background-color: #f4f5f7;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
        Droid Sans, Helvetica Neue, sans-serif;
    height: 100vh;
`;

export default Layout;
