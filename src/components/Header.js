import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-btn">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div onClick={()=>{
                        navigate('/')
                    }} className="flex items-center hover:cursor-pointer">
                        <img src={require("../images/logo.jpeg")} className="mr-3  rounded-xl h-12  lg:h-12" alt="Coffee Dating" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Coffee Dating</span>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <div onClick={()=>{
                        navigate('/login')
                    }} className="text-gray-800 hover:cursor-pointer dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-main focus:outline-none dark:focus:bg-main">Log In</div>
                        <div onClick={()=>{
                        navigate('/select-gender')
                    }} className="text-gray-800 hover:cursor-pointer dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-main focus:outline-none dark:focus:bg-main">Sign Up</div>
                      
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-main dark:focus:bg-white" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 " id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <div onClick={()=>{
                        navigate('/')
                    }} className=" hover:cursor-pointer block py-2 pr-4 pl-3 text-white lg:dark:hover:text-main rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</div>
                            </li>
                            <li>
                                <a href="#" className="hover:cursor-pointer block py-2 pr-4 pl-3 text-white lg:dark:hover:text-main rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="hover:cursor-pointer block py-2 pr-4 pl-3 text-white lg:dark:hover:text-main rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Contact Us</a>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
