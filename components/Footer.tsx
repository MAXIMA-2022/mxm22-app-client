import { useRouter } from "next/router";
import Link from "next/link";
import {
  Box,
  Flex,
  Button,
  Center,
  Img,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const Footer = () => {
  const router = useRouter();

  const SocialMediaData = [
    {
      id: 1,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/Organization/facebook.svg",
      link: "https://www.facebook.com/maximaumn",
    },
    {
      id: 2,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/Organization/twitter.svg",
      link: "https://twitter.com/MaximaUMN",
    },
    {
      id: 3,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/Organization/linkedin.svg",
      link: "https://www.linkedin.com/company/maxima-2022/",
    },
    {
      id: 4,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/Organization/youtube.svg",
      link: "https://www.youtube.com/channel/UCjCWlaKQHnyhz-0hr7qQPYg",
    },
    {
      id: 5,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/Organization/instagram.svg",
      link: "https://www.instagram.com/maximaumn/",
    },
    {
      id: 6,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/Organization/tiktok.svg",
      link: "https://www.tiktok.com/@maximaumn",
    },
    {
      id: 7,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/Organization/line.svg",
      link: "https://liff.line.me/1645278921-kWRPP32q/?accountId=vuu3203w",
    },
  ];

  const MedparData = [
    {
      id: 1,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/UMN%20FESTIVAL_15_11zon.webp",
      name: "UMN Festival",
    },
    {
      id: 2,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/share-event-color-1%20(1)_8_11zon.webp",
      name: "Share Event",
    },
    {
      id: 3,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20%40infoselanjutnya%20(1)_11_11zon.webp",
      name: "@infoselanjutnya",
    },
    {
      id: 4,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Kawal%20Event%20Logo_10_11zon.webp",
      name: "Kawal Event",
    },
    {
      id: 5,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20Five%20TV%20UPN_9_11zon.webp",
      name: "Five TV UPN",
    },
    {
      id: 6,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Starlight%202022%20Logo%20no%20bg%20(1)_10_11zon.webp",
      name: "Starlight",
    },
    {
      id: 7,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/LOGO%20ELFARA_5_11zon.webp",
      name: "Elfara",
    },
    {
      id: 8,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20Atma%20Jaya%20Radio_12_11zon.webp",
      name: "Atma Jaya Radio",
    },
    {
      id: 9,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/LOGO%20BPRS%20ERAFM-UNJ_1_11zon.webp",
      name: "BPRS EraFM-UNJ",
    },
    {
      id: 10,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20Event%20Alerts_7_11zon.webp",
      name: "Event Alerts",
    },
    {
      id: 11,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/UMN%20ECO_14_11zon.webp",
      name: "UMN Eco",
    },
    {
      id: 12,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/G2X%20UMN_10_11zon.webp",
      name: "G2X UMN",
    },
    {
      id: 13,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/LOGO%20EVENT%20CENTER_8_11zon.webp",
      name: "Event Center",
    },
    {
      id: 14,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/WhatsApp%20Image%202022-05-09%20at%202.26.49%20PM_22_11zon.webp",
      name: "Radio UNTAR",
    },
    {
      id: 15,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/LOGO-TRACCE_2_11zon.webp",
      name: "Tracce UMN",
    },
    {
      id: 16,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/T-RADIO_13_11zon.webp",
      name: "T-Radio",
    },
    {
      id: 17,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/MRMS%20UMN%202022_4_11zon.webp",
      name: "MrMs UMN",
    },
    {
      id: 18,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/KABAR%20KAMPUS_8_11zon.webp",
      name: "Kabar Kampus",
    },
    {
      id: 19,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/MUFOMIC_5_11zon.webp",
      name: "Mufomic",
    },
    {
      id: 20,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/HIMARS%20(warna)_12_11zon.webp",
      name: "HIMARS",
    },
    {
      id: 21,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/UMN%20TV%20(WARNA)_21_11zon.webp",
      name: "UMN TV",
    },
    {
      id: 22,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/UMN%20RADIO%20(WARNA)_18_11zon.webp",
      name: "UMN Radio",
    },
    {
      id: 23,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/QORIE_6_11zon.webp",
      name: "Qorie",
    },
    {
      id: 24,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/HMFILM%20UMN%20(WARNA)_4_11zon.webp",
      name: "HMFILM",
    },
    {
      id: 25,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20HIMMA_11_11zon.webp",
      name: "HIMMA UMN",
    },
    {
      id: 26,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/CAPOEIRA%20WARNA%20(TRANSPARAN)_7_11zon.webp",
      name: "Capoeira",
    },
    {
      id: 27,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Magenta%20Radio_3_11zon.webp",
      name: "Magenta Radio",
    },
    {
      id: 28,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20Ultimag%20Merah%20(1)_9_11zon.webp",
      name: "Ultimagz",
    },
    {
      id: 29,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20RBL_8_11zon.webp",
      name: "Radio Budi Luhur",
    },
    {
      id: 30,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20Nusakara%20Artspace%20hitam-02_4_11zon.webp",
      name: "Nusakara Artspace",
    },
    {
      id: 31,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/J-CAFE%20UMN_7_11zon.webp",
      name: "J-Cafe",
    },
    {
      id: 32,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20I_M%20KOM_1_11zon.webp",
      name: "I'M KOM UMN",
    },
    {
      id: 33,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/logo%20Himtara%20garis%20putih_12_11zon.webp",
      name: "HIMTARA",
    },
    {
      id: 34,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/logo%20Go-Stage%20(hitamnya%20jangan%20dihilangkan)_10_11zon.webp",
      name: "Go Stage",
    },
    {
      id: 35,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Eltras%20Radio_9_11zon.webp",
      name: "Eltras Radio",
    },
    {
      id: 36,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20DNK%20TV_4_11zon.webp",
      name: "DNK TV",
    },
    {
      id: 37,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/Logo%20DKBM%20UMN%202_3_11zon.webp",
      name: "DKBM UMN",
    },
    {
      id: 38,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/HMP%20UMN_6_11zon.webp",
      name: "HMP",
    },
    {
      id: 39,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/HMIF%20UMN_5_11zon.webp",
      name: "HMIF",
    },
    {
      id: 40,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/HIMFERA%20UMN_1_11zon.webp",
      name: "HIMFERA",
    },
    {
      id: 41,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/ACES%20UMN_4_11zon.webp",
      name: "ACES UMN",
    },
    {
      id: 42,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/GIGSCORNER_11_11zon.webp",
      name: "Gigs Corner",
    },
    {
      id: 43,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/20200322_131954_3_11zon.webp",
      name: "Event Apa Aja",
    },
    {
      id: 44,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/02%20LOGO%20EJ_2_11zon.webp",
      name: "Event Journal",
    },
    {
      id: 45,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/0_informasi%20eveent_1_11zon.webp",
      name: "Informasi Event",
    },
    {
      id: 46,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/medpar/logo%20umn%20juice%20black%20(2)_12_11zon.webp",
      name: "UMN Juice",
    },
  ];

  const SponsorData = [
    {
      id: 1,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/webp/LogoIlluminareJPG.webp",
      name: "Illuminare",
      rank: "Plat",
    },
    {
      id: 2,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/webp/LOGO%20AVIONE%20BOLD-UNGU%20BARU.webp",
      name: "Avione",
      rank: "Plat",
    },
    {
      id: 3,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/webp/PRU%20Ribbon%20Logo.webp",
      name: "Prudential",
      rank: "Gold",
    },
    {
      id: 4,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/webp/Start%20Space%20Logo.webp",
      name: "Start Space",
      rank: "Gold",
    },
    {
      id: 5,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/webp/Maomoto%20logo%20Final.webp",
      name: "Maomoto",
      rank: "Silver",
    },
    {
      id: 6,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/webp/Logo%20Pandaboo%20a%20(2).webp",
      name: "Pandaboo",
      rank: "Silver",
    },
    {
      id: 7,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/webp/Bantex%20png.webp",
      name: "Bantex",
      rank: "Silver",
    },
    {
      id: 8,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/LOKALATE/D7C61BF4-F8D4-40F7-90FC-F6514B815F30.png",
      name: "Lokalate",
      rank: "Silver",
    },
    {
      id: 9,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/webp/bsm%20logo.webp",
      name: "BSM Entertainment",
      rank: "",
    },
    {
      id: 10,
      icon: "https://storage.googleapis.com/mxm22-bucket-test/sponsor/NANOVEST/logo%20nanovest%20HD.png",
      name: "Nanovest",
      rank: "Silver",
    },
    {
      id: 11,
      icon: "",
      name: "Huawei",
      rank: "",
    },
    {
      id: 12,
      icon: "",
      name: "Gramedia",
      rank: "",
    },
  ];

  return (
    <>
      <Flex
        w={"full"}
        h={["auto"]}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={"#062D5F"}
      >
        <Center my={"1.5em"}>
          <Box>
            <Box mb={"1em"}>
              <Text
                color={"white"}
                fontSize={"md"}
                textAlign={"center"}
                fontWeight={"extrabold"}
              >
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
                          <a
                            href={`${socialMedia.link}`}
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            <Center
                              w={"auto"}
                              transition={"0.1s ease-in-out"}
                              transform={"scale(0.7)"}
                              _hover={{
                                transform: "scale(0.8)",
                                cursor: "pointer",
                              }}
                            >
                              <div style={{ borderRadius: "100%", backgroundColor: "white", border: "5px solid white"}}>
                                <Img
                                  src={socialMedia.icon}
                                  w={["2.8em", "5.2em"]}
                                  //bgColor={"white"}
                                  //borderRadius={"full"}
                                  //outline={"5px solid white"}
                                />
                              </div>
                            </Center>
                          </a>
                        )}
                      </div>
                    ))}
                  </>
                </Wrap>
              </Center>
            </Box>
            <Text
              color={"white"}
              fontSize={"md"}
              textAlign={"center"}
              fontWeight={"extrabold"}
            >
              Our Sponsor
            </Text>
            <Flex
              w={"full"}
              flexDirection={["column", "column", "row", "row"]}
              justifyContent={"center"}
              alignItems={"center"}
              p={5}
            >
              {SponsorData.map((sd: any) => (
                <div key={sd.id}>
                  {sd.icon !== "" && (
                    <>
                      {sd.rank === "Plat" ? (
                        <>
                          <Flex
                            p={["auto", "0.8em"]}
                            borderRadius={["2xl", "lg"]}
                            transition={"0.1s ease-in-out"}
                            w={"300px"}
                            h={"200px"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            //bgColor={'white'}
                          >
                            <Img src={sd.icon} borderRadius={["2xl", "none"]} />
                          </Flex>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </div>
              ))}
            </Flex>
            <Flex
              w={"full"}
              flexDirection={["column", "column", "row", "row"]}
              justifyContent={"center"}
              alignItems={"center"}
              py={5}
            >
              {SponsorData.map((sd: any) => (
                <div key={sd.id}>
                  {sd.icon !== "" && (
                    <>
                      {sd.rank === "Gold" ? (
                        <>
                          <Flex
                            p={["auto", "0.8em"]}
                            borderRadius={["2xl", "lg"]}
                            transition={"0.1s ease-in-out"}
                            w={"300px"}
                            h={"200px"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            //bgColor={'white'}
                          >
                            <Img
                              src={sd.icon}
                              borderRadius={["2xl", "none"]}
                              h={"125px"}
                            />
                          </Flex>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </div>
              ))}
            </Flex>

            <Wrap spacing={"1em"} justify="center">
              <WrapItem
                p={["auto", "0.8em"]}
                //bgColor={"white"}
                borderRadius={["2xl", "lg"]}
                //shadow={"md"}
                transition={"0.1s ease-in-out"}
                //cursor={"pointer"}
              >
                <Center>
                  <Box pt={10}>
                    <Center>
                      <Flex
                        w={["9em", "10em"]}
                        h={["9em", "10em"]}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Img
                          src={SponsorData[4]?.icon}
                          borderRadius={["2xl", "none"]}
                          h={'70px'}
                        />
                      </Flex>
                    </Center>
                  </Box>
                </Center>
              </WrapItem>

              <WrapItem
                p={["auto", "0.8em"]}
                //bgColor={"white"}
                borderRadius={["2xl", "lg"]}
                //shadow={"md"}
                transition={"0.1s ease-in-out"}
                //cursor={"pointer"}
              >
                <Center>
                  <Box pt={10}>
                    <Center>
                      <Flex
                        w={["9em", "10em"]}
                        h={["9em", "10em"]}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Img
                          src={SponsorData[5]?.icon}
                          borderRadius={["2xl", "none"]}
                          h={'70px'}
                        />
                      </Flex>
                    </Center>
                  </Box>
                </Center>
              </WrapItem>

              <WrapItem
                p={["auto", "0.8em"]}
                //bgColor={"white"}
                borderRadius={["2xl", "lg"]}
                //shadow={"md"}
                transition={"0.1s ease-in-out"}
                //cursor={"pointer"}
              >
                <Center>
                  <Box pt={10}>
                    <Center>
                      <Flex
                        w={["9em", "10em"]}
                        h={["9em", "10em"]}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Img
                          src={SponsorData[8]?.icon}
                          borderRadius={["2xl", "none"]}
                          w={'125px'}
                        />
                      </Flex>
                    </Center>
                  </Box>
                </Center>
              </WrapItem>

              <WrapItem
                p={["auto", "0.8em"]}
                //bgColor={"white"}
                borderRadius={["2xl", "lg"]}
                //shadow={"md"}
                transition={"0.1s ease-in-out"}
                //cursor={"pointer"}
              >
                <Center>
                  <Box pt={10}>
                    <Center>
                      <Flex
                        w={["9em", "10em"]}
                        h={["9em", "10em"]}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Img
                          src={SponsorData[6]?.icon}
                          borderRadius={["2xl", "none"]}
                          w={'125px'}
                        />
                      </Flex>
                    </Center>
                  </Box>
                </Center>
              </WrapItem>

              <WrapItem
                p={["auto", "0.8em"]}
                //bgColor={"white"}
                borderRadius={["2xl", "lg"]}
                //shadow={"md"}
                transition={"0.1s ease-in-out"}
                //cursor={"pointer"}
              >
                <Center>
                  <Box pt={10}>
                    <Center>
                      <Flex
                        w={["9em", "10em"]}
                        h={["9em", "10em"]}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Img
                          src={SponsorData[9]?.icon}
                          borderRadius={["2xl", "none"]}
                          w={'125px'}
                        />
                      </Flex>
                    </Center>
                  </Box>
                </Center>
              </WrapItem>

              <WrapItem
                p={["auto", "0.8em"]}
                //bgColor={"white"}
                borderRadius={["2xl", "lg"]}
                //shadow={"md"}
                transition={"0.1s ease-in-out"}
                //cursor={"pointer"}
              >
                <Center>
                  <Box pt={10}>
                    <Center>
                      <Flex
                        w={["9em", "10em"]}
                        h={["9em", "10em"]}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Img
                          src={SponsorData[7]?.icon}
                          borderRadius={["2xl", "none"]}
                          w={'125px'}
                        />
                      </Flex>
                    </Center>
                  </Box>
                </Center>
              </WrapItem>
            </Wrap>

            <Box mt={5}>
              <Text
                color={"white"}
                fontSize={"md"}
                textAlign={"center"}
                fontWeight={"extrabold"}
              >
                Our Media Partner
              </Text>
              <Center>
                <Wrap spacing={"1em"} justify="center">
                  {MedparData.map((item: any) => {
                    return (
                      <div key={item.id}>
                        <WrapItem
                          p={["auto", "0.8em"]}
                          bgColor={"white"}
                          borderRadius={["2xl", "lg"]}
                          //shadow={"md"}
                          transition={"0.1s ease-in-out"}
                          //cursor={"pointer"}
                        >
                          <Center>
                            <Box pt={10}>
                              <Center>
                                <Flex
                                  w={["9em", "10em"]}
                                  h={["9em", "10em"]}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                >
                                  <Img
                                    src={item.icon}
                                    borderRadius={["2xl", "none"]}
                                  />
                                </Flex>
                              </Center>
                              <Center w={"10em"} my={["0.5em", "1em"]}>
                                <Text
                                  color={"#062D5F"}
                                  fontSize={"md"}
                                  mt={10}
                                  fontWeight={"semibold"}
                                  textAlign={"center"}
                                  letterSpacing={0.2}
                                >
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
