import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//importing local components
import Layout from "../components/Layout";
import MaximaIconP from "../public/maximaIconP.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Img } from "@chakra-ui/react";
import { useState } from "react";

const AdventureBegin: NextPage = () => {
  const [count, setCount] = useState(0)
  const Dialogue = () => {
    return(
      <>
        {count === 0 ? (
          <>
            <Center>
                        <Box display={["block", "none"]} mr={5} mt={[250]}>
                        <Center mt={[25,50]}>
                            <Img src={'/dialog-5.png'} width={125} height={[75]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} ml={250} mb={300}>
                        <Center>
                            <Img src={'/dialog-5.png'} width={[100,300, 225, 500]} height={[100,150,125,125]} alt={"MaximaLogo"} />
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
                            <Img src={'/dialog-6.png'} width={125} height={[75]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} ml={250} mb={300}>
                        <Center>
                            <Img src={'/dialog-6.png'} width={[100,300, 225, 500]} height={[100,150,125,125]} alt={"MaximaLogo"} />
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
                            <Img src={'/dialog-6.png'} width={125} height={[75]} alt={"MaximaLogo"} />
                            <Img src={'/dialog-7.png'} width={125} height={[75]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} ml={250} mb={300}>
                        <Center>
                            <Img src={'/dialog-6.png'} width={[100,300, 225, 500]} height={[100,150,125,125]} alt={"MaximaLogo"} />
                          <Img src={'/dialog-7.png'} width={[100,300, 225, 500]} height={[100,150,125,125]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                    </Center> 
          </>
        )}
      </>
    )
  }
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

  return (
    <Layout>
      <Flex
        onClick={() => setCount(count + 1)}
        minH={"100vh"}
        bgImage={["/HoME/AdventureBeginLs.png", "/HoME/AdventureBeginLs.png", "/HoME/AdventureBeginLs.png", "/HoME/AdventureBeginLs.png"]}
        bgPosition={["center", "bottom", "bottom", "bottom"]}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Dialogue/>
        <Box w={"full"} mt={"20vh"}>
          <Box position={"absolute"} bottom={0} right={0} me={"5vh"} mb={"7vh"}>
            <Center>
              {count >= 2 ? (
                <>
                  <Link href={"/home"}>
                    <Button size={"md"} px={"2.5em"} bgColor={"#1B4173"} outline={"5px  solid rgb(255,255,255, 15%)"} borderRadius={"full"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
                      <Text color={"white"} fontSize={"20px"} fontWeight={"extrabold"}>
                        NEXT
                      </Text>
                    </Button>
                  </Link>
                </>
              ):(
                <>
                  <Link href={"/home"}>
                    <Button disabled size={"md"} px={"2.5em"} bgColor={"#1B4173"} outline={"5px  solid rgb(255,255,255, 15%)"} borderRadius={"full"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
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
        <FooterMessage />
      </Flex>
      
    </Layout>
  );
};

export default AdventureBegin;
