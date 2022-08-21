import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

//importing local components
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img, Wrap, WrapItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Container, useMediaQuery } from "@chakra-ui/react";

const AboutUs: NextPage = () => {
  const [isSmallerThan320] = useMediaQuery("(max-width: 320px)");
  const LinkButton = () => {
    const linkData = [
      {
        name: "HoME (Hall of Maxima Exhibition) ",
        link: "aboutus/home",
      },
      {
        name: "STATE (Student Activities Unit Explore)",
        link: "aboutus/state",
      },
      {
        name: "Malam Puncak",
        link: "aboutus/malampuncak",
      },
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
              bgColor={"#062D5F"}
              border={["5px solid white", "5px solid white", "4px solid white", "4px solid white", "4px solid white"]}
              borderRadius={"full"}
              shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
            >
              <Img src={"/expandLeft.svg"} w={["2rem", "2rem", "2rem", "2rem", "2rem"]} h={["1.2rem", "1.2rem", "2rem", "2rem", "2rem"]} />
            </Center>
          </Button>
        </Flex>
      </>
    );
  };

  return (
    <Layout>
      <Navbar />
      <Flex
        minH={"100vh"}
        bgImage={["/AboutUs/AboutUsP.png", "/AboutUs/AboutUsP.png", "/AboutUs/AboutUsP.png", "/AboutUs/AboutUsLs.png", "/AboutUs/AboutUsLs.png"]}
        mb={"4.9em"}
        bgPosition={["center"]}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box w={"full"} zIndex={"0"}>
          <Box display={isSmallerThan320 ? "none" : ["block", "none", "none", "none", "none"]} mb={["30.35rem", "45.35rem", "", "30.35rem", "30.35rem"]} position={"absolute"} bottom={0}>
            <Img src={"/AboutUs/maxi-xima_mobile.png"} />
          </Box>
          <Center>
            <Box
              p={["1em 0.5em", "1em 0.5em", "1.5em 3em", "1em 3em", "4em 4em"]}
              mt={["17.5vh", "17.5vh", "16vh", "17vh", "14vh"]}
              mb={["0", "3em", "0"]}
              w={["85%", "85%", "85%", "55%", "55%"]}
              h={["77vh", "auto", "76vh", "81vh", "83vh"]}
              bgColor={"white"}
              borderRadius={"xl"}
              boxShadow={"0px 3px 3px 3px rgb(0,0,0,0.25)"}
            >
              <Center w={"100%"} h={["100%"]}>
                <Box>
                  <Center mt={["1em", "1em", "0em", "1em", "1em"]}>
                    <Img src={"/AboutUs/AboutUs.png"} w={["12.5em", "15em", "42vw", "20em", "27em"]}></Img>
                  </Center>
                  <Center display={["none", "block"]}>
                    <Text fontSize={["md", "lg", "2.5vh", "17.5px", "xl"]} color={"#1B4173"} textAlign={"center"}>
                      <span style={{ fontWeight: "1000" }}>MAXIMA 2022 </span>
                      adalah kegiatan yang diselenggarakan bagi mahasiswa baru dengan tujuan untuk memperkenalkan kegiatan non-akademik yang ada di UMN. <br />
                      <br />
                      Perkenalan ini akan dilaksanakan melalui 3 rangkaian acara yaitu:
                    </Text>
                  </Center>
                  <Center display={["block", "none"]}>
                    <Text fontSize={["md", "md", "lg", "xl", "2xl"]} color={"#1B4173"} textAlign={"center"}>
                      <span style={{ fontWeight: "1000", fontSize: "20px" }}>MAXIMA 2022 </span>
                      <br />
                      adalah kegiatan yang diselenggarakan bagi mahasiswa baru dengan tujuan untuk memperkenalkan kegiatan non-akademik yang ada di UMN. <br />
                      <br />
                      Perkenalan ini akan dilaksanakan melalui 3 rangkaian acara yaitu:
                    </Text>
                  </Center>
                  <Center>
                    <LinkButton />
                  </Center>
                </Box>
              </Center>
            </Box>
          </Center>
        </Box>
      </Flex>
      <BackButton />
      <Footer />
    </Layout>
  );
};

export default AboutUs;
