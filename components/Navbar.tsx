import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

//importing local components
import MaximaIcon from "../public/maximaIcon.svg";
import HamburgerIconz from "../public/hamburgerIcon.svg";
import MaximaIconP2 from "../public/maximaIconP2.svg";

//importing local files
import HoMEWelcomingBg from "../public/HoMEWelcomingBg.svg";

//importing chakra ui components
import { Box, Flex, Text, Stack, Button, Center, IconButton, useDisclosure } from "@chakra-ui/react";

//importing chakra ui icons
import { HamburgerIcon } from "@chakra-ui/icons";
import { isExpired } from "react-jwt";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { useUserContext } from "../useContext/UserContext";

const NavbarIcon = () => {
  return (
    <Flex display={["none", "block"]} alignItems="center">
      <Box display={["none", "none", "none", "none", "block"]} as={"a"} href="/">
        <Image src={MaximaIcon} alt="logo" width={"180px"} />
      </Box>
      <Box display={["none", "none", "none", "block", "none"]} as={"a"} href="/">
        <Image src={MaximaIcon} alt="logo" width={"140px"} />
      </Box>
      <Box display={["none", "none", "block", "none", "none"]} as={"a"} href="/">
        <Image src={MaximaIcon} alt="logo" width={"120px"} />
      </Box>
      <Box display={["none", "block", "none", "none", "none"]} as={"a"} href="/">
        <Image src={MaximaIcon} alt="logo" width={"100px"} />
      </Box>
    </Flex>
  );
};

// const NavbarIconP = () => {
//   const router = useRouter();

//   return (
//     <Flex position={"fixed"} justifyContent={"center"} alignItems="center" p={["2em 1.8em", "2em 0.5em", "2em 1.5em", "2em 1.5em", "2em 3em"]} color="white" top={0} left={0} right={0} zIndex={1}>
//       <Box display={["block", "none"]}>
//         <Center>
//           <Image src={MaximaIconP2} alt={"MaximaLogo"} />
//         </Center>
//       </Box>
//     </Flex>
//   );
// };

// const NavbarLinks = ({ pathName }: LinksProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const jwt = useReadLocalStorage<string | undefined>("token")
//   const isMyTokenExpired = isExpired(jwt as string)

//   const navbarController = () => {
//     if (isOpen) {
//       return setIsOpen(false);
//     } else {
//       return setIsOpen(true);
//     }
//   };

//   const linksData = [
//     {
//       name: "HoME",
//       href: "/home",
//     },
//     {
//       name: "STATE",
//       href: "/state",
//     },
//     {
//       name: "FAQ",
//       href: "/faq",
//     },
//     {
//       name: "About Us",
//       href: "/aboutus",
//     },
//   ];
//   return (
//     <Box>
//       <Flex mx={["0", "0", "1.5em", "4em", "4em"]}>
//         <Box>
//           <IconButton display={["block", "none"]} icon={<HamburgerIcon w={8} h={8} />} variant={"none"} onClick={navbarController} aria-label={""} />
//           <Box ms={[isOpen ? "0em" : "-10em", "0em"]} transition={"0.2s ease-in-out"}>
//             <Stack
//               position={["absolute", "relative"]}
//               direction={["column", "row"]}
//               mt={["1em", "0em"]}
//               ms={["-1.8em", "0em"]}
//               p={["1.5em 1em", "0em"]}
//               spacing={[3, 0, 4, 9, 9]}
//               bgColor={["#1B4173", "transparent"]}
//               borderRadius={"0 1.5em 1.5em 0"}
//             >
//               {linksData.map((link: any, key: number) => (
//                 <Link href={link.href} key={key}>
//                   <Button
//                     color={"white"}
//                     variant={"none"}
//                     _hover={{
//                       color: "gray.300",
//                     }}
//                   >
//                     <Text fontSize={["md", "xs", "md", "md", "lg"]} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
//                       {link.name}
//                     </Text>
//                   </Button>
//                 </Link>
//               ))}
//             </Stack>
//           </Box>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// const NavbarButton = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const jwt = useReadLocalStorage<string | undefined>("token")
//   const isMyTokenExpired = isExpired(jwt as string)
//   const [, deleteToken] = useLocalStorage("token", "");
//   const { deleteUserData } = useUserContext();
//   const router = useRouter();
//   const buttonData = [
//     {
//       name: "Log In",
//       href: "/login",
//     },
//     {
//       name: "Sign Up",
//       href: "/register",
//     },
//     {
//       name: "Log Out",
//       href: '/',
//     },
//     {
//       name: "Profile",
//       href: '/profile',
//     }
//   ];

//   const logOut = () => {
//       deleteToken("");
//       deleteUserData();
//       router.push("/");
//   }

//   if (jwt && !isMyTokenExpired){
//     return (
//       <Stack direction={"row"} spacing={[3,3,3,7,7]}>
//         <Box>
//           <Link href={buttonData[0].href}>
//             <Button size={["md", "sm", "md", "md", "lg"]} borderRadius={"full"} variant={"outline"} border={"2px solid white"}>
//               <Text>{buttonData[0].name}</Text>
//             </Button>
//           </Link>
//         </Box>
//         <Box >
//           <Link href={buttonData[1].href}>
//             <Button size={["md", "sm", "md", "md", "lg"]} borderRadius={"full"} variant={"outline"} border={"2px solid white"}>
//               <Text>{buttonData[1].name}</Text>
//             </Button>
//           </Link>
//         </Box>
//       </Stack>
//     )
//   } else if (jwt === '' && isMyTokenExpired){
//     return(
//       <Stack direction={"row"} spacing={[3,3,3,7,7]}>
//         <Box>
//           <Link href={buttonData[0].href}>
//             <Button size={["md", "sm", "md", "md", "lg"]} borderRadius={"full"} variant={"outline"} border={"2px solid white"}>
//               <Text>{buttonData[0].name}</Text>
//             </Button>
//           </Link>
//         </Box>
//         <Box >
//           <Link href={buttonData[1].href}>
//             <Button size={["md", "sm", "md", "md", "lg"]} borderRadius={"full"} variant={"outline"} border={"2px solid white"}>
//               <Text>{buttonData[1].name}</Text>
//             </Button>
//           </Link>
//         </Box>
//       </Stack>
//     )
//   }
// };

// const HalfBorder = () => {
//   return (
//     <Flex
//       display={["none", "block"]}
//       w={["0em", "29.5em", "42em", "50em", "57em"]}
//       position={"fixed"}
//       mx={"-5em"}
//       p={["1.8em", "1.8em", "2em", "2em", "2.2em"]}
//       bgColor={"#1B4173"}
//       border={"2px solid white"}
//       borderRadius={"0em 5em 5em 0em"}
//       shadow={"0 4px 4px rgb(0,0,0,0.25)"}
//       opacity={"30%"}
//     />
//   );
// };

const FullBorder = () => {
  return <Flex display={["block"]} w={"150%"} position={"fixed"} mx={"-5em"} p={["3em", "3.2em"]} bgColor={"#1B4173"} border={"2px solid white"} shadow={"0 4px 4px rgb(0,0,0,0.25)"} opacity={"30%"} />;
};

{
  /* <Flex as="nav" justifyContent="space-between" alignItems="center" p={["2em 1em", "2em 0.5em", "2em 1.5em", "2em 1.5em", "2.3em 3em"]} color="white" position="fixed" top={0} left={0} right={0} zIndex={1}></Flex> */
}

{
  /* <Flex justifyContent={["center", "start", "start", "start"]} flex={{ base: 0, sm: 1 }}>
<NavbarLinks />
</Flex> */
}

const Navbar = () => {
  const jwt = useReadLocalStorage<string | undefined>("token");
  const isMyTokenExpired = isExpired(jwt as string);
  const [, deleteToken] = useLocalStorage("token", "");
  const { deleteUserData } = useUserContext();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { name } = useUserContext();

  // useEffect(()=>{
  //   try{
  //     const fetchUser = async () => {
  //       const res = await axios.get(`${process.env.API_URL}/api/mhs/${ID}`)
  //       setUser(res.data)
  //     }
  //     fetchUser()
  //   } catch(err: any) {
  //     console.log(err)
  //   }
  // })

  const navbarController = () => {
    if (isOpen) {
      return setIsOpen(false);
    } else {
      return setIsOpen(true);
    }
  };

  const linksData = [
    {
      name: "HoME",
      href: "/home",
    },
    {
      name: "STATE",
      href: "/state",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
    {
      name: "About Us",
      href: "/aboutus",
    },
  ];

  const buttonData = [
    {
      name: "Log In",
      href: "/login",
    },
    {
      name: "Sign Up",
      href: "/register",
    },
    {
      name: "Log Out",
      href: "/",
    },
  ];

  return (
    <Flex as="nav" justifyContent="space-between" alignItems="center" p={["1.5em 1em", "1em 0.5em", "1em 1.5em", "1em 1.5em", "1em 3em"]} color="white" position="fixed" top={0} left={0} right={0} zIndex={1}>
      <FullBorder />
      <NavbarIcon />
      <Flex justifyContent={["center", "center", "center", "start", "start"]} flex={{ base: 0, sm: 1 }}>
        <Box>
          <Flex mx={["0", "0", "1.5em", "4em", "4em"]}>
            <Box>
              <IconButton display={["block", "none"]} icon={<HamburgerIcon w={8} h={8} />} variant={"none"} onClick={navbarController} aria-label={""} />
              <Box ms={[isOpen ? "0em" : "-10em", "0em"]} transition={"0.2s ease-in-out"}>
                <Stack
                  position={["absolute", "relative"]}
                  direction={["column", "row"]}
                  mt={["1em", "0em"]}
                  ms={["-1.8em", "0em"]}
                  p={["1.5em 1em", "0em"]}
                  spacing={[3, 0, 4, 9, 9]}
                  bgColor={["#1B4173", "transparent"]}
                  borderRadius={"0 1.5em 1.5em 0"}
                >
                  {jwt && !isMyTokenExpired ? (
                    <>
                      {linksData.map((link: any, key: number) => (
                        <Link href={link.href} key={key}>
                          <Button
                            color={"white"}
                            variant={"none"}
                            _hover={{
                              color: "gray.300",
                            }}
                          >
                            <Text fontSize={["md", "xs", "md", "md", "lg"]} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
                              {link.name}
                            </Text>
                          </Button>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <>
                      <Link href={linksData[0].href}>
                        <Button
                          color={"white"}
                          variant={"none"}
                          _hover={{
                            color: "gray.300",
                          }}
                        >
                          <Text fontSize={["md", "xs", "md", "md", "lg"]} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
                            {linksData[0].name}
                          </Text>
                        </Button>
                      </Link>
                      <Link href={linksData[2].href}>
                        <Button
                          color={"white"}
                          variant={"none"}
                          _hover={{
                            color: "gray.300",
                          }}
                        >
                          <Text fontSize={["md", "xs", "md", "md", "lg"]} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
                            {linksData[2].name}
                          </Text>
                        </Button>
                      </Link>
                      <Link href={linksData[3].href}>
                        <Button
                          color={"white"}
                          variant={"none"}
                          _hover={{
                            color: "gray.300",
                          }}
                        >
                          <Text fontSize={["md", "xs", "md", "md", "lg"]} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>
                            {linksData[3].name}
                          </Text>
                        </Button>
                      </Link>
                    </>
                  )}
                </Stack>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box>
        {jwt && !isMyTokenExpired ? (
          <Stack direction={"row"} spacing={[3, 3, 3, 7, 7]} justifyContent={'center'} alignItems={'center'}>
            <Box>
              <Text fontSize={["md", "xs", "md", "md", "lg"]} textShadow={"0px 4px 4px rgb(0,0,0,0.25)"}>{name}</Text>
            </Box>
            <Box>
              <Link href={buttonData[2].href}>
                <Button
                  size={["md", "sm", "md", "md", "lg"]}
                  borderRadius={"full"}
                  variant={"outline"}
                  border={"2px solid white"}
                  onClick={() => {
                    deleteToken("");
                    deleteUserData();
                    router.push("/");
                  }}
                >
                  <Text>{buttonData[2].name}</Text>
                </Button>
              </Link>
            </Box>
          </Stack>
        ) : (
          <Stack direction={"row"} spacing={[3, 3, 3, 7, 7]}>
            <Box>
              <Link href={buttonData[0].href}>
                <Button size={["md", "sm", "md", "md", "lg"]} borderRadius={"full"} variant={"outline"} border={"2px solid white"}>
                  <Text>{buttonData[0].name}</Text>
                </Button>
              </Link>
            </Box>
            <Box>
              <Link href={buttonData[1].href}>
                <Button size={["md", "sm", "md", "md", "lg"]} borderRadius={"full"} variant={"outline"} border={"2px solid white"}>
                  <Text>{buttonData[1].name}</Text>
                </Button>
              </Link>
            </Box>
          </Stack>
        )}
      </Box>
    </Flex>
  );
};

// Navbar.getInitialProps = async ({ query }: any) => {
//   const { ID } = query;
//   return {
//       ID,
//   };
// };

export default Navbar;
