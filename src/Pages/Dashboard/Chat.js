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
import ClipLoader from "react-spinners/ClipLoader";


const Chat = () => {
  const location = useLocation();
  const id = ReactSession.get("id");
  const [chatData, setChatData] = useState("")
  const [msg, setMsg] = useState("")
  let [loading, setLoading] = useState(true);

  const section = document.querySelector('#contact-us');
  section?.scrollIntoView({ behavior: 'smooth', block: 'end' });

  useEffect(() => {





    async function check() {
      axios.post('https://coffee-dating.com/Website/getchat.php', {
        receiver_id: id,
        sender_id: location.state.id
      }, {
        params: { action: "update-item" },
        headers: { 'Content-Type': 'application/json' },

      }).then(response => {
        // alert(response.data.msg)
// console.log(response.data.date_App[0].error)
setLoading(false)
if(response.data.date_App[0].error!='True'){
        setChatData(response.data.date_App)
      
}



      }
      ).catch(err => {
        console.log(err)
        return null
      })
    }

    check()
    setInterval(
      () => {
        check()
      },
      5000
    );
  }, [])








  const handleSubmit = (event) => {

    event.preventDefault();
    axios.post('https://coffee-dating.com/Website/chat.php', {
      message: msg,
      sender_id: id,
      receiver_id: location.state.id

    }, {
      params: { action: "update-item" },
      headers: { 'Content-Type': 'application/json' },

    }).then(response => {

    


      axios.post('https://coffee-dating.com/Website/getchat.php', {
        receiver_id: id,
        sender_id: location.state.id
      }, {
        params: { action: "update-item" },
        headers: { 'Content-Type': 'application/json' },

      }).then(response => {
        // alert(response.data.msg)
console.log("aasas",response.data.date_App.error)
if(response.data.date_App.error!='True'){
        setChatData(response.data.date_App)
}
        const section = document.querySelector('#contact-us');
        section.scrollIntoView({ behavior: 'smooth', block: 'end' });


      }
      ).catch(err => {
        console.log(err)
        return null
      })

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
    <div className='flex flex-1 h-screen flex-col  bg-gray-900'>
      <Header />

      <div className="flex w-screen justify-center   h-4/6 lg:h-screen rounded-b-2xl bg-gray-900 ">

        <div className="flex   lg:w-5/6  rounded-b-2xl    lg:h-5/6  lg:my-3 shadow-md">
          {/* Users online */}

          <div className="flex  flex-col  mt-10 flex-grow rounded-2xl bg-[#0A2256]">
            {/* Messages */}
            <div className="bg-btn py-3  rounded-t-2xl  flex items-center  ">
              <img className="w-12 h-12 ml-5 rounded-full" src={'https://coffee-dating.com/App/uploads/' + location.state.image} />
              <p className="text-white  mb-2 pl-1 lg:pl-3 text-2xl">
                {location.state.name}
              </p>
            </div>
            <div

              id="msg"
              className="h-5/6 overflow-y-auto  bg-[#0A2256]  pt-4 mb-2 lg:mb-0"
            >
                <div className="flex h-5/6 items-center justify-center flex-col">
                <ClipLoader
                    color={'#B75830'}
                    loading={loading}
                    // cssOverride={override}
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className='z-auto'
                />
                </div>
              <ul id="contact-us" style={{ overflow: 'hidden' }} className="w-full lg:w-full">
                
                <FlatList
                
                  contentContainerStyle={{ flexDirection: 'column-reverse' }}
                  list={chatData}
                  renderWhenEmpty={() => <div></div>}
                  horizontal={true}
                  className="bg-white w-1/4 h-auto flex flex-col  rounded-3xl "
                  renderItem={(item, idd) => {
                    const section = document.querySelector('#contact-us');
                    section.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    return (
                      <>
                        {item.sender_id != id ?
                          <li
                            key={idd}
                            className="  break-  my-3   pr-6 lg:pr-0 lg:w-full"
                          >
                            <p className="text-[20px] border  w-2/5 lg:w-1/6  px-3   font-semibold text-white rounded py-1">
                              {item.message} <br></br>  <span className="text-[12px]">{item.message_time}</span>
                            </p>
                          </li>
                          :
                          <li
                          key={idd}
                            className="w-screen break-words flex  my-3  justify-end pr-6 lg:pr-0 lg:w-full"
                          >
                            <p className="text-[20px] border  w-2/5 lg:w-1/6  mr-5 px-3  font-semibold text-white rounded py-1">
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
                    placeholder="Enter Message Here..."
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
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