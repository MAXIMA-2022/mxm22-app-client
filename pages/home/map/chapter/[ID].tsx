import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

//importing local components
import Layout from "../../../../components/Layout";
import Navbar from "../../../../components/Navbar";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Img, Wrap, WrapItem } from "@chakra-ui/react";
import axios from "axios";

interface ListOrganization {
  id: number;
  name: string;
}

const Organization = ({ ID }: { ID: string }) => {
  const [organizationData, setOrganizationData] = useState<ListOrganization[]>([]);

  useEffect(() => {
    try {
      const fetchHoME = async () => {
        const response = await axios.get(`${process.env.API_URL}/api/homeInfo/chapter/${ID}`);
        setOrganizationData(response.data);
      };
      fetchHoME();
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  const Header = () => {
    return (
      <>
        <Center w={"full"} h={["32.5rem", "50rem", "53rem", "53rem", "67rem"]} />
        <Center position={"absolute"} left={0} right={0} top={0} bottom={0}>
          <Box mt={["25vh", "25vh", "23.5rem", "0rem", "8rem"]} position={"absolute"} transform={["scale(0.5)", "scale(0.5)", "scale(0.55)", "scale(0.7)", "scale(0.8)"]} zIndex={"2"}>
            <Img src={`/organization/Computers/${ID.toLowerCase()}.png`} />
          </Box>
          <Box mt={["35vh", "35vh", "35rem", "15rem", "25rem"]} position={"absolute"} transform={["scale(0.25)", "scale(0.25)", "scale(0.55)", "scale(0.7)", "scale(0.8)"]} zIndex={"3"}>
            <Img src={"/organization/chair.png"} />
          </Box>
          <Box mt={["60vh", "60vh", "50rem", "40rem", "50rem"]} position={"absolute"} transform={["scale(0.55)", "scale(0.55)", "scale(0.65)", "scale(0.7)", "scale(0.75)"]} zIndex={"1"}>
            <Img src={"/organization/shade.png"} />
          </Box>
        </Center>
      </>
    );
  };

  const Body = () => {
    return (
      <Center 
      //mt={["10vh", "25vh"]} mb={"15vh"} 
      zIndex={"4"} bgColor={'white'}>
        <Box w={["30em", "40em"]}>
          <Center my={"3em"}>
            <Text display={["none", "block"]} color={"#062D5F"} fontSize={["2xl"]} fontWeight={["black", "bold"]}>
              Organisasi dan Himpunan
            </Text>
            <Text display={["block", "none"]} color={"#062D5F"} fontSize={["3xl"]} fontWeight={["black", "bold"]}>
              Lembaga Kampus
            </Text>
          </Center>
          <Wrap spacing={"2em"} justify="center" py={"0.5em"}>
            {organizationData.map((item: any) => {
              return (
                <>
                    <Link href={`/home/map/chapter/organization/${item.search_key}`} key={item.id}>
                    <WrapItem
                        p={["auto", "0.8em"]}
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
        </Box>
      </Center>
    );
  };

  const Footer = () => {
    const router = useRouter();
    return (
      <>
        <Flex m={["3.5rem 1rem", "3rem 1rem"]} position={"fixed"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
          <Button
            variant={"none"}
            onClick={() => {
              router.back();
            }}
          >
            <Center
              w={["3.5rem", "5rem", "4rem", "4rem", "4rem"]}
              h={["3.5rem", "5rem", "4rem", "4rem", "4rem"]}
              mt={["0rem", "-rem", "0rem", "0rem", "0rem"]}
              bgColor={"#D01E20"}
              border={["6px solid white", "6px solid white", "4px solid white", "4px solid white", "4px solid white"]}
              borderRadius={"full"}
              shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
            >
              <Img src={"/expandLeft.svg"} w={["2rem", "2rem", "2rem", "2rem", "2rem"]} h={["2rem", "2rem", "2rem", "2rem", "2rem"]} />
            </Center>
          </Button>
        </Flex>
        <Flex w={"full"} h={["5em", "8em"]} justifyContent={"center"} alignItems={"center"} bgColor={"#062D5F"}>
          <Center>
            <Text color={"white"} fontSize={"md"} textAlign={"center"} fontWeight={"extrabold"}>
              HoME MAXIMA 2022
            </Text>
          </Center>
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
          <Body/>
          <Footer />
        </Box>
      </Flex>
    </Layout>
  );
};

Organization.getInitialProps = async ({ query }: any) => {
    const { ID } = query;
    return {
        ID,
    };
};

export default Organization;
