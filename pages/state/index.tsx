import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//importing local components
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MaximaIconP from "../../public/maximaIconP.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isExpired } from "react-jwt";
import { useReadLocalStorage } from "usehooks-ts";
import axios from "axios";
import { motion } from "framer-motion";

const STATE = () => {
  const router = useRouter()
  const jwt = useReadLocalStorage("token");
  const isMyTokenExpired = isExpired(jwt as string);
  const [toggle, setToggle] = useState(0)

  useEffect(() => {
    // if (!jwt || isMyTokenExpired) {
    //   router.push("/login");
    // }
    try{
      const fetchToggle = async () => {
        const res = await axios.get(`${process.env.API_URL}/api/toggle`)
        setToggle(res.data[8].toggle)
      }
      fetchToggle()
    } catch(err: any) {
      console.log(err)
    }
  },[]);
  
  const Header = () => {
    return (
      <Box>  
        <Box display={["block", "none"]} mt={10}>
          <Center>
            <Image src={MaximaIconP} alt={"MaximaLogo"} />
          </Center>
          <Box mr={5} mt={10}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: 'spring', 
                  bounce: 0.5 }}
                exit={{ scale: 0 }}
            >
              <Text color={"#D01E20"} align={"right"} fontSize={"44px"} fontWeight={"bold"} textShadow={["0px 2px 3.5px rgb(0,0,0,0.7)"]}>
                STATE
              </Text>
              <Text color={"#D01E20"} align={"right"} fontSize={"30px"} fontWeight={"bold"} textShadow={["0px 2px 3.5px rgb(0,0,0,0.7)"]}>
                MAXIMA 2022
              </Text>
            </motion.div>
            <Text mt={{base:"1em", lg:"0vh"}} ps={["0em", "20em", "40vw", "55vw", "61vw"]} color={"#D01E20"} align={"end"} fontSize={["16px", "16px", "2.5vh", "16px", "20px"]} fontWeight={"bold"} textShadow={"0px 2px 4px 0px rgb(0,0,0,0.25)"}>
              Selamat datang di STATE MAXIMA 2022!<br></br>
              Di sini kamu dapat memilih UKM yang ingin kamu ketahui!
            </Text>
            <Flex mt={"2em"} justifyContent={"end"} alignItems={"center"}>
                  <Link href={"/home/map"}>
                    <a>
                      <Button style={{ border: "5px  solid rgb(210, 223, 165, 47%)", borderRadius: "20px"}} w={["18em", "18em", "14em", "18em", "18em",]} size={["sm", "sm", "lg", "sm", "md"]} bgColor={"#FF6835"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
                        <Text display={["none", "none", "none", "block", "block"]} color={["white"]}  fontWeight={["black","bold"]}>
                          Pilih UKM & Komunitas
                        </Text>
                        <Text display={["block", "block", "block", "none", "none"]}color={["white"]}  fontWeight={["black","bold"]}>
                          PILIH SEKARANG!
                        </Text>
                      </Button>
                    </a>
                  </Link>
                </Flex>
          </Box>
        </Box>
        <Box display={["none", "block"]} mt={{base:"22vh", lg:"0vh"}} me={["8em","8em","6em","7em","8em"]}>
          <Box>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: 'spring', 
                  bounce: 0.5 }}
                exit={{ scale: 0 }}
            >
              <Text color={"#D01E20"} align={"end"} fontSize={["6xl", "5xl", "9vh", "7xl", "8xl"]} fontWeight={"bold"} textShadow={"0px 0px 8px white"}>
                  STATE
              </Text>
              <Text mt={"-0.3em"} color={"#D01E20"} align={"end"} fontSize={["6xl", "5xl", "6vh", "5xl", "7xl"]}  fontWeight={"bold"} textShadow={"0px 0px 8px white"}>
                  MAXIMA 2022
              </Text>
            </motion.div>
            <Box>
              <Text mt={{base:"1em", lg:"0vh"}} ps={["0em", "20em", "40vw", "55vw", "61vw"]} color={"#D01E20"} align={"end"} fontSize={["16px", "16px", "2.5vh", "16px", "20px"]} fontWeight={"bold"} textShadow={"0px 2px 4px 0px rgb(0,0,0,0.25)"}>
                Selamat datang di STATE MAXIMA 2022!<br></br>
                Di sini kamu dapat memilih UKM yang ingin kamu ketahui!
              </Text>
                <Flex mt={"2.5em"} justifyContent={"end"} alignItems={"center"}>
                  <Link href={"/home/map"}>
                    <a>
                      <Button style={{ border: "5px  solid rgb(210, 223, 165, 47%)", borderRadius: "20px"}} w={["18em", "18em", "14em", "18em", "18em",]} size={["sm", "sm", "lg", "sm", "md"]} bgColor={"#FF6835"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
                        <Text display={["none", "none", "none", "block", "block"]} color={["white"]}  fontWeight={["black","bold"]}>
                          Pilih UKM & Komunitas
                        </Text>
                        <Text display={["block", "block", "block", "none", "none"]}color={["white"]}  fontWeight={["black","bold"]}>
                          PILIH SEKARANG!
                        </Text>
                      </Button>
                    </a>
                  </Link>
                </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  const Body = () => {
    return(
        <Flex minH={"100vh"}>
        <Box w={"full"} mt={"20vh"}>
            <Flex mt={"35vh"} mx={"12em"} justifyContent={"space-between"} alignItems={"center"}>
                {/* <Box>
                    <Button variant={"none"}>
                        <Box>
                            <Text color={"#F7B70C"} align={"end"} fontSize={["6xl", "5xl", "6xl", "4xl", "4xl"]} fontWeight={"bold"} >
                                Add
                            </Text>
                        </Box>
                    </Button>
                </Box>
                <Box>
                    <Button variant={"none"}>
                        <Box>
                            <Text color={"#F7B70C"} align={"end"} fontSize={["6xl", "5xl", "6xl", "4xl", "4xl"]} fontWeight={"bold"} >
                                Add
                            </Text>
                        </Box>
                    </Button>
                </Box>
                <Box>
                    <Button variant={"none"}>
                        <Box>
                            <Text color={"#F7B70C"} align={"end"} fontSize={["6xl", "5xl", "6xl", "4xl", "4xl"]} fontWeight={"bold"} >
                                Add
                            </Text>
                        </Box>
                    </Button>
                </Box> */}
            </Flex>
        </Box>
    </Flex>
    )
  }

  return (
    <Layout>
      <Navbar />
      <Flex minH={["230vh","230vh","430vw","115vw","115vw"]} bgImage={["https://storage.googleapis.com/mxm22-bucket-test/STATE/stateP.webp", "https://storage.googleapis.com/mxm22-bucket-test/STATE/stateP.webp", "https://storage.googleapis.com/mxm22-bucket-test/STATE/stateP.webp", "https://storage.googleapis.com/mxm22-bucket-test/STATE/stateLS.webp", "https://storage.googleapis.com/mxm22-bucket-test/STATE/stateLS.webp"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"} mt={"20vh"}>
          <Header />
          <Body/>
        </Box>
      </Flex>
      <Box w={"full"} position={"absolute"}>
        <Footer />
      </Box>
    </Layout>
  );
};

export default STATE;