/* eslint-disable react/no-children-prop */
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

//importing local components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
// import MaximaIcon from "../public/Register/MaximaLogo.svg";

//importing chakra ui components
import {
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Button,
  Stack,
  Img,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";

const login: NextPage = () => {
  const MaximaLogo = () => {
    return (
      <Center mt={["-3vh", "5vh"]} position={["relative", "absolute"]} left={0} right={0} top={0}>
        <Img display={["none", "block"]} src={"/Register/MaximaLogo.svg"} w={["9rem"]} />
        <Img display={["block", "none"]} src={"/Register/MaximaLogo2.svg"} w={["3rem"]} />
      </Center>
    );
  };

  const LoginForm = () => {
    return (
      <Flex w={"full"} maxW={["65em", "65em", "65em", "55em", "65em"]} maxH={"auto"} mx={"3em"}>
        <Flex w={"full"} h={"auto"} justifyContent={"space-between"}>
          <Center me={"2em"}>
            <Img src={"/Login/gambar-masuk.png"} w={["38em", "38em", "30em", "30em", "38em"]} />
          </Center>
          <Box
            w={["full", "22em"]}
            h={["full", "auto"]}
            padding={["0 2em", "1.5em 2.5em 1em 2.5em"]}
            borderRadius={["none", "lg"]}
            boxShadow={["none", "-1.2px 5px 4px 0px rgb(0,0,0,0.25)"]}
            bgColor={"#fff"}
            justifyContent={"center"}
            alignItems={"center"}
            blur={[0, 15]}
            border={["none", "1px solid rgb(27, 65, 115, 0.25)"]}
            overflowY={"auto"}
            zIndex={1}
          >
            <Center>
              <Text fontSize={["3xl", "3xl", "3xl", "2xl", "3xl"]} fontWeight={"bold"} color={"#1B4173"}>
                Masuk
              </Text>
            </Center>
            <Center mb={"1em"}>
              <Text fontSize={["md", "md", "md", "sm", "md"]} color={"#1B4173"} fontWeight={"medium"}>
                Belum punya akun? <span style={{ color: "#F7B70C", fontWeight: "bold", textDecoration: "underline" }}>Daftar</span>
              </Text>
            </Center>
            <Box>
              <form>
                <FormControl>
                  <Stack direction={["column"]} spacing={[5, 4]}>
                    <Box w={"full"}>
                      <FormLabel display={["none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        NIM
                      </FormLabel>
                      <InputGroup>
                        <InputLeftAddon fontSize={"sm"} m={"auto"} p={2} children={"000000"} bgColor={"#F7B70C"} color={"white"} borderRadius={"full"} />
                        <Input
                          size={"md"}
                          borderLeft={"none"}
                          borderColor={"#E2E8F0"}
                          placeholder={""}
                          _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                          type={"text"}
                          name={"name"}
                          textColor={"black"}
                          border={"solid"}
                          borderRadius={"full"}
                          _hover={{ border: "solid #CBD5E0" }}
                        />
                      </InputGroup>
                    </Box>
                    <Box w={"full"}>
                      <FormLabel display={["none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        Nama Lengkap
                      </FormLabel>
                      <InputGroup>
                        <Input
                          size={"md"}
                          borderColor={"#E2E8F0"}
                          placeholder={"Nama Lengkap"}
                          _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                          type={"text"}
                          name={"name"}
                          textColor={"black"}
                          border={"solid"}
                          borderRadius={["full", "full"]}
                          _hover={{ border: "solid #CBD5E0" }}
                        />
                      </InputGroup>
                      <Text fontSize={["sm"]} my={"0.5em"} color={"#1B4173"} fontWeight={"medium"}>
                        Lupa kata sandimu? <span style={{ color: "#F7B70C", fontWeight: "bold", textDecoration: "underline" }}>Klik di sini</span>
                      </Text>
                    </Box>
                  </Stack>
                </FormControl>
                <Flex w={"100%"} justifyContent={"center"} mt={"2em"} mb={"1em"}>
                  <Button w={["full", "auto"]} px={["2.1em"]} borderRadius={"full"} type={"submit"} color={"#fff"} colorScheme={"orange"} bgColor={"#F7B70C"}>
                    MASUK
                  </Button>
                </Flex>
              </form>
            </Box>
          </Box>
        </Flex>
      </Flex>
    );
  };

  const Footer = () => {
    const router = useRouter();
    return (
      <Center position={["relative", "absolute"]} left={0} right={0} bottom={["", 0]} mb={["3vh", "5vh"]} mt={["8vh", "0"]}>
        <Text color={"#1B4173"} fontSize={"sm"} fontWeight={"bold"}>
          MAXIMA 2022
        </Text>
      </Center>
    );
  };

  return (
    <Layout>
      <Flex minH={"100vh"} bgColor={"white"}>
        <Box w={"full"} zIndex={"0"}>
          <Box mt={"9vh"}>
            <MaximaLogo />
          </Box>
          <Center position={["relative", "absolute"]} left={0} right={0} top={0} bottom={0}>
            <LoginForm />
          </Center>
          <Footer />
        </Box>
      </Flex>
    </Layout>
  );
};

export default login;
