import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

//importing local components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img, Tabs, TabList, TabPanels, Tab, TabPanel, Container, List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";

const FAQ: NextPage = () => {
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
        <Flex w={["20%", "15%", "15%", "15%", "15%"]} m={["-3.7rem 0rem", "-3.7rem 1rem"]} position={"sticky"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
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
      <Flex minH={"100vh"} bgImage={["/AboutUs/FAQP.png", "/AboutUs/FAQP.png", "/AboutUs/FAQP.png", "/AboutUs/FAQLs.png", "/AboutUs/FAQLs.png"]} mb={"4.9em"} bgPosition={["center"]} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"} zIndex={"0"}>
          <Box display={["block", "none", "none", "none", "none"]} mb={["30.35rem", "45.35rem", "", "30.35rem", "30.35rem"]} position={"absolute"} bottom={0}>
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
                <Box w={"100%"}>
                  <Center mt={["1em", "1em", "0em", "1em", "1em"]}>
                    <Img src={"/AboutUs/FAQ.png"} w={["5em", "5em", "15vw", "5em", "10em"]}></Img>
                  </Center>
                  <Center display={["none", "none", "block"]}>
                    <Tabs variant="soft-rounded" isFitted>
                      <TabList w={"auto"} p={[" 0.5em 0.5em", " 0.5em 0.5em", " 0.5em 2em", " 0.5em 1em", " 0.5em 2em"]} bgColor={"rgb(247,183,21,0.21)"} borderRadius={"full"}>
                        <Tab mx={["0.2em", "0.2em", "0.5em", "0.5em", "1em"]} fontSize={["xs", "xs", "md", "sm", "lg"]} color={"white"} bgColor={"rgb(255,104,53,0.35)"} _selected={{ color: "white", bg: "#FF6835" }}>
                          HoME
                        </Tab>
                        <Tab mx={["0.2em", "0.2em", "0.5em", "0.5em", "1em"]} fontSize={["xs", "xs", "md", "sm", "lg"]} color={"white"} bgColor={"rgb(255,104,53,0.35)"} _selected={{ color: "white", bg: "#FF6835" }}>
                          STATE
                        </Tab>
                        <Tab mx={["0.2em", "0.2em", "0.5em", "0.5em", "1em"]} fontSize={["xs", "xs", "md", "sm", "lg"]} color={"white"} bgColor={"rgb(255,104,53,0.35)"} _selected={{ color: "white", bg: "#FF6835" }}>
                          Malam Puncak
                        </Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel mt={"1em"}>
                          <Stack spacing={[2, 2, 2, 2, 3]}>
                            <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                              Kapan HoME Maxima 2022 akan dilaksanakan?
                            </Text>
                            <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]}>
                              22-26 Agustus 2022
                            </Text>
                          </Stack>
                          <Box mt={["1.5em", "1.5em", "1em", "1em", "1.5em"]}>
                            <Text>
                              <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                                Bagaimana tata cara mengakses HoME MAXIMA 2022?
                              </Text>
                              <OrderedList mt={"0.5em"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]} color={"#1B4173"} spacing={3}>
                                <ListItem>
                                  <Text color={"#1B4173"} fontSize={["lg", "lg", "2.2vh", "sm", "lg"]}>
                                    HoME dapat diakses secara online melalui website
                                    <span style={{ fontWeight: "bold", color: "#D01E20" }}> maxima.umn.ac.id.</span>
                                  </Text>
                                </ListItem>
                                <ListItem>
                                  <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]}>
                                    Kamu perlu melakukan registrasi terlebih dahulu untuk mengkonfirmasi NIM dan token kamu di website MAXIMA tersebut.
                                  </Text>
                                </ListItem>
                                <ListItem>
                                  <Text color={"#1B4173"} fontSize={["lg", "lg", "2.1vh", "sm", "lg"]}>
                                    Setelah registrasi, ikuti instruksi untuk mengakses HoME pada website agar kamu dapat melihat berbagai cluster organisasi yang ada di UMN. Klik pada cluster yang ingin kamu kunjungi untuk melihat
                                    organisasi-organisasi yang ada di dalamnya.
                                  </Text>
                                </ListItem>
                              </OrderedList>
                            </Text>
                          </Box>
                        </TabPanel>
                        <TabPanel>
                          <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                          <p>three!</p>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Center>
                  <Center display={["block", "block", "none"]}>
                    <Tabs variant="soft-rounded" align={"center"}>
                      <TabList w={"auto"} p={[" 0.5em 0.5em", " 0.5em 0.5em", " 0.5em 2em", " 0.5em 1em", " 0.5em 2em"]} bgColor={"rgb(247,183,21,0.21)"} borderRadius={"full"}>
                        <Tab mx={["0.3em", "0.5em", "0.5em", "0.5em", "1em"]} fontSize={["xs", "sm", "sm", "sm", "lg"]} color={"white"} bgColor={"rgb(255,104,53,0.35)"} _selected={{ color: "white", bg: "#FF6835" }}>
                          HoME
                        </Tab>
                        <Tab mx={["0.3em", "0.5em", "0.5em", "0.5em", "1em"]} fontSize={["xs", "sm", "sm", "sm", "lg"]} color={"white"} bgColor={"rgb(255,104,53,0.35)"} _selected={{ color: "white", bg: "#FF6835" }}>
                          STATE
                        </Tab>
                        <Tab mx={["0.3em", "0.5em", "0.5em", "0.5em", "1em"]} fontSize={["xs", "sm", "sm", "sm", "lg"]} color={"white"} bgColor={"rgb(255,104,53,0.35)"} _selected={{ color: "white", bg: "#FF6835" }}>
                          Malam Puncak
                        </Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel h={"auto"} overflow={"auto"}>
                          <Stack spacing={[1, 1, 2, 2, 3]}>
                            <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                              Kapan HoME Maxima 2022 akan dilaksanakan?
                            </Text>
                            <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]}>
                              22-26 Agustus 2022
                            </Text>
                          </Stack>
                          <Box mt={["0.5em", "0.5em", "1em", "1em", "1.5em"]}>
                            <Text>
                              <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]} fontWeight={"extrabold"}>
                                Bagaimana tata cara mengakses HoME MAXIMA 2022?
                              </Text>
                              <OrderedList mt={"0.5em"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]} color={"#1B4173"} spacing={3}>
                                <ListItem>
                                  <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.2vh", "sm", "lg"]}>
                                    HoME dapat diakses secara online melalui website
                                    <span style={{ fontWeight: "bold", color: "#D01E20" }}> maxima.umn.ac.id.</span>
                                  </Text>
                                </ListItem>
                                <ListItem>
                                  <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]}>
                                    Kamu perlu melakukan registrasi terlebih dahulu untuk mengkonfirmasi NIM dan token kamu di website MAXIMA tersebut.
                                  </Text>
                                </ListItem>
                                <ListItem>
                                  <Text color={"#1B4173"} textAlign={"start"} fontSize={["13px", "lg", "2.1vh", "sm", "lg"]}>
                                    Setelah registrasi, ikuti instruksi untuk mengakses HoME pada website agar kamu dapat melihat berbagai cluster organisasi yang ada di UMN. Klik pada cluster yang ingin kamu kunjungi untuk melihat
                                    organisasi-organisasi yang ada di dalamnya.
                                  </Text>
                                </ListItem>
                              </OrderedList>
                            </Text>
                          </Box>
                        </TabPanel>
                        <TabPanel h={"23em"} overflow={"auto"}>
                          <p>two!</p>
                        </TabPanel>
                        <TabPanel h={"23em"} overflow={"auto"}>
                          <p>three!</p>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
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

export default FAQ;
