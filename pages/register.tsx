/* eslint-disable react/no-children-prop */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Stack, Img, FormControl, FormLabel, Input, InputGroup, Select, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";
import axios from "axios";
import { useReadLocalStorage } from "usehooks-ts";
import { isExpired } from "react-jwt";
import Swal from "sweetalert2";

const Register = () => {
  interface RegisData {
    nim: string;
    name: string;
    tempatLahir: string;
    tanggalLahir: string;
    jenisKelamin: string;
    prodi: string;
    angkatan: string;
    email: string;
    whatsapp: string;
    idLine: string;
    idInstagram: string;
    password: string;
  }

  const router = useRouter();
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const jwt = useReadLocalStorage<string | undefined>("token");
  const isMyTokenExpired = isExpired(jwt as string);

  useEffect(() => {
    if (jwt && !isMyTokenExpired) {
      router.push("/");
    }
  }, []);

  const onSubmit: SubmitHandler<any> = async (data: RegisData) => {
    try {
      setIsButtonLoading(true);
      const formData = new FormData();
      formData.append("nim", data.nim);
      formData.append("name", data.name);
      formData.append("tempatLahir", data.tempatLahir);
      formData.append("tanggalLahir", data.tanggalLahir);
      formData.append("jenisKelamin", data.jenisKelamin)
      formData.append("prodi", data.prodi);
      formData.append("angkatan", data.angkatan);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("whatsapp", data.whatsapp);
      formData.append("idLine", data.idLine);
      formData.append("idInstagram", data.idInstagram);
      await axios.post(`${process.env.API_URL}/api/mhs/register`, formData);
      Swal.fire("Selamat!", "Anda berhasil terdaftar!", "success");
      setIsButtonLoading(false);
      router.push('/login')
    } catch (err: any) {
      Swal.fire({
        icon: "error",
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
  } = useForm<RegisData>();

  const MaximaLogo = () => {
    return (
      <Center mt={["-3vh", "5vh"]} position={["relative", "relative", "absolute"]} left={0} right={0} top={0}>
        <Img display={["none", "none", "block"]} src={"/Register/MaximaLogo.svg"} w={["9rem"]} />
        <Img display={["block", "block", "none"]} src={"/Register/MaximaLogo2.svg"} w={["3rem"]} />
      </Center>
    );
  };

  const RegisterForm = () => {
    return (
      <>
        <Flex
          w={["full", "full", "auto"]}
          h={["full", "full", "auto"]}
          // mt={"4vh"}
          padding={["0 2em", "0 2em", "0.8em 2.5em 2em 2.5em"]}
          borderRadius={["none", "none", "lg"]}
          boxShadow={["none", "none", "-1.2px 5px 4px 0px rgb(0,0,0,0.25)"]}
          bgColor={"#fff"}
          justifyContent={"center"}
          alignItems={"center"}
          blur={[0, 15]}
          border={["none", "none", "1px solid rgb(27, 65, 115, 0.25)"]}
          overflowY={"auto"}
          zIndex={1}
        >
          <Box w={"full"}>
            <Center>
              <Text fontSize={["3xl", "3xl", "3xl", "2xl", "3xl"]} fontWeight={"bold"} color={"#1B4173"}>
                Daftar Sekarang
              </Text>
            </Center>
            <Center mb={["2em", "2em", "0"]}>
              <Text fontSize={["md", "md", "md", "sm", "md"]} color={"#1B4173"} fontWeight={"medium"}>
                Sudah punya akun?{" "}
                <Link href={"/login"}>
                  <span style={{ color: "#F7B70C", fontWeight: "bold", textDecoration: "underline" }}>Masuk</span>
                </Link>
              </Text>
            </Center>
            <Box w={["full", "full", "32em", "35em", "40.5em"]} mt={"1em"}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl onSubmit={handleSubmit(onSubmit)}>
                  <Stack direction={["column"]} spacing={[5, 5, 4]}>
                    <Stack direction={["column", "column", "row"]} spacing={[5, 5, 4]}>
                      <Box w={["full", "full", "32em", "32em", "32em"]}>
                        <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                          Nama Lengkap
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...register("name", {
                              required: "Nama lengkap harap diisi",
                            })}
                            size={"md"}
                            borderColor={"#E2E8F0"}
                            placeholder={"Nama lengkap"}
                            _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                            type={"text"}
                            name={"name"}
                            textColor={"black"}
                            border={"solid"}
                            borderRadius={["full", "full"]}
                            _hover={{ border: "solid #CBD5E0" }}
                          />
                        </InputGroup>
                        {errors.name !== undefined && <Text textColor={"red"}>{errors.name.message}</Text>}
                      </Box>
                      <Box w={["full", "full", "18em"]}>
                        <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                          NIM
                        </FormLabel>
                        <InputGroup>
                          <InputLeftAddon fontSize={"sm"} m={"auto"} p={2} children='000000' bgColor={"#F7B70C"} color={"white"} borderRadius={"full"} />
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
                        {errors.nim !== undefined && <Text textColor={"red"}>{errors.nim.message}</Text>}
                      </Box>
                    </Stack>
                    <Stack direction={["column", "column", "row"]} spacing={[5, 5, 4]}>
                      <Stack w={["full", "full", "32em"]} direction={["column", "column", "row"]} spacing={[5, 5, 4]}>
                        <Box w={["full"]}>
                          <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                            Tempat Lahir
                          </FormLabel>
                          <InputGroup>
                            <Input
                              {...register("tempatLahir", {
                                required: "Tempat lahir harap diisi",
                              })}
                              size={"md"}
                              borderColor={"#E2E8F0"}
                              placeholder={"Tempat lahir"}
                              _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                              type={"text"}
                              name={"tempatLahir"}
                              textColor={"black"}
                              border={"solid"}
                              borderRadius={"full"}
                              _hover={{ border: "solid #CBD5E0" }}
                            />
                          </InputGroup>
                          {errors.tempatLahir !== undefined && <Text textColor={"red"}>{errors.tempatLahir.message}</Text>}
                        </Box>
                        <Box w={["full"]}>
                          <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                            Tanggal Lahir
                          </FormLabel>
                          <InputGroup>
                            <Input
                              {...register("tanggalLahir", {
                                required: "Tanggal lahir harap diisi",
                              })}
                              size={"md"}
                              borderColor={"#E2E8F0"}
                              placeholder={"DD/MM/YYYY"}
                              _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                              type={"date"}
                              name={"tanggalLahir"}
                              textColor={"black"}
                              border={"solid"}
                              borderRadius={"full"}
                              _hover={{ border: "solid #CBD5E0" }}
                            />
                          </InputGroup>
                          {errors.tanggalLahir !== undefined && <Text textColor={"red"}>{errors.tanggalLahir.message}</Text>}
                        </Box>
                      </Stack>
                      <Box w={["full", "full", "18em"]}>
                        <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                          Jenis Kelamin
                        </FormLabel>
                        <InputGroup>
                          <Select
                            {...register("jenisKelamin", {
                              required: "Jenis kelamin harap dipilih",
                            })}
                            size={"md"}
                            borderColor={"#E2E8F0"}
                            placeholder={"Pilih Jenis Kelamin"}
                            name={"jenisKelamin"}
                            textColor={"black"}
                            border={"solid"}
                            borderRadius={"full"}
                            _hover={{ border: "solid #CBD5E0" }}
                          >
                            <option value="M">Laki-laki</option>
                            <option value="F">Perempuan</option>
                          </Select>
                        </InputGroup>
                        {errors.jenisKelamin !== undefined && <Text textColor={"red"}>{errors.jenisKelamin.message}</Text>}
                      </Box>
                    </Stack>
                    <Stack direction={["column", "column", "row"]} spacing={[5, 5, 4]}>
                      <Box w={["full", "full", "32em", "32em", "32em"]}>
                        <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                          Program Studi
                        </FormLabel>
                        <Select
                          {...register("prodi", {
                            required: "Program studi harap dipilih",
                          })}
                          size={"md"}
                          borderColor={"#E2E8F0"}
                          placeholder={"Pilih Program Studi"}
                          name={"prodi"}
                          textColor={"black"}
                          border={"solid"}
                          borderRadius={"full"}
                          _hover={{ border: "solid #CBD5E0" }}
                        >
                          <option value="Strategic Communication">Strategic Communication</option>
                          <option value="Jurnalistik">Jurnalistik</option>
                          <option value="Informatika">Informatika</option>
                          <option value="Sistem Informasi">Sistem Informasi</option>
                          <option value="Teknik Fisika">Teknik Fisika</option>
                          <option value="Teknik Elektro">Teknik Elektro</option>
                          <option value="Teknik Komputer">Teknik Komputer</option>
                          <option value="DKV">DKV</option>
                          <option value="Film dan Animasi">Film dan Animasi</option>
                          <option value="Arsitektur">Arsitektur</option>
                          <option value="Manajemen">Manajemen</option>
                          <option value="Akuntansi">Akuntansi</option>
                          <option value="Perhotelan">Perhotelan</option>
                        </Select>
                        {errors.prodi !== undefined && <Text textColor={"red"}>{errors.prodi.message}</Text>}
                      </Box>
                      <Box w={["full", "full", "18em"]}>
                        <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                          Angkatan
                        </FormLabel>
                        <InputGroup>
                          <Select
                            {...register("angkatan", {
                              required: "Angkatan harap dipilih",
                            })}
                            size={"md"}
                            borderColor={"#E2E8F0"}
                            name={"angkatan"}
                            placeholder="Pilih Angkatan"
                            textColor={"black"}
                            border={"solid"}
                            borderRadius={"full"}
                            _hover={{ border: "solid #CBD5E0" }}
                          >
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                          </Select>
                        </InputGroup>
                        {errors.angkatan !== undefined && <Text textColor={"red"}>{errors.angkatan.message}</Text>}
                      </Box>
                    </Stack>
                    <Stack direction={["column", "column", "row"]} spacing={[5, 5, 4]}>
                      <Box w={["full", "full", "32em"]}>
                        <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                          Email Student
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...register("email", {
                              required: "Email harap diisi",
                            })}
                            size={"md"}
                            borderRight={"none"}
                            borderColor={"#E2E8F0"}
                            placeholder={"Email"}
                            _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                            type={"text"}
                            name={"email"}
                            textColor={"black"}
                            border={"solid"}
                            borderRadius={"full"}
                            _hover={{ border: "solid #CBD5E0" }}
                          />
                          <InputRightAddon fontSize={"sm"} p={3} children='@student.umn.ac.id' bgColor={"#F7B70C"} color={"white"} borderRightRadius={"full"} />
                        </InputGroup>
                        {errors.email !== undefined && <Text textColor={"red"}>{errors.email.message}</Text>}
                      </Box>
                      <Box w={["full", "full", "18em"]}>
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
                            borderRadius={"full"}
                            _hover={{ border: "solid #CBD5E0" }}
                          />
                        </InputGroup>
                        {errors.password !== undefined && <Text textColor={"red"}>{errors.password.message}</Text>}
                      </Box>
                    </Stack>
                    <Stack direction={["column", "column", "row"]} spacing={[5, 5, 4]}>
                      <Box w={["full", "full", "17em"]}>
                        <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                          Whatsapp
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...register("whatsapp", {
                              required: "WhatsApp harap diisi",
                            })}
                            size={"md"}
                            borderColor={"#E2E8F0"}
                            placeholder={"Nomor WhatsApp"}
                            _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                            type={"text"}
                            name={"whatsapp"}
                            textColor={"black"}
                            border={"solid"}
                            borderRadius={"full"}
                            _hover={{ border: "solid #CBD5E0" }}
                          />
                        </InputGroup>
                        {errors.whatsapp !== undefined && <Text textColor={"red"}>{errors.whatsapp.message}</Text>}
                      </Box>
                      <Box w={["full", "full", "14em"]}>
                        <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                          ID LINE
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...register("idLine", {
                              required: "ID Line harap diisi",
                            })}
                            size={"md"}
                            borderColor={"#E2E8F0"}
                            placeholder={"ID Line"}
                            _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                            type={"text"}
                            name={"idLine"}
                            textColor={"black"}
                            border={"solid"}
                            borderRadius={"full"}
                            _hover={{ border: "solid #CBD5E0" }}
                          />
                        </InputGroup>
                        {errors.idLine !== undefined && <Text textColor={"red"}>{errors.idLine.message}</Text>}
                      </Box>
                      <Box w={["full", "full", "18em"]}>
                        <FormLabel display={["none", "none", "block"]} fontSize={"sm"} textColor={"#1B4173"} fontWeight={"semibold"}>
                          Instagram
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...register("idInstagram", {
                              required: "Instagram harap diisi",
                            })}
                            size={"md"}
                            borderColor={"#E2E8F0"}
                            placeholder={"Username Instagram"}
                            _placeholder={{ opacity: 1, color: "#CBD5E0" }}
                            type={"text"}
                            name={"idInstagram"}
                            textColor={"black"}
                            border={"solid"}
                            borderRadius={"full"}
                            _hover={{ border: "solid #CBD5E0" }}
                          />
                        </InputGroup>
                        {errors.idInstagram !== undefined && <Text textColor={"red"}>{errors.idInstagram.message}</Text>}
                      </Box>
                    </Stack>
                  </Stack>
                </FormControl>
                <Flex w={"100%"} justifyContent={"center"} mt={"2em"}>
                  {isButtonLoading === true ? (
                    <Button isLoading w={["full", "full", "auto"]} px={["2.1em"]} borderRadius={"full"} type={"submit"} color={"#fff"} colorScheme={"orange"} bgColor={"#F7B70C"}>
                      DAFTAR
                    </Button>
                  ) : (
                    <Button w={["full", "full", "auto"]} px={["2.1em"]} borderRadius={"full"} type={"submit"} color={"#fff"} colorScheme={"orange"} bgColor={"#F7B70C"}>
                      DAFTAR
                    </Button>
                  )}
                </Flex>
              </form>
            </Box>
          </Box>
        </Flex>
      </>
    );
  };

  return (
    <>
      <Flex minH={"100vh"} bgColor={"white"} bgImage={["", "", "", "/Register/register.jpg"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"} zIndex={"0"}>
          <Box mt={"9vh"}>
            <MaximaLogo />
          </Box>
          <Center position={["relative", "relative", "absolute"]} left={0} right={0} top={0} bottom={0}>
            <RegisterForm />
          </Center>
          <Center position={["relative", "relative", "absolute"]} left={0} right={0} bottom={["", "", 0]} mb={["3vh", "3vh", "5vh"]} mt={["8vh", "8vh", "0"]}>
            <Text color={"#1B4173"} fontSize={"sm"} fontWeight={"bold"}>
              MAXIMA 2022
            </Text>
          </Center>
        </Box>
      </Flex>
    </>
  );
};

export default Register;
