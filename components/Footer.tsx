import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Flex, Button, Center, Img, Text, Wrap, WrapItem } from "@chakra-ui/react";

const Footer = () => {
  const router = useRouter();

  const SocialMediaData = [
    {
      id: 1,
      icon: "/organization/facebook.svg",
      link: "https://www.facebook.com/maximaumn",
    },
    {
      id: 2,
      icon: "/organization/twitter.svg",
      link: "https://twitter.com/MaximaUMN",
    },
    {
      id: 3,
      icon: "/organization/linkedin.svg",
      link: "https://www.linkedin.com/company/maxima-2022/",
    },
    {
      id: 4,
      icon: "/organization/youtube.svg",
      link: "https://www.youtube.com/channel/UCjCWlaKQHnyhz-0hr7qQPYg",
    },
    {
      id: 5,
      icon: "/organization/instagram.svg",
      link: "https://www.instagram.com/maximaumn/",
    },
    {
      id: 6,
      icon: "/organization/tiktok.svg",
      link: "https://www.tiktok.com/@maximaumn",
    },
    {
      id: 7,
      icon: "/organization/line.svg",
      link: "https://liff.line.me/1645278921-kWRPP32q/?accountId=vuu3203w",
    },
  ];

  const MedparData = [
    {
      id: 1,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/UMN%20FESTIVAL.PNG",
      name: "UMN Festival",
    },
    {
      id: 2,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/share-event-color-1%20(1).png",
      name: "Share Event",
    },
    {
      id: 3,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20%40infoselanjutnya%20(1).png",
      name: "@infoselanjutnya",
    },
    {
      id: 4,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Kawal%20Event%20Logo.png",
      name: "Kawal Event",
    },
    {
      id: 5,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20Five%20TV%20UPN.jpeg",
      name: "Five TV UPN",
    },
    {
      id: 6,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Starlight%202022%20Logo%20no%20bg%20(1).png",
      name: "Starlight",
    },
    {
      id: 7,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/LOGO%20ELFARA.png",
      name: "Elfara",
    },
    {
      id: 8,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20Atma%20Jaya%20Radio.jpg",
      name: "Atma Jaya Radio",
    },
    {
      id: 9,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/LOGO%20BPRS%20ERAFM-UNJ.png",
      name: "BPRS EraFM-UNJ",
    },
    {
      id: 10,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20Event%20Alerts.jpg",
      name: "Event Alerts",
    },
    {
      id: 11,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/UMN%20ECO.png",
      name: "UMN Eco",
    },
    {
      id: 12,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/G2X%20UMN.png",
      name: "G2X UMN",
    },
    {
      id: 13,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/LOGO%20EVENT%20CENTER.png",
      name: "Event Center",
    },
    {
      id: 14,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/WhatsApp%20Image%202022-05-09%20at%202.26.49%20PM.jpeg",
      name: "Radio UNTAR",
    },
    {
      id: 15,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/LOGO-TRACCE.png",
      name: "Tracce UMN",
    },
    {
      id: 16,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/T-RADIO.jpg",
      name: "T-Radio",
    },
    {
      id: 17,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/MRMS%20UMN%202022.jpg",
      name: "MrMs UMN",
    },
    {
      id: 18,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/KABAR%20KAMPUS.png",
      name: "Kabar Kampus",
    },
    {
      id: 19,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/MUFOMIC.png",
      name: "Mufomic",
    },
    {
      id: 20,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/HIMARS%20(warna).png",
      name: "HIMARS",
    },
    {
      id: 21,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/UMN%20TV%20(WARNA).PNG",
      name: "UMN TV",
    },
    {
      id: 22,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/UMN%20RADIO%20(WARNA).png",
      name: "UMN Radio",
    },
    {
      id: 23,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/QORIE.png",
      name: "Qorie",
    },
    {
      id: 24,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/HMFILM%20UMN%20(WARNA).png",
      name: "HMFILM",
    },
    {
      id: 25,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20HIMMA.jpg",
      name: "HIMMA UMN",
    },
    {
      id: 26,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/CAPOEIRA%20WARNA%20(TRANSPARAN).png",
      name: "Capoeira",
    },
    {
      id: 27,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Magenta%20Radio.png",
      name: "Magenta Radio",
    },
    {
      id: 28,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20Ultimag%20Merah%20(1).png",
      name: "Ultimagz",
    },
    {
      id: 29,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20RBL.PNG",
      name: "Radio Budi Luhur",
    },
    {
      id: 30,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20Nusakara%20Artspace%20hitam-02.png",
      name: "Nusakara Artspace",
    },
    {
      id: 31,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/J-CAFE%20UMN.png",
      name: "J-Cafe",
    },
    {
      id: 32,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20I_M%20KOM.png",
      name: "I'M KOM UMN",
    },
    {
      id: 33,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/logo%20Himtara%20garis%20putih.png",
      name: "HIMTARA",
    },
    {
      id: 34,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/logo%20Go-Stage%20(hitamnya%20jangan%20dihilangkan).jpeg",
      name: "Go Stage",
    },
    {
      id: 35,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Eltras%20Radio.png",
      name: "Eltras Radio",
    },
    {
      id: 36,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20DNK%20TV.jpeg",
      name: "DNK TV",
    },
    {
      id: 37,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20DKBM%20UMN%202.jpg",
      name: "DKBM UMN",
    },
    {
      id: 38,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/HMP%20UMN.png",
      name: "HMP",
    },
    {
      id: 39,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/HMIF%20UMN.png",
      name: "HMIF",
    },
    {
      id: 40,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/HIMFERA%20UMN.png",
      name: "HIMFERA",
    },
    {
      id: 41,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/ACES%20UMN.png",
      name: "ACES UMN",
    },
    {
      id: 42,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/GIGSCORNER.png",
      name: "Gigs Corner",
    },
    {
      id: 43,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/20200322_131954.png",
      name: "Event Apa Aja",
    },
    {
      id: 44,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/02%20LOGO%20EJ.jpg",
      name: "Event Journal",
    },
    {
      id: 45,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/0_informasi%20eveent.jpg",
      name: "Informasi Event",
    },
    {
      id: 46,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/logo%20umn%20juice%20black%20(2).png",
      name: "UMN Juice",
    },
    // {
    //   id: 47,
    //   icon: "",
    //   name: "DKBM UMN",
    // },
    // {
    //   id: 48,
    //   icon: "",
    //   name: "HMP",
    // },
    // {
    //   id: 49,
    //   icon: "",
    //   name: "HMIF",
    // },
    // {
    //   id: 50,
    //   icon: "",
    //   name: "HIMFERA",
    // },
  ]

  const SponsorData = [
    {
      id: 1,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/PRUDENTIAL/PRU_Ribbon_Logo.png",
      name: "Prudential",
    },
    {
      id: 2,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/ILLUMINARE/LogoIlluminareJPG.jpg",
      name: "Illuminare",
    },
    {
      id: 3,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/AVIONE/LOGO%20AVIONE%20BOLD-UNGU%20BARU.png",
      name: "Avione",
    },
    {
      id: 4,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/MAOMOTO/Maomoto%20logo%20Final.png",
      name: "Maomoto",
    },
    {
      id: 5,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/PANDABOO/Logo%20Pandaboo%20a%20(2).png",
      name: "Pandaboo",
    },
    {
      id: 6,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/BANTEX/Bantex%20png.png",
      name: "Bantex",
    },
    {
      id: 7,
      icon: "",
      name: "Lokalate",
    },
    {
      id: 8,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/BSM%20Entertainment/bsm%20logo.png",
      name: "BSM Entertainment",
    },
    {
      id: 9,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/START%20SPACE/Start%20Space%20Logo.png",
      name: "Start Space",
    },
    {
      id: 10,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/NANOVEST/logo%20nanovest%20HD.png",
      name: "Nanovest",
    },
    {
      id: 11,
      icon: "",
      name: "Huawei",
    },
    {
      id: 12,
      icon: "",
      name: "Gramedia",
    },
  ];

  return (
    <>
      <Flex w={"full"} h={["auto"]} justifyContent={"center"} alignItems={"center"} bgColor={"#062D5F"}>
        <Center my={"1.5em"}>
          <Box>
            <Box mb={"1em"}>
              <Text color={"white"} fontSize={"md"} textAlign={"center"} fontWeight={"extrabold"}>
                HoME MAXIMA 2022
              </Text>
            </Box>
            <Box mb={"1em"}>
              <Center>
                <Wrap w={"full"} justify={"center"} spacing={["0em", "0.2em"]}>
                  <>
                  {SocialMediaData.map((socialMedia: any) => (
                    <div key={socialMedia.id}>
                      {socialMedia.link !== "" && (
                        <a href={`${socialMedia.link}`} target={"_blank"} rel="noreferrer">
                          <Center w={"auto"} transition={"0.1s ease-in-out"} transform={"scale(0.7)"} _hover={{ transform: "scale(0.8)", cursor: "pointer" }}>
                            <Img src={socialMedia.icon} w={["2.8em", "5.2em"]} bgColor={"white"} borderRadius={"full"} outline={"5px solid white"} />
                          </Center>
                        </a>
                      )}
                    </div>
                      
                      ))}
                      </>
                </Wrap>
              </Center>
            </Box>
            <Box>
              <Text color={"white"} fontSize={"md"} textAlign={"center"} fontWeight={"extrabold"}>Our Sponsor</Text>
              <Center>
                <Wrap spacing={"1em"} justify="center">
                  <WrapItem
                            p={["auto", "0.8em"]}
                            //bgColor={"#F7B70C"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            w={'300px'}
                            display={'flex'}
                            justifyContent={"center"} alignItems={'center'}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box padding={[10,0,0,0]}>
                                <Center>
                                  <Flex w={["9em", "10em"]} h={["9em", "10em"]}>
                                    <Img src={SponsorData[0]?.icon} borderRadius={["2xl", "none"]} w={'200px'} h={'150px'}/>
                                  </Flex>
                                </Center>
                                {/* <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#fff"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {SponsorData[0]?.name}
                                  </Text>
                                </Center> */}
                              </Box>
                            </Center>
                          </WrapItem>
                          <WrapItem
                            p={["auto", "0.8em"]}
                            //bgColor={"#F7B70C"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            w={'300px'}
                            display={'flex'}
                            justifyContent={"center"} alignItems={'center'}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box padding={[10,0,0,0]}>
                                <Center>
                                  <Flex 
                                  //w={["9em", "10em"]} 
                                  h={["9em", "10em"]}>
                                    <Img src={SponsorData[1]?.icon} borderRadius={["2xl", "none"]} w={'200px'} h={'150px'}/>
                                  </Flex>
                                </Center>
                                {/* <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#fff"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {SponsorData[1]?.name}
                                  </Text>
                                </Center> */}
                              </Box>
                            </Center>
                          </WrapItem>
                          <WrapItem
                            p={["auto", "0.8em"]}
                            //bgColor={"#F7B70C"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            w={'300px'}
                            display={'flex'}
                            justifyContent={"center"} alignItems={'center'}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box padding={[10,0,0,0]}>
                                <Center>
                                  <Flex 
                                  // w={["9em", "10em"]} 
                                  h={["9em", "10em"]}>
                                    <Img src={SponsorData[2]?.icon} borderRadius={["2xl", "none"]} h={'200px'}/>
                                  </Flex>
                                </Center>
                                {/* <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Flex justifyContent={'center'} alignItems={'center'} w={["9em", "10em"]}>
                                    <Text color={"#fff"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                      {SponsorData[2]?.name}
                                    </Text>
                                  </Flex>
                                </Center> */}
                              </Box>
                            </Center>
                          </WrapItem>
                          <WrapItem
                            p={["auto", "0.8em"]}
                            //bgColor={"#F7B70C"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            w={'300px'}
                            display={'flex'}
                            justifyContent={"center"} alignItems={'center'}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box padding={[10,0,0,0]}>
                                <Center>
                                  <Flex w={["9em", "10em"]} h={["9em", "10em"]} alignItems={'center'} justifyContent={'center'}>
                                    <Img src={SponsorData[3]?.icon} borderRadius={["2xl", "none"]} w={'100px'} h={'100px'}/>
                                  </Flex>
                                </Center>
                                {/* <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#fff"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {SponsorData[3]?.name}
                                  </Text>
                                </Center> */}
                              </Box>
                            </Center>
                          </WrapItem>
                          <WrapItem
                            p={["auto", "0.8em"]}
                            //bgColor={"#F7B70C"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            w={'300px'}
                            display={'flex'}
                            justifyContent={"center"} alignItems={'center'}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box padding={[10,0,0,0]}>
                                <Center>
                                  <Flex w={["9em", "10em"]} h={["9em", "10em"]} alignItems={'center'} justifyContent={'center'}>
                                    <Img src={SponsorData[4]?.icon} borderRadius={["2xl", "none"]} w={'100px'} h={'100px'}/>
                                  </Flex>
                                </Center>
                                {/* <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#fff"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {SponsorData[4]?.name}
                                  </Text>
                                </Center> */}
                              </Box>
                            </Center>
                          </WrapItem>
                          <WrapItem
                            p={["auto", "0.8em"]}
                            //bgColor={"#F7B70C"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            w={'300px'}
                            display={'flex'}
                            justifyContent={"center"} alignItems={'center'}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box padding={[10,0,0,0]}>
                                <Center>
                                  <Flex w={["9em", "10em"]} h={["9em", "10em"]} alignItems={'center'} justifyContent={'center'}>
                                    <Img src={SponsorData[5]?.icon} borderRadius={["2xl", "none"]} h={'50px'}/>
                                  </Flex>
                                </Center>
                                {/* <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#fff"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {SponsorData[5]?.name}
                                  </Text>
                                </Center> */}
                              </Box>
                            </Center>
                          </WrapItem>
                          <WrapItem
                            p={["auto", "0.8em"]}
                            //bgColor={"#F7B70C"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            w={'300px'}
                            display={'flex'}
                            justifyContent={"center"} alignItems={'center'}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box padding={[10,0,0,0]}>
                                <Center>
                                  <Flex w={["9em", "10em"]} h={["9em", "10em"]}>
                                    <Img src={SponsorData[6]?.icon} borderRadius={["2xl", "none"]} />
                                  </Flex>
                                </Center>
                                {/* <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#fff"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {SponsorData[6]?.name}
                                  </Text>
                                </Center> */}
                              </Box>
                            </Center>
                          </WrapItem>
                          <WrapItem
                            p={["auto", "0.8em"]}
                            //bgColor={"#F7B70C"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            w={'300px'}
                            display={'flex'}
                            justifyContent={"center"} alignItems={'center'}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box padding={[10,0,0,0]}>
                                <Center>
                                  <Flex w={["9em", "10em"]} h={["9em", "10em"]}>
                                    <Img src={SponsorData[7]?.icon} borderRadius={["2xl", "none"]} />
                                  </Flex>
                                </Center>
                                {/* <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#fff"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {SponsorData[7]?.name}
                                  </Text>
                                </Center> */}
                              </Box>
                            </Center>
                          </WrapItem>
                          <WrapItem
                            p={["auto", "0.8em"]}
                            //bgColor={"#F7B70C"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            w={'300px'}
                            display={'flex'}
                            justifyContent={"center"} alignItems={'center'}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box padding={[10,0,0,0]}>
                                <Center>
                                  <Flex w={["9em", "10em"]} h={["9em", "10em"]}>
                                    <Img src={SponsorData[8]?.icon} borderRadius={["2xl", "none"]} />
                                  </Flex>
                                </Center>
                                {/* <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#fff"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {SponsorData[8]?.name}
                                  </Text>
                                </Center> */}
                              </Box>
                            </Center>
                          </WrapItem>
                          <WrapItem
                            p={["auto", "0.8em"]}
                            //bgColor={"#F7B70C"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            w={'300px'}
                            display={'flex'}
                            justifyContent={"center"} alignItems={'center'}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box padding={[10,0,0,0]}>
                                <Center>
                                  <Flex w={["9em", "10em"]} h={["9em", "10em"]} justifyContent={"center"} alignItems={'center'}>
                                    <Img src={SponsorData[9]?.icon} borderRadius={["2xl", "none"]} h={'50px'} />
                                  </Flex>
                                </Center>
                                {/* <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#fff"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {SponsorData[9]?.name}
                                  </Text>
                                </Center> */}
                              </Box>
                            </Center>
                          </WrapItem>
                          <WrapItem
                            p={["auto", "0.8em"]}
                            //bgColor={"#F7B70C"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            w={'300px'}
                            display={'flex'}
                            justifyContent={"center"} alignItems={'center'}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box padding={[10,0,0,0]}>
                                <Center>
                                  <Flex w={["9em", "10em"]} h={["9em", "10em"]}>
                                    <Img src={SponsorData[10]?.icon} borderRadius={["2xl", "none"]} />
                                  </Flex>
                                </Center>
                                {/* <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#fff"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {SponsorData[10]?.name}
                                  </Text>
                                </Center> */}
                              </Box>
                            </Center>
                          </WrapItem>
                          <WrapItem
                            p={["auto", "0.8em"]}
                            //bgColor={"#F7B70C"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            w={'300px'}
                            display={'flex'}
                            justifyContent={"center"} alignItems={'center'}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box padding={[10,0,0,0]}>
                                <Center>
                                  <Flex w={["9em", "10em"]} h={["9em", "10em"]}>
                                    <Img src={SponsorData[11]?.icon} borderRadius={["2xl", "none"]} />
                                  </Flex>
                                </Center>
                                {/* <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#fff"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {SponsorData[11]?.name}
                                  </Text>
                                </Center> */}
                              </Box>
                            </Center>
                          </WrapItem>
                </Wrap>
              </Center>
            </Box>
            <Box mt={5}>
              <Text color={"white"} fontSize={"md"} textAlign={"center"} fontWeight={"extrabold"}>Our Media Partner</Text>
              <Center>
                <Wrap spacing={"1em"} justify="center">
                  {MedparData.map((item: any) => {
                    return (
                      <div key={item.id}>
                          <WrapItem
                            p={["auto", "0.8em"]}
                            bgColor={"white"}
                            borderRadius={["2xl", "lg"]}
                            shadow={"md"}
                            transition={"0.1s ease-in-out"}
                            cursor={"pointer"}
                            _hover={
                              {
                                //   transform: "scale(1.05)",
                              }
                            }
                          >
                            <Center>
                              <Box pt={10}>
                                <Center>
                                  <Flex w={["9em", "10em"]} h={["9em", "10em"]} justifyContent={'center'} alignItems={'center'}>
                                    <Img src={item.icon} borderRadius={["2xl", "none"]} />
                                  </Flex>
                                </Center>
                                <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#fff"} fontSize={"md"} mt={10} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {item.name}
                                  </Text>
                                </Center>
                              </Box>
                            </Center>
                          </WrapItem>
                      </div>
                    );
                  })}
                </Wrap>
              </Center>
            </Box>
          </Box>
        </Center>
      </Flex>
    </>
  );
};

export default Footer;
