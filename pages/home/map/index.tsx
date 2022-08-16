import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

//importing local components
import Layout from "../../../components/Layout";

//importing chakra ui components
import { Flex, Button, Box, Text, Img, Center, useMediaQuery } from "@chakra-ui/react";

interface IChapter{
  homeChapterID: number
  name: string
  img: string
  img2: string
}

const Maps = (props: any) => {
  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });
  const [isLargerThan1900] = useMediaQuery("(min-width: 1900px)");
  const [isLargerThan2900] = useMediaQuery("(min-width: 2900px)");
  const [chapter, setChapter] = useState<IChapter[]>([])
  
  useEffect(() => {
    try {
      setChapter(props.data)
    } catch(err: any) {
      console.log(err)
    }
    window.scrollTo(0, 9999);
  }, []);

  const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Flex display={["block", "block", "block", "none", "none"]} m={"7rem 2rem"} position={"fixed"} right={0} zIndex={999}>
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
      <Flex m={["2rem", "2rem", "10rem 4rem", "1rem", "1rem"]} p={"2em 0em"} position={"fixed"} justifyContent={"space-between"} alignItems={"end"} left={0} bottom={0} right={0}>
        <Button variant={"none"}>
          <Link href={"/home"}>
            <Center
              w={["10rem", "10rem", "10vh", "4rem", "5rem"]}
              h={["10rem", "10rem", "10vh", "4rem", "5rem"]}
              mt={["-140rem", "-140rem", "0rem", "0rem", "0rem"]}
              bgColor={"#D01E20"}
              border={["20px solid white", "20px solid white", "4px solid white", "4px solid white", "4px solid white"]}
              borderRadius={"full"}
              shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
            >
              <Img src={"../expandLeft.svg"} w={["4rem", "4rem", "10rem", "2rem", "3rem"]} h={["4rem", "10rem", "3rem", "2rem", "3rem"]} />
            </Center>
          </Link>
        </Button>
        <Center display={["none", "none", "none", "block", "block"]}>
          <Img src={"../Maps/mapsPerson.svg"} w={"80vh"} />
        </Center>
      </Flex>
    );
  };

  return (
    <Layout>
      <Flex
        className={"maps"}
        width={isLargerThan1900 ? "215vh" : ["1920px", "1920px", "1920px", "1920px", "1920px"]}
        height={isLargerThan1900 ? "4000" : ["5429px", "5429px", "2885px", "2267px", "2267px"]}
        bgImage={["../Maps/mhr3.jpg", "../Maps/mhr3.jpg", "../Maps/maps2.png", "../Maps/maps2.png", "../Maps/maps2.png"]}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        overflow={"auto"}
      >
        <Header />
            <Link href={`/home/map/chapter/${chapter[0]?.name}`}>
                <Box position={"absolute"} ms={isLargerThan1900 ? "17.5rem" : ["23.5rem", "23.5rem", "12.5rem", "9rem", "9rem"]} mt={isLargerThan1900 ? "223.2rem" : ["305rem", "305rem", "157.5rem", "122rem", "122rem"]} cursor={"pointer"}>
                    <Center>
                        <Img display={["none", "none", "block", "block", "block"]} src={chapter[0]?.img} width={isLargerThan1900 ? "" : "119px"} height={isLargerThan1900 ? "" : "108px"} />
                        <Img display={["block", "block", "none", "none", "none"]} src={chapter[0]?.img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
                    </Center>
                    <Center display={["none", "none", "block", "block", "block"]}>
                    <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                        <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                        {chapter[0]?.name}
                        </Text>
                    </Box>
                    </Center>
                </Box>
            </Link>
        
        <Link href={`/home/map/chapter/${chapter[1]?.name}`}>
          <Box position={"absolute"} ms={isLargerThan1900 ? "49rem" : ["64rem", "64rem", "35rem", "27.5rem", "27.5rem"]} mt={isLargerThan1900 ? "210rem" : ["298rem", "298rem", "148rem", "115.5rem", "115.5rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={chapter[1]?.img} width={isLargerThan1900 ? "" : "119px"} height={isLargerThan1900 ? "" : "108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={chapter[1]?.img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {chapter[1]?.name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={`/home/map/chapter/${chapter[2]?.name}`}>
          <Box position={"absolute"} ms={isLargerThan1900 ? "76rem" : ["88.5rem", "88.5rem", "55rem", "42rem", "42rem"]} mt={isLargerThan1900 ? "207rem" : ["285rem", "285rem", "146rem", "115rem", "115rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={chapter[2]?.img} width={isLargerThan1900 ? "" : "119px"} height={isLargerThan1900 ? "" : "108px"} />
              <Img src={chapter[2]?.img2} display={["block", "block", "none", "none", "none"]} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {chapter[2]?.name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={`/home/map/chapter/${chapter[3]?.name}`}>
          <Box position={"absolute"} ms={isLargerThan1900 ? "96rem" : ["35rem", "35rem", "68rem", "52rem", "52rem"]} mt={isLargerThan1900 ? "203rem" : ["266rem", "266rem", "143rem", "111rem", "111rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={chapter[3]?.img} width={isLargerThan1900 ? "" : "119px"} height={isLargerThan1900 ? "" : "108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={chapter[3]?.img2} maxWidth={"50rem"} width={"306px"} height={"344px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {chapter[3]?.name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={`/home/map/chapter/${chapter[4]?.name}`}>
          <Box position={"absolute"} ms={isLargerThan1900 ? "130rem" : ["58rem", "58rem", "90rem", "69.5rem", "69.5rem"]} mt={isLargerThan1900 ? "197rem" : ["240rem", "240rem", "140rem", "109rem", "109rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={chapter[4]?.img} width={isLargerThan1900 ? "" : "119px"} height={isLargerThan1900 ? "" : "108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={chapter[4]?.img2} maxWidth={"50rem"} width={"306px"} height={"344px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} mt={"0.5rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {chapter[4]?.name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={`/home/map/chapter/${chapter[5]?.name}`}>
          <Box position={"absolute"} ms={isLargerThan1900 ? "158rem" : ["90rem", "90rem", "110.5rem", "86.2rem", "86.2rem"]} mt={isLargerThan1900 ? "183rem" : ["222rem", "222rem", "128.5rem", "99rem", "99rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={chapter[5]?.img} width={isLargerThan1900 ? "" : "119px"} height={isLargerThan1900 ? "" : "108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={chapter[5]?.img2} maxWidth={"50rem"} width={"306px"} height={"344px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {chapter[5]?.name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={`/home/map/chapter/${chapter[6]?.name}`}>
          <Box position={"absolute"} ms={isLargerThan1900 ? "134.5rem" : ["58rem", "58rem", "95.6rem", "74.3rem", "74.3rem"]} mt={isLargerThan1900 ? "160rem" : ["205rem", "205rem", "114.5rem", "88rem", "88rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={chapter[6]?.img} width={isLargerThan1900 ? "" : "119px"} height={isLargerThan1900 ? "" : "108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={chapter[6]?.img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {chapter[6]?.name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={`/home/map/chapter/${chapter[7]?.name}`}>
          <Box position={"absolute"} ms={isLargerThan1900 ? "103.9rem" : ["28.5rem", "28.5rem", "73rem", "56.6rem", "56.6rem"]} mt={isLargerThan1900 ? "158rem" : ["202rem", "202rem", "112.5rem", "86.5rem", "86.5rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={chapter[7]?.img} width={isLargerThan1900 ? "" : "119px"} height={isLargerThan1900 ? "" : "108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={chapter[7]?.img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {chapter[7]?.name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={`/home/map/chapter/${chapter[8]?.name}`}>
          <Box position={"absolute"} ms={isLargerThan1900 ? "33rem" : ["69rem", "69rem", "23.5rem", "18rem", "18rem"]} mt={isLargerThan1900 ? "138.5rem" : ["156rem", "156rem", "97.5rem", "75rem", "75rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={chapter[8]?.img} width={isLargerThan1900 ? "" : "119px"} height={isLargerThan1900 ? "" : "108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={chapter[8]?.img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {chapter[8]?.name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={`/home/map/chapter/${chapter[9]?.name}`}>
          <Box position={"absolute"} ms={isLargerThan1900 ? "28rem" : ["38.2rem", "38.2rem", "19rem", "14.5rem", "14.5rem"]} mt={isLargerThan1900 ? "113rem" : ["133rem", "133rem", "81rem", "62rem", "62rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={chapter[9]?.img} width={isLargerThan1900 ? "" : "119px"} height={isLargerThan1900 ? "" : "108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={chapter[9]?.img2} maxWidth={"50rem"} width={"306px"} height={"344px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {chapter[9]?.name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={`/home/map/chapter/${chapter[10]?.name}`}>
          <Box position={"absolute"} ms={isLargerThan1900 ? "64.5rem" : ["16rem", "16rem", "45em", "34.5rem", "34.5rem"]} mt={isLargerThan1900 ? "102rem" : ["107rem", "107rem", "72.5rem", "55.5rem", "55.5rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={chapter[10]?.img} width={isLargerThan1900 ? "" : "119px"} height={isLargerThan1900 ? "" : "108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={chapter[10]?.img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {chapter[10]?.name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={`/home/map/chapter/${chapter[11]?.name}`}>
          <Box position={"absolute"} ms={isLargerThan1900 ? "97rem" : ["44rem", "44rem", "68rem", "52.5rem", "52.5rem"]} mt={isLargerThan1900 ? "79rem" : ["77rem", "77rem", "55.5rem", "42rem", "42rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={chapter[11]?.img} maxWidth={"50rem"} width={isLargerThan1900 ? "" : "119px"} height={isLargerThan1900 ? "" : "108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={chapter[11]?.img2} maxWidth={"50rem"} width={"344px"} height={"306px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {chapter[11]?.name}
                </Text>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href={`/home/map/chapter/${chapter[12]?.name}`}>
          <Box position={"absolute"} ms={isLargerThan1900 ? "64.5rem" : ["13rem", "13rem", "46rem", "35.5rem", "35.5rem"]} mt={isLargerThan1900 ? "55rem" : ["16rem", "16rem", "39.5rem", "30rem", "30rem"]} cursor={"pointer"}>
            <Center>
              <Img display={["none", "none", "block", "block", "block"]} src={chapter[12]?.img} maxWidth={"50rem"} width={isLargerThan1900 ? "154px" : "119px"} height={isLargerThan1900 ? "172px" : "108px"} />
              <Img display={["block", "block", "none", "none", "none"]} src={chapter[12]?.img2} maxWidth={"50rem"} width={"306px"} height={"344px"} />
            </Center>
            <Center display={["none", "none", "block", "block", "block"]}>
              <Box p={"0.2rem 1.3rem"} bgColor={"#FF6835"} outline={"3px  solid rgb(255, 255, 255, 0.3)"} borderRadius={"full"} shadow={"3px 5px 4px rgb(0,0,0,0.35)"}>
                <Text textAlign={"center"} color={"white"} fontWeight={"bold"} letterSpacing={1}>
                  {chapter[12]?.name}
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

export async function getStaticProps(){
  const { data } = await axios.get(`${process.env.API_URL}/api/chapter`)
  return{
    props:{
      data: data || {},
    }
  }
}

export default Maps;