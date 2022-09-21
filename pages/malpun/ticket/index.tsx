import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

//importing local components
import Layout from "../../../components/Layout";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img, Tabs, TabList, TabPanels, Tab, TabPanel, Container, List, ListItem, ListIcon, OrderedList, UnorderedList, useMediaQuery } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const ticket: NextPage = () => {
  const Heading = () => {
    return(
        <Box mt={["21vh", "18.5vh", "22vh", "22vh", "22vh"]}>
            <Center display={["none", "none", "none", "flex", "flex"]}>
                <Box position={"absolute"} mt={"25vh"}>
                    <Img src={"/headingLamp.png"} w={["120vh"]}/>
                </Box>
            </Center>
            <Center display={["flex", "flex","none", "none", "none"]}>
                <Box position={"absolute"} mt={["15vh","20vh","22vh","12.5vh","12.5vh"]}>
                    <Img src={"/headingLampP.png"} w={["43.5vh","57.5vh","52.5vh","52.5vh","52.5vh"]}/>
                </Box>
            </Center>
            <Center display={["none", "none", "flex", "flex", "flex"]}>
                <Img src={"/heading.svg"} w={"85vh"}/>
            </Center>
            <Center display={["flex", "flex","none", "none", "none"]}>
                <Img src={"/headingP.svg"} w={["42.5vh","52.5vh","50vh","42.5vh","42.5vh"]}/>
            </Center>
        </Box>
    )
  }

  const Body = () => {
    return(
      <Box>
        <Center>
          <Box>
            <Text textAlign={"center"} color={"#062D5F"} fontSize={["lx", "lg", "3xl", "2xl", "3xl"]} fontWeight={["bold"]}>
                Apakah kamu mahasiswa aktif?
            </Text>
          </Box>
        </Center>
        <Center mt={["3vh","3vh","3vh","6vh","6vh"]}>
          <Stack direction={["column-reverse","column-reverse","column-reverse","row","row"]} spacing={["2em","2em","2.5em","5em","5em"]}>
            <Button p={["1em 2em","1em 2em","1.75em 3em","1.2em 3em","1.2em 3em"]} variant={"none"} border={"2px solid #1B4173"} color={"#062D5F"}  borderRadius={"full"} _hover={{bgColor: "#D01C1F", color: "#fff"}}>
              <Text textAlign={"center"}  fontSize={["md", "lg", "2xl", "xl", "xl"]} fontWeight={["medium"]}>
                  Non Aktif
              </Text>
            </Button>
            <Button p={["1em 2em","1em 2em","1.75em 4.2em","1.2em 4.2em","1.2em 4.2 em"]}  variant={"none"} border={"2px solid #1B4173"} color={"#062D5F"}  borderRadius={"full"}  _hover={{bgColor: "#3EC91B", color: "#fff"}}>
              <Text textAlign={"center"}  fontSize={["md", "lg", "2xl", "xl", "xl"]} fontWeight={["medium"]} >
                  Aktif
              </Text>
            </Button>
          </Stack>
        </Center>
      </Box>
    )
  }

  const BackButton = () => {
    const router = useRouter();
    return (
      <>
        <Flex w={"auto"} m={["-3.7rem 0rem", "-3.7rem 1rem"]} position={"sticky"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
          <Button
            variant={"none"}
            onClick={() => {
              router.back();
            }}
          >
            <Center
              w={["2.5rem", "2.5rem", "4rem", "4rem", "4rem"]}
              h={["2.5rem", "2.5rem", "4rem", "4rem", "4rem"]}
              mb={["4.8rem"]}
              bgColor={"#F7B70C"}
              border={["5px solid white", "5px solid white", "4px solid white", "4px solid white", "4px solid white"]}
              borderRadius={"full"}
              shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
            >
              <Img src={"https://storage.googleapis.com/mxm22-bucket-test/expandLeft.svg"} w={["2rem", "2rem", "2rem", "2rem", "2rem"]} h={["1.2rem", "1.2rem", "2rem", "2rem", "2rem"]} />
            </Center>
          </Button>
        </Flex>
      </>
    );
  };

  return (
    <Layout>
      <Navbar />
      <Flex  position={["relative","relative","relative","relative","relative"]} minH={["100vh","115vh","100vh","100vh","100vh"]} bgImage={["/formFullBgP.png","/formFullBgP.png","/formFullBgP.png","/formFullBgLs.png","/formFullBgLs.png"]}bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Center w={"full"}>
          {/* <Heading /> */}
          <Box mt={["12.5vh","12.5vh","5vh","20vh","20vh"]}>
            <Body />
          </Box>
        </Center>
      </Flex>
      {/* <Box w={"full"} position={"absolute"}>
        <Footer />
      </Box> */}
    </Layout>
  );
};

// export async function getStaticProps(){
//   const { data } = await axios.get(`${process.env.API_URL}/api/chapter`)
//   return{
//     props:{
//       data: data || {},
//     }
//   }
// }

export default dynamic(() => Promise.resolve(ticket), { 
  ssr: false 
})