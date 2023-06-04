import React from 'react';
import Header from '../components/Header';
import Logo from '../images/logo1.jpeg';


const Index = () => {


   
    return <div className='flex h-screen flex-col '>
        

        <Header />
        <div className=' flex h-screen  flex-col bg-black' >

            <div className='  flex-none justify-center flex-col my-8 '>
                <h1 className='text-white justify-center flex mx-5 text-xl lg:text-4xl'>DO YOU CARE FOR A COFFEE?</h1>
                <h1 className='text-white flex justify-center text-l lg:text-3xl mt-3'>Instant Dating</h1>
            </div>
            {/* <div style={{
              backgroundImage: `url(${Logo})`,
             
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
             
            }} className='h-1/2  bg-gray-700 '>
                </div>
               */}
   
            <img className=' w-screen  h-3/5   ' src={require("../images/logo1.jpeg")} />
            <div className='flex-none justify-center flex-col my-8  '>
                <h1 className='text-white justify-center flex  text-1xl lg:text-4xl'>Date now, right away.</h1>
                <h1 className='text-white flex justify-center text-center mx-5 text-l lg:text-3xl mt-3'>Always free for women-men pay US$ 2 per month only</h1>
            </div>
        </div>
    </div>
}



export default Index;