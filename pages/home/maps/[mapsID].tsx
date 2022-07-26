import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//importing local components
import Layout from "../../../components/Layout";
import Navbar from "../../../components/Navbar";
import MaximaIconP from "../../../public/maximaIconP.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack } from "@chakra-ui/react";

// export const getStaticPaths = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   const paths = data.map((mapsID: any) => {
//     return {
//       params: {
//         mapsID: mapsID.name.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }: any) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users?name=${params.mapsID}`);
//   const data = await res.json();
//   return {
//     props: {
//       dataMAPS: data,
//     },
//   };
// };

const MapsPage: NextPage = ({ dataMAPS }: any) => {
  const router = useRouter();

  const capitalize = (s: any) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const MapsData = [
    {
      bgImg: "/mapsItem1.png",
      bgImg2: "/mapsItem1_mobile.png",
      title: capitalize(router.query.mapsID),
      details: "Kalau kamu tertarik dengan APA YA. Cattleya Camp cocok menjadi tempat singgah kamu.",
    },
  ];

  const ItemInfo = () => {
    return (
      <Box>
        <Box display={["none", "none", "none", "block", "block"]}>
          <Center mb={["25rem", "25rem", "15rem", "15rem", "25rem"]} me={["3rem", "3rem", "1rem", "2rem", "3rem"]} position={"absolute"} right={0} bottom={0} top={0}>
            <Center ms={"-1.5rem"} position={"absolute"} left={0} borderTop={"2rem solid transparent"} borderBottom={"2rem solid transparent"} borderRight={"2rem solid white"} />
            <Center w={["25rem", "25rem", "12rem", "17.5rem", "25rem"]} p={"1.5rem 2.5rem 1.5rem 1.5em"} bgColor={"white"} borderRadius={"3xl"} shadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
              <Stack spacing={3}>
                <Heading fontSize={["xl", "xl", "lg", "lg", "xl"]} fontWeight={"bold"} color={"#FF6835"} letterSpacing={1}>
                  {MapsData[0].title}
                </Heading>
                <Text fontSize={["xl", "xl", "sm", "sm", "lg"]} color={"#062D5F"}>
                  {MapsData[0].details}
                </Text>
              </Stack>
            </Center>
          </Center>
        </Box>
        <Box display={["block", "block", "block", "none", "none"]}>
          <Center m={["14vh 5vh", "14vh 5vh", "20vh 15vh", "14vh 5vh", "14vh 5vh"]}>
            <Center mt={["10.5rem", "10.5rem", "10rem", "11rem", "11rem"]} position={"absolute"} borderTop={"2rem solid white"} borderLeft={"2rem solid transparent"} borderRight={"2rem solid transparent"} />
            <Center w={"10w"} p={"1.5rem"} bgColor={"white"} borderRadius={"3xl"} shadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
              <Stack spacing={3}>
                <Heading fontSize={"xl"} fontWeight={"bold"} color={"#FF6835"} letterSpacing={1}>
                  {MapsData[0].title}
                </Heading>
                <Text fontSize={["md", "lg", "lg", "lg", "lg"]} color={"#062D5F"}>
                  {MapsData[0].details}
                </Text>
              </Stack>
            </Center>
          </Center>
        </Box>
      </Box>
    );
  };

  const DetailButton = () => {
    return (
      <Box position={"absolute"} left={0} bottom={0} right={0} mb={["13vh", "5vh"]}>
        <Center>
          <Link href={`/home/maps/${router.query.mapsID}/organization`}>
            <Button size={"md"} px={"2em"} bgColor={"#F7B70C"} outline={"5px  solid rgb(255,255,255,0.15)"} borderRadius={"full"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
              <Text color={["white"]} fontSize={"20px"} fontWeight={["black", "extrabold"]}>
                KUNJUNGI
              </Text>
            </Button>
          </Link>
        </Center>
      </Box>
    );
  };

  return (
    <Layout>
      <Flex minH={"100vh"} bgImage={[MapsData[0].bgImg2, MapsData[0].bgImg2, MapsData[0].bgImg2, MapsData[0].bgImg, MapsData[0].bgImg]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"}>
          <ItemInfo />
          <DetailButton />
        </Box>
      </Flex>
    </Layout>
  );
};

export default MapsPage;
