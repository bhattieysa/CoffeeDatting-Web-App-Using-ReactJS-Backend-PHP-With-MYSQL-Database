import React, { useEffect, useState } from "react";



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


const ChatList = () => {

    const id = ReactSession.get("id");
    const [favouriteData, setFavouriteData] = useState("")
    let [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        axios.post('https://coffee-dating.com/Website/chatUser.php', {
            id: id,
        }, {
            params: { action: "update-item" },
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            // alert(response.data.msg)

            console.log(response.data.date_app)
            setFavouriteData(response.data.date_app)
            setLoading(false)
        }
        ).catch(err => {
            console.log(err)
            return null
        })
    }, [])
    // console.log(location.state.selected)
    return (
        <div className='flex flex-1 flex-col  h-screen bg-gray-900'>
            <Header />
            <p className=' text-5xl lg:text-6xl font-bold text-[#B75830] justify-center flex mt-10'>Chat List</p>
            <div className='flex flex-col flex-1 py-10' >
                <div className=" flex   flex-col">
                    {loading == true ?
                        <div className=" h-screen flex items-center justify-center flex-col">
                            <ClipLoader
                                color={'#B75830'}
                                loading={loading}
                                // cssOverride={override}
                                size={100}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                                className='z-auto'
                            />
                        </div>
                        :
                        <FlatList
                            list={favouriteData}
                            horizontal={true}
                            renderWhenEmpty={() => <div></div>}
                            className="bg-white w-1/4 h-auto flex flex-col  rounded-3xl "
                            renderItem={(item, id) => {
                                return (
                                    <div onClick={() => {
                                        navigate('/dashboard/chat', { state: { id: item.id, image: item.Image, name: item.Name } })
                                    }} className="bg-[#0A2256] hover:cursor-pointer text-white mx-5 lg:mx-20 py-2 items-center flex rounded-3xl my-5 ">
                                        <img className=" rounded-full ml-4  h-16 w-16   object-cover  " src={'https://coffee-dating.com/App/uploads/' + item.Image} />
                                        <div className="flex-col">
                                            <h1 className="text-[20px] font-bold ml-5 ">{item.Name}</h1>
                                            <h1 className="text-[14px] ml-5">{item.Email}</h1>
                                        </div>
                                    </div>
                                )
                            }}

                        // renderWhenEmpty={() => <div>List is empty!</div>}
                        //   sortBy={["firstName", {key: "lastName", descending: true}]}
                        //   groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
                        />
                    }

                </div>

            </div>



        </div>
    )
}

export default ChatList