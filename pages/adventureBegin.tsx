import type { NextPage } from "next";
import Link from "next/link";

//importing local components
import Layout from "../components/Layout";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Img, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const AdventureBegin: NextPage = () => {
  const [count, setCount] = useState(0)
  const [isSmallerThan320] = useState(useMediaQuery("(max-width: 320px)"))
  const Dialogue = () => {
    return(
      <>
        {count === 0 ? (
          <>
            <Center>
                        <Box display={["block", "none"]} ms={"1vh"} mb={["15vh"]}>
                        <Center>
                            <Img src={'https://storage.googleapis.com/mxm22-bucket-test/dialogrev/dialog-5%20-%20rev.png'} width={185} height={65} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} ms={["15vh","2vh","5vh","10vh","15vh"]} mb={["20vh"]}>
                        <Center>
                            <Img src={'https://storage.googleapis.com/mxm22-bucket-test/dialogrev/dialog-5%20-%20rev.png'} width={[100, 300, 375, 525, 650]} height={[100,81,95,125,150]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                    </Center> 
          </>
        ):('')}
        {count === 1 ? (
          <>
            <Center>
                        <Box display={["block", "none"]} ms={"1vh"} mb={["15vh"]}>
                        <Center>
                            <Img src={'https://storage.googleapis.com/mxm22-bucket-test/revisi/dialog-6%20-%20rev%202.webp'} width={185} height={65} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "block"]} ms={["15vh","2vh","5vh","10vh","15vh"]} mb={["45vh","45vh","20vh","45vh","45vh"]}>
                        <Center>
                            <Img src={'https://storage.googleapis.com/mxm22-bucket-test/revisi/dialog-6%20-%20rev%202.webp'} width={[100,300, 325, 525, 650]} height={[100,150,125,125,175]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                    </Center> 
          </>
        ):('')}
        {count >= 2 && (
          <>
            <Center>
              <Box display={["block", "block", "none"]}>
                <Center>
                  <Box w={"full"} position={"absolute"}>
                  <Img src={'https://storage.googleapis.com/mxm22-bucket-test/revisi/dialog-6%20-%20rev%202.webp'} mb={["23vh","20vh","23vh"]} ms={["52vw","56vw","52vw"]} width={150} height={[75]} alt={"MaximaLogo"} />
                  </Box>
                  <Box w={"full"} position={"absolute"}>
                    <Img src={'https://storage.googleapis.com/mxm22-bucket-test/revisi/dialog-7%20-%20rev%202.webp'} mt={["12vh","15vh","12vh"]} ms={["115vw","120vw","115vw","115vw","115vw"]} width={125} height={[50]} alt={"MaximaLogo"} />
                  </Box>
                </Center>
                  </Box>
                    <Box display={["none", "none","block"]} mb={["45vh"]}>
                      <Center>
                        <Box position={["absolute"]} me={["0","0","0","0","0"]} mt={["0","5vh","20vh","0","0"]}>
                          <Img src={'https://storage.googleapis.com/mxm22-bucket-test/revisi/dialog-6%20-%20rev%202.webp'} ms={["25vw","25vw","25vw","25vw","25vw"]} width={[100,200, "35vw", 325, 550]} height={[100,100,"15vw", 135, 175]} alt={"MaximaLogo"} />
                        </Box>
                        <Box position={["absolute"]} me={["0","0","0","0","0"]} mt={["0","5vh","62vh","40vh","40vh"]}>
                          <Img src={'https://storage.googleapis.com/mxm22-bucket-test/revisi/dialog-7%20-%20rev%202.webp'} ms={["120vw","110vw","130vw","120vw","120vw"]} width={[100,300, "33vw", 325, 425]} height={[100,100,"15vw",100,125]} alt={"MaximaLogo"} />
                        </Box>
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

  return (
    <Layout>
      <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      >
      <Flex
        onClick={() => setCount(count + 1)}
        minH={"100vh"}
        bgImage={["https://storage.googleapis.com/mxm22-bucket-test/HoME/AdventureBeginP.webp","https://storage.googleapis.com/mxm22-bucket-test/HoME/AdventureBeginP.webp",  "https://storage.googleapis.com/mxm22-bucket-test/HoME/AdventureBeginP.webp", "https://storage.googleapis.com/mxm22-bucket-test/HoME/AdventureBeginP.webp", "https://storage.googleapis.com/mxm22-bucket-test/HoME/AdventureBeginLs.webp"]}
        bgPosition={["center"]}
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
      </motion.div>
    </Layout>
  );
};

export default AdventureBegin;
