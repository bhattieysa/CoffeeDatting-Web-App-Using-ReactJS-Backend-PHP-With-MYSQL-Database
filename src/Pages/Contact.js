import React, { useState } from "react";
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const [selected, setSelected] = useState("");
    const navigate = useNavigate();
    return (
        <div className='flex h-screen flex-1 flex-col bg-[#0A2256]'>

            <Header />
            <div className='flex flex-col lg:mx-0  flex-1 justify-center' >
            <p className=' leading-loose  text-4xl  lg:text-8xl font-bold text-[#B75830] justify-center flex'>Contact Us</p>
                <p className=' text-center leading-loose lg:mx-80 mt-3 text-2xl lg:text-5xl font-bold text-[#B75830] justify-center flex'>You can contact us anytime 24/7 by email.  We will reply as soon as possible.  Our email address is: info@coffee-dating. com</p>
                
            </div>

        </div>
    )
}

export default Contact