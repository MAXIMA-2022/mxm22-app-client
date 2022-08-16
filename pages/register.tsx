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

const register: NextPage = () => {
  const MaximaLogo = () => {
    return (
      <Center mt={["-3vh", "5vh"]} position={["relative", "absolute"]} left={0} right={0} top={0}>
        <Img display={["none", "block"]} src={"/Register/MaximaLogo.svg"} w={["9rem"]} />
        <Img display={["block", "none"]} src={"/Register/MaximaLogo2.svg"} w={["3rem"]} />
      </Center>
    );
  };

  const RegisterForm = () => {
    return (
      <Flex
        w={["full", "auto"]}
        h={["full", "auto"]}
        // mt={"4vh"}
        padding={["0 2em", "0.8em 2.5em 2em 2.5em"]}
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
        <Box w={"full"}>
          <Center>
            <Text fontSize={["3xl", "3xl", "3xl", "2xl", "3xl"]} fontWeight={"bold"} color={"#1B4173"}>
              Daftar Sekarang
            </Text>
          </Center>
          <Center mb={["2em", "0"]}>
            <Text fontSize={["md", "md", "md", "sm", "md"]} color={"#1B4173"} fontWeight={"medium"}>
              Sudah punya akun? <span style={{ color: "#F7B70C", fontWeight: "bold" }}>Masuk</span>
            </Text>
          </Center>
          <Box w={["full", "40em", "40em", "35em", "40.5em"]} mt={"1em"}>
            <form>
              <FormControl>
                <Stack direction={["column"]} spacing={[5, 4]}>
                  <Stack direction={["column", "row"]} spacing={[5, 4]}>
                    <Box w={["full", "32em", "32em", "32em", "32em"]}>
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
                    </Box>
                    <Box w={["full", "18em"]}>
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
                  </Stack>
                  <Stack direction={["column", "row"]} spacing={[5, 4]}>
                    <Box w={["full", "17em"]}>
                      <FormLabel display={["none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        Tempat Lahir
                      </FormLabel>
                      <InputGroup>
                        <Input
                          size={"md"}
                          borderColor={"#E2E8F0"}
                          placeholder={"Tempat lahir"}
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
                    <Box w={["full", "full", "10.5em", "9.5em", "14em"]}>
                      <FormLabel display={["none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        Tanggal Lahir
                      </FormLabel>
                      <InputGroup>
                        <Input
                          size={"md"}
                          borderColor={"#E2E8F0"}
                          placeholder={"DD/MM/YYYY"}
                          _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                          type={"date"}
                          name={"name"}
                          textColor={"black"}
                          border={"solid"}
                          borderRadius={"full"}
                          _hover={{ border: "solid #CBD5E0" }}
                        />
                      </InputGroup>
                    </Box>
                    <Box w={["full", "18em"]}>
                      <FormLabel display={["none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        Jenis Kelamin
                      </FormLabel>
                      <InputGroup>
                        <Select size={"md"} name={"name"} textColor={"black"} border={"solid"} borderRadius={"full"} _hover={{ border: "solid #CBD5E0" }}>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                      </InputGroup>
                    </Box>
                  </Stack>
                  <Stack direction={["column", "row"]} spacing={[5, 4]}>
                    <Box w={["full", "32em", "32em", "32em", "32em"]}>
                      <FormLabel display={["none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        Program Studi
                      </FormLabel>
                      <Select size={"md"} borderColor={"#E2E8F0"} placeholder={"Pilih prodi"} name={"name"} textColor={"black"} border={"solid"} borderRadius={"full"} _hover={{ border: "solid #CBD5E0" }}>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </Box>
                    <Box w={["full", "18em"]}>
                      <FormLabel display={["none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        Angkatan
                      </FormLabel>
                      <InputGroup>
                        <Select size={"md"} borderColor={"#E2E8F0"} placeholder={"2021"} name={"name"} textColor={"black"} border={"solid"} borderRadius={"full"} _hover={{ border: "solid #CBD5E0" }}>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                      </InputGroup>
                    </Box>
                  </Stack>
                  <Stack direction={["column", "row"]} spacing={[5, 4]}>
                    <Box w={["full"]}>
                      <FormLabel display={["none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        Email Student
                      </FormLabel>
                      <InputGroup>
                        <Input
                          size={"md"}
                          borderRight={"none"}
                          borderColor={"#E2E8F0"}
                          placeholder={"Email"}
                          _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                          type={"text"}
                          name={"name"}
                          textColor={"black"}
                          border={"solid"}
                          borderRadius={"full"}
                          _hover={{ border: "solid #CBD5E0" }}
                        />
                        <InputRightAddon fontSize={"sm"} p={3} children={"@student.umn.ac.id"} bgColor={"#F7B70C"} color={"white"} borderRightRadius={"full"} />
                      </InputGroup>
                    </Box>
                  </Stack>
                  <Stack direction={["column", "row"]} spacing={[5, 4]}>
                    <Box w={["full", "17em"]}>
                      <FormLabel display={["none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        Whatsapp
                      </FormLabel>
                      <InputGroup>
                        <Input
                          size={"md"}
                          borderColor={"#E2E8F0"}
                          placeholder={"Nomor WhatsApp"}
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
                    <Box w={["full", "14em"]}>
                      <FormLabel display={["none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        ID LINE
                      </FormLabel>
                      <InputGroup>
                        <Input
                          size={"md"}
                          borderColor={"#E2E8F0"}
                          placeholder={"ID LINE"}
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
                    <Box w={["full", "18em"]}>
                      <FormLabel display={["none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        Instagram
                      </FormLabel>
                      <InputGroup>
                        <Input
                          size={"md"}
                          borderColor={"#E2E8F0"}
                          placeholder={"Username Instagram"}
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
                  </Stack>
                </Stack>
              </FormControl>
              <Flex w={"100%"} justifyContent={"center"} mt={"2em"}>
                <Button w={["full", "auto"]} px={["2.1em"]} borderRadius={"full"} type={"submit"} color={"#fff"} colorScheme={"orange"} bgColor={"#F7B70C"}>
                  DAFTAR
                </Button>
              </Flex>
            </form>
          </Box>
        </Box>
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
      <Flex minH={"100vh"} bgColor={"white"} bgImage={["", "", "", "/Register/register.jpg"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"} zIndex={"0"}>
          <Box mt={"9vh"}>
            <MaximaLogo />
          </Box>
          <Center position={["relative", "absolute"]} left={0} right={0} top={0} bottom={0}>
            <RegisterForm />
          </Center>
          <Footer />
        </Box>
      </Flex>
    </Layout>
  );
};

export default register;
