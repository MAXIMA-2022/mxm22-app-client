import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//importing local components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import MaximaIconP2 from "../public/maximaIconP2.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Layout>
      <Navbar />
      <Flex minH={"100vh"} bgImage={["/HoMEP.png", "/HoMELs.png", "/HoMELs.png", "/HoMELs.png"]} bgPosition={["center", "bottom", "bottom", "bottom"]} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"}>
          <Flex justifyContent={"center"} alignItems="center" p={["2em 1.8em", "2em 0.5em", "2em 1.5em", "2em 1.5em", "2em 3em"]} color="white" top={0} left={0} right={0} zIndex={1}>
            <Box display={["block", "none"]}>
              <Center>
                <Image src={MaximaIconP2} alt={"MaximaLogo"} />
              </Center>
            </Box>
          </Flex>
          <Flex mt={"2em"} justifyContent={"end"} alignItems={"center"} ps={["4em", "0em", "0em"]} pe={["1.5em", "1.5em", "1.5em", "4.5em"]}>
            <Box>
              <Text color={"white"} align={"end"} fontSize={["55px", "7xl", "7xl", "7xl", "8xl"]} fontWeight={"bold"} textShadow={"2px 2px 4px rgb(0,0,0,0.1)"}>
                HoME
              </Text>
              <Text color={"white"} align={"end"} mt={"-0.5em"} mb={["0.4em", "0.4em", "0.4em", "0.4em", "0em"]} fontSize={["39.3px", "5xl", "5xl", "5xl", "7xl"]} fontWeight={"bold"} textShadow={"2px 2px 4px rgb(0,0,0,0.1)"}>
                MAXIMA 2022
              </Text>
              <Box ps={["0em", "20em", "20em", "35em", "60em"]}>
                <Text color={"white"} align={"end"} mb={["1em", "2em"]} fontSize={["16px", "16px", "16px", "16px", "20px"]} fontWeight={"normal"} letterSpacing={0.7} textShadow={"1px 1.5px 2px rgb(0,0,0,0.35)"}>
                  Selamat datang di HoME MAXIMA 2022! Di sini kamu dapat memilih tenda-tenda UKM yang ingin kamu masuki. Selamat memilih, Maximers!
                </Text>
                <Flex justifyContent={"end"} alignItems={"center"}>
                  <Link href={"/"}>
                    <Button size={"sm"} px={"1.5em"} bgColor={"#F7B70C"} outline={"5px  solid rgb(210, 223, 165, 47%)"} borderRadius={"full"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
                      <Text color={["#062D5F"]} fontSize={"sm"} fontWeight={["black"]}>
                        LET THE ADVENTURE BEGIN!
                      </Text>
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Home;
