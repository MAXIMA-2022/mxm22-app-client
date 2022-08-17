import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
    
  );
}

export default MyApp;
