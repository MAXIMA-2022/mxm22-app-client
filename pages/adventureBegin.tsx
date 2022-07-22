import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//importing local components
import Layout from "../components/Layout";
import MaximaIconP from "../public/maximaIconP.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button } from "@chakra-ui/react";

const AdventureBegin: NextPage = () => {
  return (
    <Layout>
      <Flex minH={"100vh"} bgImage={["/AdventureBeginLs.png", "/AdventureBeginLs.png", "/AdventureBeginLs.png", "/AdventureBeginLs.png"]} bgPosition={["center", "bottom", "bottom", "bottom"]} bgSize={"cover"} bgRepeat={"no-repeat"}>
        <Box w={"full"} mt={"20vh"}>
          <Box position={"absolute"} bottom={0} right={0} me={"5vh"} mb={"7vh"}>
            <Center>
              <Link href={"/home"}>
                <Button size={"md"} px={"2.5em"} bgColor={"#1B4173"} outline={"5px  solid rgb(255,255,255, 15%)"} borderRadius={"full"} shadow={"0px 5px 4px 5px rgb(0,0,0,0.2)"}>
                  <Text color={"white"} fontSize={"20px"} fontWeight={"extrabold"}>
                    NEXT
                  </Text>
                </Button>
              </Link>
            </Center>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default AdventureBegin;
