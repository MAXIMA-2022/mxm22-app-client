import Link from "next/link";

//importing local components
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//importing chakra ui components
import { Box, Flex, Center, Img, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [count, setCount] = useState(0)
  const Header = () => {
    return(
      <>
        {count === 0 ? (
          <>
            <Center>
              <Box display={["block","block", "none"]} mt={["50vh","40vh","52vh"]} me={["18vh","5vh","15vh"]}>
                        <Center>
                            <Img src={'https://storage.googleapis.com/mxm22-bucket-test/dialogrev/dialog-8%20-%20rev.png'} width={150} height={[85]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none","none", "block"]} ms={["15vh","15vh","15vh","10vh","15vh"]} mb={["0"]}>
                        <Center>
                            <Img w={"full"} src={'https://storage.googleapis.com/mxm22-bucket-test/dialogrev/dialog-8%20-%20rev.png'} mt={["35vh","35vh","38.5vh","30vh","35vh"]} me={"18vw"} width={[100, 300, "20vh", 175, 250]} height={[100,81,"13vh",125,150]}  alt={"MaximaLogo"} />
                        </Center>
                        </Box>
            </Center>
          </>
        ):('')}
        {count === 1 ? (
          <>
            <Center>
              <Box display={["block", "block", "none"]} mt={["46vh","32.5vh"]} me={["20vh","0vh"]}>
                        <Center>
                            <Img src={'https://storage.googleapis.com/mxm22-bucket-test/revisi/dialog-9%20-%20rev%202.webp'} width={200} height={[100]} alt={"MaximaLogo"} />
                        </Center>
                        </Box>
                        <Box display={["none", "none", "block"]} ms={["15vh","2vh","5vh","10vh","15vh"]} mb={["0"]}>
                        <Center>
                            <Img w={"full"} src={'https://storage.googleapis.com/mxm22-bucket-test/revisi/dialog-9%20-%20rev%202.webp'} mt={["35vh","35vh","30vh","23.5vh","28.5vh"]} me={"20vw"} width={[100, 300, "33vh", 275, 350]} height={[100,81,"18vh",150,175]}  alt={"MaximaLogo"} />
                        </Center>
                        </Box>
            </Center>
          </>
        ):('')}
        {count === 2 ? (
          <>
            <Center>
              <Box display={["block","block", "none"]}>
                        <Center >
                          <Box w={"full"} position={"absolute"}>
                            <Img src={'https://storage.googleapis.com/mxm22-bucket-test/revisi/dialog-9%20-%20rev%202.webp'} mt={["110vh","75vh","115vh"]} ms={["5vw","39vw","52vw"]} width={175} height={[100]} alt={"MaximaLogo"} />
                          </Box>
                          <Box w={"full"} position={"absolute"} overflow={"hidden"}>
                            <Img src={'https://storage.googleapis.com/mxm22-bucket-test/revisi/dialog-10%20-%20rev%202.webp'} mt={["105vh","85vh","12vh"]} ms={["58vw","105vh","115vw","115vw","115vw"]} width={[150,125,125]} height={[85,75,75]} alt={"MaximaLogo"} />
                          </Box>
                        </Center>
                        </Box>
                        <Box display={["none","none", "block"]} ms={["20vw","20vw","35.5vw","22.5vw","20vw"]}>
                        <Center>
                        <Box position={["absolute"]}  mt={["0","5vh","20vh","0","0"]}>
                          <Center>
                              <Img w={"full"} src={'https://storage.googleapis.com/mxm22-bucket-test/revisi/dialog-9%20-%20rev%202.webp'} mt={["35vh","35vh","50vh","65vh","75vh"]} me={["30vw","30vw","40vw","35vw","30vw"]} width={[100, 300, "33vh", 275, 350]} height={[100,81,"18vh",150,175]}  alt={"MaximaLogo"} />
                          </Center>
                          </Box>
                          <Box position={["absolute"]} overflow={"hidden"}>
                              <Img src={'https://storage.googleapis.com/mxm22-bucket-test/revisi/dialog-10%20-%20rev%202.webp'} mt={["35vh","35vh","80vh","85vh","90vh"]} ms={["50vw","50vw","47.5vh","45vw","50vw"]}  width={[100, 300, "25vh", 225, 350]} height={[100,81,"14vh",125,175]} alt={"MaximaLogo"}  />
                          </Box>
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
      <Navbar />
      <Flex onClick={() => setCount(count + 1)} minH={"100vh"} bgImage={["https://storage.googleapis.com/mxm22-bucket-test/HoME/HoMEP.webp", "https://storage.googleapis.com/mxm22-bucket-test/HoME/HoMELs.webp", "https://storage.googleapis.com/mxm22-bucket-test/HoME/HoMELs.webp", "https://storage.googleapis.com/mxm22-bucket-test/HoME/HoMELs.webp"]} bgPosition={["center", "bottom", "bottom", "bottom"]} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"}>
          <Flex justifyContent={"center"} alignItems="center" p={["2em 1.8em", "2em 0.5em", "2em 1.5em", "2em 1.5em", "2em 3em"]} color="white" top={0} left={0} right={0} zIndex={1}>
          </Flex>
          <Header/>
          {count >= 3 && (
            <>
              <Flex mt={["5em", "2em"]} justifyContent={"end"} alignItems={"center"} ps={["4em", "0em", "0em"]} pe={["1.5em", "1.5em", "1.5em", "4.5em"]}>
            <Box>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: 'spring', 
                  bounce: 0.5 }}
                exit={{ scale: 0 }}
              >
              <Text color={"white"} align={"end"} fontSize={["55px", "7xl", "11vh", "7xl", "8xl"]} fontWeight={"bold"} textShadow={["0px 2px 2.5px rgb(0,0,0,0.7)"]}>
                HoME
              </Text>
              <Text color={"white"} align={"end"} mt={"-0.5em"} mb={["0.4em", "0.4em", "0.4em", "0.4em", "0em"]} fontSize={["39.3px", "5xl", "8vh", "5xl", "7xl"]} fontWeight={"bold"} textShadow={["0px 2px 2.5px rgb(0,0,0,0.7)"]}>
                MAXIMA 2022
              </Text>
              </motion.div>
              <Box ps={["0em", "20em", "20em", "35em", "60em"]}>
                <motion.div
                  initial={{scale: 0}}
                  animate={{scale: 1}}
                  transition={{
                    ease: 'anticipate',
                    duration: 1
                  }}
                  exit={{scale: 0}}
                >
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
                </motion.div>
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
