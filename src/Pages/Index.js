import React from 'react';
import Header from '../components/Header';
import Logo from '../images/logo1.jpeg';


const Index = () => {


   
    return <div className='flex h-screen flex-col bg-[#0A2256]'>
        

        <Header />
        <div className=' flex flex-1 flex-col bg-black' >

            <div className='  flex-none justify-center flex-col my-8 '>
                <h1 className='text-white justify-center flex mx-5 text-3xl lg:text-5xl'>DO YOU CARE FOR A COFFEE?</h1>
                <h1 className='text-white flex justify-center text-2xl lg:text-4xl mt-3'>Instant Dating</h1>
            </div>
            <div style={{
              backgroundImage: `url(${Logo})`,
             
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
             
            }} className=' flex-1 bg-gray-700 '>
              
            </div>
            <div className='flex-none justify-center flex-col my-8  '>
                <h1 className='text-white justify-center flex  text-3xl lg:text-5xl'>Date now, right away.</h1>
                <h1 className='text-white flex justify-center text-center mx-5 text-2xl lg:text-4xl mt-3'>Always free for women-men pay US$ 2 per month only</h1>
            </div>
        </div>
    </div>
}



export default Index;