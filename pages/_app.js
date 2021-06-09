import "../styles/reset.css";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { AppWrapper } from "../context/state";

const MyApp = ({ Component, pageProps }) => {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <AppWrapper>
                <div>
                    <Component {...pageProps} />
                </div>
            </AppWrapper>
        </ApolloProvider>
    );
};

export default MyApp;
