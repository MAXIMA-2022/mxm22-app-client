import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

//importing local components
import Layout from "../../../../../../components/Layout";
import Navbar from "../../../../../../components/Navbar";
import MaximaIconP from "../../../../../../public/maximaIconP.svg";
import MaximaIconP2 from "../../../../../../public/maximaIconP2.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img, Wrap, WrapItem } from "@chakra-ui/react";

const OrganizationDesc: NextPage = () => {
  const router = useRouter();
  const organizationID = router.query.descriptionID;

  const capitalize = (s: any) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const Header = () => {
    return (
      <>
        <Center position={"absolute"} mt={["6rem", "6rem", "14rem", "14rem", "14rem"]} top={0} bottom={0} left={0} right={0}>
          <Box transform={["scale(0.6)", "scale(1.2)", "scale(1.2)", "scale(1.2)", "scale(1.5)"]} zIndex={"1"}>
            <Img src={`/organization/${organizationID}.png`} />
          </Box>
        </Center>
      </>
    );
  };

  const Body = () => {
    const organizationData = [
      {
        img: "/organization/umnDocumentation.png",
        title: "UMN Documentation",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/umnDocumentation.png",
        title: "UMN Documentation",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/umnDocumentation.png",
        title: "UMN Documentation",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/umnDocumentation.png",
        title: "UMN Documentation",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },

      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
    ];
    return (
      <Center mt={["90vh", "185vh"]} mb={"15vh"} zIndex={"4"}>
        <Box w={["17em", "40em"]}>
          <Stack my={"3em"} direction={"column"} spacing={"3em"}>
            <Center>
              <Text textAlign={"center"} display={["none", "block"]} color={"#062D5F"} fontSize={["2xl"]} fontWeight={["black", "bold"]}>
                UMN Documentation
              </Text>
              <Text textAlign={"center"} display={["block", "none"]} color={"#062D5F"} fontSize={["2xl"]} fontWeight={["black", "bold"]}>
                UMN Documentation
              </Text>
            </Center>
            <Center w={"full"} h={["10em", "20em"]} bgColor={"#D9D9D9"} outline={"2px solid #FF6835"} borderRadius={"2xl"}>
              <Center w={["4em", "5em"]} h={["4em", "5em"]} borderRadius={"full"} bgColor={"white"}></Center>
            </Center>
            <Center>
              <Text textAlign={"justify"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptatum ipsum expedita sunt beatae quo, atque molestiae, esse rem sapiente mollitia ab iste quisquam facere perferendis laborum nobis libero dicta
                tenetur eum. Numquam eaque laudantium reprehenderit tenetur cupiditate hic ex omnis iure quam, natus error nulla minima? Nam nisi unde asperiores fugiat. Nesciunt quam laboriosam voluptatum iure doloribus architecto dicta
                explicabo alias et, sint quo neque rerum? Quasi sed impedit, omnis cumque asperiores, quod aliquid assumenda hic fugit facilis earum maiores ab molestiae? Officia autem odio cum doloremque earum ullam accusantium repellendus
                aliquam praesentium placeat cupiditate facilis dolorem pariatur veritatis, ad quo cumque minima voluptatem, quas et? Dolorem repellat quasi sint, accusamus officiis explicabo natus reprehenderit voluptas amet, eos rerum id.
                <br />
                <br />
                Error expedita quos laudantium veritatis corrupti, nisi officia cumque perspiciatis, possimus rem ducimus repellat quod quibusdam dolore pariatur delectus tenetur perferendis accusamus adipisci, necessitatibus laborum
                deserunt repudiandae eveniet illum. Nobis dolorum accusantium eligendi, a repellat possimus cum quam quas culpa maiores laboriosam odio quidem nulla dicta similique voluptatibus odit, eos nemo perferendis! Voluptatum
                aspernatur architecto nulla. Quam eos odit eum architecto consectetur perferendis repellat quidem similique exercitationem debitis a laboriosam possimus minus at saepe ad dolores nobis cupiditate, incidunt accusamus br
                necessitatibus maxime ducimus esse numquam! Laborum delectus nam aspernatur quas vero, iusto natus aperiam accusamus, minus architecto repudiandae, rem possimus non cum ducimus cumque ad! Repellat maxime eveniet earum ex
                rerum quis corrupti nihil aliquid tempora deserunt tempore fuga odit quibusdam nulla, iure architecto tenetur excepturi dignissimos sapiente dolorum? Quod autem fuga illum cupiditate qui deserunt, officia provident, a in
                voluptatibus doloribus itaque quisquam consequuntur perspiciatis! Unde soluta consectetur error vitae hic harum quis quas sequi ullam enim! Repudiandae consectetur sequi ex debitis accusamus quasi recusandae aspernatur
                quisquam alias doloribus adipisci qui quod exercitationem, reiciendis possimus cupiditate amet perspiciatis.
              </Text>
            </Center>
          </Stack>
          <Carousel />
          <SocialMedia />
        </Box>
      </Center>
    );
  };

  const Carousel = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const images = ["/organization/BEM/Bem1.png", "/organization/BEM/Bem2.png", "/organization/BEM/Bem3.png"];
    const delay = 3000;

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(() => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)), delay);

      return () => {
        resetTimeout();
      };
    }, [index]);
    return (
      <Box mt={"6em"}>
        <Center>
          <Text fontSize={"xl"} color={"#062D5F"} fontWeight={"extrabold"}>
            Galeri Kami
          </Text>
        </Center>
        <Flex mt={"2.5em"} mb={"1em"}>
          <Center
            display={["none", "flex"]}
            cursor={"pointer"}
            onClick={() => {
              setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex - 1));
            }}
          >
            <Img src={"/organization/expand_left.svg"} />
          </Center>
          <Box flex={1}>
            <Box m={0} w={"full"} overflow={"hidden"}>
              <Box whiteSpace={"nowrap"} transition={"ease 1s"} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {images.map((image: any, index: any) => (
                  <Box display={"inline-block"} w={"full"} h={"17.5em"} borderRadius={"2xl"} key={index} bgImage={image} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"} shadow={"0px 8px 8px rgb(0,0,0,0.25)"} />
                ))}
              </Box>
            </Box>
          </Box>
          <Center
            display={["none", "flex"]}
            cursor={"pointer"}
            onClick={() => {
              setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            }}
          >
            <Img src={"/organization/expand_right.svg"} />
          </Center>
        </Flex>
        <Box textAlign={"center"} mt={"1em"}>
          {images.map((slider: any, key: any) => (
            <Box
              key={key}
              display={"inline-block"}
              w={"1em"}
              h={"1em"}
              borderRadius={"50%"}
              cursor={"pointer"}
              margin={"15px 7px 0px"}
              bgColor={index === key ? "#F7B70C" : "#D9D9D9"}
              onClick={() => {
                setIndex(key);
              }}
            ></Box>
          ))}
        </Box>
      </Box>
    );
  };

  const SocialMedia = () => {
    const SocialMediaData = [
      {
        icon: "/organization/facebook.svg",
        link: "https://www.facebook.com/",
      },
      {
        icon: "/organization/twitter.svg",
        link: "https://www.twitter.com/",
      },
      {
        icon: "/organization/linkedin.svg",
        link: "https://www.linkedin.com/",
      },
      {
        icon: "/organization/youtube.svg",
        link: "https://www.youtube.com/",
      },
      {
        icon: "/organization/instagram.svg",
        link: "https://www.instagram.com/",
      },
      {
        icon: "/organization/google.svg",
        link: "https://www.google.com/",
      },
      {
        icon: "/organization/tiktok.svg",
        link: "https://www.tiktok.com/",
      },
      // {
      //   icon: "/organization/line.svg",
      //   link: "https://www.line.com/",
      // },
    ];

    return (
      <Box mt={"6em"}>
        <Center mb={"2em"}>
          <Text fontSize={"xl"} color={"#062D5F"} fontWeight={"extrabold"}>
            Temukan Kami di
          </Text>
        </Center>
        <Center>
          <Wrap w={"full"} justify={"center"} spacing={["0.5em", "2em"]}>
            {SocialMediaData.map((socialMedia: any, key: any) => (
              <Center key={key} w={["2em", "3.5em"]} h={["2em", "3.5em"]}>
                <Img src={socialMedia.icon} />
              </Center>
            ))}
          </Wrap>
        </Center>
      </Box>
    );
  };

  const Footer = () => {
    const router = useRouter();
    return (
      <>
        <Flex m={["3.7rem 0rem", "3rem 1rem"]} position={"fixed"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
          <Button
            variant={"none"}
            onClick={() => {
              router.back();
            }}
          >
            <Center
              w={["2.5rem", "5rem", "4rem", "4rem", "4rem"]}
              h={["2.5rem", "5rem", "4rem", "4rem", "4rem"]}
              mt={["0rem", "0rem", "0rem", "0rem", "0rem"]}
              bgColor={"#D01E20"}
              border={["5px solid white", "5px solid white", "4px solid white", "4px solid white", "4px solid white"]}
              borderRadius={"full"}
              shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
            >
              <Img src={"/expandLeft.svg"} w={["1rem", "2rem", "2rem", "2rem", "2rem"]} h={["1rem", "2rem", "2rem", "2rem", "2rem"]} />
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
        position={["relative", "relative"]}
        mt={["0vh", "-55vh"]}
        h={["100vh", "220vh"]}
        bgImage={["/organization/organizationDescLs.png", "/organization/organizationDescLs.png"]}
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box w={"full"} zIndex={"0"}>
          <Header />
          <Body />
          <Footer />
        </Box>
      </Flex>
    </Layout>
  );
};

export default OrganizationDesc;
