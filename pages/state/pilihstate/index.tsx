import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { isExpired } from "react-jwt";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { useUserContext } from "../../../useContext/UserContext";

//importing local components
import Layout from "../../../components/Layout";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Img, Wrap, WrapItem, ListItem, OrderedList, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Divider, InputLeftAddon } from "@chakra-ui/react";
import axios from "axios";

interface ListStateAct {
  id: number;
  name: string;
}

const PilihState = ({ ID }: { ID: string }) => {
  const jwt = useReadLocalStorage<string>("token");
  const [stateData, setStateData] = useState<ListStateAct[]>([]);
  const headers = {
    "x-access-token": jwt!,
  };

  useEffect(() => {
    try {
      const fetchSTATE = async () => {
        const response = await axios.get(`${process.env.API_URL}/api/state`, { headers });
        setStateData(response.data);
        console.log(response.data);
      };
      fetchSTATE();
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  const Header = () => {
    return (
      <>
        <Center w={"full"} h={["32.5rem", "32.5rem", "53rem", "53rem", "67rem"]} />
        <Center position={"absolute"} left={0} right={0} top={0} bottom={0}>
          <Box mt={["25vh", "25vh", "23.5rem", "0rem", "8rem"]} position={"absolute"} transform={["scale(0.5)", "scale(0.5)", "scale(0.55)", "scale(0.7)", "scale(0.8)"]} zIndex={"2"}>
            {/* <Img src={`/organization/Computers/${ID.toLowerCase()}.png`} /> */}
          </Box>
          <Box mt={["35vh", "35vh", "35rem", "15rem", "25rem"]} position={"absolute"} transform={["scale(0.25)", "scale(0.25)", "scale(0.55)", "scale(0.7)", "scale(0.8)"]} zIndex={"3"}>
            <Img src={"/organization/chair.png"} />
          </Box>
          <Box mt={["55vh", "60vh", "50rem", "40rem", "50rem"]} position={"absolute"} transform={["scale(0.55)", "scale(0.55)", "scale(0.65)", "scale(0.7)", "scale(0.75)"]} zIndex={"1"}>
            <Img src={"/organization/shade.png"} />
          </Box>
        </Center>
      </>
    );
  };

  const Body = () => {
    const dataHari = ["1", "2", "3", "4", "5"];
    return (
      <Center mt={["60vh", "65vh", "60vh", "60vh", "60vh"]} mb={"15vh"} zIndex={"4"}>
        <Box>
          <Center mt={"3em"} mb={"0.8em"}>
            <Text color={"#062D5F"} fontSize={["3xl","4xl"]} fontWeight={["extrabold", "bold"]}>
              Pilih STATE
            </Text>
          </Center>
          <Center>
            <Box
              // p={["1em 0.5em", "1em 0.5em", "1.5em 3em", "1em 3em", "4em 4em"]}
              // mt={["17.5vh", "17.5vh", "16vh", "17vh", "14vh"]}
              // mb={["0", "3em", "0"]}
              // w={["85%", "85%", "85%", "55%", "55%"]}
              // h={["77vh", "auto", "76vh", "81vh", "83vh"]}
              // bgColor={"#FDF0CC"}
              borderRadius={"xl"}
              // boxShadow={"0px 3px 3px 3px rgb(0,0,0,0.25)"}
            >
              <Center w={["100%","100%"]} h={["100%"]}>
                <Box w={["92%", "95%", "90vw", "95vw", "70vw"]} maxW={"auto"}>
                    <Tabs variant="soft-rounded" isFitted>
                      <Center>
                      <Box w={["30em", "full", "30em", "35em", "40em"]} p={["0.5em 1em 1em 1em","1.5em"]} bgColor={"#FDF0CC"} borderRadius={["xl","xl","full"]} boxShadow={["none","none","0px 4px 4px 0px rgb(0,0,0,0.25)"]}>
                        <Center mb={"0.5em"} fontSize={["md", "lg", "lg", "lg", "lg"]} fontWeight={"bold"} color={"#D01E20"}>
                          Hari ke
                        </Center>
                        <Center>
                          <Box w={["100%","100%","80%"]}>
                          <TabList>
                            {dataHari.map((hari) => (
                              <Tab key={hari} py={["0.2em","0.5em","0"]} mx={["0.3em", "0.5em", "0.5em", "0.5em", "0.3em"]} fontSize={["lg", "xs", "md", "sm", "2xl"]} color={"#FF6835"} bgColor={"none"} border={"2px solid #FF6835"} _selected={{ color: "#FF6835", bg: "white", border: "3px solid #FF6835" }}>
                                {hari}
                              </Tab>
                            ))}
                          </TabList>
                          </Box>
                        </Center>
                      </Box>
                      </Center>
                      {/* {dataHari.map((hari) => ( */}
                      <TabPanels mt={["1.5em","1.5em","5em"]}>
                        {/* {stateData.map((state, id) => ( */}
                        <TabPanel w={"100%"} mt={"1em"} p={["0.5em 0em 1em 0em","1.5em 0em 1.5em 0em"]} bgColor={"#FDF0CC"} borderRadius={["xl"]}>
                            <Box>
                              <Center>
                                <Text fontSize={["3xl", "3xl", "xl", "2xl", "2xl"]} fontWeight={"black"} color={"#1B4173"} letterSpacing={0.5}>
                                    STATE HARI KE-
                                </Text>
                              </Center>
                              <Center mt={"-0.2em"}>
                                <Text fontSize={["lg", "xs", "sm", "md", "md"]} fontWeight={"bold"} color={"#FF6835"}>
                                    Hari, 01 Bulan 2022
                                </Text>
                              </Center>
                            </Box>
                            <Divider w={"full"} mt={"1em"} mb={"2.5em"} borderWidth={"0.12em"} borderRadius={"full"} borderColor={"white"} opacity={1}/>
                            <Box>
                              <Wrap spacing={["1em","2.5em"]} justify="center" py={"0.5em"}>
                                {/* {organizationData.map((item: any) => {
                                  return (
                                    <> */}
                                      <Link href={"/"}>
                                        <WrapItem
                                          p={["0.8em 0", "0.8em"]}
                                          bgColor={"white"}
                                          borderRadius={["2xl", "lg"]}
                                          shadow={"md"}
                                          transition={"0.1s ease-in-out"}
                                          cursor={"pointer"}
                                          _hover={{
                                            transform: "scale(1.05)",
                                          }}
                                        >
                                          <Center>
                                            <Box>
                                                <Box w={["full"]} h={["9em","10em"]} maxH={"10em"}>
                                              <Center>
                                                  <Img boxSize={["135px","165px"]} objectFit={"contain"} borderRadius={["2xl", "lg"]} />
                                              </Center>
                                                </Box>
                                                <Center w={"10em"} my={["0.5em", "1em"]}>
                                                <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                                  testing
                                                </Text>
                                              </Center>
                                              <Center w={"10em"} my={["0.5em", "1em"]} px={"1em"}>
                                                <Flex w={"full"} h={"1.5em"} bgColor={"#FFCFBF"} borderRadius={"full"} justifyContent={"center"} alignItems={"center"}>
                                                  <Center w={"full"} h={"1.5em"} bgColor={"#FF6835"} borderLeftRadius={"full"}>
                                                    <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} color={"white"}>
                                                      Kuota
                                                    </Text>
                                                  </Center>
                                                  <Center mx={"0.85em"}>
                                                    <Text color={"#FF6835"} fontSize={"xs"} fontWeight={"semibold"} textAlign={"center"}>
                                                      75/100
                                                    </Text>
                                                  </Center>
                                                </Flex>
                                              </Center>
                                            </Box>
                                          </Center>
                                        </WrapItem>
                                      </Link>
                                      <Link href={"/"}>
                                        <WrapItem
                                          p={["0.8em 0", "0.8em"]}
                                          bgColor={"#FFC1C1"}
                                          borderRadius={["2xl", "lg"]}
                                          shadow={"md"}
                                          transition={"0.1s ease-in-out"}
                                          cursor={"pointer"}
                                          _hover={{
                                            transform: "scale(1.05)",
                                          }}
                                        >
                                          <Center>
                                            <Box>
                                                <Box w={["full"]} h={["9em","10em"]} maxH={"10em"}>
                                              <Center>
                                                  <Img boxSize={["135px","165px"]} objectFit={"contain"} borderRadius={["2xl", "lg"]} />
                                              </Center>
                                                </Box>
                                                <Center w={"10em"} my={["0.5em", "1em"]}>
                                                <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                                  testing
                                                </Text>
                                              </Center>
                                              <Center w={"10em"} my={["0.5em", "1em"]} px={"1em"}>
                                                <Flex w={"auto"} h={"1.5em"} px={"0.5em"} bgColor={"#FFFEFE"} borderRadius={"full"} justifyContent={"center"} alignItems={"center"}>
                                                  <Center mx={"0.85em"}>
                                                    <Text color={"#FF6835"} fontSize={"xs"} fontWeight={"semibold"} textAlign={"center"}>
                                                      PENUH
                                                    </Text>
                                                  </Center>
                                                </Flex>
                                              </Center>
                                            </Box>
                                          </Center>
                                        </WrapItem>
                                      </Link>
                                    {/* </>
                                  );
                                })} */}
                              </Wrap>
                            </Box>
                        </TabPanel>
                        {/* ))} */}
                      </TabPanels>
                      {/* ))} */}
                    </Tabs>
                </Box>
              </Center>
            </Box>
          </Center>
        </Box>
      </Center>
    );
  };

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
      <Flex
        position={["absolute", "relative"]}
        h={["70vh", "70vh", "100vh", "100vh", "100vh"]}
        bgImage={["/STATE/PilihSTATEp.png", "/STATE/PilihSTATEP.png", "/STATE/PilihSTATELs.png", "/STATE/PilihSTATELs.png", "/STATE/PilihSTATELs.png"]}
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box w={"full"} zIndex={"0"}>
          {/* <Header /> */}
          <Body />
          <BackButton />
          <Footer />
        </Box>
      </Flex>
    </Layout>
  );
};

PilihState.getInitialProps = async ({ query }: any) => {
  const { ID } = query;
  return {
    ID,
  };
};

export default PilihState;