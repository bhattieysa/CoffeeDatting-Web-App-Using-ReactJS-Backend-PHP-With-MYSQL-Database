import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Header() {
    const navigate = useNavigate();
    return (
        <header className='bg-btn'>
            <nav className=" px-1 lg:px-4  py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div onClick={()=>{
                        navigate('/')
                    }} className="flex items-center hover:cursor-pointer">
                        <img src={require("../images/logo.jpeg")} className="mr-3  rounded-xl h-12  lg:h-12" alt="Coffee Dating" />
                        <span className="self-center text-lg lg:text-xl font-semibold whitespace-nowrap text-white">Coffee Dating</span>
                    </div>
                    
                    <div className=" justify-center items-center " >
                        <ul className="flex  mt-4 font-  justify-center lg:justify-normal flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <div onClick={()=>{
                        navigate('/')
                    }} className=" hover:cursor-pointer text-sm   lg:text-lg pr-3  lg:pr-5 text-white lg:dark:hover:text-main   lg:p-0 dark:text-white" aria-current="page">Home</div>
                            </li>
                            <li>
                            <div onClick={()=>{
                        navigate('/about')
                    }}className=" hover:cursor-pointer text-sm   lg:text-lg pr-3  lg:pr-5 text-white lg:dark:hover:text-main   lg:p-0 dark:text-white" aria-current="page">How It Works</div>
                            </li>
                            <li>
                            <div onClick={()=>{
                        navigate('/contact')
                    }} className=" hover:cursor-pointer   text-sm   lg:text-lg pr-3  lg:pr-5 text-white lg:dark:hover:text-main   lg:p-0 dark:text-white" aria-current="page">Contact Us</div>
                            </li>

                            
                            <li>
                            <div onClick={()=>{
                        navigate('/login')
                    }}className=" hover:cursor-pointer   text-sm   lg:text-lg pr-3  lg:pr-5 text-white lg:dark:hover:text-main   lg:p-0 dark:text-white" aria-current="page">Log In</div>
                            </li>
                            <li>
                            <div onClick={()=>{
                        navigate('/select-gender')
                    }} className=" hover:cursor-pointer   text-sm   lg:text-lg pr-3  lg:pr-5 text-white lg:dark:hover:text-main   lg:p-0 dark:text-white" aria-current="page">Sign Up</div>
                            </li>
                          


                           
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}
