/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-children-prop */
import type { NextPage } from "next";
import router, { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

//importing local components
import Layout from "../../../../components/Layout";
import Navbar from "../../../../components/Navbar";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Stack, Img, FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const nonaktif: NextPage = () => {
  const Body = () => {
    interface TicketData{
      name: string
      email: string
  }
  const router = useRouter();
  const [isButtonLoading, setIsButtonLoading] = useState(false)

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
      const response = await axios.post(`${process.env.API_URL}/api/malpunOuts/regis`, formData)
      Swal.fire({
        icon: 'success',
        title: `${response.data.message}`,
        html: 
            '<p style="font-size: 15px;">Silahkan lanjutkan ke tahap pembayaran!</p>'
            + '<p style="font-size: 15px;">QR Code tersedia pada meja registrasi!</p>',
      })
      setIsButtonLoading(false);
      router.push('/malpun')
    } catch(err: any) {
      Swal.fire({
        icon: 'error',
        title: `${err.response.data.message}`,
      })
      console.log(err.response.data.message);
      setIsButtonLoading(false);
    }
  }
    return(
        <Flex mt={["37.5vh","42.5vh","32vh","35vh","35vh"]} display={["block", "block", "flex", "flex", "flex"]} w={"full"}>
        <Flex display={["block", "block", "flex", "flex", "flex"]} w={"full"} h={"auto"} justifyContent={"center"}>
          <Box
            w={["auto", "full", "35em", "48.5em", "59em"]}
            h={["full", "auto"]}
            maxH={["45.5vh","40vh","full","full","full",]}
            padding={["0 0em", "0 0em", "1.5em 2.5em 1em 2.5em", "1.5em 2.5em 1em 2.5em", "1.5em 2.5em 1em 2.5em"]}
            borderRadius={["none", "none", "lg", "lg", "lg"]}
            justifyContent={"center"}
            alignItems={"center"}
            zIndex={0}
            overflowY={"auto"}
          >
            <Center mt={["full","40.5vh","2vh","2vh","4vh"]}>
              <Text fontSize={["2xl", "2xl", "4xl", "2xl", "4xl"]} fontWeight={"bold"} color={"#1B4173"}>
                Detail Pembeli
              </Text>
            </Center>
            <Box mt={"3vh"}>
              <form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
                <Center>
                  <FormControl w={["32.5vh","20em","30em","30em","30em"]}>
                    <Stack direction={["column"]} spacing={[4, 4]}>
                      <Box w={"full"}>
                        <FormLabel display={["block"]} fontSize={["md","md","lg","md","lg"]} textColor={"#1B4173"} fontWeight={"semibold"}>
                          Nama Lengkap
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...register("name", {
                              required: "Nama harap diisi",
                            })}
                            // h={["4.5vh","2.25em","3em","2.25em","3em"]}
                            size={"md"}
                            borderColor={"#1B417380"}
                            placeholder={"Nama Lengkap"}
                            _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                            type={"text"}
                            name={"name"}
                            textColor={"black"}
                            border={"solid"}
                            _hover={{ border: "solid #CBD5E0" }}
                            style={{borderRadius: "50px"}}
                            autoComplete={"off"}
                          />
                        </InputGroup>
                        {errors.name !== undefined && (
                          <Text textColor={"red"}>{errors.name.message}</Text>
                        )}
                      </Box>
                      <Box w={"full"}>
                        <FormLabel display={["block"]} fontSize={["md","md","lg","md","lg"]}textColor={"#1B4173"} fontWeight={"semibold"}>
                          Email
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...register("email", {
                              required: "Email harap diisi",
                            })}
                            // h={["4.5vh","2.25em","3em","2.25em","3em"]}
                            size={"md"}
                            borderColor={"#1B417380"}
                            placeholder={"Email"}
                            _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                            type={"email"}
                            name={"email"}
                            textColor={"black"}
                            border={"solid"}
                            _hover={{ border: "solid #CBD5E0" }}
                            style={{borderRadius: "50px"}}
                            autoComplete={"off"}
                          />
                        </InputGroup>
                        {errors.email !== undefined && (
                            <Text textColor={"red"}>{errors.email.message}</Text>
                        )}
                      </Box>
                    </Stack>
                  </FormControl>
                </Center>
                <Flex justifyContent={["center","center","space-between","space-between","space-between"]} mt={["1.5vh","2em","2em","1em","1em"]} mb={"1em"}>
                <Button display={["none", "none", "flex"]} variant={"none"} w={["auto"]} p={["0 2em","0 2em","1.5em 2em", "0 2em", "0 2em"]} borderRadius={"full"} color={"#1B4173"} border={"2px solid #1B417380"} _hover={{bgColor: "#1B4173", color: "#fff"}} onClick={() => { router.back();}}>
                      <Text fontSize={["md","lg","lg","lg","lg"]}>
                          Back
                      </Text>
                    </Button>
                  {isButtonLoading === true ? (
                    <Button isLoading w={["auto"]} px={["2.1em"]} borderRadius={"full"} type={"submit"} color={"#1B4173"} border={"1px solid #1B417380"}>
                      Submit
                    </Button>
                  ) : (
                    <Button variant={"none"} w={["auto"]} p={["0 2em","0 2em","1.5em 2em", "0 2em", "0 2em"]} borderRadius={"full"} type={"submit"} color={"#1B4173"} border={"2px solid #1B417380"} _hover={{bgColor: "#1B4173", color: "#fff"}}>
                      <Text fontSize={["md","lg","lg","lg","lg"]}>
                          Submit
                      </Text>
                    </Button>
                  )}
                </Flex>
              </form>
                <Center>
                  <Button display={["block", "block", "none"]} variant={"none"} w={["auto"]} p={["0 2em","0 2em","1.5em 2em", "0 2em", "0 2em"]} borderRadius={"full"} color={"#1B4173"} border={"2px solid #1B417380"} _hover={{bgColor: "#1B4173", color: "#fff"}} onClick={() => { router.back();}}>
                        <Text fontSize={["md","lg","lg","lg","lg"]}>
                            Back
                        </Text>
                  </Button>
                </Center>
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
        <Flex w={"auto"} m={["-3.7rem 0rem", "-3.7rem 0rem"]} position={"sticky"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
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
              bgColor={"#D01C1F"}
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
          <Body />
        </Box>
      </Flex>
      {/* <BackButton /> */}
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(nonaktif), { 
  ssr: false 
})