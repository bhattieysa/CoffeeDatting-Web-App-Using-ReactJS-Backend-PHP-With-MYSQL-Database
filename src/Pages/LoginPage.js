import React, { useState } from 'react'



import { MdEmail } from 'react-icons/md';
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import { ReactSession } from 'react-client-session';
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmail(event.target[0].value)
        setPassword(event.target[1].value)

        var formdata = new FormData();
        //add three variable to form
        formdata.append(email, email);
        formdata.append(password, password);
        formdata.append("rate", "4");



        axios.post('http://coffee-dating.com/Website/login.php', {
            email: email,
            password: password,
            
        }, {
            params: { action: "update-item" },
            headers: { 'Content-Type': 'application/json' },

        }).then(response =>{
            alert(response.data.msg)

           

            if(response.data.error==false){
                ReactSession.setStoreType("localStorage");
                ReactSession.set("name", response.data.Name);
                ReactSession.set("image", response.data.Image);
                ReactSession.set("gender", response.data.Gender);
                ReactSession.set("phone", response.data.Phone);
                ReactSession.set("id", response.data.id);
                ReactSession.set("email", response.data.email);
                ReactSession.set("password", response.data.password);
                ReactSession.set("age", response.data.Age);
                ReactSession.set("country", response.data.Country);
                ReactSession.set("city", response.data.City);
                navigate('/dashboard/')
            }
        }
        ).catch(err => {
            console.log(err)
            return null
        })

        // axios.post(`http://coffee-dating.com/App/login.php`,

        // {},
        // params: { action: "update-user" },

        //     {
        //         headers:{
        //             "Content-Type": "multipart/form-data" ,
        //             'Accept': 'Token',
        //             "Access-Control-Allow-Origin": "*",

        //         }
        //     }


        // ).then((response) => {
        //     console.log(response.data)
        // })
    }




    return (




        <div className='flex h-screen flex-col bg-[#0A2256]'>
           
<Header/>
            <div className='flex flex-col flex-1 justify-center' >
                <p className='text-6xl font-bold text-[#B75830] justify-center  flex'>Please Login</p>
                <div className=" flex items-center  flex-col">
                    <form onSubmit={handleSubmit} className='w-full md:w-1/3  items-center mt-20'   >
                        <div className=" flex items-center justify-center">
                            <div className="w-full mb-10">
                                <div className="flex justify-center items-center">
                                    <MdEmail className='text-4xl text-white    mr-3 ' />
                                    <input type="text"
                                        placeholder="Email or Phone"
                                        name='email'
                                        className="px-8 w-full text-[18px]   bg-[#0A1937] rounded-full py-2 text-white focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className=" flex items-center justify-center">
                            <div className="w-full mb-2">
                                <div className="flex justify-center items-center">
                                    <AiFillLock className='text-4xl text-white    mr-3 ' />
                                    <input type="password"
                                        placeholder="Password"
                                        name='password'
                                        className="px-8 w-full text-[18px]   bg-[#0A1937] rounded-full py-2 text-white focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className=' flex mt-8 items-center justify-center'>
                            <button
                                className=' bg-btn w-96 h-10 text-white rounded-full text-[18px] font-bold'
                                type="submit">Login</button>
                        </div>
                    </form>
                    <div className='w-full mt-3 flex  justify-center text-white  '>
                        <p className='  text-[16px]' >You Don't have an Account? <Link to="/select-gender" className='text-btn font-bold text-[18px]'>Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login