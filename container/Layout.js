import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Meta from "./Meta";
const Layout = (props) => {
  return (
    <>
      <Meta title={props.title} description={props.description} />
      <Container>{props.children}</Container>
    </>
  );
};

const Container = styled.main`
  background-color: #f4f5f7;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
`;

export default Layout;
