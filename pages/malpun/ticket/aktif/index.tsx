/* eslint-disable react/no-children-prop */
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

//importing local components
import Layout from "../../../../components/Layout";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img, Tabs, TabList, TabPanels, Tab, TabPanel, Container, List, ListItem, ListIcon, OrderedList, UnorderedList, useMediaQuery, FormControl, FormLabel, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import register from "../../../register";

const aktif: NextPage = () => {
  interface TicketData{
      name: string
      email: string
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isButtonLoading, setIsButtonLoading] = useState(false)

  const Heading = () => {
    return(
        <Box mt={["21vh", "18.5vh", "22vh", "22vh", "22vh"]}>
            <Center display={["none", "none", "none", "flex", "flex"]}>
                <Box position={"absolute"} mt={"15vw"}>
                    <Img src={"/headingLamp.png"} w={["120vh"]}/>
                </Box>
            </Center>
            <Center display={["flex", "flex","none", "none", "none"]}>
                <Box position={"absolute"} mt={["15vh","20vh","22vh","12.5vh","12.5vh"]}>
                    <Img src={"/headingLampP.png"} w={["43.5vh","57.5vh","52.5vh","52.5vh","52.5vh"]}/>
                </Box>
            </Center>
            <Center display={["none", "none", "flex", "flex", "flex"]}>
                <Img src={"/heading.svg"} w={"85vh"}/>
            </Center>
            <Center display={["flex", "flex","none", "none", "none"]}>
                <Img src={"/headingP.svg"} w={["42.5vh","52.5vh","50vh","42.5vh","42.5vh"]}/>
            </Center>
        </Box>
    )
  }

  const Body = () => {
    return(
        <Flex mt={["35vh","42.5vh","32vh","40vh","35vh"]} display={["block", "block", "flex", "flex", "flex"]} w={"full"}>
        <Flex display={["block", "block", "flex", "flex", "flex"]} w={"full"} h={"auto"} justifyContent={"center"}>
          <Box
            w={["full", "full", "35em", "55em", "59em"]}
            h={["full", "auto"]}
            padding={["0 0em", "0 0em", "1.5em 2.5em 1em 2.5em", "1.5em 2.5em 1em 2.5em", "1.5em 2.5em 1em 2.5em"]}
            borderRadius={["none", "none", "lg", "lg", "lg"]}
            justifyContent={"center"}
            alignItems={"center"}
            zIndex={0}
          >
            <Center mt={["39vh","40.5vh","2vh","1vh","4vh"]}>
              <Text fontSize={["2xl", "2xl", "4xl", "3xl", "4xl"]} fontWeight={"bold"} color={"#1B4173"}>
                Detail Pembeli
              </Text>
            </Center>
            <Box mt={"3vh"}>
              <form>
                <Center>
                  <FormControl w={["32.5vh","20em","30em","30em","30em"]}>
                    <Stack direction={["column"]} spacing={[4, 4]}>
                      <Box w={"full"}>
                        <FormLabel display={["block"]} fontSize={["md","md","lg","lg","lg"]} textColor={"#1B4173"} fontWeight={"semibold"}>
                          Nama Lengkap
                        </FormLabel>
                        <InputGroup>
                          <Input
                          //   {...register("nim", {
                          //     required: "NIM harap diisi",
                          //   })}
                            h={["4.5vh","2.25em","3em","2.5em","2.5em"]}
                            borderColor={"#1B417380"}
                            placeholder={"Nama Lengkap"}
                            _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                            type={"text"}
                            name={"name"}
                            textColor={"black"}
                            border={"solid"}
                            _hover={{ border: "solid #CBD5E0" }}
                            style={{borderRadius: "50px"}}
                          />
                        </InputGroup>
                        {/* {errors.nim !== undefined && (
                          <Text textColor={"red"}>{errors.nim.message}</Text>
                        )} */}
                      </Box>
                      <Box w={"full"}>
                      <FormLabel display={["block"]} fontSize={["md","md","lg","lg","lg"]} textColor={"#1B4173"} fontWeight={"semibold"}>
                          NIM
                        </FormLabel>
                      <InputGroup>
                        <InputLeftAddon fontSize={"sm"} m={"auto"} p={2} h={["4.5vh","2.25em","3em","2.8em","2.8em"]} children={"000000"} bgColor={"#F7B70C"} color={"white"} borderRadius={"full"} />
                        <Input
                        //   {...register("nim", {
                        //     required: "NIM harap diisi",
                        //   })}
                          h={["4.5vh","2.25em","3em","2.5em","2.5em"]}
                          borderLeft={"none"}
                          borderColor={"#1B417380"}
                          placeholder={""}
                          _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                          type={"text"}
                          name={"nim"}
                          textColor={"black"}
                          border={"solid"}
                          borderRadius={"full"}
                          _hover={{ border: "solid #CBD5E0" }}
                        />
                      </InputGroup>
                      {/* {errors.nim !== undefined && (
                        <Text textColor={"red"}>{errors.nim.message}</Text>
                      )} */}
                    </Box>
                      <Box w={"full"}>
                        <FormLabel display={["block"]} fontSize={["md","md","lg","lg","lg"]}textColor={"#1B4173"} fontWeight={"semibold"}>
                          Email Student
                        </FormLabel>
                        <InputGroup>
                          <Input
                          //   {...register("password", {
                          //     required: "Password harap diisi",
                          //   })}
                          h={["4.5vh","2.25em","3em","2.5em","2.5em"]}
                            borderColor={"#1B417380"}
                            placeholder={"Email Student"}
                            _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                            type={"email"}
                            name={"email"}
                            textColor={"black"}
                            border={"solid"}
                            _hover={{ border: "solid #CBD5E0" }}
                            style={{borderRadius: "50px"}}
                          />
                        </InputGroup>
                        {/* {errors.password !== undefined && (
                            <Text textColor={"red"}>{errors.password.message}</Text>
                        )} */}
                      </Box>
                    </Stack>
                  </FormControl>
                </Center>
                <Flex justifyContent={["center","center","center","end","end"]} mt={["2em","2em","2em","1em","0em"]} mb={"1em"}>
                  {isButtonLoading === true ? (
                    <Button isLoading w={["auto"]} px={["2.1em"]} borderRadius={"full"} type={"submit"} color={"#1B4173"} border={"1px solid #1B417380"}>
                      Submit
                    </Button>
                  ) : (
                    <Button variant={"none"} w={["auto"]} p={["0 2em","0 2em","1.5em 2em", "0 2em", "0 2em"]} borderRadius={"full"} type={"submit"} color={"#1B4173"} border={"2px solid #1B417380"} _hover={{bgColor: "#1B4173", color: "#fff"}}>
                      <Text fontSize={["lg","lg","lg","lg","lg"]}>
                          Submit
                      </Text>
                    </Button>
                  )}
                </Flex>
              </form>
            </Box>
          </Box>
        </Flex>
      </Flex>
    )
  }

  const BackButton = () => {
    const router = useRouter();
    return (
      <>
        <Flex w={"auto"} m={["-3.7rem 0rem", "-3.7rem 1rem"]} position={"sticky"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
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
              bgColor={"#F7B70C"}
              border={["5px solid white", "5px solid white", "4px solid white", "4px solid white", "4px solid white"]}
              borderRadius={"full"}
              shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
            >
              <Img src={"https://storage.googleapis.com/mxm22-bucket-test/expandLeft.svg"} w={["2rem", "2rem", "2rem", "2rem", "2rem"]} h={["1.2rem", "1.2rem", "2rem", "2rem", "2rem"]} />
            </Center>
          </Button>
        </Flex>
      </>
    );
  };

  return (
    <Layout>
      <Navbar />
      <Flex minH={["100vh","115vh","100vh","100vh","100vh"]} bgImage={["/formFullBgP.png","/formFullBgP.png","/formFullBgP.png","/formFullBgLs.png","/formFullBgLs.png"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"}>
          {/* <Heading /> */}
          <Body />
        </Box>
      </Flex>
      {/* <Box w={"full"} position={"absolute"}>
        <Footer />
      </Box> */}
    </Layout>
  );
};

// export async function getStaticProps(){
//   const { data } = await axios.get(`${process.env.API_URL}/api/chapter`)
//   return{
//     props:{
//       data: data || {},
//     }
//   }
// }

export default dynamic(() => Promise.resolve(aktif), { 
  ssr: false 
})