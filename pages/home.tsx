import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//importing local components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MaximaIconP2 from "../public/maximaIconP2.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Img, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState(0)
  const Header = () => {
    return(
      <>
        {count === 0 ? (
          <>
            <Center>
              <Box display={["block", "none"]} mr={5} mt={[250]}>
                        <Center mt={[25,50]}>
                            <Img src={'/dialog-8.png'} width={125} height={[75]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} ml={250} mb={300}>
                        <Center>
                            <Img src={'/dialog-8.png'} width={[100,300, 225, 500]} height={[100,150,125,125]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
            </Center>
          </>
        ):('')}
        {count === 1 ? (
          <>
            <Center>
              <Box display={["block", "none"]} mr={5} mt={[250]}>
                        <Center mt={[25,50]}>
                            <Img src={'/dialog-9.png'} width={125} height={[75]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} ml={250} mb={300}>
                        <Center>
                            <Img src={'/dialog-9.png'} width={[100,300, 225, 500]} height={[100,150,125,125]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
            </Center>
          </>
        ):('')}
        {count === 2 ? (
          <>
            <Center>
              <Box display={["block", "none"]} mr={5} mt={[250]}>
                        <Center mt={[25,50]}>
                            <Img src={'/dialog-9.png'} width={125} height={[75]} alt={"MaximaLogo"} />
                            <Img src={'/dialog-10.png'} width={125} height={[75]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} ml={250} mb={300}>
                        <Center>
                            <Img src={'/dialog-9.png'} width={[100,300, 225, 500]} height={[100,150,125,125]} alt={"MaximaLogo"} />
                            <Img src={'/dialog-10.png'} width={[100,300, 225, 500]} height={[100,150,125,125]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
            </Center>
          </>
        ):('')}
      </>
    )
  }
  const FooterMessage = () => {
    return (
        <>
            {count >= 3 ? (''):(
                <>
                    <Box position={"absolute"} left={0} bottom={0} right={0} mb={"2vh"}>
                        <Center>
                            <Text color={"white"} fontSize={["10px", "14px", "14px", "16px", "20px"]} fontWeight={"bold"} letterSpacing={1}>
                                Click on your screen!
                            </Text>
                        </Center>
                    </Box>
                </>
            )}     
        </>
    );
  };
  return (
    <Layout>
      <Navbar />
      <Flex onClick={() => setCount(count + 1)} minH={"100vh"} bgImage={["/HoME/HoMEP.png", "/HoME/HoMELs.png", "/HoME/HoMELs.png", "/HoME/HoMELs.png"]} bgPosition={["center", "bottom", "bottom", "bottom"]} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"}>
          <Flex justifyContent={"center"} alignItems="center" p={["2em 1.8em", "2em 0.5em", "2em 1.5em", "2em 1.5em", "2em 3em"]} color="white" top={0} left={0} right={0} zIndex={1}>
            {/* <Box display={["block", "none"]}>
              <Center>
                <Image src={MaximaIconP2} alt={"MaximaLogo"} />
              </Center>
            </Box> */}
          </Flex>
          <Header/>
          {count >= 3 && (
            <>
              <Flex mt={["5em", "2em"]} justifyContent={"end"} alignItems={"center"} ps={["4em", "0em", "0em"]} pe={["1.5em", "1.5em", "1.5em", "4.5em"]}>
            <Box>
              <Text color={"white"} align={"end"} fontSize={["55px", "7xl", "11vh", "7xl", "8xl"]} fontWeight={"bold"} textShadow={["0px 2px 2.5px rgb(0,0,0,0.7)"]}>
                HoME
              </Text>
              <Text color={"white"} align={"end"} mt={"-0.5em"} mb={["0.4em", "0.4em", "0.4em", "0.4em", "0em"]} fontSize={["39.3px", "5xl", "8vh", "5xl", "7xl"]} fontWeight={"bold"} textShadow={["0px 2px 2.5px rgb(0,0,0,0.7)"]}>
                MAXIMA 2022
              </Text>
              <Box ps={["0em", "20em", "20em", "35em", "60em"]}>
                <Text color={"white"} align={"end"} mb={["1em", "2em"]} fontSize={["16px", "16px", "2.5vh", "16px", "20px"]} fontWeight={"normal"} letterSpacing={0.7} textShadow={"0px 2px 3px rgb(0,0,0,0.35)"}>
                  Selamat datang di HoME MAXIMA 2022! Di sini kamu dapat memilih tenda-tenda UKM yang ingin kamu masuki. Selamat memilih, Maximers!
                </Text>
                <Flex justifyContent={"end"} alignItems={"center"}>
                  <Link href={"/home/map"}>
                    <Button size={["sm", "sm", "sm", "sm", "sm"]} px={"1.5em"} bgColor={"#F7B70C"} outline={"5px  solid rgb(210, 223, 165, 47%)"} borderRadius={"full"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
                      <Text color={["#062D5F"]} fontSize={["sm", "sm", "1.8vh", "sm", "lg"]} fontWeight={["black"]}>
                        LET THE ADVENTURE BEGIN!
                      </Text>
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Box>
          </Flex>
            </>
          )}
        </Box>
        <FooterMessage/>
      </Flex>
      <Box w={"full"} position={"absolute"}>
        <Footer />
      </Box>
    </Layout>
  );
};

export default Home;
