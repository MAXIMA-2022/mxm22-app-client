import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Flex, Button, Center, Img, Text, Wrap, WrapItem } from "@chakra-ui/react";

const Footer = () => {
  const router = useRouter();

  const SocialMediaData = [
    {
      icon: "/organization/facebook.svg",
      link: "https://www.facebook.com/maximaumn",
    },
    {
      icon: "/organization/twitter.svg",
      link: "https://twitter.com/MaximaUMN",
    },
    {
      icon: "/organization/linkedin.svg",
      link: "https://www.linkedin.com/company/maxima-2022/",
    },
    {
      icon: "/organization/youtube.svg",
      link: "https://www.youtube.com/channel/UCjCWlaKQHnyhz-0hr7qQPYg",
    },
    {
      icon: "/organization/instagram.svg",
      link: "https://www.instagram.com/maximaumn/",
    },
    {
      icon: "/organization/tiktok.svg",
      link: "https://www.tiktok.com/@maximaumn",
    },
    {
      icon: "/organization/line.svg",
      link: "https://liff.line.me/1645278921-kWRPP32q/?accountId=vuu3203w",
    },
  ];

  const SponsorData = [
    {
      icon: "/organization/sponsor1.png",
      // link: HoMEInfo[0].linkFacebook,
    },
    {
      icon: "/organization/sponsor2.png",
      // link: HoMEInfo[0].linkTwitter,
    },
    {
      icon: "/organization/sponsor3.png",
      // link: HoMEInfo[0].linkLinkedIn,
    },
    {
      icon: "/organization/sponsor4.png",
      // link: HoMEInfo[0].linkYoutube,
    },
  ];

  return (
    <>
      {/* <Flex w={"15%"} m={["-3.7rem 0rem", "-3.7rem 1rem"]} position={"sticky"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
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
            bgColor={"#D01E20"}
            border={["5px solid white", "5px solid white", "4px solid white", "4px solid white", "4px solid white"]}
            borderRadius={"full"}
            shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
          >
            <Img src={"/expandLeft.svg"} w={["2rem", "2rem", "2rem", "2rem", "2rem"]} h={["1.2rem", "1.2rem", "2rem", "2rem", "2rem"]} />
          </Center>
        </Button>
      </Flex> */}
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
                  {SocialMediaData.map((socialMedia: any, key: any) => (
                    <>
                      {socialMedia.link !== "" && (
                        <a key={key} href={`${socialMedia.link}`} target={"_blank"} rel="noreferrer">
                          <Center w={"auto"} transition={"0.1s ease-in-out"} transform={"scale(0.7)"} _hover={{ transform: "scale(0.8)", cursor: "pointer" }}>
                            <Img src={socialMedia.icon} w={["2.8em", "5.2em"]} bgColor={"white"} borderRadius={"full"} outline={"5px solid white"} />
                          </Center>
                        </a>
                      )}
                    </>
                  ))}
                </Wrap>
              </Center>
            </Box>
            <Box>
              <Center>
                <Wrap spacing={"1em"} justify="center">
                  {SponsorData.map((item: any) => {
                    return (
                      <>
                        <Link href={""} key={item.id}>
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
                              <Box>
                                <Center>
                                  <Box w={["9em", "10em"]} h={["9em", "10em"]}>
                                    <Img src={item.linkLogo} borderRadius={["2xl", "none"]} />
                                  </Box>
                                </Center>
                                <Center w={"10em"} my={["0.5em", "1em"]}>
                                  <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                    {item.name}
                                  </Text>
                                </Center>
                              </Box>
                            </Center>
                          </WrapItem>
                        </Link>
                      </>
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
