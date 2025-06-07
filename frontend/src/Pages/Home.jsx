import React from 'react'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <section id='home' className='   '>
      <div className=' overflow-hidden flex md:px-20 px-15  md:pt-30  h-screen bg-[#000000] '>
        <div className='  pt-40  md:w-2xl md:pl-25'>
{/* we use text transpa */}
  <h1 className='text-white  md:flex  text-[48px] md:w-3xl  font-bold'> 

    I'm   <span className='px-2 bg-gradient-to-r from-pink-400 to-blue-600 bg-clip-text text-transparent animate-pulse' > Ravi Sharma,</span> a  </h1>
    <h1 className='text-white text-3xl font-bold md:ml-25 md:mt-10'>Web Developer</h1>  
  
  <p className='text-[#D3D3D3] pt-5'>I build web applications that transform your ideas into reality.</p>
  
<button className=' flex items-center justify-center px-4 py-2 rounded-4xl bg-amber-400 ml-15 md:ml-35 mt-20'>Get In Touch</button>
        </div>
        <div className='hidden md:flex'>
          <img className='pl-10 h-170 w-3xl' src='ChatGPT Image Jun 6, 2025, 12_41_23 PM.png' alt='mern stack'/>
        </div></div>
        <About/>
        <Contact/>
         
    </section>
  )
}

export default Home