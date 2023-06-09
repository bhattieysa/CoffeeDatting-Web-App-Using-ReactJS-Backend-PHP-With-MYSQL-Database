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



const Favourite = () => {

    const id = ReactSession.get("id");
    const [favouriteData, setFavouriteData] = useState("")
    let [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        axios.post('https://coffee-dating.com/Website/myfavorites.php', {
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
        <div className='flex flex-1 flex-col bg-[#0A2256]'>
            <Header />
            <p className='text-5xl lg:text-6xl font-bold text-[#B75830] justify-center flex mt-10'>Favourite</p>
            <div className='flex flex-col flex-1 justify-center py-10' >
                <div className=" flex items-center justify-center flex-col">
              
                    <FlatList
                        list={favouriteData}
                        horizontal={true}
                        renderWhenEmpty={() => <div></div>}
                        className="bg-white w-1/4 h-auto flex flex-col  rounded-3xl "
                        renderItem={(item, id) => {

                            return (

                                <div className="bg-white  w-10/12 lg:w-1/3 h-1/2 flex flex-col  rounded-3xl my-5 ">
                                    <img className=" rounded-t-2xl  h-48 sm:h-96  object-cover max-w-xlg " src={'https://coffee-dating.com/App/uploads/' + item.Image} />
                                    <h1 className="text-[20px] ml-5 mt-3">{item.Name}, {item.Age}</h1>
                                    <div className=" my-4 flex  justify-evenly">
                                        <div className="bg-main  w-16 h-16 lg:w-20  lg:h-20 rounded-full justify-center flex items-center">
                                            <AiFillHeart className='text-4xl lg:text-5xl  text-red   ' />
                                        </div>
                                        <div className=" bg-main  w-16 h-16 lg:w-20  lg:h-20 rounded-full justify-center flex items-center">
                                            <AiOutlineWechat onClick={() => {
                                                navigate('/dashboard/chat', { state: { id: item.id, image: item.Image, name: item.Name } })
                                            }} className='text-4xl lg:text-5xl  text-white hover:cursor-pointer   ' />
                                        </div>
                                    </div>
                                </div>
                            )
                        }}
                    // renderWhenEmpty={() => <div>List is empty!</div>}
                    //   sortBy={["firstName", {key: "lastName", descending: true}]}
                    //   groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
                    />
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

                

            </div>



        </div>
    )
}

export default Favourite