import React, { useEffect, useState } from "react";



import { MdEmail, MdOutlineLocationCity } from 'react-icons/md';
import { AiFillLock, AiOutlinePhone, AiFillFlag, AiFillCamera, AiFillHeart, AiOutlineWechat } from "react-icons/ai";
import { BiUser } from "react-icons/bi"
import ReactFlagsSelect from "react-flags-select";

import { Link } from "react-router-dom";
import Header from '../../components/DashboardHeader';
import { useGeolocated } from "react-geolocated";
import axios from "axios";
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import { ReactSession } from 'react-client-session';
import FlatList from 'flatlist-react';
import { useLocation } from "react-router-dom";


const Chat = () => {
  const location = useLocation();
  const id = ReactSession.get("id");
  const [chatData, setChatData] = useState("")

  useEffect(() => {

    console.log("asas", id + "   " + location.state)
    axios.post('http://coffee-dating.com/Website/getchat.php', {
      receiver_id: id,
      sender_id: location.state
    }, {
      params: { action: "update-item" },
      headers: { 'Content-Type': 'application/json' },

    }).then(response => {
      // alert(response.data.msg)

      console.log("asas", response.data.date_App)
      setChatData(response.data.date_App)


    }
    ).catch(err => {
      console.log(err)
      return null
    })
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://coffee-dating.com/Website/chat.php', {
      message: event.target[0].value,
      sender_id: id,
      receiver_id: location.state

    }, {
      params: { action: "update-item" },
      headers: { 'Content-Type': 'application/json' },

    }).then(response => {




      if (response.data.error == false) {

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


  // console.log(location.state.selected)
  return (
    <div className='flex flex-1 h-screen flex-col bg-[#0A2256]'>
      <Header />

      <div className="flex w-screen main-chat lg:h-screen rounded-b-2xl bg-gray-900 divide-solid">

        <div className="flex w-full lg:w-5/6 rounded-b-2xl lg:h-5/6 lg:mx-auto lg:my-auto shadow-md">
          {/* Users online */}

          <div className="flex flex-col  flex-grow rounded-2xl lg:max-w-full  bg-purple-50">
            {/* Messages */}
            <div className="bg-btn py-3 rounded-t-2xl  flex items-center  ">
              <img className="w-10 h-10 rounded-full" src={require("../../images/female.png")} />
              <p className="text-white  mb-2 pl-4 lg:pl-8 text-2xl">
                Main Chat
              </p>
            </div>
            <div
              id="msg"
              className="h-5/6 overflow-y-auto  bg-[#0A2256] pl-4 lg:pl-8 pt-4 mb-2 lg:mb-0"
            >
              <ul className="w-full  lg:w-full">
                <FlatList
                  list={chatData}
                  horizontal={true}
                  className="bg-white w-1/4 h-auto flex flex-col  rounded-3xl "
                  renderItem={(item, idd) => {

                    return (


                      <>
                        {item.sender_id != id ?
                          <li
                            //   key={index}

                            className="  break-words   pr-6 lg:pr-0 lg:w-full"
                          >

                            <p className="text-[20px] border  w-1/6  px-3   font-semibold text-white rounded py-1">
                              {item.message} <br></br>  <span className="text-[12px]">{item.message_time}</span>
                            </p>



                          </li>
                          :
                          <li
                            //   key={index}
                            className="w-screen break-words flex   justify-end pr-6 lg:pr-0 lg:w-full"
                          >


                            <p className="text-[20px] border  w-1/6  mr-5 px-3  font-semibold text-white rounded py-1">
                              {item.message} <br></br>  <span className="text-[12px]">{item.message_time}</span>
                            </p>


                          </li>
                        }
                      </>

                    )
                  }}
                />

              </ul>
            </div>
            <form onSubmit={handleSubmit} className="">

              <div className="w-full flex p-4 lg:p-8 rounded-b-2xl bg-[#0A2256]">
                {" "}
                <div className="flex relative w-full lg:w-5/6">

                  <input
                    type="text"
                    className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-1 lg:px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none"
                    name="message"
                  //   onChange={(e) => setMsg(e.target.value)}
                  //   value={msg}
                  />
                </div>
                <div className="hidden lg:block w-1/6">
                  <button
                    type="submit"
                    className="ml-8 flex-shrink-0 bg-btn text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md  focus:outline-none focus:ring-2"
                  //   onClick={(e) => submitMsg(e)}
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Chat