import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//importing local components
import Layout from "../components/Layout";
import MaximaIconP from "../public/maximaIconP.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    // <Flex
    //   h="100vh"
    //   bgImage={["/HoMEWelcomingP.png", "/HoMEWelcomingLs.png", "/HoMEWelcomingLs.png", "/HoMEWelcomingLs.png"]}
    //   bgPosition={["center", "bottom", "bottom", "bottom"]}
    //   bgSize={"cover"}
    //   position={"relative"}
    //   bgRepeat={"no-repeat"}
    // >
    //   <Navbar />
    // </Flex>
    <Layout>
      <Flex minH={"100vh"} bgImage={["/HoMEWelcomingP.png", "/HoMEWelcomingLs.png", "/HoMEWelcomingLs.png", "/HoMEWelcomingLs.png"]} bgPosition={["center", "bottom", "bottom", "bottom"]} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"} mt={"20vh"}>
          <Center>
            <Box display={["block", "none"]}>
              <Center>
                <Image src={MaximaIconP} alt={"MaximaLogo"} />
              </Center>
              <Box>
                <Text color={"white"} align={"center"} fontSize={"30px"} fontWeight={"bold"} textShadow={"2px 2px 4px rgb(0,0,0,0.1)"}>
                  SELAMAT DATANG
                </Text>
                <Text color={"white"} align={"center"} fontSize={"44px"} fontWeight={"bold"} textShadow={"2px 2px 4px rgb(0,0,0,0.1)"}>
                  MAXIMERS!
                </Text>
              </Box>
            </Box>
            <Box display={["none", "block"]}>
              <Box>
                <Text color={"white"} align={"center"} fontSize={["6xl", "5xl", "6xl", "6xl", "7xl"]} fontWeight={"bold"} textShadow={["2px 2px 4px rgb(0,0,0,0.1)"]}>
                  SELAMAT DATANG
                </Text>
                <Text color={"white"} align={"center"} fontSize={"44px"} fontWeight={"bold"} textShadow={"2px 2px 4px rgb(0,0,0,0.1)"}>
                  MAXIMERS!
                </Text>
              </Box>
            </Box>
          </Center>
          <Box position={"absolute"} left={0} bottom={0} right={0} mb={["7vh", "15vh"]}>
            <Center>
              <Link href={"/"}>
                <Button size={"md"} px={"1.8em"} bgColor={"#F7B70C"} outline={"5px  solid rgb(210, 223, 165, 47%)"} borderRadius={"full"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
                  <Text color={["#062D5F", "white"]} fontSize={"20px"} fontWeight={["black", "extrabold"]}>
                    START
                  </Text>
                </Button>
              </Link>
            </Center>
          </Box>
          <Box position={"absolute"} left={0} bottom={0} right={0} mb={"2vh"}>
            <Center>
              <Text color={"white"} fontSize={"14px"} fontWeight={"normal"} letterSpacing={1}>
                Ayo berpetualang bersama Maxi dan Xima!
              </Text>
            </Center>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Home;
