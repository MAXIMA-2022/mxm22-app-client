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

const form: NextPage = () => {
  const LinkButton = () => {
    const linkData = [
      {
        name: "HoME (Hall of Maxima Exhibition) ",
        link: "aboutus/home",
      },
      // {
      //   name: "STATE (Student Activities Unit Explore)",
      //   link: "aboutus/state",
      // },
      // {
      //   name: "Malam Puncak",
      //   link: "aboutus/malampuncak",
      // },
    ];

    return (
      <Box mt={["1.5em", "1.5em", "2vh", "0.2em", "0.8em"]}>
        <Container maxW="full">
          {linkData.map((item, index) => {
            return (
              <Center key={index}>
                <Link href={item.link}>
                  <Button
                    w={["full", "auto"]}
                    my={["0.7em", "0.7em", "0.7em", "0.7em", "0.7em"]}
                    p={["0 1.5em", "0 1.5em", "2vh 1.5em", "0 1.5em", "0 1.5em"]}
                    size={["xs", "sm"]}
                    bgColor={"#FF6835"}
                    color={"white"}
                    borderRadius={"full"}
                    boxShadow={"0px 2px 2px 2px rgb(0,0,0,0.25)"}
                    zIndex={"1"}
                  >
                    <Text fontSize={["xs", "sm", "2.2vh", "sm", "lg"]}>{item.name}</Text>
                  </Button>
                </Link>
              </Center>
            );
          })}
        </Container>
      </Box>
    );
  };

  const Heading = () => {
    return(
        <Box mt={["22vh"]}>
            <Center display={["none", "none", "none", "flex", "flex"]}>
                <Box position={"absolute"} mt={"25vh"}>
                    <Img src={"/headingLamp.png"} w={"120vh"}/>
                </Box>
            </Center>
            <Center display={["flex", "flex","flex", "none", "none"]}>
                <Box position={"absolute"} mt={"12.5vh"}>
                    <Img src={"/headingLampP.png"} w={"43.5vh"}/>
                </Box>
            </Center>
            <Center display={["none", "none", "none", "flex", "flex"]}>
                <Img src={"/heading.svg"} w={"85vh"}/>
            </Center>
            <Center display={["flex", "flex","flex", "none", "none"]}>
                <Img src={"/headingP.svg"} w={"42.5vh"}/>
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
      <Flex minH={"100vh"} bgImage={["/formBgP.jpg","/formBgP.jpg","/formBgP.jpg","/formBgLs.jpg","/formBgLs.jpg"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"}>
          <Heading />
        </Box>
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

export default dynamic(() => Promise.resolve(form), { 
  ssr: false 
})

