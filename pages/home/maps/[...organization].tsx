import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//importing local components
import Layout from "../../../components/Layout";
import Navbar from "../../../components/Navbar";
import MaximaIconP from "../../../public/maximaIconP.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img } from "@chakra-ui/react";

const MapsInfo: NextPage = () => {
  const router = useRouter();
  const { info }: any = router.query;

  const capitalize = (s: any) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const Header = () => {
    return (
      <>
        <Center position={"absolute"} mt={["47rem", "47rem", "71vh", "22.5rem", "35rem"]}>
          <Box transform={["scale(0.9)", "scale(0.9)", "scale(0.37)", "scale(0.29)", "scale(0.28)"]} zIndex={"1"}>
            <Img src={"/mapsItem1.png"} />
          </Box>
        </Center>
        <Center mt={["47rem", "47rem", "130vh", "128vh", "130vh"]}>
          <Box position={"absolute"} transform={["scale(0.9)", "scale(0.9)", "scale(0.7)", "scale(0.6)", "scale(0.8)"]} zIndex={"2"}>
            <Img src={"/table.png"} />
          </Box>
        </Center>
        <Center mt={["47rem", "47rem", "17vh", "15vh", "18vh"]}>
          <Box position={"absolute"} transform={["scale(0.9)", "scale(0.9)", "scale(0.6)", "scale(0.6)", "scale(0.9)"]} zIndex={"3"}>
            <Img src={"/chair.png"} />
          </Box>
        </Center>
        <Center mt={["47rem", "47rem", "27vh", "29vh", "27vh"]}>
          <Box position={"absolute"} transform={["scale(0.9)", "scale(0.9)", "scale(0.78)", "scale(0.57)", "scale(0.75)"]} zIndex={"1"}>
            <Img src={"/shade.png"} />
          </Box>
        </Center>
      </>
    );
  };

  return (
    <Layout>
      <Navbar />
      <Flex mt={"-45vh"} minH={"100vh"} bgImage={"/organisatorBgLs.png"} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"} h={"200vh"} zIndex={"0"}>
          <Header />
        </Box>
      </Flex>
    </Layout>
  );
};

export default MapsInfo;
