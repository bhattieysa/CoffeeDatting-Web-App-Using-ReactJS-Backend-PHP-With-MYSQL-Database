import React, { useState } from "react";



import { MdEmail, MdOutlineLocationCity } from 'react-icons/md';
import { AiFillLock, AiOutlinePhone, AiFillFlag, AiFillCamera } from "react-icons/ai";
import { BiUser } from "react-icons/bi"
import ReactFlagsSelect from "react-flags-select";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Header from '../../components/DashboardHeader';
import { useGeolocated } from "react-geolocated";
import axios from "axios";
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import { ReactSession } from 'react-client-session';

const Profile = () => {


    const name = ReactSession.get("name");
    const pic = ReactSession.get("image");
    const gender = ReactSession.get("gender");
    const phone = ReactSession.get("phone");
    const id = ReactSession.get("id");
    const email = ReactSession.get("email");
    const password = ReactSession.get("password");
    const age = ReactSession.get("age");
    const country = ReactSession.get("country");
    const city = ReactSession.get("city");





    const location = useLocation();
    const [selected, setSelected] = useState("");
    const [image, setImage] = useState(null)
    const [uploadImage, setUploadImage] = useState(null)

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 1000,
        });




    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
            let files = e.target.files;
            let fileReader = new FileReader();
            fileReader.readAsDataURL(files[0]);

            fileReader.onload = (event) => {

                setUploadImage(event.target.result)

            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();



        // setEmail(event.target[0].value)
        // setPassword(event.target[1].value)
        // isGeolocationAvailable ? (
        //     alert("Your browser does not support Geolocation")


        // ) : !isGeolocationEnabled ? (

        //     alert("Geolocation is not enabled")
        // ) : (

        console.log(event.target[1].value)


        axios.post('http://coffee-dating.com/App/signup.php', {

            image: uploadImage,
            name: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            age: event.target[4].value,
            phone: event.target[5].value,
            lat: coords.latitude,
            lon: coords.longitude,
            country: event.target[6].value,
            city: event.target[7].value,
            gender: location.state.selected,
            app: 'yes',


        }, {
            params: { action: "update-item" },
            headers: { 'Content-Type': 'application/json' },

        }).then(response => {
            alert(response.data.msg)
        }
        ).catch(err => {
            console.log(err)
            return null
        })
    }


    // console.log(location.state.selected)
    return (
        <div className='flex flex-1 h-screen flex-col bg-[#0A2256]'>
            <Header />
            <div className='flex flex-col flex-1 justify-center py-10' >
                <p className=' text-6xl font-bold text-[#B75830] justify-center flex'>Profile</p>
                <div className=" flex items-center justify-center flex-col">
                    <img className="w-36 h-36 rounded-full my-5" src={'http://coffee-dating.com/App/uploads/' + pic} />
                    <form onSubmit={handleSubmit} className='w-full md:w-1/3  items-center '   >
                        {/* <div className="w-full mb-10">
                            <div className="flex justify-center items-center">
                                <AiFillCamera className='text-4xl text-white    mr-3 ' />
                                <input type="file"
                                    placeholder="Username"
                                    onChange={onImageChange}
                                    className="px-8 w-full text-[18px]   bg-[#0A1937] rounded-full py-2 text-white focus:outline-none" />
                            </div>
                        </div> */}
                        <div className=" flex items-center justify-center">
                            <div className="w-full mb-10">
                                <div className="flex justify-center items-center">
                                    <BiUser className='text-4xl text-white    mr-3 ' />
                                    <input type="text"
                                        placeholder="Username"
                                        name='username'
                                        value={name}
                                        readOnly={true}
                                        className="px-8 w-full text-[18px]   bg-[#0A1937] rounded-full py-2 text-white focus:outline-none" />
                                </div>
                            </div>

                        </div>

                        <div className=" flex items-center justify-center">



                            <div className="w-full mb-10">

                                <div className="flex justify-center items-center">
                                    <MdEmail className='text-4xl text-white    mr-3 ' />
                                    <input type="text"
                                        placeholder="Email"
                                        name='email'
                                        value={email}
                                        readOnly={true}
                                        className="px-8 w-full text-[18px]   bg-[#0A1937] rounded-full py-2 text-white focus:outline-none" />
                                </div>
                            </div>

                        </div>
                        <div className=" flex items-center justify-center">


                            <div className="w-full mb-10">

                                <div className="flex justify-center items-center">
                                    <AiFillLock className='text-4xl text-white    mr-3 ' />
                                    <input type="password"
                                        placeholder="Password"
                                        name='password'
                                        value={password}
                                        readOnly={true}
                                        className="px-8 w-full text-[18px]   bg-[#0A1937] rounded-full py-2 text-white focus:outline-none" />
                                </div>
                            </div>

                        </div>
                        <div className=" flex items-center justify-center">



                            <div className="w-full mb-10">

                                <div className="flex justify-center items-center">
                                    <BiUser className='text-4xl text-white    mr-3 ' />
                                    <input type="number"
                                        placeholder="Age"
                                        name='age'
                                        value={age}
                                        readOnly={true}
                                        className="px-8 w-full text-[18px]   bg-[#0A1937] rounded-full py-2 text-white focus:outline-none" />
                                </div>
                            </div>

                        </div>

                        <div className=" flex items-center justify-center">



                            <div className="w-full mb-10">

                                <div className="flex justify-center items-center">
                                    <AiOutlinePhone className='text-4xl text-white    mr-3 ' />
                                    <input type="text"
                                        placeholder="Phone"
                                        name='phone'
                                        value={phone}
                                        readOnly={true}
                                        className="px-8 w-full text-[18px]   bg-[#0A1937] rounded-full py-2 text-white focus:outline-none" />
                                </div>
                            </div>

                        </div>

                        <div className=" flex items-center justify-center">



                            {/* <div className="w-full mb-10">

                                <div className="flex ">
                                    <AiFillFlag className='text-4xl text-white    mr-3 ' /> */}

                                    {/* <ReactFlagsSelect

                                       
                                        selected={selected}
                                        onSelect={(code) => setSelected(code)}
                                        
                                    // selected={selected}
                                    // onSelect={(code) => setSelected(code)}
                                    />; */}
                                    {/* <CountryDropdown className=" px-8 w-full text-[18px] border-[#0A1937]   bg-[#0A1937] rounded-full py-2 text-white focus:outline-none" id="UNIQUE_ID" value="" handleChange={e => setSelected(e.target.value)}></CountryDropdown>
                                </div>
                            </div> */}

                        </div>
                        <div className=" flex items-center justify-center">



                            <div className="w-full mb-10">

                                <div className="flex justify-center items-center">
                                <AiFillFlag className='text-4xl text-white    mr-3 ' />
                              
                                    <input type="text"
                                        placeholder="City"
                                        name='city'
                                        value={country}
                                        readOnly={true}
                                        className="px-8 w-full text-[18px]   bg-[#0A1937] rounded-full py-2 text-white focus:outline-none" />
                                </div>
                            </div>

                        </div>
                        <div className=" flex items-center justify-center">



                            <div className="w-full mb-10">

                                <div className="flex justify-center items-center">
                                    <MdOutlineLocationCity className='text-4xl text-white    mr-3 ' />
                                    <input type="text"
                                        placeholder="City"
                                        name='city'
                                        value={city}
                                        readOnly={true}
                                        className="px-8 w-full text-[18px]   bg-[#0A1937] rounded-full py-2 text-white focus:outline-none" />
                                </div>
                            </div>

                        </div>

                        {/* <div className=' flex mt-8 items-center justify-center'>
                            <button

                                className=' bg-btn w-96 h-10 text-white rounded-full text-[18px] font-bold'
                                type="submit">Create Account</button>
                        </div> */}
                    </form>
                   
                </div>


            </div>
        </div>
    )
}

export default Profile