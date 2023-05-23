import React from 'react';
import Header from '../../components/DashboardHeader';
import Logo from '../../images/logo1.jpeg';
import { ReactSession } from 'react-client-session';
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    return <div className='flex h-screen flex-col bg-[#0A2256]'>

        <Header />
        <div className=' flex flex-1 flex-col justify-center items-center bg-[#002459]' >


            <img onClick={() => {
                navigate('/dashboard/find-people')
            }} className=' w-96 h-96 hover:cursor-pointer' src={require("../../images/find_people.jpeg")} />


        </div>
    </div>
}



export default Index;