import React, { useEffect, useState } from "react";
import { Box, Button, Center, Flex, FormControl, FormLabel, Img, Input, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import axios from 'axios'
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { isExpired } from "react-jwt";
import { useReadLocalStorage } from "usehooks-ts";
import { useUserContext } from "../../useContext/UserContext";

const Absenawal = () => {
    interface ListStateAct {
        id: number
        name: string
        date: string
        stateLogo: string
        stateID: number
    }

    interface FormAbsen {
        stateID: number | undefined,
        attendanceCode2: string | undefined,
    }

    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const jwt = useReadLocalStorage<string>("token");
    const { nim } = useUserContext()
    const [stateData, setStateData] = useState<ListStateAct[]>([]);
    const headers = {
        "x-access-token": jwt!,
    };
    const router = useRouter()
    const isMyTokenExpired = isExpired(jwt as string);
    const [regis, setRegis] = useState([])
    const [state, setState] = useState([])
    useEffect(() => {
        if (!jwt || isMyTokenExpired) {
            router.push("/login");
        }
        try {
            const fetchRegis = async () => {
                const result = await axios.get(`${process.env.API_URL}/api/stateReg/${nim}`, { headers })
                const response = await axios.get(`${process.env.API_URL}/api/state`, { headers })
                setState(response.data)
                setRegis(result.data)
              }
            fetchRegis()
        } catch (err: any) {
            console.log(err);
        }
    }, [nim]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormAbsen>();

    const onSubmit: SubmitHandler<FormAbsen> = async (data: any) => {
        try {
            setIsButtonLoading(true);
            const formData = new FormData();
            formData.append("attendanceCode2", data.attendanceCode2);
            await axios.put(`${process.env.API_URL}/api/stateReg/verifyAttendance/${data.stateID}/${nim}`, formData, { headers });
            Swal.fire("Selamat!", "Anda berhasil terabsen!", "success");
            setIsButtonLoading(false);
            router.push('/state')
        } catch (err: any) {
            Swal.fire({
                icon: "error",
                title: `${err.response.data.message}`,
            })
            console.log(err)
            console.log(err.response.data.message);
            setIsButtonLoading(false);
        }
    }

    return(
        <>
             <Center p={["1em","1em","0em"]} minH={'100vh'} bgImage={["STATEAbsenP.png", 
      "STATEAbsenP.png", 
      "STATEAbsenP.png", 
      "STATEAbsenBg.png", 
      "STATEAbsenBg.png"]} bgPosition={"center"} bgSize={"cover"} bgRepeat={"no-repeat"}>
                <Box w={["full","full","auto"]} p={"2em"} boxShadow={"lg"} borderRadius={"xl"} bgColor={"white"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <Box mb={"2em"}>
                            <Text textAlign={["center","start"]} fontSize={"2xl"} fontWeight={"bold"} color={"#062D5F"}>Absen Akhir STATE</Text>
                        </Box>
                    <Stack p={["2em full","2em full","2em 10em"]} direction={"column"} spacing={"2em"}>
                        <Box>
                            <Center>
                                <FormLabel textColor={"#D01E20"} fontSize={"lg"} fontWeight={"semibold"}>
                                Pilih STATE
                                </FormLabel>
                            </Center>
                            <Select
                                w={["full","full","auto"]}
                                {...register("stateID", { required: "STATE harus dipilih" })}
                                borderColor={"#CBD5E0"}
                                name={'stateID'}
                                // placeholder="Pilih STATE"                           
                                textColor={"black"}
                                border={"solid"}
                                borderRadius={"full"}
                                // isDisabled
                                >
                                {regis.map((item: any, index: number)=>{
                                    return (
                                        <option key={index} value={item.stateID}>
                                            {item.stateName}
                                        </option>
                                    )
                                })}
                            </Select>
                            {errors.stateID !== undefined && <Text textColor={"red"}>{errors.stateID.message}</Text>}
                        </Box>
                        <Box>
                            <Center>
                                <FormLabel textColor={"#D01E20"} fontSize={"lg"} fontWeight={"semibold"}>
                                Isi Kode Presensi
                                </FormLabel>
                            </Center>
                            <Input 
                                w={["full","full","auto"]}
                                {...register("attendanceCode2", { required: "Token absensi harap diisi" })} 
                                type={'text'} 
                                name={'attendanceCode2'} 
                                textColor={"black"}
                                border={"solid"} borderColor={"#CBD5E0"} 
                                placeholder="Token"
                                borderRadius={"full"}
                            />
                            {errors.attendanceCode2 !== undefined && <Text textColor={"red"}>{errors?.attendanceCode2?.message}</Text>}
                            <Center mt={"3em"}>
                                <Button bgColor={"#1B4173"} type='submit' borderRadius={"full"} color={"white"} size={["md","md","lg"]}>VERIFIKASI</Button>
                            </Center>
                        </Box>
                    </Stack>
                </form>
                </Box>
            </Center>
        </>
    )
}

export default Absenawal;