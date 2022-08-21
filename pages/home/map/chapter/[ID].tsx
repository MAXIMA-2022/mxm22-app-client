import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

//importing local components
import Layout from "../../../../components/Layout";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Img, Wrap, WrapItem } from "@chakra-ui/react";
import axios from "axios";

interface ListOrganization {
  id: number;
  name: string;
}

interface DetailInfo {
  id: number
  keterangan: string
}

const Organization = ({ ID }: { ID: string }) => {
  const [organizationData, setOrganizationData] = useState<ListOrganization[]>([]);
  const [detail, setDetail] = useState<DetailInfo[]>([])

  useEffect(() => {
    try {
      const fetchHoME = async () => {
        const response = await axios.get(`${process.env.API_URL}/api/homeInfo/chapter/${ID}`);
        setOrganizationData(response.data);
      };
      const fetchChap = async () => {
        const res = await axios.get(`${process.env.API_URL}/api/chapter/${ID}`)
        setDetail(res.data)
        console.log(res.data)
      }
      fetchChap()
      fetchHoME();
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  const Header = () => {
    return (
      <>
        <Center w={"full"} h={["32.5rem", "32.5rem", "53rem", "53rem", "67rem"]} />
        <Center position={"absolute"} left={0} right={0} top={0} bottom={0}>
          <Box mt={["25vh", "25vh", "23.5rem", "0rem", "8rem"]} position={"absolute"} transform={["scale(0.5)", "scale(0.5)", "scale(0.55)", "scale(0.7)", "scale(0.8)"]} zIndex={"2"}>
            <Img src={`https://storage.googleapis.com/mxm22-bucket-test/Computers/${ID.toLowerCase()}.png`} />
          </Box>
          <Box mt={["35vh", "35vh", "35rem", "15rem", "25rem"]} position={"absolute"} transform={["scale(0.25)", "scale(0.25)", "scale(0.55)", "scale(0.7)", "scale(0.8)"]} zIndex={"3"}>
            <Img src={"/organization/chair.png"} />
          </Box>
          <Box mt={["55vh", "60vh", "50rem", "40rem", "50rem"]} position={"absolute"} transform={["scale(0.55)", "scale(0.55)", "scale(0.65)", "scale(0.7)", "scale(0.75)"]} zIndex={"1"}>
            <Img src={"/organization/shade.png"} />
          </Box>
        </Center>
      </>
    );
  };

  const Body = () => {
    return (
      <Center mt={["10vh", "0vh", "25vh", "25vh", "25vh"]} mb={"25vh"} zIndex={"4"} bgColor={"white"}>
        <Box w={["30em", "40em"]}>
          <Center my={"3em"}>
            {detail.map((item: any) => {
              return(
                <>
                  <Text display={["none", "block"]} color={"#062D5F"} fontSize={["2xl"]} fontWeight={["extrabold", "bold"]}>
                    {item.keterangan}
                  </Text>
                  <Text display={["block", "none"]} color={"#062D5F"} fontSize={["2xl"]} fontWeight={["extrabold", "bold"]}>
                    {item.keterangan}
                  </Text>
                </>
              )
            })}
          </Center>
          <Wrap spacing={"2em"} justify="center" py={"0.5em"}>
            {organizationData.map((item: any) => {
              return (
                <>
                  <Link href={`/home/map/chapter/organization/${item.search_key}`} key={item.id}>
                    <WrapItem
                      p={["0.8em 0", "0.8em"]}
                      bgColor={"white"}
                      borderRadius={["2xl", "lg"]}
                      shadow={"md"}
                      transition={"0.1s ease-in-out"}
                      cursor={"pointer"}
                      _hover={{
                        transform: "scale(1.05)",
                      }}
                    >
                      <Center>
                        <Box>
                            <Box w={["full"]} h={["9em","10em"]} maxH={"10em"}>
                          <Center>
                              <Img src={item.linkLogo} boxSize={["135px","165px"]} objectFit={"contain"} borderRadius={["2xl", "none"]} />
                          </Center>
                            </Box>
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
        </Box>
      </Center>
    );
  };

  const BackButton = () => {
    const router = useRouter();
    return (
      <>
        <Flex w={"15%"} m={["-3.7rem 0rem", "-3.7rem 1rem"]} position={"sticky"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
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
    <Layout>
      <Navbar />
      <Flex
        position={["absolute", "relative"]}
        mt={["0vh", "0vh", "-12.5vh", "0vh", "0vh"]}
        h={["70vh", "70vh", "100vh", "160vh", "160vh"]}
        bgImage={["/organization/organisatorBgP.png", "/organization/organisatorBgP.png", "/organization/organisatorBgP.png", "/organization/organisatorBgLs3.png", "/organization/organisatorBgLs3.png"]}
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box w={"full"} zIndex={"0"}>
          <Header />
          <Body />
          <BackButton />
          <Footer />
        </Box>
      </Flex>
    </Layout>
  );
};

Organization.getInitialProps = async ({ query }: any) => {
  const { ID } = query;
  return {
    ID
  };
};

export default Organization;