//importing local components
import Layout from "../components/Layout";

//importing chakra ui components
import { Box, Flex, Center, Text } from "@chakra-ui/react";

const NotFound = () => {
  const Footer = () => {
    return (
      <Center position={"absolute"} left={0} right={0} bottom={0} mb={"5vh"}>
        <Text color={"#1B4173"} fontSize={"sm"} fontWeight={"bold"}>
          MAXIMA 2022
        </Text>
      </Center>
    );
  };
  
    return (
        <Layout>
          <Flex minH={"100vh"} bgImage={["https://storage.googleapis.com/mxm22-bucket-test/404/ERROR404-mobile.jpg", "https://storage.googleapis.com/mxm22-bucket-test/404/ERROR404-mobile.jpg","https://storage.googleapis.com/mxm22-bucket-test/404/ERROR404-mobile.jpg", "https://storage.googleapis.com/mxm22-bucket-test/404/ERROR404.jpg", "https://storage.googleapis.com/mxm22-bucket-test/404/ERROR404.jpg"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
            <Box w={"full"} mt={"20vh"}>
                <Footer/>
            </Box>
          </Flex>
        </Layout>
      );
}

export default NotFound;