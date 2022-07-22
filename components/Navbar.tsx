import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

//importing local components
import MaximaIcon from "../public/maximaIcon.svg";
import HamburgerIconz from "../public/hamburgerIcon.svg";

//importing local files
import HoMEWelcomingBg from "../public/HoMEWelcomingBg.svg";

//importing chakra ui components
import { Box, Flex, Text, Stack, Button, Center, IconButton, useDisclosure } from "@chakra-ui/react";

//importing chakra ui icons
import { HamburgerIcon } from "@chakra-ui/icons";

//typescript declaration
interface LinksProps {
  pathName: string;
}

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

const NavbarLinks = ({ pathName }: LinksProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    <Box>
      <Flex mx={["0", "0", "1.5em", "4em", "4em"]}>
        <Box>
          <IconButton display={["block", "none"]} icon={<HamburgerIcon w={8} h={8} />} variant={"none"} onClick={navbarController} />
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
              {linksData.map((link, key) => (
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
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const NavbarButton = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const buttonData = [
    {
      name: "Log In",
      href: "/login",
    },
    {
      name: "Sign Up",
      href: "/signup",
    },
  ];

  const routerPath = router.pathname;
  useEffect(() => {
    if (routerPath === "/" || routerPath === "/login" || routerPath === "/signup") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [routerPath]);

  return (
    <Stack display={isLogin ? "none" : "flex"} direction={"row"} spacing={7}>
      <Box>
        <Link href={buttonData[0].href}>
          <Button size={["md", "sm", "md", "md", "lg"]} borderRadius={"full"} variant={"outline"} border={"2px solid white"}>
            <Text>{buttonData[0].name}</Text>
          </Button>
        </Link>
      </Box>
      <Box display={{ base: "none", lg: "block" }}>
        <Link href={buttonData[1].href}>
          <Button size={["xs", "sm", "md", "md", "lg"]} borderRadius={"full"} variant={"outline"} border={"2px solid white"}>
            <Text>{buttonData[1].name}</Text>
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const routerPath = router.pathname;
  useEffect(() => {
    if (routerPath === "/" || routerPath === "/login" || routerPath === "/signup") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [routerPath]);
  return (
    <Flex as="nav" justifyContent="space-between" alignItems="center" p={["2em 1.8em", "2em 0.5em", "2em 1.5em", "2em 1.5em", "2.3em 3em"]} color="white" position="fixed" top={0} left={0} right={0} zIndex={1}>
      <Flex
        display={["none", "block"]}
        w={["0em", "29.5em", "42em", "50em", "57em"]}
        position={"fixed"}
        mx={"-5em"}
        p={["1.8em", "1.8em", "2em", "2em", "2.2em"]}
        bgColor={isLogin ? "#FF6835" : "#1B4173"}
        border={"2px solid white"}
        borderRadius={"0em 5em 5em 0em"}
        shadow={"0 4px 4px rgb(0,0,0,0.25)"}
        opacity={isLogin ? "35%" : "30%"}
      />
      <NavbarIcon />
      <Flex justifyContent={["center", "start", "start", "start"]} flex={{ base: 0, sm: 1 }}>
        <NavbarLinks />
      </Flex>
      <Box>
        <NavbarButton />
      </Box>
    </Flex>
  );
};

export default Navbar;
