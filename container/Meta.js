import React from "react";
import Head from "next/head";

function Meta(props) {
    return (
        <Head>
            <title>{props.title || ""}</title>
            <meta name="description" content={props.description || ""} />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
            <meta name="keywords" content="Keywords" />

            <meta charSet="UTF-8" />
            <meta name="theme-color" content="#1fcc79" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="stylesheet" href="/css/fontawesome.min.css" />
            <link rel="stylesheet" href="/css/solid.min.css" />

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />

            <link href="/icons/icon-192x192.png" rel="icon" type="image/png" sizes="192x192" />
            <link href="/icons/icon-256x256.png" rel="icon" type="image/png" sizes="256x256" />
            <link href="/icons/icon-384x384.png" rel="icon" type="image/png" sizes="384x384" />
            <link href="/icons/icon-512x512.png" rel="icon" type="image/png" sizes="512x512" />
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        </Head>
    );
}

export default Meta;
