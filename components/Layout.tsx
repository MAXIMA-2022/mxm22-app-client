import Head from "next/head";

//importing local components
import Navbar from "../components/Navbar";

//importing chakra ui components
import { Box, Flex } from "@chakra-ui/react";

const Layout = ({ children }: any) => {
  return (
    <Box>
      <Head>
        <title>MAXIMA 2022</title>
        <link rel="shortcut icon" href="/maximaLogo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,800;0,900;1,200;1,300&family=Rubik:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
