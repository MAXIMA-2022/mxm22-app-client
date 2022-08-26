import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//importing local components
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MaximaIconP from "../../public/maximaIconP.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img } from "@chakra-ui/react";
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
          <Box mr={5} mt={10}>
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
                      <Button style={{ border: "5px  solid rgb(210, 223, 165, 47%)", borderRadius: "20px"}} w={["18em", "18em", "14em", "18em", "18em",]} size={["sm", "sm", "lg", "sm", "md"]} bgColor={"#FF6835"} boxShadow={"0 2.5px 4px 0px rgb(0,0,0,0.25)"}>
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
    const [success, setSuccess] = useState(false);
    const [fail , setFail] = useState(false);
    
    const addButton = [
      {
        icon: "+",
        label: "Add",
      },
      {
        icon: "+",
        label: "Add",
      },
      {
        icon: "+",
        label: "Add",
      },
    ]
    return(
        <Flex minH={"100vh"}>
        <Box w={"full"} mt={"20vh"}>
            <Stack direction={["column","column","column","row"]} spacing={"10em"} mt={["35vh","35vh","35vh","25vh","28.5vw"]} mx={["0em","0em","0em","0em","8em"]} justifyContent={["space-between","space-between","center","space-evenly","space-between"]} alignItems={"center"}>
              <>
                {addButton.map((item, index) => (
                  <Center key={index} w={["15em","15em","25em","12.5em","17.5em"]} h={["15em","15em","25em","12.5em","17.5em"]} bgColor={"white"} borderRadius={"full"} boxShadow={"0px 0px 35px 10px rgb(255,255,255,0.5)"}>
                    <Center w={["15em","15em","20em","12.5em","17.5em"]} h={["15em","15em","20em","12.5em","17.5em"]} bgColor={success ? "rgb(0,255,25,0.26)": fail ? "rgb(255,0,0,0.33)" : "white"} borderRadius={"full"} boxShadow={"0px 0px 35px 10px rgb(255,255,255,0.5)"}>
                      <Link href={"/state/pilihstate"}>
                        <Button variant={"none"} >
                            <Box>
                              {/* <Center>
                                  <Img src={"/STATE/PilihSTATEP.png"} w={"90%"} h={"90%"} borderRadius={"full"}/>
                              </Center> */}
                              <Center>
                                <Text color={"#F7B70C"} fontSize={["6xl", "5xl", "6xl", "6xl", "7xl"]} fontWeight={"black"} >
                                    {item.icon}
                                </Text>
                              </Center>
                              <Center mt={"-0.5em"}>
                                <Text color={"#F7B70C"} fontSize={["6xl", "5xl", "6xl", "xl", "4xl"]} fontWeight={"bold"} >
                                    {item.label}
                                </Text>
                              </Center>
                            </Box>
                        </Button>
                        </Link>
                      </Center>
                    </Center>
                ))}
                </>
            </Stack>
        </Box>
    </Flex>
    )
  }

  const BackButton = () => {
    const router = useRouter();
    return (
      <>
        <Flex w={"15%"} m={["-3.7rem 0rem", "-3.7rem 1rem"]} position={"sticky"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
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
              bgColor={"#FF6835"}
              border={["5px solid white", "5px solid white", "4px solid white", "4px solid white", "4px solid white"]}
              borderRadius={"full"}
              shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
            >
              <Img src={"https://storage.googleapis.com/mxm22-bucket-test/expandLeft.svg"}w={["2rem", "2rem", "2rem", "2rem", "2rem"]} h={["1.2rem", "1.2rem", "2rem", "2rem", "2rem"]} />
            </Center>
          </Button>
        </Flex>
      </>
    );
  };

  return (
    <Layout>
      <Navbar />
      <Flex minH={["230vh","230vh","430vw","115vw","115vw"]} bgImage={["/STATE/STATETanpaBungaP.png", "/STATE/STATETanpaBungaP.png", "/STATE/STATETanpaBungaP.png", "/STATE/STATETanpaBungaLs.png", "/STATE/STATETanpaBungaLs.png"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"} mt={"20vh"}>
          <Header />
          <Body/>
        </Box>
      </Flex>
        {/* <BackButton /> */}
      <Box w={"full"} position={"absolute"}>
        <Footer />
      </Box>
    </Layout>
  );
};

export default STATE;