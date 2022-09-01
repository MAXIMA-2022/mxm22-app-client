import React, { useEffect, useState } from "react";
import { Button, Flex, FormControl, FormLabel, Img, Input, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import axios from 'axios'
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { isExpired } from "react-jwt";
import { useReadLocalStorage } from "usehooks-ts";
import { useUserContext } from "../../useContext/UserContext";

const Absenakhir = () => {
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
    console.log(jwt)
    useEffect(() => {
        if (!jwt || isMyTokenExpired) {
            router.push("/login");
        }
        try {
            const fetchSTATE = async () => {
                const response = await axios.get(`${process.env.API_URL}/api/state`, { headers });
                setStateData(response.data)
                //console.log(response.data)
            };
            fetchSTATE()
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
            console.log(data)
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
            <Flex minH={'100vh'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <FormLabel textColor={"black"}>Pilih STATE</FormLabel>
                        <Select
                            {...register("stateID", { required: "STATE harus dipilih" })}
                            borderColor={"#CBD5E0"}
                            name={'stateID'}
                            placeholder="Pilih STATE"                           
                            textColor={"black"}
                            border={"solid"}
                        >
                            {stateData.map((item: any, index: number)=>{
                                return (
                                    <option key={index} value={item.stateID}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </Select>
                        {errors.stateID !== undefined && <Text textColor={"red"}>{errors.stateID.message}</Text>}
                        <FormLabel textColor={"black"}>Token</FormLabel>
                        <Input 
                            {...register("attendanceCode2", { required: "Token absensi harap diisi" })} 
                            type={'text'} 
                            name={'attendanceCode2'} 
                            textColor={"black"}
                            border={"solid"} borderColor={"#CBD5E0"} 
                            placeholder="Token"
                        />
                        {errors.attendanceCode2 !== undefined && <Text textColor={"red"}>{errors?.attendanceCode2?.message}</Text>}
                    <Button colorScheme={'orange'} type='submit'>Submit</Button>
                </form>
            </Flex>
        </>
    )
}

export default Absenakhir;