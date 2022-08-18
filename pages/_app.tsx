import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { UserContextWrapper } from "../useContext/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ChakraProvider>
        <UserContextWrapper>
          <Component {...pageProps} />
        </UserContextWrapper>
      </ChakraProvider>
    </Layout>
    
  );
}

export default MyApp;
