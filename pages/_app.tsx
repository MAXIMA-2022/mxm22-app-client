import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { UserContextWrapper } from "../useContext/UserContext";
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ChakraProvider>
        <AnimatePresence>
          <UserContextWrapper>
            <Component {...pageProps} />
          </UserContextWrapper>
        </AnimatePresence>
      </ChakraProvider>
    </Layout>
    
  );
}

export default MyApp;
