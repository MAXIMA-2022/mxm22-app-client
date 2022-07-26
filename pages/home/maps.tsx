import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//importing local components
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import MaximaIconP from "../../public/maximaIconP.svg";

//importing chakra ui components
import { Flex, Button, Box, Text, HStack, VStack, Img, Center } from "@chakra-ui/react";

const Maps = () => {
  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    window.scrollTo(0, 9999);
  }, []);

  const MapsTents = [
    {
      name: "Cattleya",
      href: "maps/cattleya",
      img: "/tent1.png",
      img2: "/tent1v2.png",
      msg: "Kalau kamu tertarik dengan APA YA. Cattleya Camp cocok menjadi tempat singgah kamu.",
    },
    {
      name: "Magnolia",
      href: "maps/magnolia",
      img: "/tent2.png",
      img2: "/tent2v2.png",
    },
    {
      name: "Thyme",
      href: "maps/thyme",
      img: "/tent3.png",
      img2: "/tent3v2.png",
    },
    {
      name: "Bear's Breeches",
      href: "maps/bearsbreeches",
      img: "/tent4.png",
      img2: "/tent4v2.png",
    },
    {
      name: "Chrysanthemum",
      href: "maps/chrysanthemum",
      img: "/tent5.png",
      img2: "/tent5v2.png",
    },
    {
      name: "Gardenia",
      href: "maps/gardenia",
      img: "/tent6.png",
      img2: "/tent6v2.png",
    },
    {
      name: "Xochitl",
      href: "maps/xochitl",
      img: "/tent7.png",
      img2: "/tent7v2.png",
    },
    {
      name: "Amaryllis",
      href: "maps/amaryllis",
      img: "/tent8.png",
      img2: "/tent8v2.png",
    },
    {
      name: "Protea",
      href: "maps/protea",
      img: "/tent9.png",
      img2: "/tent9v2.png",
    },
    {
      name: "Orchid",
      href: "maps/orchid",
      img: "/tent10.png",
      img2: "/tent10v2.png",
    },
    {
      name: "Marigold",
      href: "maps/marigold",
      img: "/tent11.png",
      img2: "/tent11v2.png",
    },
    {
      name: "Azalea",
      href: "maps/azalea",
      img: "/tent12.png",
      img2: "/tent12v2.png",
    },
    {
      name: "Iris",
      href: "maps/iris",
      img: "/tent13.png",
      img2: "/tent13v2.png",
    },
  ];

  const Header = () => {
    return (
      <Flex display={["block", "block", "none", "none", "none"]} m={"7rem 2rem"} position={"fixed"} right={0} zIndex={999}>
        <Button variant={"none"}>
          <Center w={"10rem"} h={"10rem"} bgColor={"#062D5F"} border={"10px solid white"} borderRadius={"full"}>
            <Text color={"white"} fontSize={"7xl"} fontWeight={"black"}>
              ?
            </Text>
          </Center>
        </Button>
      </Flex>
    );
  };

  const Footer = () => {
    return (
      <Flex m={["2rem", "1rem"]} position={"fixed"} justifyContent={"space-between"} alignItems={"center"} left={0} bottom={0} right={0}>
        <Button variant={"none"}>
          <Link href={"/home"}>
            <Center
              w={["10rem", "10rem", "5rem", "4rem", "4rem"]}
              h={["10rem", "10rem", "5rem", "4rem", "4rem"]}
              mt={["-140rem", "-140rem", "0rem", "0rem", "0rem"]}
              bgColor={"#D01E20"}
              border={["20px solid white", "20px solid white", "4px solid white", "4px solid white", "4px solid white"]}
              borderRadius={"full"}
            >
              <Img src={"../expandLeft.svg"} w={["4rem", "4rem", "2.5rem", "2rem", "2rem"]} h={["4rem", "4rem", "3rem", "2rem", "2rem"]} />
            </Center>
          </Link>
        </Button>
        <Center display={["none", "block"]}>
          <Img src={"../mapsPerson.svg"} />
        </Center>
      </Flex>
    );
  };

  return (
    <Layout>
      <Flex
        width={["1920px", "1920px", "1920px", "1920px", "1920px"]}
        height={["5429px", "5429px", "2885px", "2267px", "2267px"]}
        bgImage={["../mhr3.jpg", "../mhr3.jpg", "../maps2.png", "../maps2.png", "../maps2.png"]}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Header />
        <Link href={MapsTents[0].href}>
          <Box position={"absolute"} ms={["23.5rem", "23.5rem", "12.5rem", "9rem", "9rem"]} mt={["305rem", "305rem", "157.5rem", "122rem", "122rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[0].img} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={MapsTents[0].img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[0].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[1].href}>
          <Box position={"absolute"} ms={["64rem", "64rem", "35rem", "27.5rem", "27.5rem"]} mt={["298rem", "298rem", "148rem", "115.5rem", "115.5rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[1].img} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={MapsTents[1].img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[1].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[2].href}>
          <Box position={"absolute"} ms={["88.5rem", "88.5rem", "55rem", "42rem", "42rem"]} mt={["285rem", "285rem", "146rem", "115rem", "115rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[2].img} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[2].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[3].href}>
          <Box position={"absolute"} ms={["35rem", "35rem", "68rem", "52rem", "52rem"]} mt={["266rem", "266rem", "143rem", "111rem", "111rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[3].img} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={MapsTents[3].img2} maxWidth={"50rem"} width={"306px"} height={"344px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[3].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[4].href}>
          <Box position={"absolute"} ms={["58rem", "58rem", "90rem", "69.5rem", "69.5rem"]} mt={["240rem", "240rem", "140rem", "109rem", "109rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[4].img} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={MapsTents[4].img2} maxWidth={"50rem"} width={"306px"} height={"344px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[4].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[5].href}>
          <Box position={"absolute"} ms={["90rem", "90rem", "110.5rem", "86.2rem", "86.2rem"]} mt={["222rem", "222rem", "128.5rem", "99rem", "99rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[5].img} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={MapsTents[5].img2} maxWidth={"50rem"} width={"306px"} height={"344px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[5].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[6].href}>
          <Box position={"absolute"} ms={["58rem", "58rem", "95.6rem", "74.3rem", "74.3rem"]} mt={["205rem", "205rem", "114.5rem", "88rem", "88rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[6].img} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={MapsTents[6].img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[6].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[7].href}>
          <Box position={"absolute"} ms={["28.5rem", "28.5rem", "73rem", "56.6rem", "56.6rem"]} mt={["202rem", "202rem", "112.5rem", "86.5rem", "86.5rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[7].img} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={MapsTents[7].img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[7].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[8].href}>
          <Box position={"absolute"} ms={["69rem", "69rem", "23.5rem", "18rem", "18rem"]} mt={["156rem", "156rem", "97.5rem", "75rem", "75rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[8].img} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={MapsTents[8].img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[8].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[9].href}>
          <Box position={"absolute"} ms={["38.2rem", "38.2rem", "19rem", "14.5rem", "14.5rem"]} mt={["133rem", "133rem", "81rem", "62rem", "62rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[9].img} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={MapsTents[9].img2} maxWidth={"50rem"} width={"306px"} height={"344px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[9].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[10].href}>
          <Box position={"absolute"} ms={["16rem", "16rem", "45em", "34.5rem", "34.5rem"]} mt={["107rem", "107rem", "72.5rem", "55.5rem", "55.5rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[10].img} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={MapsTents[10].img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[10].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[11].href}>
          <Box position={"absolute"} ms={["44rem", "44rem", "68rem", "52.5rem", "52.5rem"]} mt={["77rem", "77rem", "55.5rem", "42rem", "42rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[11].img} maxWidth={"50rem"} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={MapsTents[11].img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {MapsTents[11].name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={MapsTents[12].href}>
          <Box position={"absolute"} ms={["13rem", "13rem", "46rem", "35.5rem", "35.5rem"]} mt={["16rem", "16rem", "39.5rem", "30rem", "30rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={MapsTents[12].img} maxWidth={"50rem"} width={"119px"} height={"108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={MapsTents[12].img2} maxWidth={"50rem"} width={"306px"} height={"344px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
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
