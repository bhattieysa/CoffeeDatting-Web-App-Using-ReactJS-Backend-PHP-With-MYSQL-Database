
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { MdEmail, MdOutlineLocationCity } from 'react-icons/md';
import { AiFillLock, AiOutlinePhone, AiFillFlag, AiFillCamera, AiFillHeart, AiOutlineWechat } from "react-icons/ai";
import { BiUser } from "react-icons/bi"
import ReactFlagsSelect from "react-flags-select";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Header from '../../components/DashboardHeader';
import { useGeolocated } from "react-geolocated";
import axios from "axios";
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import { ReactSession } from 'react-client-session';
import FlatList from 'flatlist-react';
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Popup from 'reactjs-popup';
import { AiFillCloseCircle } from "react-icons/ai";
import Iframe from 'react-iframe'

const Index = () => {
    const navigate = useNavigate();

    const obj = ReactDOM.findDOMNode(this);

    const id = ReactSession.get("id");
    const [favouriteData, setFavouriteData] = useState("")
    const [gender, setGender] = useState(null)
    const [check, setCheck] = useState(null)
    let [loading, setLoading] = useState(true);
    let [height, setHight] = useState(true);
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);






    useEffect(() => {
        axios.post('https://coffee-dating.com/Website/CheckSubs.php', {
            id: id,
        }, {
            params: { action: "update-item" },
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            // alert(response.data.msg)

            console.log(response.data)
            setCheck(response.data.check_sub)
            setGender(response.data.gender)
            if (response.data.check_sub == 'No' && response.data.Gender=='Male') {
                setOpen(true)
            }
        }
        ).catch(err => {
            console.log(err)
            return null
        })
    })

    return <div className='flex h-screen flex-col bg-[#0A2256]'>

        <Header />
        <div className=' flex flex-1 flex-col justify-center items-center bg-[#002459]' >

            <Popup id="myFrame" open={open} contentStyle={{ width: "90%", height: "70%", background: '#0A1937' }} closeOnDocumentClick onClose={closeModal}>


                {/* <div className='flex hover:cursor-pointer mr-2 mt-2  justify-end ' onClick={closeModal}>
                    <AiFillCloseCircle className='text-3xl   text-btn    ' />
                </div> */}


                <div className="flex-1  h-5/6   my-5 ">

                    <Iframe url={"https://coffee-dating.com/Website/payment.php?id="+id}


                        // width="100%" 
                        // height={frameHeight}
                        frameBorder="0"
                        scrolling="no"
                        className="w-full h-full"
                    />
                </div>
                
            </Popup>
            <img onClick={() => {
                navigate('/dashboard/find-people')
            }} className=' w-96 h-96 hover:cursor-pointer' src={require("../../images/find_people.jpeg")} />


        </div>
    </div>
}



export default Index;