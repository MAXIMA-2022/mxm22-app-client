import Image from "next/image";
// import Link from "next/link";
import Link from 'next/link'

//importing local components
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MaximaIconP from "../../public/maximaIconP.svg";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Stack, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isExpired } from "react-jwt";
import { useReadLocalStorage } from "usehooks-ts";
import { useUserContext } from "../../useContext/UserContext";
import axios from "axios";
import Swal from "sweetalert2";

const Malpun = () => {
  const jwt = useReadLocalStorage<string>("token");
  const { nim } = useUserContext()
  const headers = {
    "x-access-token": jwt!,
  };
  const isMyTokenExpired = isExpired(jwt as string);

  const handleRegister = async () => {
    if (!jwt || isMyTokenExpired) {
      Swal.fire({
        title: "Perhatian!",
        text: "Silahkan login terlebih dahulu!",
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    } else {
      try {
        const result = await axios.post(`${process.env.API_URL}/api/malpun/mhs/regis/${nim}`, { headers })
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${result.data.message}`,
            showConfirmButton: false,
            timer: 3000,
        });
      } catch (err: any) {
        console.log(err)
        Swal.fire({
            title: "Perhatian!",
            text: `${err.response.data.message}`,
            icon: "error",
            confirmButtonText: "Coba lagi",
        });
      }
    }
  }

  const StartButton = () => {
    return (
      <Box position={"absolute"} left={0} bottom={0} right={0} mb={["7vh", "15vh"]}>
        <Center>
            <Button onClick={()=>{handleRegister()}} style={{ border: "5px solid rgb(210, 223, 165, 47%)"}} size={"md"} px={"1.8em"} bgColor={"#D01E20"} borderRadius={"full"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
                <Text color={"white"} fontSize={"20px"}>
                    Beli Tiket
                </Text>
            </Button>
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
      <Flex minH={"100vh"} bgImage={["/malpunP.webp","/malpunLs.webp","/malpunLs.webp","/malpunLs.webp"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"} mt={"20vh"}>
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

export default Malpun;
