import React, { useState } from "react";
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";

const SelectGender = () => {
    const [selected, setSelected] = useState("");
    const navigate = useNavigate();
    return (
        <div className='flex h-screen flex-col bg-[#0A2256]'>

            <Header />
            <div className='flex flex-col flex-1 justify-center' >
                {selected !== "" ?
                    selected === "Male" ?
                        <div className="flex w-full justify-center ">
                            <img className="object-contain flex h-52 w-52 " src={require("../images/WhatsApp_Image_2023-05-19_at_6.26.18_PM-removebg-preview.png")} alt="Logo" />

                        </div> : <div className="flex w-full justify-center ">
                            <img className="object-contain flex  h-52 w-52 " src={require("../images/female.png")} alt="Logo" />

                        </div>
                    :
                    <div className=""></div>
                }
                <p className=' mt-3 text-6xl font-bold text-[#B75830] justify-center flex'>Select Gender</p>
                <div className=" mt-20 flex items-center justify-center flex-col">

                    <div className="flex w-full justify-center ">
                        <div onClick={() => {
                            setSelected("Female")
                        }} className=" mr-20 w-56 h-64 hover:cursor-pointer flex flex-col bg-white justify-center items-center   rounded-3xl">

                            <img className="object-contain  h-28 w-28" src={require("../images/ficon.png")} alt="Logo" />
                            <h2 className="text-[20px] mt-5">Female</h2>

                        </div>

                        <div onClick={() => {
                            setSelected("Male")
                        }} className=" mr-20 w-56 h-64 flex hover:cursor-pointer flex-col bg-white justify-center items-center   rounded-3xl">

                            <img className="object-contain  h-28 w-28" src={require("../images/maleicon.jpeg")} alt="Logo" />
                            <h2 className="text-[20px] mt-5">Male</h2>

                        </div>



                    </div>
                    <div className=' flex mt-8 items-center justify-center'>

                        <div
                            onClick={() => {
                                navigate('/signup', { state: { selected } })
                            }}
                            className=' bg-btn w-96 flex  justify-center items-center h-14 text-white rounded-full text-[18px] font-bold' >
                            <h1>Next</h1>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default SelectGender