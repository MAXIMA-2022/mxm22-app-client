import Link from "next/link";

//importing local components
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MaximaIconP from "../../public/maximaIconP.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img, HStack } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isExpired } from "react-jwt";
import { useReadLocalStorage } from "usehooks-ts";
import axios from "axios";
import { motion } from "framer-motion";
import { useUserContext } from "../../useContext/UserContext";

const STATE = () => {
  const router = useRouter()
  const jwt = useReadLocalStorage("token");
  const isMyTokenExpired = isExpired(jwt as string);
  const [toggle, setToggle] = useState(0)
  const { nim } = useUserContext()
  const [regis, setRegis] = useState([])
  const [state, setState] = useState([])
  const headers = {
    "x-access-token": jwt! as string,
  };

  useEffect(() => {
    if (!jwt || isMyTokenExpired) {
      router.push("/login");
    }
    try{
      const fetchRegis = async () => {
        const result = await axios.get(`${process.env.API_URL}/api/stateReg/${nim}`, { headers })
        const response = await axios.get(`${process.env.API_URL}/api/state`, { headers })
        setState(response.data)
        setRegis(result.data)
        console.log(result.data)
      }
      const fetchToggle = async () => {
        const res = await axios.get(`${process.env.API_URL}/api/toggle`)
        setToggle(res.data[8].toggle)
      }
      fetchRegis()
      fetchToggle()
    } catch(err: any) {
      console.log(err)
    }
  },[nim]);
  
  const Header = () => {
    return (
      <Box>  
        <Box display={["block","block", "none"]} mt={10}>
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
                  <Link href={"/state/pilihstate"}>
                    <a>
                      <Button style={{ border: "5px  solid rgb(210, 223, 165, 47%)", borderRadius: "20px"}} w={["18em", "18em", "14em", "18em", "18em",]} size={["sm", "sm", "lg", "sm", "md"]} bgColor={"#FF6835"} shadow={"0px 2.5px 4px 0px rgb(0,0,0,0.2)"}>
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
        <Box display={["none","none", "block"]} mt={{base:"22vh", lg:"0vh"}} me={["8em","8em","6em","7em","8em"]}>
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
                  <Link href={"/state/pilihstate"}>
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
    
    return(
        <Flex minH={"100vh"} id={"state"}>
        <Box w={"full"} mt={["25vh","10vh","20vh","20vh","10vh"]}>
            <Stack direction={["column","column","column","row"]} spacing={["5em","10em","10em","0em","0em"]} mt={["15vh","35vh","35vh","25vh","28.5vw"]} mx={["0em","0em","0em","0em","8em"]} justifyContent={["space-between","space-between","center","space-evenly","space-between"]} alignItems={"center"}>
              <>
                {regis.map((item: any, index) => (
                  <Center key={index} w={["12.5em","15em","25em","12.5em","17.5em"]} h={["12.5em","15em","25em","12.5em","17.5em"]} bgColor={"white"} borderRadius={"full"} boxShadow={"0px 0px 35px 10px rgb(255,255,255,0.5)"}>
                    <Center w={["12.5em","15em","25em","12.5em","17.5em"]} h={["12.5em","15em","25em","12.5em","17.5em"]} bgColor={success ? "rgb(0,255,25,0.26)": fail ? "rgb(255,0,0,0.33)" : "white"} borderRadius={"full"} boxShadow={"0px 0px 35px 10px rgb(255,255,255,0.5)"}>
                      <Box>
                        <Link href={"/state/absenAwal"}>
                          <Center m={"1.5em"} bgColor={"white"} borderRadius={"full"}>
                            <Img src={item.stateLogo} borderRadius={"full"}/>
                          </Center>
                        </Link>
                      </Box> 
                    </Center>
                  </Center>
                ))}
              </>
            </Stack>
            <HStack  justifyContent={'center'} alignItems={'center'} spacing={5} mt={20}>
              <Link href={'/state/absenAwal'}>
                <Button
                  style={{ border: "5px  solid rgb(210, 223, 165, 47%)", borderRadius: "20px"}}
                  color={"white"}
                  size={["sm", "sm", "lg", "sm", "md"]} bgColor={"#FF6835"} boxShadow={"0 2.5px 4px 0px rgb(0,0,0,0.25)"}
                >
                  Absensi Awal
                </Button>
              </Link>
              <Link href={'/state/absenAkhir'}>
                <Button
                  style={{ border: "5px  solid rgb(210, 223, 165, 47%)", borderRadius: "20px"}} 
                  color={"white"}
                  size={["sm", "sm", "lg", "sm", "md"]} bgColor={"#FF6835"} boxShadow={"0 2.5px 4px 0px rgb(0,0,0,0.25)"}
                >
                    Absensi Akhir
                </Button>
              </Link>
            </HStack>
        </Box>
    </Flex>
    )
  }

  const BackButton = () => {
    const router = useRouter();
    return (
      <>
        <Flex w={"25%"} m={["-3.7rem 0rem", "-3.7rem 1rem"]} position={"sticky"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
          <Button
            mt={["8vh","8vh","6.5vw","11.5vh","8vh"]}
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

  const DownArrow = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
      onscroll = (e: any) => {
        if (e.deltaY > 0 || window.scrollY > 0) {
          setIsScrolling(true);
        } else {
          setTimeout(async () => {
            setIsScrolling(false);
          }, 5000);
        }
      };
    }),
      [];
  
    const revealing = {
      visible: {
        opacity: 1,
        transition: {
          delay: 0,
        },
      },
      hidden: {
        opacity: 0,
      },
    };

    return(
        <Center position={"fixed"} left={0} bottom={0} right={0} mb={"2em"}>
          <motion.div variants={revealing} initial={"hidden"} animate={"visible"}>
            <Box w={"10em"} opacity={isScrolling ? "0%" : "100%"} transition={"0.2s"}>
              <motion.div
                animate={{
                  y: [5, 0, 5, 0, 5],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Text fontSize={"xl"} fontWeight={"black"} align={"center"} color={"#D01E20"} textShadow={"0px 0px 2px white"}>
                  Scroll Down
                </Text>
                <Text align={"center"} fontSize={"xl"} mt={"-0.3em"} color={"#D01E20"} textShadow={"0px 0px 2px white"}>
                  <TriangleDownIcon />
                </Text>
              </motion.div>
            </Box>
          </motion.div>
        </Center>
    )
  }

  const ScrollingButton = () => {
    return(
      <>
        <Stack w={"8%"} h={"auto"} spacing={0} mt={"45vh"} direction={"column"} position={"fixed"} alignItems={"center"} right={0} top={0} bottom={0} zIndex={"99"}>
        <Link href={"#top"}>
            <Button
              variant={"none"}
            >
              <Center
                w={["1.5rem"]}
                h={["1.5rem"]}
                bgColor={"#FF6835"}
                border={["3px solid white"]}
                borderRadius={"full"}
                shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
                transition={"0.2s ease-in-out"}
              >
                <Text color={"white"} textAlign={"center"} fontSize={"10px"} transform={"rotate(180deg)"}>
                  <TriangleDownIcon />
                </Text>
              </Center>
            </Button>
          </Link>
          <Link href={"#state"}>
            <Button
              variant={"none"}
            >
              <Center
                w={["1.5rem"]}
                h={["1.5rem"]}
                bgColor={"#FF6835"}
                border={["3px solid white" ]}
                borderRadius={"full"}
                shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
              >
                <Text color={"white"} textAlign={"center"} fontSize={"10px"} transform={"rotate(0deg)"}>
                  <TriangleDownIcon />
                </Text>
              </Center>
            </Button>
          </Link>
        </Stack>
      </>
    )
  }

  return (
    <Layout>
      <Navbar />
      <Flex minH={["250vh","275vh","300vh","115vw","115vw"]} bgImage={["https://storage.googleapis.com/mxm22-bucket-test/STATE/STATETanpaBungaP.png", 
      "https://storage.googleapis.com/mxm22-bucket-test/STATE/STATETanpaBungaP.png", 
      "https://storage.googleapis.com/mxm22-bucket-test/STATE/STATETanpaBungaP.png", 
      "https://storage.googleapis.com/mxm22-bucket-test/STATE/STATETanpaBungaLs.webp", 
      "https://storage.googleapis.com/mxm22-bucket-test/STATE/STATETanpaBungaLs.webp"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"} mt={"20vh"}>
          <Header />
          <Body />
          <ScrollingButton/>
          <DownArrow />
        </Box>
      </Flex>
        <BackButton />
        <Footer />
    </Layout>
  );
};

export default STATE;