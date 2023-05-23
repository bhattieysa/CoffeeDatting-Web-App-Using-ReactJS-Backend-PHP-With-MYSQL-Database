import React from 'react'
import { useNavigate } from "react-router-dom";
export default function DashboardHeader() {
    const navigate = useNavigate();
    return (
        <header>
            <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-btn">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div onClick={()=>{
                        navigate('/dashboard/')
                    }} className="flex items-center hover:cursor-pointer">
                        <img src={require("../images/logo.jpeg")} className="mr-3  rounded-xl h-12  lg:h-12" alt="Coffee Dating" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Coffee Dating</span>
                    </div>
                    <div className="flex items-center lg:order-2">
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 " id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <div onClick={()=>{
                        navigate('/dashboard/')
                    }} className=" hover:cursor-pointer block py-2 pr-4 pl-3 text-white lg:dark:hover:text-main rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</div>
                            </li>
                            <li>
                            <div onClick={()=>{
                        navigate('/dashboard/favourite')
                    }} className="hover:cursor-pointer block py-2 pr-4 pl-3 text-white lg:dark:hover:text-main rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Favourite</div>
                            </li>
                            <li>
                                <a href="#" className="hover:cursor-pointer block py-2 pr-4 pl-3 text-white lg:dark:hover:text-main rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Chat</a>
                            </li>
                            <li>
                            
                            <div onClick={()=>{
                        navigate('/dashboard/profile')
                    }} className="hover:cursor-pointer block py-2 pr-4 pl-3 text-white lg:dark:hover:text-main rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Profile</div>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
