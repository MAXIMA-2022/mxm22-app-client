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
                        <Box display={["block", "none"]} mr={5} mt={[250]}>
                        <Center mt={[25,50]}>
                            <Img src={'/dialog-1.png'} width={125} height={[75]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} mr={100} mt={[75]}>
                        <Center>
                            <Img src={'/dialog-1.png'} width={[100,300, 225, 250]} height={[100,150,125,125]} alt={"MaximaLogo"} />
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
                            <Img src={'/dialog-2.png'} width={125} height={[75]} alt={"MaximaLogo"} />
                            <Img src={'/dialog-3.png'} width={125} height={[75]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} mr={100} mt={[75]}>
                        <Center>
                            <Img src={'/dialog-2.png'} width={[100,300, 225, 250]} height={[100,150,125,125]} alt={"MaximaLogo"} />
                            <Img src={'/dialog-3.png'} width={[100,300, 225, 250]} height={[100,150,125,125]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                    </Center> 
                </>
            ):('')}
            {count >= 2 && (
                <>
                    <Center>
                        <Box display={["block", "none"]} mr={5} mt={[250]}>
                        <Center mt={[25,50]}>
                            <Img src={'/dialog-4.png'} width={125} height={[75]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} mr={100} mt={[75]}>
                        <Center>
                            <Img src={'/dialog-4.png'} width={[100,300, 225, 250]} height={[100,150,125,125]} alt={"MaximaLogo"} />
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
        <Flex onClick={() => setCount(count + 1)} minH={"100vh"} bgImage={["/Welcoming/HoMEWelcomingP.png", "/Welcoming/HoMEWelcomingLs.png", "/Welcoming/HoMEWelcomingLs.png", "/Welcoming/HoMEWelcomingLs.png"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
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
