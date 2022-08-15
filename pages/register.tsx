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
} from "@chakra-ui/react";

const register: NextPage = () => {
  const MaximaLogo = () => {
    return (
      <Center>
        <Img src={"/Register/MaximaLogo.svg"} w={["9rem"]} />
      </Center>
    );
  };

  const RegisterForm = () => {
    return (
      <Flex padding={"1.5em 2.5em 2em 2.5em"} borderRadius={"lg "} boxShadow={"-1.2px 5px 4px 0px rgb(0,0,0,0.25)"} bgColor={"#fff"} justifyContent={"center"} alignItems={"center"} blur={15} border={"1px solid rgb(27, 65, 115, 0.25)"}>
        <Box>
          <Center>
            <Text fontSize={"3xl"} fontWeight={"bold"} color={"#1B4173"}>
              Daftar Sekarang
            </Text>
          </Center>
          <Center>
            <Text fontSize={"md"} color={"#1B4173"} fontWeight={"medium"}>
              Sudah punya akun? <span style={{ color: "#F7B70C", fontWeight: "bold" }}>Masuk</span>
            </Text>
          </Center>
          <Box mt={"1em"}>
            <form>
              <FormControl>
                <Stack direction={"row"} spacing={4}>
                  <Box w={"25em"}>
                    <FormLabel textColor={"#1B4173"} fontWeight={"semibold"}>
                      Nama Lengkap
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none" />
                      <Input borderColor={"#E2E8F0"} placeholder={""} type={"text"} name={"name"} textColor={"black"} border={"solid"} borderRadius={"full"} _hover={{ border: "solid #CBD5E0" }} />
                    </InputGroup>
                  </Box>
                  <Box w={"18em"}>
                    <FormLabel textColor={"#1B4173"} fontWeight={"semibold"}>
                      NIM
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none" />
                      <InputLeftAddon children={"000000"} bgColor={"#F7B70C"} color={"white"} borderRadius={"full"} />
                      <Input borderLeft={"none"} borderColor={"#E2E8F0"} placeholder={""} type={"text"} name={"name"} textColor={"black"} border={"solid"} borderRadius={"full"} _hover={{ border: "solid #CBD5E0" }} />
                    </InputGroup>
                  </Box>
                </Stack>
                <FormLabel mt={"1em"} fontFamily="rubik" textColor={"black"}>
                  Role
                </FormLabel>
                <Select borderColor={"#CBD5E0"} placeholder="Pilih Role" name="role" textColor={"black"} border={"solid"}>
                  <option value="panitia">Panitia</option>
                  <option value="organisator">Organisator</option>
                </Select>
              </FormControl>
              <Flex w={"100%"} justifyContent={"center"} py={3} mt={"0.5em"}>
                <Button px={"2.1em"} borderRadius={"full"} type={"submit"} color={"#fff"} colorScheme={"orange"} bgColor={"#F7B70C"}>
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
      <Center position={"absolute"} left={0} right={0} bottom={0} mb={"5vh"}>
        <Text color={"#1B4173"} fontSize={"sm"} fontWeight={"bold"}>
          MAXIMA 2022
        </Text>
      </Center>
    );
  };

  return (
    <Layout>
      <Flex minH={"100vh"} bgColor={"white"} bgImage={["/Welcoming/HoMEWelcomingP.png", "/Register/register.jpg", "/Register/register.jpg", "/Register/register.jpg"]} bgPosition={"center"} bgSize={"contain"} bgRepeat={"no-repeat"}>
        <Box w={"full"} zIndex={"0"}>
          <Box mt={"9vh"}>
            <MaximaLogo />
          </Box>
          <Center position={"absolute"} left={0} right={0} top={0} bottom={0}>
            <RegisterForm />
          </Center>
          <Footer />
        </Box>
      </Flex>
    </Layout>
  );
};

export default register;
