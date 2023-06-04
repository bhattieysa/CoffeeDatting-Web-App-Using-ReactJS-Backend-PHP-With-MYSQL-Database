import React from 'react';
import Header from '../components/Header';
import Logo from '../images/logo1.jpeg';


const About = () => {


   
    return <div className='flex h-screen flex-col '>
        

        <Header />
        <div className=' flex h-screen  flex-col bg-black' >

            <div className='  flex-none justify-center flex-col my-8 '>
                <h1 className='text-white justify-center flex mx-5 text-2xl lg:text-4xl'>HOW IT WORKS?</h1>
                <h1 className='text-white flex justify-center text-xl lg:text-2xl mt-3'>Browse the area & see who is online</h1>
            </div>
            {/* <div style={{
              backgroundImage: `url(${Logo})`,
             
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
             
            }} className='h-1/2  bg-gray-700 '>
                </div>
               */}
   
            <img className=' w-screen     h-3/5 ' src={require("../images/about.jpg")} />
            <div className='flex-none justify-center flex-col  '>
                {/* <h1 className='text-white justify-center flex  text-3xl lg:text-5xl'>Date now, right away.</h1> */}
                <h1 className='text-white flex justify-center text-center mx-1 text-xl lg:text-2xl mt-3'>By entering this Website, you agree to our Privacy Statement & you confirm, that you are over 18 years old.</h1>
                <a href='https://coffee-dating.com/App/Privacy.pdf' className='text-white flex justify-center text-center mx-5 text-xl lg:text-2xl mt-3'>View Privacy Statement</a>
            </div>
        </div>
    </div>
}



export default About;