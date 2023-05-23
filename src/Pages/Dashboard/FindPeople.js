import React, { useRef, useState, useEffect } from 'react';
import Header from '../../components/DashboardHeader';
import { useNavigate } from "react-router-dom";
import GoogleMap from 'google-maps-react-markers'
import Marker from '../../components/Marker';
import { useGeolocated } from "react-geolocated";
import mapOptions from '../../components/map-options.json'
import { ReactSession } from 'react-client-session';
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiFillCloseCircle,AiOutlineHeart, AiFillLock, AiOutlinePhone, AiFillFlag, AiFillCamera, AiFillHeart, AiOutlineWechat } from "react-icons/ai";
// const coordinates = [
//     [
//         {
//             lat: 45.4046987,
//             lng: 12.2472504,
//             name: 'Venice',
//         },
//         {
//             lat: 41.9102415,
//             lng: 12.3959151,
//             name: 'Rome',
//         },
//         {
//             lat: 45.4628328,
//             lng: 9.1076927,
//             name: 'Milan',
//         },
//     ],

// ]
const FindPeople = () => {
    const mapRef = useRef(null)
    const [mapReady, setMapReady] = useState(false)
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()
    const [open, setOpen] = useState(false);
    const [modelData, setModelData] = useState();
    const closeModal = () => setOpen(false);
    const [apiData, setApiData] = useState()
    const [mapBounds, setMapBounds] = useState({})
    const [usedCoordinates, setUsedCoordinates] = useState(0)

    const [highlighted, setHighlighted] = useState(null)
    const id = ReactSession.get("id");
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 1000,
        });





    useEffect(() => {
        if (isGeolocationAvailable) {

            setLat(coords?.latitude)
            setLng(coords?.longitude)


        }
    })

    if (lat !== undefined && lng !== undefined) {
        axios.post('http://coffee-dating.com/Website/userlist.php', {
            id: id,
            lat: '32.0656455',
            lng: '72.7007029'


        }, {
            params: { action: "update-item" },
            headers: { 'Content-Type': 'application/json' },

        }).then(response => {
            // alert(response.data.msg)


            setApiData(response.data.date_app)


        }
        ).catch(err => {
            console.log(err)
            return null
        })
    }


    const onGoogleApiLoaded = ({ map, maps }) => {
        mapRef.current = map
        setMapReady(true)
    }

  function  setFavourite(favourite_id){

    axios.post('http://coffee-dating.com/Website/add_to_favorites.php', {
        user_id: id,
        fav_user_id: favourite_id,
            


        }, {
            params: { action: "update-item" },
            headers: { 'Content-Type': 'application/json' },

        }).then(response => {
            // alert(response.data.msg)


         console.log(response)


        }
        ).catch(err => {
            console.log(err)
            return null
        })

    }

    // eslint-disable-next-line no-unused-vars
    const onMarkerClick = (e, { markerId, lat, lng, data }) => {
        setHighlighted(markerId)
        console.log(data)

        setModelData(data)
        setOpen(o => !o)
    }

    const onMapChange = ({ bounds, zoom }) => {
        const ne = bounds.getNorthEast()
        const sw = bounds.getSouthWest()
        /**
         * useSupercluster accepts bounds in the form of [westLng, southLat, eastLng, northLat]
         * const { clusters, supercluster } = useSupercluster({
         *	points: points,
         *	bounds: mapBounds.bounds,
         *	zoom: mapBounds.zoom,
         * })
         */
        setMapBounds({ ...mapBounds, bounds: [sw.lng(), sw.lat(), ne.lng(), ne.lat()], zoom })
        setHighlighted(null)
    }


    return (
        <div className='flex h-screen flex-col bg-main '>

            <Header />
            <div className=' flex flex-1 flex-col justify-center items-center ' >
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <div >
                        {/* <a className="close" onClick={closeModal}>
                            &times;
                        </a> */}
                        <div className='flex hover:cursor-pointer mr-2 mt-2  justify-end ' onClick={closeModal}>
                        <AiFillCloseCircle  className='text-3xl   text-btn    ' />
                        </div>
                        <div className="w-full h-1/2 flex flex-col  rounded-3xl my-5 ">
                            <img className=" rounded-t-2xl  h-48 sm:h-96  object-center max-w-xlg " src={'http://coffee-dating.com/App/uploads/' + modelData?.Image} />
                            <h1 className="text-[20px] ml-5 mt-3">{modelData?.Name}, {modelData?.Age}</h1>

                            <div className='flex items-center mr-10'>
                                <h1 className=" flex-1 text-[16px] ml-5 mt-1">{modelData?.country}, {modelData?.city}</h1>
                                <div className="justify-center flex items-center">
                                    <AiOutlineHeart onClick={()=>{
                                        setFavourite(modelData.id)
                                    }} className='text-6xl  text-red   ' />
                                </div>
                            </div>
                            <div className='flex items-center mr-10 mt-3'>
                                <h1 className=" flex-1 text-[23px] font-bold text-btn ml-5 ">Can I Invite You For A Coffee?</h1>
                                <div className="justify-center flex items-center">
                                    <AiOutlineWechat className='text-6xl  text-btn   ' />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div>


                    </div>
                </Popup>

                {lat !== undefined && lng !== undefined ?


                    <GoogleMap
                        apiKey="AIzaSyD03SIsXckuaDkb2Sci_x5__PKRxdZT_uM"
                        defaultCenter={{
                            lat: lat,
                            lng: lng

                        }}
                        defaultZoom={7}
                        options={mapOptions}
                        mapMinHeight="100vh"

                        onGoogleApiLoaded={onGoogleApiLoaded}
                        onChange={onMapChange}
                    >
                        {apiData?.map((currElement, index) => (

                            <Marker key={index} lat={currElement.lat2} lng={currElement.lon2} markerId={currElement.Name} data={currElement} onClick={onMarkerClick} className="marker" />
                        ))}
                    </GoogleMap>
                    :
                    <></>
                }



            </div>
        </div>
    )
}



export default FindPeople;