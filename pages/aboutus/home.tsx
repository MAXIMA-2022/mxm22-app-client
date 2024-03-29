import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

//importing local components
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Img } from "@chakra-ui/react";

const HoME: NextPage = () => {
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
                    <Img src={"https://storage.googleapis.com/mxm22-bucket-test/AboutUs/HoME.webp"} w={["12.5em", "10em", "40vw", "20em", "auto"]}></Img>
                  </Center>
                  <Center display={["none", "block"]}>
                    <Text fontSize={["md", "md", "2.5vh", "xl", "2xl"]} color={"#1B4173"} textAlign={"center"}>
                      <span style={{ fontWeight: "1000" }}>Hall of Maxima Exhibition (HoME) </span> merupakan pameran UKM, komunitas dan media kampus yang ada di Universitas Multimedia Nusantara. HoME bertujuan untuk memperkenalkan dan
                      menginformasikan garis besar kegiatan serta visi misi setiap organisasi.
                    </Text>
                  </Center>
                  <Center display={["block", "none"]}>
                    <Text fontSize={["md", "md", "lg", "xl", "2xl"]} color={"#1B4173"} textAlign={"center"}>
                      <span style={{ fontWeight: "1000", fontSize: "17px" }}>Hall of Maxima Exhibition (HoME) </span> <br /> merupakan pameran UKM, komunitas dan media kampus yang ada di Universitas Multimedia Nusantara. <br /> <br /> HoME
                      bertujuan untuk memperkenalkan dan menginformasikan garis besar kegiatan serta visi misi setiap organisasi.
                    </Text>
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

export default HoME;
