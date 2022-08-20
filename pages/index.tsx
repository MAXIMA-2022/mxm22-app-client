import Image from "next/image";
import Link from "next/link";

//importing local components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MaximaIconP from "../public/maximaIconP.svg";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Stack } from "@chakra-ui/react";

const Welcoming = () => {
  const Header = () => {
    return (
      <Center>
        <Box display={["block", "none"]}>
          <Center>
            <Image src={MaximaIconP} alt={"MaximaLogo"} />
          </Center>
          <Box>
            <Text color={"white"} align={"center"} fontSize={"30px"} fontWeight={"bold"} textShadow={["0px 2px 3.5px rgb(0,0,0,0.7)"]}>
              SELAMAT DATANG
            </Text>
            <Text color={"white"} align={"center"} fontSize={"44px"} fontWeight={"bold"} textShadow={["0px 2px 3.5px rgb(0,0,0,0.7)"]}>
              MAXIMERS!
            </Text>
          </Box>
        </Box>
        <Box display={["none", "block"]}>
          <Box>
            <Text color={"white"} align={"center"} fontSize={["6xl", "5xl", "6xl", "6xl", "7xl"]} fontWeight={"bold"} textShadow={["0px 2px 3.5px rgb(0,0,0,0.7)"]}>
              SELAMAT DATANG,
            </Text>
            <Text mt={"-0.5em"} color={"white"} align={"center"} fontSize={"50px"} fontWeight={"bold"} textShadow={["0px 2px 3.5px rgb(0,0,0,0.7)"]}>
              MAXIMERS!
            </Text>
          </Box>
        </Box>
      </Center>
    );
  };

  const FixedButton = () => {
    const linksData = [
      {
        name: "TWIBBON",
        href: "/twibbon",
      },
      {
        name: "CAMPAIGN",
        href: "/campaign",
      },
    ];
    return (
      <Flex justifyContent={"end"} alignItems={"center"}>
        <Stack mt={["6vh", "10vh"]} align={"stretch"} w={["6em", "7em", "9em", "10em", "10.5em"]} spacing={6} zIndex={99}>
          {linksData.map((link) => (
            <Link href={link.href} key={link.name}>
              <Button disabled bgColor={"#F7B70C"} size={["sm", "md", "md", "lg", "lg"]} borderRadius={"10em 0 0 10em"} shadow={"0 4px 4px rgb(0,0,0,0.25)"}>
                <Text w={"full"} color={"white"} textAlign={"end"} fontSize={["xs", "sm", "md", "lg", "xl"]} fontWeight={"extrabold"}>
                  {link.name}
                </Text>
              </Button>
            </Link>
          ))}
        </Stack>
      </Flex>
    );
  };

  const StartButton = () => {
    return (
      <Box position={"absolute"} left={0} bottom={0} right={0} mb={["7vh", "15vh"]}>
        <Center>
          <Link href={"/dialogues"}>
            <Button size={"md"} px={"1.8em"} bgColor={"#F7B70C"} outline={"5px  solid rgb(210, 223, 165, 47%)"} borderRadius={"full"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
              <Text color={["#062D5F", "white"]} fontSize={"20px"} fontWeight={["black", "extrabold"]}>
                START
              </Text>
            </Button>
          </Link>
        </Center>
      </Box>
    );
  };

  const FooterMessage = () => {
    return (
      <Box position={"absolute"} left={0} bottom={0} right={0} mb={"2vh"}>
        <Center>
          <Text color={"white"} fontSize={["10px", "14px", "14px", "16px", "20px"]} fontWeight={"normal"} letterSpacing={1}>
            Ayo berpetualang bersama Maxi dan Xima!
          </Text>
        </Center>
      </Box>
    );
  };

  return (
    <Layout>
      <Navbar />
      <Flex minH={"100vh"} bgImage={["https://i.pinimg.com/564x/a5/2e/3e/a52e3ead549f0fef288d9d074b979df2--computer.jpg","https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas=","https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg","https://storage.googleapis.com/mxm22-bucket-test/1667215277.jpg"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"} mt={"20vh"}>
          <Header />
          <FixedButton />
          <StartButton />
          <FooterMessage />
        </Box>
      </Flex>
      <Box w={"full"} position={"absolute"}>
        <Footer />
      </Box>
    </Layout>
  );
};

export default Welcoming;
