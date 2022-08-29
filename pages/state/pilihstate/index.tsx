import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { isExpired } from "react-jwt";
import { useReadLocalStorage } from "usehooks-ts";
import { useUserContext } from "../../../useContext/UserContext";

//importing local components
import Layout from "../../../components/Layout";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

//importing chakra ui components
import { Box, Flex, Center, Text, Button, Img, Wrap, WrapItem, Tab, TabList, TabPanel, TabPanels, Tabs, Divider } from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";

interface ListStateAct {
  id: number;
  name: string;
  date: string
  stateLogo: string
  stateID: number
}

interface DayManagement{
  id: number,
  date: string,
  day: string
  hari: number
}

const PilihState = () => {
  const jwt = useReadLocalStorage<string>("token");
  const { nim } = useUserContext()
  const [stateData, setStateData] = useState<ListStateAct[]>([]);
  const [day, setDay] = useState<DayManagement[]>([])
  const headers = {
    "x-access-token": jwt!,
  };
  const router = useRouter()
  const isMyTokenExpired = isExpired(jwt as string);
  const [stateReg, setstateReg] = useState([])
  useEffect(() => {
    if (!jwt || isMyTokenExpired) {
      router.push("/login");
    }
    try {
      const fetchSTATE = async () => {
        const response = await axios.get(`${process.env.API_URL}/api/state`, { headers });
        const res = await axios.get(`${process.env.API_URL}/api/dayManagement/`, { headers })
        const result = await axios.get(`${process.env.API_URL}/api/stateReg/${nim}`, { headers })
        setstateReg(result.data)
        setDay(res.data)
        setStateData(response.data)
        //console.log(result.data)
      };
      fetchSTATE()
    } catch (err: any) {
      console.log(err);
    }
  }, [nim]);

  const handleRegister = async (stateID: number) => {
    try {
      const result = await axios.post(`${process.env.API_URL}/api/stateReg/createSRegis/${nim}`, { 
        'stateID': `${stateID}`
      },{ headers })
      const fetchSTATE = async () => {
        const response = await axios.get(`${process.env.API_URL}/api/state`, { headers })
        const result = await axios.get(`${process.env.API_URL}/api/stateReg/${nim}`, { headers })
        setstateReg(result.data)
        setStateData(response.data)
      };
      fetchSTATE()
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${result.data.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (err: any) {
      console.log(err)
      Swal.fire({
        title: "Perhatian!",
        text: `${err.response.data.message}`,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
  }

  const handleCancel = async (stateID: number) => {
    try{
      const res = await axios.delete(`${process.env.API_URL}/api/stateReg/deleteSRegis/${stateID}/${nim}`, { headers })
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${res.data.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
      const fetchSTATE = async () => {
        const response = await axios.get(`${process.env.API_URL}/api/state`, { headers })
        const result = await axios.get(`${process.env.API_URL}/api/stateReg/${nim}`, { headers })
        setstateReg(result.data)
        setStateData(response.data)
      };
      fetchSTATE()
      console.log(res)
    } catch(err: any) {
      console.log(err)
      Swal.fire({
        title: "Perhatian!",
        text: `${err.response.data.message}`,
        icon: "error",
        confirmButtonText: "Coba lagi",
      });
    }
  }

  const Body = () => {
    return (
      <Center mt={["60vh", "65vh", "60vh", "60vh", "60vh"]} mb={"15vh"} zIndex={"4"}>
        <Box>
          <Center mt={"3em"} mb={"0.8em"}>
            <Text
              color={"#062D5F"}
              fontSize={["3xl", "4xl"]}
              fontWeight={["extrabold", "bold"]}
            >
              Pilih STATE
            </Text>
          </Center>
          <Center>
            <Box borderRadius={"xl"}>
              <Center w={["100%", "100%"]} h={["100%"]}>
                <Box w={["92%", "95%", "90vw", "95vw", "70vw"]} maxW={"auto"}>
                  <Tabs variant="soft-rounded" isFitted>
                    <Center>
                      <Box
                        w={["30em", "full", "30em", "35em", "40em"]}
                        p={["0.5em 1em 1em 1em", "1.5em"]}
                        bgColor={"#FDF0CC"}
                        borderRadius={["xl", "xl", "full"]}
                        boxShadow={[
                          "none",
                          "none",
                          "0px 4px 4px 0px rgb(0,0,0,0.25)",
                        ]}
                      >
                        <Center
                          mb={"0.5em"}
                          fontSize={["md", "lg", "lg", "lg", "lg"]}
                          fontWeight={"bold"}
                          color={"#D01E20"}
                        >
                          Hari ke
                        </Center>
                        <Center>
                          <Box w={["100%", "100%", "80%"]}>
                            <TabList>
                              {day.map((item: any) => (
                                <Tab
                                  key={item.id}
                                  py={["0.2em", "0.5em", "0"]}
                                  mx={["0.3em", "0.5em", "0.5em", "0.5em", "0.3em"]}
                                  fontSize={["lg", "xs", "md", "sm", "2xl"]}
                                  color={"#FF6835"}
                                  bgColor={"none"}
                                  border={"2px solid #FF6835"}
                                  _selected={{
                                    color: "#FF6835",
                                    bg: "white",
                                    border: "3px solid #FF6835",
                                  }}
                                >
                                  {item.hari}
                                </Tab>
                              ))}
                            </TabList>
                          </Box>
                        </Center>
                      </Box>
                    </Center>
                    <TabPanels mt={["1.5em","1.5em","5em"]}>
                          <TabPanel w={"100%"} mt={"1em"} p={["0.5em 0em 1em 0em","1.5em 0em 1.5em 0em"]} bgColor={"#FDF0CC"} borderRadius={["xl"]}>
                              <Box>
                                <Center>
                                  <Text fontSize={["3xl", "3xl", "xl", "2xl", "2xl"]} fontWeight={"black"} color={"#1B4173"} letterSpacing={0.5}>
                                      STATE HARI KE-{day[0]?.hari}
                                  </Text>
                                </Center>
                                <Center mt={"-0.2em"}>
                                  <Text fontSize={["lg", "xs", "sm", "md", "md"]} fontWeight={"bold"} color={"#FF6835"}>
                                      {day[0]?.date}
                                  </Text>
                                </Center>
                              </Box>
                              <Divider w={"full"} mt={"1em"} mb={"2.5em"} borderWidth={"0.12em"} style={{ borderRadius: "20px",}} borderColor={"white"} opacity={1}/>
                              <Box>
                                <Wrap spacing={["1em","2.5em"]} justify="center" py={"0.5em"}>
                                  {stateData
                                  .filter((item: any) => item.date === "Mon, 05 Sep 2022")
                                  .map((item: any) => {
                                    return (
                                      <>
                                          <WrapItem key={item.id}
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
                                                    <Img src={item.stateLogo} boxSize={["135px","165px"]} objectFit={"contain"} borderRadius={["2xl", "lg"]} />
                                                </Center>
                                                  </Box>
                                                  <Center w={"10em"} h={"5em"} my={["0.5em", "1em"]}>
                                                  <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                                    {item.name}
                                                  </Text>
                                                </Center>
                                                <Center w={"10em"} my={["0.5em", "1em"]} px={"1em"}>
                                                  <Flex w={"full"} h={"1.5em"} bgColor={"#FFCFBF"} style={{borderRadius: "20px"}} justifyContent={"center"} alignItems={"center"}>
                                                    <Center w={"full"} h={"1.5em"} bgColor={"#FF6835"} borderLeftRadius={"full"}>
                                                      <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} color={"white"}>
                                                        Kuota
                                                      </Text>
                                                    </Center>
                                                    <Center mx={"0.85em"}>
                                                      <Text color={"#FF6835"} fontSize={"xs"} fontWeight={"semibold"} textAlign={"center"}>
                                                        {item.registered}/{item.quota}
                                                      </Text>
                                                    </Center>
                                                  </Flex>
                                                </Center>
                                                {item.registered === item.quota ? (<Flex justifyContent={'center'} alignItems={'center'}><Button isDisabled bgColor={'#FF6835'} textColor={'black'}>PENUH</Button></Flex>):(
                                                  <Flex mb={"1.5em"} justifyContent={'center'} alignItems={'center'}>
                                                  {stateReg.filter((reg: any)=>{return reg.stateID === item.stateID}).length > 0 ? (<Button bgColor={'#D01E20'} size={['sm','md','md','md']} onClick={()=>{handleCancel(item.stateID)}}><Text textColor={"white"}>Cancel</Text></Button>)
                                                  :
                                                  (<Button bgColor={'#1B4173'} size={['sm','md','md','md']} onClick={()=>{handleRegister(item.stateID)}}><Text textColor={"white"}>Ambil</Text></Button>)}
                                                </Flex>)}
                                              </Box>
                                            </Center>
                                          </WrapItem>
                                      </>
                                    );
                                  })}
                                </Wrap>
                              </Box>
                          </TabPanel>
                          <TabPanel w={"100%"} mt={"1em"} p={["0.5em 0em 1em 0em","1.5em 0em 1.5em 0em"]} bgColor={"#FDF0CC"} borderRadius={["xl"]}>
                              <Box>
                                <Center>
                                  <Text fontSize={["3xl", "3xl", "xl", "2xl", "2xl"]} fontWeight={"black"} color={"#1B4173"} letterSpacing={0.5}>
                                      STATE HARI KE-{day[1]?.hari}
                                  </Text>
                                </Center>
                                <Center mt={"-0.2em"}>
                                  <Text fontSize={["lg", "xs", "sm", "md", "md"]} fontWeight={"bold"} color={"#FF6835"}>
                                      {day[1]?.date}
                                  </Text>
                                </Center>
                              </Box>
                              <Divider w={"full"} mt={"1em"} mb={"2.5em"} borderWidth={"0.12em"} style={{borderRadius: "20px"}} borderColor={"white"} opacity={1}/>
                              <Box>
                                <Wrap spacing={["1em","2.5em"]} justify="center" py={"0.5em"}>
                                  {stateData
                                  .filter((item: any) => item.date === "Tue, 06 Sep 2022")
                                  .map((item: any) => {
                                    return (
                                      <>
                                          <WrapItem key={item.date}
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
                                                    <Img src={item.stateLogo} boxSize={["135px","165px"]} objectFit={"contain"} borderRadius={["2xl", "lg"]} />
                                                </Center>
                                                  </Box>
                                                  <Center w={"10em"} h={"5em"} my={["0.5em", "1em"]}>
                                                  <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                                    {item.name}
                                                  </Text>
                                                </Center>
                                                <Center w={"10em"} my={["0.5em", "1em"]} px={"1em"}>
                                                  <Flex w={"full"} h={"1.5em"} bgColor={"#FFCFBF"} style={{borderRadius: "20px"}} justifyContent={"center"} alignItems={"center"}>
                                                    <Center w={"full"} h={"1.5em"} bgColor={"#FF6835"} borderLeftRadius={"full"}>
                                                      <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} color={"white"}>
                                                        Kuota
                                                      </Text>
                                                    </Center>
                                                    <Center mx={"0.85em"}>
                                                      <Text color={"#FF6835"} fontSize={"xs"} fontWeight={"semibold"} textAlign={"center"}>
                                                        {item.registered}/{item.quota}
                                                      </Text>
                                                    </Center>
                                                  </Flex>
                                                </Center>
                                                {item.registered === item.quota ? (<Flex justifyContent={'center'} alignItems={'center'}><Button isDisabled bgColor={'#FF6835'} textColor={'black'}>PENUH</Button></Flex>):(
                                                  <Flex mb={"1.5em"} justifyContent={'center'} alignItems={'center'}>
                                                  {stateReg.filter((reg: any)=>{return reg.stateID === item.stateID}).length > 0 ? (<Button bgColor={'#D01E20'} size={['sm','md','md','md']} onClick={()=>{handleCancel(item.stateID)}}><Text textColor={"white"}>Cancel</Text></Button>)
                                                  :
                                                  (<Button bgColor={'#1B4173'} size={['sm','md','md','md']} onClick={()=>{handleRegister(item.stateID)}}><Text textColor={"white"}>Ambil</Text></Button>)}
                                                </Flex>)}
                                              </Box>
                                            </Center>
                                          </WrapItem>
                                      </>
                                    );
                                  })}
                                </Wrap>
                              </Box>
                          </TabPanel>
                          <TabPanel w={"100%"} mt={"1em"} p={["0.5em 0em 1em 0em","1.5em 0em 1.5em 0em"]} bgColor={"#FDF0CC"} borderRadius={["xl"]}>
                              <Box>
                                <Center>
                                  <Text fontSize={["3xl", "3xl", "xl", "2xl", "2xl"]} fontWeight={"black"} color={"#1B4173"} letterSpacing={0.5}>
                                      STATE HARI KE-{day[2]?.hari}
                                  </Text>
                                </Center>
                                <Center mt={"-0.2em"}>
                                  <Text fontSize={["lg", "xs", "sm", "md", "md"]} fontWeight={"bold"} color={"#FF6835"}>
                                      {day[2]?.date}
                                  </Text>
                                </Center>
                              </Box>
                              <Divider w={"full"} mt={"1em"} mb={"2.5em"} borderWidth={"0.12em"} style={{borderRadius: "20px"}} borderColor={"white"} opacity={1}/>
                              <Box>
                                <Wrap spacing={["1em","2.5em"]} justify="center" py={"0.5em"}>
                                  {stateData
                                    .filter((item: any) => item.date === "Wed, 07 Sep 2022")
                                    .map((item: any) => {
                                    return (
                                      <>
                                          <WrapItem key={item.date}
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
                                                    <Img src={item.stateLogo} boxSize={["135px","165px"]} objectFit={"contain"} borderRadius={["2xl", "lg"]} />
                                                </Center>
                                                  </Box>
                                                  <Center w={"10em"} h={"5em"} my={["0.5em", "1em"]}>
                                                  <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                                    {item.name}
                                                  </Text>
                                                </Center>
                                                <Center w={"10em"} my={["0.5em", "1em"]} px={"1em"}>
                                                  <Flex w={"full"} h={"1.5em"} bgColor={"#FFCFBF"} style={{borderRadius: "20px"}} justifyContent={"center"} alignItems={"center"}>
                                                    <Center w={"full"} h={"1.5em"} bgColor={"#FF6835"} borderLeftRadius={"full"}>
                                                      <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} color={"white"}>
                                                        Kuota
                                                      </Text>
                                                    </Center>
                                                    <Center mx={"0.85em"}>
                                                      <Text color={"#FF6835"} fontSize={"xs"} fontWeight={"semibold"} textAlign={"center"}>
                                                        {item.registered}/{item.quota}
                                                      </Text>
                                                    </Center>
                                                  </Flex>
                                                </Center>
                                                {item.registered === item.quota ? (<Flex justifyContent={'center'} alignItems={'center'}><Button isDisabled bgColor={'#FF6835'} textColor={'black'}>PENUH</Button></Flex>):(
                                                  <Flex mb={"1.5em"} justifyContent={'center'} alignItems={'center'}>
                                                  {stateReg.filter((reg: any)=>{return reg.stateID === item.stateID}).length > 0 ? (<Button bgColor={'#D01E20'} size={['sm','md','md','md']} onClick={()=>{handleCancel(item.stateID)}}><Text textColor={"white"}>Cancel</Text></Button>)
                                                  :
                                                  (<Button bgColor={'#1B4173'} size={['sm','md','md','md']} onClick={()=>{handleRegister(item.stateID)}}><Text textColor={"white"}>Ambil</Text></Button>)}
                                                </Flex>)}
                                              </Box>
                                            </Center>
                                          </WrapItem>
                                      </>
                                    );
                                  })}
                                </Wrap>
                              </Box>
                          </TabPanel>
                          <TabPanel w={"100%"} mt={"1em"} p={["0.5em 0em 1em 0em","1.5em 0em 1.5em 0em"]} bgColor={"#FDF0CC"} borderRadius={["xl"]}>
                              <Box>
                                <Center>
                                  <Text fontSize={["3xl", "3xl", "xl", "2xl", "2xl"]} fontWeight={"black"} color={"#1B4173"} letterSpacing={0.5}>
                                      STATE HARI KE-{day[3]?.hari}
                                  </Text>
                                </Center>
                                <Center mt={"-0.2em"}>
                                  <Text fontSize={["lg", "xs", "sm", "md", "md"]} fontWeight={"bold"} color={"#FF6835"}>
                                      {day[3]?.date}
                                  </Text>
                                </Center>
                              </Box>
                              <Divider w={"full"} mt={"1em"} mb={"2.5em"} borderWidth={"0.12em"} style={{borderRadius: "20px"}} borderColor={"white"} opacity={1}/>
                              <Box>
                                <Wrap spacing={["1em","2.5em"]} justify="center" py={"0.5em"}>
                                  {stateData
                                    .filter((item: any) => item.date === "Thu, 08 Sep 2022")
                                    .map((item: any) => {
                                    return (
                                      <>
                                          <WrapItem key={item.date}
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
                                                    <Img src={item.stateLogo} boxSize={["135px","165px"]} objectFit={"contain"} borderRadius={["2xl", "lg"]} />
                                                </Center>
                                                  </Box>
                                                  <Center w={"10em"} h={"5em"} my={["0.5em", "1em"]}>
                                                  <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                                    {item.name}
                                                  </Text>
                                                </Center>
                                                <Center w={"10em"} my={["0.5em", "1em"]} px={"1em"}>
                                                  <Flex w={"full"} h={"1.5em"} bgColor={"#FFCFBF"} style={{borderRadius: "20px"}} justifyContent={"center"} alignItems={"center"}>
                                                    <Center w={"full"} h={"1.5em"} bgColor={"#FF6835"} borderLeftRadius={"full"}>
                                                      <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} color={"white"}>
                                                        Kuota
                                                      </Text>
                                                    </Center>
                                                    <Center mx={"0.85em"}>
                                                      <Text color={"#FF6835"} fontSize={"xs"} fontWeight={"semibold"} textAlign={"center"}>
                                                        {item.registered}/{item.quota}
                                                      </Text>
                                                    </Center>
                                                  </Flex>
                                                </Center>
                                                {item.registered === item.quota ? (<Flex justifyContent={'center'} alignItems={'center'}><Button isDisabled bgColor={'#FF6835'} textColor={'black'}>PENUH</Button></Flex>):(
                                                  <Flex mb={"1.5em"} justifyContent={'center'} alignItems={'center'}>
                                                  {stateReg.filter((reg: any)=>{return reg.stateID === item.stateID}).length > 0 ? (<Button bgColor={'#D01E20'} size={['sm','md','md','md']} onClick={()=>{handleCancel(item.stateID)}}><Text textColor={"white"}>Cancel</Text></Button>)
                                                  :
                                                  (<Button bgColor={'#1B4173'} size={['sm','md','md','md']} onClick={()=>{handleRegister(item.stateID)}}><Text textColor={"white"}>Ambil</Text></Button>)}
                                                </Flex>)}
                                              </Box>
                                            </Center>
                                          </WrapItem>
                                      </>
                                    );
                                  })}
                                </Wrap>
                              </Box>
                          </TabPanel>
                          <TabPanel w={"100%"} mt={"1em"} p={["0.5em 0em 1em 0em","1.5em 0em 1.5em 0em"]} bgColor={"#FDF0CC"} borderRadius={["xl"]}>
                              <Box>
                                <Center>
                                  <Text fontSize={["3xl", "3xl", "xl", "2xl", "2xl"]} fontWeight={"black"} color={"#1B4173"} letterSpacing={0.5}>
                                      STATE HARI KE-{day[4]?.hari}
                                  </Text>
                                </Center>
                                <Center mt={"-0.2em"}>
                                  <Text fontSize={["lg", "xs", "sm", "md", "md"]} fontWeight={"bold"} color={"#FF6835"}>
                                      {day[4]?.date}
                                  </Text>
                                </Center>
                              </Box>
                              <Divider w={"full"} mt={"1em"} mb={"2.5em"} borderWidth={"0.12em"} style={{borderRadius: "20px"}} borderColor={"white"} opacity={1}/>
                              <Box>
                                <Wrap spacing={["1em","2.5em"]} justify="center" py={"0.5em"}>
                                  {stateData
                                    .filter((item: any) => item.date === "Fri, 09 Sep 2022")
                                    .map((item: any) => {
                                    return (
                                      <>
                                          <WrapItem key={item.date}
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
                                                    <Img src={item.stateLogo} boxSize={["135px","165px"]} objectFit={"contain"} borderRadius={["2xl", "lg"]} />
                                                </Center>
                                                  </Box>
                                                  <Center w={"10em"} h={"5em"} my={["0.5em", "1em"]}>
                                                  <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                                    {item.name}
                                                  </Text>
                                                </Center>
                                                <Center w={"10em"} my={["0.5em", "1em"]} px={"1em"}>
                                                  <Flex w={"full"} h={"1.5em"} bgColor={"#FFCFBF"} style={{borderRadius: "20px"}} justifyContent={"center"} alignItems={"center"}>
                                                    <Center w={"full"} h={"1.5em"} bgColor={"#FF6835"} borderLeftRadius={"full"}>
                                                      <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} color={"white"}>
                                                        Kuota
                                                      </Text>
                                                    </Center>
                                                    <Center mx={"0.85em"}>
                                                      <Text color={"#FF6835"} fontSize={"xs"} fontWeight={"semibold"} textAlign={"center"}>
                                                        {item.registered}/{item.quota}
                                                      </Text>
                                                    </Center>
                                                  </Flex>
                                                </Center>
                                                {item.registered === item.quota ? (<Flex justifyContent={'center'} alignItems={'center'}><Button isDisabled bgColor={'#FF6835'} textColor={'black'}>PENUH</Button></Flex>):(
                                                  <Flex mb={"1.5em"} justifyContent={'center'} alignItems={'center'}>
                                                  {stateReg.filter((reg: any)=>{return reg.stateID === item.stateID}).length > 0 ? (<Button bgColor={'#D01E20'} size={['sm','md','md','md']} onClick={()=>{handleCancel(item.stateID)}}><Text textColor={"white"}>Cancel</Text></Button>)
                                                  :
                                                  (<Button bgColor={'#1B4173'} size={['sm','md','md','md']} onClick={()=>{handleRegister(item.stateID)}}><Text textColor={"white"}>Ambil</Text></Button>)}
                                                </Flex>)}
                                              </Box>
                                            </Center>
                                          </WrapItem>
                                      </>
                                    );
                                  })}
                                </Wrap>
                              </Box>
                          </TabPanel>
                          <TabPanel w={"100%"} mt={"1em"} p={["0.5em 0em 1em 0em","1.5em 0em 1.5em 0em"]} bgColor={"#FDF0CC"} borderRadius={["xl"]}>
                              <Box>
                                <Center>
                                  <Text fontSize={["3xl", "3xl", "xl", "2xl", "2xl"]} fontWeight={"black"} color={"#1B4173"} letterSpacing={0.5}>
                                      STATE HARI KE-{day[5]?.hari}
                                  </Text>
                                </Center>
                                <Center mt={"-0.2em"}>
                                  <Text fontSize={["lg", "xs", "sm", "md", "md"]} fontWeight={"bold"} color={"#FF6835"}>
                                      {day[5]?.date}
                                  </Text>
                                </Center>
                              </Box>
                              <Divider w={"full"} mt={"1em"} mb={"2.5em"} borderWidth={"0.12em"} style={{borderRadius: "20px"}} borderColor={"white"} opacity={1}/>
                              <Box>
                                <Wrap spacing={["1em","2.5em"]} justify="center" py={"0.5em"}>
                                  {stateData
                                    .filter((item: any) => item.date === "Mon, 12 Sep 2022")
                                    .map((item: any) => {
                                    return (
                                      <>
                                          <WrapItem key={item.date}
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
                                                    <Img src={item.stateLogo} boxSize={["135px","165px"]} objectFit={"contain"} borderRadius={["2xl", "lg"]} />
                                                </Center>
                                                  </Box>
                                                  <Center w={"10em"} h={"5em"} my={["0.5em", "1em"]}>
                                                  <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                                    {item.name}
                                                  </Text>
                                                </Center>
                                                <Center w={"10em"} my={["0.5em", "1em"]} px={"1em"}>
                                                  <Flex w={"full"} h={"1.5em"} bgColor={"#FFCFBF"} style={{borderRadius: "20px"}} justifyContent={"center"} alignItems={"center"}>
                                                    <Center w={"full"} h={"1.5em"} bgColor={"#FF6835"} borderLeftRadius={"full"}>
                                                      <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} color={"white"}>
                                                        Kuota
                                                      </Text>
                                                    </Center>
                                                    <Center mx={"0.85em"}>
                                                      <Text color={"#FF6835"} fontSize={"xs"} fontWeight={"semibold"} textAlign={"center"}>
                                                        {item.registered}/{item.quota}
                                                      </Text>
                                                    </Center>
                                                  </Flex>
                                                </Center>
                                                {item.registered === item.quota ? (<Flex justifyContent={'center'} alignItems={'center'}><Button isDisabled bgColor={'#FF6835'} textColor={'black'}>PENUH</Button></Flex>):(
                                                  <Flex mb={"1.5em"} justifyContent={'center'} alignItems={'center'}>
                                                  {stateReg.filter((reg: any)=>{return reg.stateID === item.stateID}).length > 0 ? (<Button bgColor={'#D01E20'} size={['sm','md','md','md']} onClick={()=>{handleCancel(item.stateID)}}><Text textColor={"white"}>Cancel</Text></Button>)
                                                  :
                                                  (<Button bgColor={'#1B4173'} size={['sm','md','md','md']} onClick={()=>{handleRegister(item.stateID)}}><Text textColor={"white"}>Ambil</Text></Button>)}
                                                </Flex>)}
                                              </Box>
                                            </Center>
                                          </WrapItem>
                                      </>
                                    );
                                  })}
                                </Wrap>
                              </Box>
                          </TabPanel>
                          <TabPanel w={"100%"} mt={"1em"} p={["0.5em 0em 1em 0em","1.5em 0em 1.5em 0em"]} bgColor={"#FDF0CC"} borderRadius={["xl"]}>
                              <Box>
                                <Center>
                                  <Text fontSize={["3xl", "3xl", "xl", "2xl", "2xl"]} fontWeight={"black"} color={"#1B4173"} letterSpacing={0.5}>
                                      STATE HARI KE-{day[6]?.hari}
                                  </Text>
                                </Center>
                                <Center mt={"-0.2em"}>
                                  <Text fontSize={["lg", "xs", "sm", "md", "md"]} fontWeight={"bold"} color={"#FF6835"}>
                                      {day[6]?.date}
                                  </Text>
                                </Center>
                              </Box>
                              <Divider w={"full"} mt={"1em"} mb={"2.5em"} borderWidth={"0.12em"} style={{borderRadius: "20px"}} borderColor={"white"} opacity={1}/>
                              <Box>
                                <Wrap spacing={["1em","2.5em"]} justify="center" py={"0.5em"}>
                                  {stateData
                                  .filter((item: any) => item.date === "Tue, 13 Sep 2022")
                                  .map((item: any) => {
                                    return (
                                      <>
                                          <WrapItem key={item.date}
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
                                                    <Img src={item.stateLogo} boxSize={["135px","165px"]} objectFit={"contain"} borderRadius={["2xl", "lg"]} />
                                                </Center>
                                                  </Box>
                                                  <Center w={"10em"} h={"5em"} my={["0.5em", "1em"]}>
                                                  <Text color={"#062D5F"} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"} letterSpacing={0.2}>
                                                    {item.name}
                                                  </Text>
                                                </Center>
                                                <Center w={"10em"} my={["0.5em", "1em"]} px={"1em"}>
                                                  <Flex w={"full"} h={"1.5em"} bgColor={"#FFCFBF"} style={{borderRadius: "20px"}} justifyContent={"center"} alignItems={"center"}>
                                                    <Center w={"full"} h={"1.5em"} bgColor={"#FF6835"} borderLeftRadius={"full"}>
                                                      <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} color={"white"}>
                                                        Kuota
                                                      </Text>
                                                    </Center>
                                                    <Center mx={"0.85em"}>
                                                      <Text color={"#FF6835"} fontSize={"xs"} fontWeight={"semibold"} textAlign={"center"}>
                                                        {item.registered}/{item.quota}
                                                      </Text>
                                                    </Center>
                                                  </Flex>
                                                </Center>
                                                {item.registered === item.quota ? (<Flex justifyContent={'center'} alignItems={'center'}><Button isDisabled bgColor={'#FF6835'} textColor={'black'}>PENUH</Button></Flex>):(
                                                  <Flex mb={"1.5em"} justifyContent={'center'} alignItems={'center'}>
                                                  {stateReg.filter((reg: any)=>{return reg.stateID === item.stateID}).length > 0 ? (<Button bgColor={'#D01E20'} size={['sm','md','md','md']} onClick={()=>{handleCancel(item.stateID)}}><Text textColor={"white"}>Cancel</Text></Button>)
                                                  :
                                                  (<Button bgColor={'#1B4173'} size={['sm','md','md','md']} onClick={()=>{handleRegister(item.stateID)}}><Text textColor={"white"}>Ambil</Text></Button>)}
                                                </Flex>)}
                                              </Box>
                                            </Center>
                                          </WrapItem>
                                      </>
                                    );
                                  })}
                                </Wrap>
                              </Box>
                          </TabPanel>
                        </TabPanels>
                  </Tabs>
                </Box>
              </Center>
            </Box>
          </Center>
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
              bgColor={"#FF6835"}
              border={["5px solid white", "5px solid white", "4px solid white", "4px solid white", "4px solid white"]}
              borderRadius={"full"}
              shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
            >
              <Img src={"https://storage.googleapis.com/mxm22-bucket-test/expandLeft.svg"}w={["2rem", "2rem", "2rem", "2rem", "2rem"]} h={["1.2rem", "1.2rem", "2rem", "2rem", "2rem"]} />
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
        h={["70vh", "70vh", "100vh", "100vh", "100vh"]}
        bgImage={["https://storage.googleapis.com/mxm22-bucket-test/STATE/PilihSTATEP.webp", "https://storage.googleapis.com/mxm22-bucket-test/STATE/PilihSTATEP.webp", "https://storage.googleapis.com/mxm22-bucket-test/STATE/PilihSTATELs.webp", "https://storage.googleapis.com/mxm22-bucket-test/STATE/PilihSTATELs.webp", "https://storage.googleapis.com/mxm22-bucket-test/STATE/PilihSTATELs.webp"]}
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box w={"full"} zIndex={"0"}>
          <Body />
          <BackButton />
          <Footer />
        </Box>
      </Flex>
    </Layout>
  );
};

export default PilihState;