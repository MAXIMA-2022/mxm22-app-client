import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

//importing local components
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img, Wrap, WrapItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

const STATE: NextPage = () => {
  const Footer = () => {
    const router = useRouter();
    return (
      <>
        <Flex m={["1rem 0rem", "3rem 1rem"]} position={"fixed"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
          <Button
            variant={"none"}
            onClick={() => {
              router.back();
            }}
          >
            <Center
              w={["2.5rem", "2.5rem", "4rem", "4rem", "4rem"]}
              h={["2.5rem", "2.5rem", "4rem", "4rem", "4rem"]}
              mt={["0rem", "0rem", "0rem", "0rem", "0rem"]}
              bgColor={"#062D5F"}
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
      <Flex
        minH={"100vh"}
        bgImage={["https://storage.googleapis.com/mxm22-bucket-test/AboutUs/AboutUsP.webp", "https://storage.googleapis.com/mxm22-bucket-test/AboutUs/AboutUsP.webp", "https://storage.googleapis.com/mxm22-bucket-test/AboutUs/AboutUsP.webp", "https://storage.googleapis.com/mxm22-bucket-test/AboutUs/AboutUsLs.webp", "https://storage.googleapis.com/mxm22-bucket-test/AboutUs/AboutUsLs.webp"]}
        bgPosition={["center", "bottom", "bottom", "bottom"]}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box w={"full"} zIndex={"0"}>
          <Box display={["block", "block", "block", "none", "none"]} position={"absolute"} bottom={0}>
            <Img src={"https://storage.googleapis.com/mxm22-bucket-test/AboutUs/maxi-xima_mobile.webp"} />
          </Box>
          <Center>
            <Box
              p={["1em 2em", "3em 5em", "3em 3em", "3em 4em", "4em 5em"]}
              mt={["17.5vh", "17.5vh", "16vh", "17vh", "14vh"]}
              w={["85%", "85%", "85%", "55%", "55%"]}
              h={["77vh", "81vh", "77vh", "81vh", "83vh"]}
              bgColor={"white"}
              borderRadius={"xl"}
              boxShadow={"0px 3px 3px 3px rgb(0,0,0,0.25)"}
            >
              <Center w={"100%"} h={["100%"]}>
                <Box>
                  <Center mt={"0em"}>
                    <Img src={"https://storage.googleapis.com/mxm22-bucket-test/AboutUs/STATE.webp"} w={["10em", "15em", "40vw", "15em", "25em"]}></Img>
                  </Center>
                  <Center display={["none", "block"]}>
                    <Stack direction={"column"} spacing={[8, 6, 7, 5, 8]}>
                      <Text fontSize={["md", "md", "2.3vh", "md", "lg"]} color={"#1B4173"} textAlign={"center"}>
                        <span style={{ fontWeight: "1000" }}>Student Activities Unit Explore (STATE) </span> merupakan kegiatan dimana mahasiswa baru dapat mendapatkan informasi dan mengeksplorasi UKM dan Media Kampus yang ada di UMN. Dari
                        kegiatan ini UKM dan Media Kampus dapat memperkenalkan UKM dan Media Kampus mereka kepada mahasiswa baru.
                      </Text>
                      <Center>
                        <Text w={["50%", "80%", "70%", "60%", "50%"]} fontSize={["md", "md", "2.3vh", "md", "lg"]} color={"#1B4173"} textAlign={"center"}>
                          <span style={{ fontWeight: "1000" }}>Registrasi STATE </span> <br /> dapat dilakukan pada tanggal <br /> 29 Agustus - 2 Agustus 2022
                        </Text>
                      </Center>
                      <Center>
                        <Text w={["50%", "90%", "70%", "60%", "50%"]} fontSize={["md", "md", "2.3vh", "md", "lg"]} color={"#1B4173"} textAlign={"center"}>
                          <span style={{ fontWeight: "1000" }}>Pelaksanaan STATE </span> <br /> diselenggarakan pada tanggal <br /> 5 September - 13 September 2022
                        </Text>
                      </Center>
                    </Stack>
                  </Center>
                  <Center display={["block", "none"]}>
                    <Stack direction={"column"} spacing={[4, 4, 7, 5, 8]}>
                      <Text fontSize={["sm", "sm", "2.3vh", "md", "xl"]} color={"#1B4173"} textAlign={"center"}>
                        <span style={{ fontWeight: "1000", fontSize: "17px" }}>Student Activities Unit Explore (STATE) </span> <br /> merupakan kegiatan dimana mahasiswa baru dapat mendapatkan informasi dan mengeksplorasi UKM dan Media
                        Kampus yang ada di UMN. Dari kegiatan ini UKM dan Media Kampus dapat memperkenalkan UKM dan Media Kampus mereka kepada mahasiswa baru.
                      </Text>
                      <Center>
                        <Text w={["100%", "100%", "70%", "60%", "50%"]} fontSize={["sm", "sm", "2.3vh", "md", "xl"]} color={"#1B4173"} textAlign={"center"}>
                          <span style={{ fontWeight: "1000" }}>Registrasi STATE </span> <br /> dapat dilakukan pada tanggal <br /> 29 Agustus - 2 Agustus 2022
                        </Text>
                      </Center>
                      <Center>
                        <Text w={["100%", "100%", "70%", "60%", "50%"]} fontSize={["sm", "sm", "2.3vh", "md", "xl"]} color={"#1B4173"} textAlign={"center"}>
                          <span style={{ fontWeight: "1000" }}>Pelaksanaan STATE </span> <br /> diselenggarakan pada tanggal <br /> 5 September - 14 September 2022
                        </Text>
                      </Center>
                    </Stack>
                  </Center>
                </Box>
              </Center>
            </Box>
          </Center>
        </Box>
      </Flex>
      <Footer />
    </Layout>
  );
};

export default STATE;
