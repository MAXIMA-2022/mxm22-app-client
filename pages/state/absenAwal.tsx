import React, { useEffect, useState } from "react";
import { Button, Flex, FormControl, FormLabel, Img, Input, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import axios from 'axios'
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { isExpired } from "react-jwt";
import { useReadLocalStorage } from "usehooks-ts";
import { useUserContext } from "../../useContext/UserContext";

const Absenawal = () => {
    // interface ListStateAct {
    //     id: number
    //     name: string
    //     date: string
    //     stateLogo: string
    //     stateID: number
    // }
    
    // interface AbsenAwal {
    //     stateID: number
    //     //attendanceCode: string
    // }
    
    // const jwt = useReadLocalStorage<string>("token");
    // const { nim } = useUserContext()
    // const [stateData, setStateData] = useState<ListStateAct[]>([]);
    // const headers = {
    //     "x-access-token": jwt!,
    // };
    // const router = useRouter()
    // const isMyTokenExpired = isExpired(jwt as string);
    // // const [stateReg, setstateReg] = useState([])
    // useEffect(() => {
    //     if (!jwt || isMyTokenExpired) {
    //     router.push("/login");
    //     }
    //     try {
    //     const fetchSTATE = async () => {
    //         const response = await axios.get(`${process.env.API_URL}/api/state`, { headers });
    //         // const result = await axios.get(`${process.env.API_URL}/api/stateReg/${nim}`, { headers })
    //         //setstateReg(result.data)
    //         setStateData(response.data)
    //         console.log(response.data)
    //     };
    //     fetchSTATE()
    //     } catch (err: any) {
    //     console.log(err);
    //     }
    // }, [nim]);

    // const handleRegister = async (stateID: number) => {
    //     try {
    //     const result = await axios.put(`${process.env.API_URL}/api/stateReg/attendState/${stateID}/${nim}`, { 
    //         'stateID': `${stateID}`
    //     },{ headers })
    //     Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: `${result.data.message}`,
    //         showConfirmButton: false,
    //         timer: 2000,
    //     });
    //     } catch (err: any) {
    //     console.log(err)
    //     Swal.fire({
    //         title: "Perhatian!",
    //         text: `${err.response.data.message}`,
    //         icon: "error",
    //         confirmButtonText: "Coba lagi",
    //     });
    //     }
    // }

    // const {
    // register,
    // handleSubmit,
    // formState: { errors },
    // } = useForm<AbsenAwal[]>();

    // const [isButtonLoading, setIsButtonLoading] = useState(false);
    // const onSubmit: SubmitHandler<any> = async (data: AbsenAwal) => {
    //     try {
    //         setIsButtonLoading(true);
    //         const formData = new FormData();
    //         formData.append("stateID", data.stateID)
    //         //formData.append("attendanceCode", data.attendanceCode);
    //         //formData.append("attendanceCode2", data.attendanceCode2);
    //         console.log(data)
    //         //await axios.put(`${process.env.API_URL}/api/stateReg/attendState/:stateID/:nim`, formData);
    //         Swal.fire("Selamat!", "Anda berhasil absen!", "success");
    //         setIsButtonLoading(false);
    //         // router.push('/login')
    //     } catch (err: any) {
    //         Swal.fire({
    //             icon: "error",
    //             title: `${err.response.data.message}`,
    //         })
    //         console.log(err.response.data.message);
    //         setIsButtonLoading(false);
    //     }
    // }

    return(
        <>
        </>
    )
}

export default Absenawal;