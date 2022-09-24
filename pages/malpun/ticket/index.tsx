import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import router, { useRouter } from "next/router";
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
    const router = useRouter();
    return(
      <Box>
        <Center mt={"0em"}>
          <Box maxW={["70vw","15em","full","full","full"]}>
            <Text textAlign={"center"} color={"#062D5F"} fontSize={["lg", "lg", "3xl", "2xl", "3xl"]} fontWeight={["bold"]}>
                Apakah kamu mahasiswa aktif?
            </Text>
          </Box>
        </Center>
        <Center mt={["3vh","3vh","3vh","6vh","6vh"]}>
          <Stack direction={["column-reverse","column-reverse","column-reverse","row","row"]} spacing={["2em","2em","2.5em","5em","5em"]}>
            <Link href={"/malpun/ticket/nonaktif"}>
              <Button p={["1em 2em","1em 2em","1.75em 3em","1.2em 3em","1.2em 3em"]} variant={"none"} border={"2px solid #1B4173"} color={"#062D5F"}  borderRadius={"full"} _hover={{bgColor: "#D01C1F", color: "#fff"}}>
                <Text textAlign={"center"}  fontSize={["md", "lg", "2xl", "xl", "xl"]} fontWeight={["medium"]}>
                    Non Aktif
                </Text>
              </Button>
            </Link>
            <Link href={"/malpun/ticket/aktif"}>
              <Button p={["1em 2em","1em 2em","1.75em 4.2em","1.2em 4.2em","1.2em 4.2 em"]}  variant={"none"} border={"2px solid #1B4173"} color={"#062D5F"}  borderRadius={"full"}  _hover={{bgColor: "#3EC91B", color: "#fff"}}>
                <Text textAlign={"center"}  fontSize={["md", "lg", "2xl", "xl", "xl"]} fontWeight={["medium"]} >
                    Aktif
                </Text>
              </Button>
            </Link>
          </Stack>
        </Center>
        <Center position={"absolute"} left={0} right={0} bottom={0} mb={["17.5vh", "12.5vh", "10vh", "17.5vh", "17.5vh"]}>
          <Button variant={"none"} border={"2px solid #1B4173"} color={"#062D5F"}  w={["auto"]} p={["0 2em","0 2em","1.5em 2em", "0 2em", "0 2em"]} borderRadius={"full"} type={"submit"} _hover={{bgColor: "#1B4173", color: "#fff"}} onClick={() => { router.back();}}>
              <Text fontSize={["md","lg","lg","lg","lg"]}>
                  Back
              </Text>
          </Button>
        </Center>
      </Box>
    )
  }

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