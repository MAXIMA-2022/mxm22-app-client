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
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

interface LoginData{
  nim: string
  password: string
}

const login = () => {
  const MaximaLogo = () => {
    return (
      <Center mt={["-3vh", "5vh"]} position={["relative", "absolute"]} left={0} right={0} top={0}>
        <Img display={["none", "block"]} src={"/Register/MaximaLogo.svg"} w={["9rem"]} />
        <Img display={["block", "none"]} src={"/Register/MaximaLogo2.svg"} w={["3rem"]} />
      </Center>
    );
  };

  const LoginForm = () => {
    useEffect(() => {
      if (jwt && !isMyTokenExpired) {
        router.push("/");
      }
    }, []);
    const router = useRouter()
    const jwt = useReadLocalStorage<string | undefined>("token")
    const isMyTokenExpired = isExpired(jwt as string)
    const [, setLocalStorage] = useLocalStorage("token", "");
    const [isButtonLoading, setIsButtonLoading] = useState(false)
    const [error, setError] = useState(undefined)

    const onSubmit: SubmitHandler<any> = async (data: LoginData) => {
    try{
      setIsButtonLoading(true)
      const formData = new FormData()
      formData.append("nim", data.nim)
      formData.append("password", data.password)
      const response = await axios.post(`${process.env.API_URL}/api/mhs/login`, formData)
      Swal.fire(
        'Selamat!',
        'Anda berhasil masuk!',
        'success'
      )
      setLocalStorage(response?.data?.token);
      setIsButtonLoading(false);
      router.push('/')
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
            <Center mt={"4vh"}>
              <Text fontSize={["3xl", "3xl", "3xl", "2xl", "3xl"]} fontWeight={"bold"} color={"#1B4173"}>
                Masuk
              </Text>
            </Center>
            <Center mb={["0em", "0em", "1em"]}>
              <Link href={"/register"}>
                <Text fontSize={["md", "md", "md", "sm", "md"]} color={"#1B4173"} fontWeight={"medium"}>
                  Belum punya akun? <span style={{ color: "#F7B70C", fontWeight: "bold", textDecoration: "underline", cursor: "pointer" }}>Daftar</span>
                </Text>
              </Link>
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
                      {errors.nim !== undefined && (
                        <Text textColor={"red"}>{errors.nim.message}</Text>
                      )}
                    </Box>
                    <Box w={"full"}>
                      <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                        Password
                      </FormLabel>
                      <InputGroup>
                        <Input
                          {...register("password", {
                            required: "Password harap diisi",
                          })}
                          size={"md"}
                          borderColor={"#E2E8F0"}
                          placeholder={"Password"}
                          _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                          type={"password"}
                          name={"password"}
                          textColor={"black"}
                          border={"solid"}
                          borderRadius={["full", "full"]}
                          _hover={{ border: "solid #CBD5E0" }}
                        />
                      </InputGroup>
                      {errors.password !== undefined && (
                          <Text textColor={"red"}>{errors.password.message}</Text>
                      )}
                      <Box display={["block", "block", "block"]}>
                            <Link href={'/forgetPass'}>
                              <Text fontSize={["sm"]} my={"0.5em"} color={"#1B4173"} fontWeight={"medium"}>
                                Lupa kata sandimu? <span style={{ color: "#F7B70C", fontWeight: "bold", textDecoration: "underline", cursor: "pointer" }}>Klik di sini</span>
                              </Text>
                            </Link>
                      </Box>
                    </Box>
                  </Stack>
                </FormControl>
                <Flex w={"100%"} justifyContent={"center"} mt={"2em"} mb={"1em"}>
                  {isButtonLoading === true ? (
                    <Button isLoading w={["full", "full", "auto"]} px={["2.1em"]} borderRadius={"full"} type={"submit"} color={"#fff"} colorScheme={"orange"} bgColor={"#F7B70C"}>
                      MASUK
                    </Button>
                  ) : (
                    <Button w={["full", "full", "auto"]} px={["2.1em"]} borderRadius={"full"} type={"submit"} color={"#fff"} colorScheme={"orange"} bgColor={"#F7B70C"}>
                      MASUK
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
    const router = useRouter();
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

export default login;
