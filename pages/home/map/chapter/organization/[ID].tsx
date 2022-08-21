import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";

//importing local components
import Layout from "../../../../../components/Layout";
import Navbar from "../../../../../components/Navbar";
import Footer from "../../../../../components/Footer";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Stack, Img, Wrap, Modal, ModalOverlay, ModalContent, useDisclosure, AspectRatio } from "@chakra-ui/react";
import { motion } from "framer-motion";

//importing react-slick components
interface HoMEDescription {
  chapter: string;
  chapterName: string;
  homeID: number;
  instagram: string;
  lineID: string;
  linkLogo: string;
  linkFacebook: string;
  linkInstagram: string;
  linkLine: string;
  linkLinkedIn: string;
  linkTiktok: string;
  linkTwitter: string;
  linkYoutube: string;
  shortDesc: string;
  longDesc: string;
  media: any;
  name: string;
  search_key: string;
}

const OrganizationDesc = ({ ID }: { ID: string }) => {
  const [HoMEInfo, setHoMEInfo] = useState<HoMEDescription[]>([]);

  useEffect(() => {
    try {
      const fetchHoME = async () => {
        const response = await axios.get(`${process.env.API_URL}/api/homeInfo/searchKey/${ID}`);
        setHoMEInfo(response.data);
      };
      fetchHoME();
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  const Header = () => {
    return (
      <>
        <Center position={"absolute"} mt={["6rem", "10rem", "9rem", "14rem", "14rem"]} top={0} bottom={0} left={0} right={0}>
          <Box  borderRadius={"xl"} zIndex={"1"}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: 'spring', 
                bounce: 0.5 }}
              exit={{ scale: 0 }}
            >
            {HoMEInfo.map((item: any) => {
              return <Img key={item.homeID} src={item.linkLogo} boxSize={["100px","100px","200px","325px","400px"]}  />;
            })}
            </motion.div>
          </Box>
        </Center>
      </>
    );
  };

  const Body = () => {
    return (
      <>
        {HoMEInfo.map((item: any) => {
          return (
            <>
              <Center mt={["60vh", "85vh", "100vw", "185vh", "185vh"]} mb={"15vh"} zIndex={"4"}>
                <Box w={["20em", "30em", "60em", "60em", "60em"]}>
                  <Stack my={"3em"} direction={"column"} spacing={"3em"}>
                    <Center>
                      <Text textAlign={"center"} display={["none", "block"]} color={"#062D5F"} fontSize={["lg", "lg", "2xl", "2xl", "3xl"]} fontWeight={["black", "bold"]}>
                        {item.name}
                      </Text>
                      <Text textAlign={"center"} display={["block", "none"]} color={"#062D5F"} fontSize={["2xl"]} fontWeight={["black", "bold"]}>
                        {item.name}
                      </Text>
                    </Center>
                    <Center>
                      <Box w={["17em", "25em", "40em", "40em", "40em"]} mb={"4em"}>
                        <Center w={"full"} mb={"4em"}>
                          <AspectRatio w={"full"} h={["10em", "20em"]} maxH={"20em"} bgColor={"#000"} outline={"5px solid #FF6835"} borderRadius={"2xl"} ratio={1} overflow={"hidden"}>
                            <iframe src={item.linkYoutube} title={"YouTube video player"} style={{ borderRadius: "1em" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"></iframe>
                          </AspectRatio>
                        </Center>
                        <Text fontSize={["md", "md", "xl", "xl", "xl"]} textAlign={"justify"} color={"#062D5F"}>
                          {item.longDesc}
                        </Text>
                      </Box>
                    </Center>
                  </Stack>
                  <Carousel>
                    {[...new Array(CARDS)].map((_, i) => (
                      <Card key={i} images={images[i]} />
                    ))}
                  </Carousel>
                  <SocialMedia />
                </Box>
              </Center>
            </>
          );
        })}
      </>
    );
  };

  const images = HoMEInfo[0]?.media;
  const CARDS = images?.length;
  const MAX_VISIBILITY = 2;

  const Card = ({ images }: any) => (
    <Center>
      <Box w={"100%"} h={"100%"} borderRadius={"1rem"} color={"grey"} textAlign={"justify"} transition={"all 0.3 ease-out"}>
        <Center w={"full"} h={"full"} border="solid red">
          <Img src={images} shadow={"0px 8px 8px rgb(0,0,0,0.25)"} borderRadius={["2xl", "xl", "xl", "xl", "xl"]} />
        </Center>
      </Box>
    </Center>
  );

  const Carousel = ({ children }: any) => {
    const [active, setActive] = useState(1);
    const count = React.Children.count(children);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
      const interval = setInterval(() => {
        setActive((active + 1) % count);
      }, 4000);
      return () => clearInterval(interval);
    }, [active, count]);

    return (
      <Box mt={"5em"}>
        <Center mb={"1.5em"}>
          <Text fontSize={"2xl"} color={"#062D5F"} fontWeight={"extrabold"}>
            Galeri Kami
          </Text>
        </Center>
        <Flex justifyContent={"center"} alignItems={"center"} overflow={"hidden"}>
          <Center flex={1}>
            {active > 0 && (
              <Button variant={"none"} onClick={() => setActive((i) => i - 1)} zIndex={"1"}>
                <Img src={"/organization/expand_left.svg"} display={["none", "block"]} w={["40px", "40px", "35px", "40px", "56px"]} />
              </Button>
            )}
          </Center>
          <Center mx={["7em", "7em", "2em", "5em", "7em"]}>
            <Box position={"relative"} w={["18rem", "18rem", "22rem", "30rem", "35rem"]} h={["11em", "11em", "14em", "19em", "22em"]} maxH={"22em"} transform={["scale(0.75)","scale(0.85)"]} style={{ perspective: "500px", transformStyle: "preserve-3d" }} flex={1}>
              {React.Children.map(children, (child, i) => (
                <Box
                  className={"carousel"}
                  cursor={active === i ? "pointer" : "default"}
                  style={
                    {
                      "--active": i === active ? 1 : 0,
                      "--offset": (active - i) / 3,
                      "--direction": Math.sign(active - i),
                      "--abs-offset": Math.abs(active - i) / 3,
                    } as React.CSSProperties
                  }
                  pointerEvents={active === i ? "auto" : "none"}
                  opacity={Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1"}
                  display={Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block"}
                  onClick={() => {
                    if (active === i) {
                      onOpen();
                    }
                  }}
                  onTouchMove={(e) => {
                    var touch = e.touches[0];
                    if (touch.pageX < window.innerWidth / 2) {
                      setActive((i) => i - 1);
                    } else {
                      setActive((i) => i + 1);
                    }
                  }}
                >
                  {child}
                  <Modal size={["xs", "3xl"]} onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                      <Img src={images[active]} />
                    </ModalContent>
                  </Modal>
                </Box>
              ))}
            </Box>
          </Center>
          <Center flex={1}>
            {active < count - 1 && (
              <Button variant={"none"} onClick={() => setActive((i) => i + 1)} zIndex={"1"}>
                <Img src={"/organization/expand_right.svg"} display={["none", "none", "block", "block", "block"]} w={["40px", "40px", "35px", "40px", "56px"]} />
              </Button>
            )}
          </Center>
        </Flex>
        <Box textAlign={"center"} mt={"0em"}>
          {[...new Array(CARDS)].map((_, i) => (
            <Box
              key={i}
              display={"inline-block"}
              w={"1em"}
              h={"1em"}
              borderRadius={"50%"}
              cursor={"pointer"}
              margin={"15px 7px 0px"}
              bgColor={active === i ? "#F7B70C" : "#D9D9D9"}
              onClick={() => {
                setActive(i);
              }}
            ></Box>
          ))}
        </Box>
      </Box>
    );
  };

  const SocialMedia = () => {
    const SocialMediaData = [
      {
        icon: "/organization/facebook.svg",
        link: HoMEInfo[0].linkFacebook,
      },
      {
        icon: "/organization/twitter.svg",
        link: HoMEInfo[0].linkTwitter,
      },
      {
        icon: "/organization/linkedin.svg",
        link: HoMEInfo[0].linkLinkedIn,
      },
      {
        icon: "/organization/youtube.svg",
        link: HoMEInfo[0].linkYoutube,
      },
      {
        icon: "/organization/instagram.svg",
        link: HoMEInfo[0].linkInstagram,
      },
      {
        icon: "/organization/line.svg",
        link: `https://page.line.me/?accountId=${HoMEInfo[0].linkLine}`,
      },
      {
        icon: "/organization/tiktok.svg",
        link: HoMEInfo[0].linkTiktok,
      },
    ];

    return (
      <Box mt={"6em"}>
        <Center mb={"2em"}>
          <Text fontSize={"2xl"} color={"#062D5F"} fontWeight={"extrabold"}>
            Temukan Kami di
          </Text>
        </Center>
        <Center>
          <Wrap w={"full"} justify={"center"} spacing={["0em", "0.2em"]}>
            {SocialMediaData.map((socialMedia: any, key: any) => (
              <>
                {socialMedia.link !== "" && (
                  <a key={key} href={`${socialMedia.link}`} target={"_blank"} rel="noreferrer">
                    <Center w={"auto"} transition={"0.1s ease-in-out"} transform={"scale(0.7)"} _hover={{ transform: "scale(0.8)", cursor: "pointer" }}>
                      <Img src={socialMedia.icon} w={["2.8em", "5.2em"]} />
                    </Center>
                  </a>
                )}
              </>
            ))}
          </Wrap>
        </Center>
      </Box>
    );
  };

  const BackButton = () => {
    const router = useRouter();
    return (
      <>
        <Flex w={"15%"} m={["3.7rem 0rem", "3.7rem 1rem"]} position={"sticky"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
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
        </Flex>
      </>
    );
  };

  return (
    <>
      <Layout>
        <Navbar />
        <Flex
          w={"100%"}
          position={["absolute", "relative"]}
          // mt={["0vh", "-55vh"]}
          // h={["100vh", "220vh"]}
          mt={["0vh", "-15vh", "-15vh", "-55vh", "-55vh"]}
          h={["70vh", "100vh", "110vw", "220vh", "220vh"]}
          bgImage={["/organization/organizationDescLs.png", "/organization/organizationDescLs.png"]}
          bgPosition={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          <Box w={"full"} zIndex={"0"}>
            <Header />
            <Body />
            <Footer />
          </Box>
        </Flex>
      </Layout>
    </>
  );
};

OrganizationDesc.getInitialProps = async ({ query }: any) => {
  const { ID } = query;
  return {
    ID,
  };
};

export default OrganizationDesc;
