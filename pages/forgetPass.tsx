/* eslint-disable react/no-children-prop */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect} from "react";

//importing local components
import Layout from "../components/Layout";

//importing chakra ui components
import {
  Box,
  Flex,
  Center,
  Text,
  Button,
  Stack,
  Img,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { isExpired } from "react-jwt";
import { useReadLocalStorage } from "usehooks-ts";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

interface LoginData{
  nim: string
}

const ForgetPass = () => {
  const MaximaLogo = () => {
    return (
      <Center mt={["-3vh", "5vh"]} position={["relative", "absolute"]} left={0} right={0} top={0}>
        <Img display={["none", "block"]} src={"/Register/MaximaLogo.svg"} w={["9rem"]} />
        <Img display={["block", "none"]} src={"/Register/MaximaLogo2.svg"} w={["3rem"]} />
      </Center>
    );
  };

  const LoginForm = () => {
    const [toggle, setToggle] = useState(0)
    useEffect(() => {
      if (jwt && !isMyTokenExpired) {
        router.push("/");
      }
      try {
        const fetchToggle = async () => {
          const res = await axios.get(`${process.env.API_URL}/api/toggle`)
          setToggle(res.data[11].toggle)
        }
        fetchToggle()
      } catch(err: any) {
        console.log(err)
      }
    }, []);
    const router = useRouter()
    const jwt = useReadLocalStorage<string | undefined>("token")
    const isMyTokenExpired = isExpired(jwt as string)
    const [isButtonLoading, setIsButtonLoading] = useState(false)
    const [error, setError] = useState(undefined)

    const onSubmit: SubmitHandler<any> = async (data: LoginData) => {
    try{
      setIsButtonLoading(true)
      const formData = new FormData()
      formData.append("nim", data.nim)
      if(toggle === 1){
        const response = await axios.post(`${process.env.API_URL}/api/mhs/sendEmail`, formData)
        Swal.fire({
          icon: 'success',
          title: `${response.data.message}`,
        })
      } else {
        await axios.post(`${process.env.API_URL}/api/getToken/`, formData)
        Swal.fire({
          title: '<strong>Lupa Password</strong>',
          icon: 'info',
          html:
            'Silakan hubungi admin Line Official Account MAXIMA UMN untuk mendapatkan Token dengan cara klik tombol di bawah!',
          showCloseButton: true,
          focusConfirm: false,
          confirmButtonText: 'LINE',
          confirmButtonColor: "#00B900",
          confirmButtonAriaLabel: 'Thumbs up, great!',
        }).then((result) => {
          if(result.isConfirmed){
            router.push('https://liff.line.me/1645278921-kWRPP32q/?accountId=vuu3203w')
          }
        })
      }
      setIsButtonLoading(false);
      router.push('/resetPass')
    } catch(err: any) {
      Swal.fire({
        icon: 'error',
        title: `${err.response.data.message}`,
      })
      console.log(err.response.data.message);
      setError(err.response.data.message);
      setIsButtonLoading(false);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

    return (
      <Flex display={["block", "block", "flex", "flex", "flex"]} w={"full"} maxW={["65em", "65em", "65em", "55em", "65em"]} maxH={"auto"} mx={"3em"}>
        <Flex display={["block", "block", "flex", "flex", "flex"]} w={"full"} h={"auto"} justifyContent={"space-between"}>
          <Center display={["none", "none", "flex", "flex", "flex"]} me={"2em"}>
            <Img src={"https://storage.googleapis.com/mxm22-bucket-test/gambar-masuk.png"} w={["38em", "38em", "30em", "30em", "38em"]} />
          </Center>
          <Box
            w={["full", "full", "22em", "22em", "22em"]}
            h={["full", "auto"]}
            padding={["0 0em", "0 0em", "1.5em 2.5em 1em 2.5em", "1.5em 2.5em 1em 2.5em", "1.5em 2.5em 1em 2.5em"]}
            borderRadius={["none", "none", "lg", "lg", "lg"]}
            boxShadow={["none", "none", "-1.2px 5px 4px 0px rgb(0,0,0,0.25)"]}
            bgColor={"#fff"}
            justifyContent={"center"}
            alignItems={"center"}
            blur={[0, 15]}
            border={["none", "none", "1px solid rgb(27, 65, 115, 0.25)"]}
            overflowY={"auto"}
            zIndex={1}
          >
            <Center mt={"4vh"} mb={5}>
              <Text fontSize={["3xl", "3xl", "3xl", "2xl", "3xl"]} fontWeight={"bold"} color={"#1B4173"}>
                Lupa Password
              </Text>
            </Center>
            <Center display={["flex", "flex", "none"]} my={"1.5em"}>
              <Img display={["block", "block", "none"]} src={"https://storage.googleapis.com/mxm22-bucket-test/gambar-masuk-mobile.png"} w={"auto"} />
            </Center>
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl onSubmit={handleSubmit(onSubmit)}>
                  <Stack direction={["column"]} spacing={[5, 4]}>
                    <Box w={"full"}>
                      <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        NIM
                      </FormLabel>
                      <InputGroup>
                        <InputLeftAddon fontSize={"sm"} m={"auto"} p={2} children={"000000"} bgColor={"#F7B70C"} color={"white"} borderRadius={"full"} />
                        <Input
                          {...register("nim", {
                            required: "NIM harap diisi",
                          })}
                          size={"md"}
                          borderLeft={"none"}
                          borderColor={"#E2E8F0"}
                          placeholder={"NIM"}
                          _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                          type={"text"}
                          name={"nim"}
                          textColor={"black"}
                          border={"solid"}
                          borderRadius={"full"}
                          _hover={{ border: "solid #CBD5E0" }}
                        />
                      </InputGroup>
                      {errors.nim !== undefined && (
                        <Text textColor={"red"}>{errors.nim.message}</Text>
                      )}
                    </Box>
                  </Stack>
                </FormControl>
                <Flex w={"100%"} justifyContent={"center"} mt={"2em"} mb={"1em"}>
                  {isButtonLoading === true ? (
                    <Button isLoading w={["full", "full", "auto"]} px={["2.1em"]} borderRadius={"full"} type={"submit"} color={"#fff"} colorScheme={"orange"} bgColor={"#F7B70C"}>
                      KIRIM
                    </Button>
                  ) : (
                    <Button w={["full", "full", "auto"]} px={["2.1em"]} borderRadius={"full"} type={"submit"} color={"#fff"} colorScheme={"orange"} bgColor={"#F7B70C"}>
                      KIRIM
                    </Button>
                  )}
                </Flex>
              </form>
            </Box>
          </Box>
        </Flex>
      </Flex>
    );
  };

  const Footer = () => {
    return (
      <Center position={["absolute"]} left={0} right={0} bottom={[0]} mb={["5vh", "5vh"]} mt={["8vh", "0"]}>
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
          <Center position={["absolute"]} left={0} right={0} top={0} bottom={0}>
            <LoginForm />
          </Center>
          <Footer />
        </Box>
      </Flex>
    </Layout>
  );
};

export default ForgetPass;
