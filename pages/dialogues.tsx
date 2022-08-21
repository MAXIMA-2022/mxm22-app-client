import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//importing local components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MaximaIconP from "../public/maximaIconP.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img } from "@chakra-ui/react";
import { useState } from "react";

const Dialogues = () => {
const [count, setCount] = useState(0)
const Header = () => {
    return (
        <>
            {count === 0 ? (
                <>
                    <Center>
                        <Box display={["block", "none"]} mr={6} mt={"32vh"}>
                        <Center mt={[25,50]}>
                            <Img src={'https://storage.googleapis.com/mxm22-bucket-test/dialogrev/dialog-1%20-%20rev.png'} width={140} height={[85]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} mr={85} mt={[55,55,"10vh",65,"8vh"]}>
                        <Center>
                            <Img src={'https://storage.googleapis.com/mxm22-bucket-test/dialogrev/dialog-1%20-%20rev.png'} width={[100, 300, "35vh", 245, 325]} height={[100, 150, "18vh", 115, 170]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                    </Center> 
                </>
            ):('')}
            {count === 1 ? (
                <>
                    <Center>
                        <Box display={["block", "none"]} mt={["40vh"]}>
                        <Center>
                            <Box me={"15vh"}>
                                <Img src={'https://storage.googleapis.com/mxm22-bucket-test/dialogrev/dialog-3%20-%20rev.png'} width={100} height={[50]} alt=   {"MaximaLogo"} />
                            </Box>
                            <Box>
                                <Img src={'https://storage.googleapis.com/mxm22-bucket-test/dialogrev/dialog-2%20-%20rev.png'} width={100} height={[50]} alt={"MaximaLogo"} />
                            </Box>
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} mr={[100,0,0,100,100]} mt={["40vh","10vh","10vh","17vh","17vh"]}>
                        <Center>
                            <Box position={["relative","relative","absolute","relative","relative"]} me={["0","0","50vh","0","0"]} mt={["0","5vh","25vh","0","0"]}>
                                <Img src={'https://storage.googleapis.com/mxm22-bucket-test/dialogrev/dialog-3%20-%20rev.png'} width={[100,200, "22vh", 200, 250]} height={[100,100,"10vh",85,125]} alt={"MaximaLogo"} />
                            </Box>
                            <Box position={["relative","relative","absolute","relative","relative"]} mt={["0","0","13vh","0","0"]} ms={["40vh","30vh","45vh","38vh","40vh"]}>
                                <Img src={'https://storage.googleapis.com/mxm22-bucket-test/dialogrev/dialog-2%20-%20rev.png'} width={[100,200, "30vh", 200, 250]} height={[100,100,"12vh",85,125]} alt={"MaximaLogo"} />
                            </Box>
                        </Center>
                        </Box>
                    </Center> 
                </>
            ):('')}
            {count >= 2 && (
                <>
                    <Center>
                        <Box display={["block", "none"]} mr={6} mt={"32vh"}>
                        <Center mt={[25,50]}>
                            <Img src={'https://storage.googleapis.com/mxm22-bucket-test/dialogrev/dialog-4%20-%20rev.png'} width={140} height={[85]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} mr={85} mt={[55,55,"10vh",65,"8vh"]}>
                        <Center>
                            <Img src={'https://storage.googleapis.com/mxm22-bucket-test/dialogrev/dialog-4%20-%20rev.png'} width={[100, 300, "35vh", 245, 325]} height={[100, 150, "18vh", 115, 170]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                    </Center> 
                </>
            )}
        </>
    );
  };
const FooterMessage = () => {
    return (
        <>
            {count >= 2 ? (''):(
                <>
                    <Box position={"absolute"} left={0} bottom={0} right={0} mb={"2vh"}>
                        <Center>
                            <Text color={"white"} fontSize={["10px", "14px", "2.2vh", "16px", "20px"]} fontWeight={"bold"} letterSpacing={1}>
                                Click on your screen!
                            </Text>
                        </Center>
                    </Box>
                </>
            )}     
        </>
    );
  };

  const StartButton = () => {
    return (
      <Box w={"full"} mt={"20vh"}>
          <Box position={"absolute"} bottom={0} right={0} me={"5vh"} mb={"7vh"}>
            <Center>
                {count >= 2 ? (
                    <>
                        <Link href={"/adventureBegin"}>
                            <Button size={"md"} px={"2.5em"} bgColor={"#D01E20"} outline={"5px  solid rgb(255,255,255, 15%)"} borderRadius={"full"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
                            <Text color={"white"} fontSize={"20px"} fontWeight={"extrabold"}>
                                NEXT
                            </Text>
                            </Button>
                        </Link>
                    </>
                ):(
                    <>
                        <Link href={"/adventureBegin"}>
                            <Button disabled size={"md"} px={"2.5em"} bgColor={"#D01E20"} outline={"5px  solid rgb(255,255,255, 15%)"} borderRadius={"full"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
                                <Text color={"white"} fontSize={"20px"} fontWeight={"extrabold"}>
                                    NEXT
                                </Text>
                            </Button>
                        </Link>
                    </>
                )}
            </Center>
          </Box>
        </Box>
    );
  };

  return (
    <Layout>
        <Navbar />
        <Flex onClick={() => setCount(count + 1)} minH={"100vh"} bgImage={["https://storage.googleapis.com/mxm22-bucket-test/Welcoming/HoMEWelcomingP.png","https://storage.googleapis.com/mxm22-bucket-test/Welcoming/HoMEWelcomingLS.png","https://storage.googleapis.com/mxm22-bucket-test/Welcoming/HoMEWelcomingLS.png","https://storage.googleapis.com/mxm22-bucket-test/Welcoming/HoMEWelcomingLS.png"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
            <Box w={"full"} mt={"20vh"}>
                <Header/>
                <StartButton />
                <FooterMessage />
            </Box>
        </Flex>
        <Box w={"full"} position={"absolute"}>
            <Footer />
        </Box>
    </Layout>
  );
};

export default Dialogues;
