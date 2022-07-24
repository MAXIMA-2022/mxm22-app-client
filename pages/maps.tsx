import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//importing local components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import MaximaIconP from "../public/maximaIconP.svg";

//importing chakra ui components
import { Flex, Button, Box, Text, HStack, VStack, Img, Center } from "@chakra-ui/react";

const Maps = () => {
  const MapsTents = [
    {
      name: "Cattleya",
      href: "/cattleya",
      img: "/tent1.png",
      msg: "Kalau kamu tertarik dengan APA YA. Cattleya Camp cocok menjadi tempat singgah kamu.",
    },
    {
      name: "Magnolia",
      href: "/magnolia",
      img: "/tent2.png",
    },
    {
      name: "Thyme",
      href: "/thyme",
      img: "/tent3.png",
    },
    {
      name: "Bear's Breeches",
      href: "/bearsbreeches",
      img: "/tent4.png",
    },
    {
      name: "Chrysanthemum",
      href: "/chrysanthemum",
      img: "/tent5.png",
    },
    {
      name: "Gardenia",
      href: "/gardenia",
      img: "/tent6.png",
    },
    {
      name: "Xochitl",
      href: "/xochitl",
      img: "/tent7.png",
    },
    {
      name: "Amaryllis",
      href: "/amaryllis",
      img: "/tent8.png",
    },
    {
      name: "Protea",
      href: "/protea",
      img: "/tent9.png",
    },
    {
      name: "Orchid",
      href: "/orchid",
      img: "/tent10.png",
    },
    {
      name: "Marigold",
      href: "/marigold",
      img: "/tent11.png",
    },
    {
      name: "Azalea",
      href: "/azalea",
      img: "/tent12.png",
    },
    {
      name: "Iris",
      href: "/iris",
      img: "/tent13.png",
    },
  ];

  const Footer = () => {
    return (
      <Button variant={"none"}>
        <Link href={"/home"}>
          <Center w={"4rem"} h={"4rem"} m={"2rem"} position={"fixed"} left={0} bottom={0} right={0} bgColor={"#D01E20"} border={"4px solid white"} borderRadius={"full"}>
            <Img src={"expandLeft.svg"} alt={"expand left"} w={"2rem"} h={"2rem"}></Img>
          </Center>
        </Link>
      </Button>
    );
  };

  return (
    <Layout>
      <Flex width={["1920px", "1920px"]} height={["5429px", "2267px"]} bgImage={["/mhr3.jpg", "mhr3.jpg", "maps2.png", "maps2.png", "maps2.png"]} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Link href={MapsTents[0].href}>
          <Box position={"absolute"} ms={"9rem"} mt={"122rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[0].img} width={"119px"} height={"108px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[0].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[1].href}>
          <Box position={"absolute"} ms={"27.5rem"} mt={"115.5rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[1].img} width={"119px"} height={"108px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[1].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[2].href}>
          <Box position={"absolute"} ms={"42rem"} mt={"115rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[2].img} width={"119px"} height={"108px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[2].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[2].href}>
          <Box position={"absolute"} ms={"42rem"} mt={"115rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[2].img} width={"119px"} height={"108px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[2].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[3].href}>
          <Box position={"absolute"} ms={"52rem"} mt={"111rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[3].img} width={"108px"} height={"119px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[3].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[4].href}>
          <Box position={"absolute"} ms={"69.5rem"} mt={"108rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[4].img} width={"108px"} height={"119px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[4].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[5].href}>
          <Box position={"absolute"} ms={"86.2rem"} mt={"99rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[5].img} width={"108px"} height={"119px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[5].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[6].href}>
          <Box position={"absolute"} ms={"74.3rem"} mt={"88rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[6].img} width={"108px"} height={"119px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[6].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[7].href}>
          <Box position={"absolute"} ms={"56.6rem"} mt={"86.5rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[7].img} width={"108px"} height={"119px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[7].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[8].href}>
          <Box position={"absolute"} ms={"18rem"} mt={"75rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[8].img} width={"108px"} height={"119px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[8].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[9].href}>
          <Box position={"absolute"} ms={"14.5rem"} mt={"62rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[9].img} width={"108px"} height={"119px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[9].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[10].href}>
          <Box position={"absolute"} ms={"34.5rem"} mt={"55.5rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[10].img} width={"119px"} height={"108px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[10].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[11].href}>
          <Box position={"absolute"} ms={"52.5rem"} mt={"42rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[11].img} width={"119px"} height={"108px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[11].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[12].href}>
          <Box position={"absolute"} ms={"35.9rem"} mt={"29rem"} cursor={"pointer"}>
            <Center>
              <Img src={MapsTents[12].img} width={"108px"} height={"119px"} />
            </Center>
            <Center>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[12].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Footer />
      </Flex>
    </Layout>
  );
};

export default Maps;
