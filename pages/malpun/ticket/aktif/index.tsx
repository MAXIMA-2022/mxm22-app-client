/* eslint-disable react/no-children-prop */
import type { NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";

//importing local components
import Layout from "../../../../components/Layout";
import Navbar from "../../../../components/Navbar";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Stack, FormControl, FormLabel, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

const aktif: NextPage = () => {
  interface TicketData{
      name: string
      email: string
      nim: string
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isButtonLoading, setIsButtonLoading] = useState(false)

  interface TicketData{
      name: string
      email: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketData>();

  const onSubmit: SubmitHandler<any> = async (data: TicketData) => {
    try{
      setIsButtonLoading(true)
      const formData = new FormData()
      formData.append("name", data.name)
      formData.append("email", data.email)
      formData.append("nim", data.nim)
      const response = await axios.post(`${process.env.API_URL}/api/malpunOuts/regis`, formData)
      Swal.fire({
        icon: 'success',
        title: `${response.data.message}`,
        html: 
            '<p style="font-size: 15px;">Silahkan lanjutkan ke tahap pembayaran!</p>'
            + '<p style="font-size: 15px;">QR Code tersedia pada meja registrasi!</p>',
      })
      setIsButtonLoading(false);
    } catch(err: any) {
      Swal.fire({
        icon: 'error',
        title: `${err.response.data.message}`,
      })
      console.log(err.response.data.message);
      setIsButtonLoading(false);
    }
  }

  const Body = () => {
    return(
        <Flex mt={["35vh","42.5vh","32vh","40vh","35vh"]} display={["block", "block", "flex", "flex", "flex"]} w={"full"}>
        <Flex display={["block", "block", "flex", "flex", "flex"]} w={"full"} h={"auto"} justifyContent={"center"}>
          <Box
            w={["full", "full", "35em", "50em", "59em"]}
            h={["full", "auto"]}
            padding={["0 0em", "0 0em", "1.5em 2.5em 1em 2.5em", "1.5em 2.5em 1em 2.5em", "1.5em 2.5em 1em 2.5em"]}
            borderRadius={["none", "none", "lg", "lg", "lg"]}
            justifyContent={"center"}
            alignItems={"center"}
            zIndex={0}
          >
            <Center mt={["37vh","40.5vh","2vh","-4vh","2.5vh"]}>
              <Text fontSize={["2xl", "2xl", "4xl", "2xl", "4xl"]} fontWeight={"bold"} color={"#1B4173"}>
                Detail Pembeli
              </Text>
            </Center>
            <Box mt={"2vh"}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Center>
                  <FormControl w={["32.5vh","20em","30em","30em","30em"]}>
                    <Stack direction={["column"]} spacing={[3, 4, 4, 2, 4]}>
                      <Box w={"full"}>
                        <FormLabel display={["block"]} fontSize={["md","md","lg","sm","lg"]} textColor={"#1B4173"} fontWeight={"semibold"}>
                          Nama Lengkap
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...register("name", {
                              required: "Nama harap diisi",
                            })}
                            h={["4.5vh","2.25em","3em","2em","3em"]}
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
                        {errors.name !== undefined && (
                          <Text textColor={"red"}>{errors.name.message}</Text>
                        )}
                      </Box>
                      <Box w={"full"}>
                      <FormLabel display={["block"]} fontSize={["md","md","lg","sm","lg"]} textColor={"#1B4173"} fontWeight={"semibold"}>
                          NIM
                        </FormLabel>
                      <InputGroup>
                        <InputLeftAddon fontSize={["sm","md","md","sm","md"]} m={"auto"} p={["1em","1.1em","1.1em","1.1em","1.1em"]} h={["4.5vh","2.25em","3em","1em","3em"]} children={"000000"} bgColor={"#F7B70C"} color={"white"} borderRadius={"full"} />
                        <Input
                          {...register("nim", {
                            required: "NIM harap diisi",
                          })}
                          h={["4.5vh","2.25em","3em","2em","3em"]}
                          borderLeft={"none"}
                          borderColor={"#1B417380"}
                          placeholder={"Nomor Induk Mahasiswa"}
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
                        <FormLabel display={["block"]} fontSize={["md","md","lg","sm","lg"]}textColor={"#1B4173"} fontWeight={"semibold"}>
                          Email Student
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...register("email", {
                              required: "Email harap diisi",
                            })}
                          h={["4.5vh","2.25em","3em","2em","3em"]}
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
                        {errors.email !== undefined && (
                            <Text textColor={"red"}>{errors.email.message}</Text>
                        )}
                      </Box>
                    </Stack>
                  </FormControl>
                </Center>
                <Flex justifyContent={["center","center","center","end","end"]} mt={["1em","2em","2em","0em","0em"]} mb={"1em"}>
                  {isButtonLoading === true ? (
                    <Button isLoading w={["auto"]} px={["2.1em"]} borderRadius={"full"} type={"submit"} color={"#1B4173"} border={"1px solid #1B417380"}>
                      Submit
                    </Button>
                  ) : (
                    <Button variant={"none"} w={["auto"]} p={["0 1.5em","0 2em","1.5em 2em", "0 1.5em", "0 2em"]} borderRadius={"full"} type={"submit"} color={"#1B4173"} border={"2px solid #1B417380"} _hover={{bgColor: "#1B4173", color: "#fff"}}>
                      <Text fontSize={["md","lg","lg","sm","lg"]}>
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

  return (
    <Layout>
      <Navbar />
      <Flex minH={["100vh","115vh","100vh","100vh","100vh"]} bgImage={["/formFullBgP.png","/formFullBgP.png","/formFullBgP.png","/formFullBgLs.png","/formFullBgLs.png"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"}>
          <Body />
        </Box>
      </Flex>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(aktif), { 
  ssr: false 
})