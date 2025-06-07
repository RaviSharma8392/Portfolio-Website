import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'


const Navbar = () => {  const [isMobile,setIsMobile]=useState(false)

//it's for scrolling effect

const [isScroll ,setIsScroll]=useState()
useEffect(()=>{
  //1 st define 1 handel scroll function
  const handelScroll=()=>
    // if scrool value greter then 50 then setIsScroll value change
    setIsScroll(window.scrollY>50)

 //add event listener for listing scrool
  window.addEventListener('scroll',handelScroll)

  // It's cleaner function for Removes listeners when not needed	
return()=>{ window.removeEventListener('scroll' ,handelScroll)}
})
 

 
  return (
    //we use blur property for bg blur backdrop blur
    <nav className={`flex  fixed z-50 w-full shadow-2xl justify-between overflow-hidden  lg:px-20 px-2 p-10 md:p-5  ${isScroll?"backdrop-blur ": "bg-[#000000]"}`} >
        {/* this div for logo */}
        <div className='flex  font-bold text-2xl'>

<h1 className='text-2xl bg-gradient-to-r from-pink-400 to-blue-600 bg-clip-text text-transparent'>PORTFOLIO </h1>
        </div>
{/* links for large devices */}
        <div className=' gap-6  hidden md:flex text-white'> 
          {/* isactive pass as argurmnt on classname function */}
  <NavLink   to={"/"}>HOME</NavLink>
  <NavLink   to="#about">ABOUT</NavLink>
  <NavLink  to={"/projects"}>PROJECTS</NavLink>
  <NavLink  to="#contact">CONTACT</NavLink>
<NavLink  to={"/contact"}>RESUME</NavLink>



        </div>
        {/* button for humbarger icon */}
<button className='md:hidden text-white text-3xl pr-3.5 ' onClick={()=> {setIsMobile(!isMobile)}}>
<GiHamburgerMenu />


</button>
        {/* mobile links */}
        {isMobile&&(<div className='bg-pink-500 font-semibold md:hidden   fixed gap-2 px-3 py-5 rounded text-black flex my-0 flex-col '
        ><NavLink className={({ isActive }) =>
     isActive ? "text-blue-400" : "text-black"
  }onClick={()=> {setIsMobile(!isMobile)}} to={"/"}>HOME</NavLink>
         <NavLink className={({isActive})=>isActive?"text-blue-400":"text-black"}  onClick={()=> {setIsMobile(!isMobile)}} to={"/about"}>ABOUT</NavLink>
         <NavLink className={({isActive})=>isActive?"text-blue-400":"text-black"} onClick={()=> {setIsMobile(!isMobile)}} to={"/projects"}>PROJECTS</NavLink>
         <NavLink className={({isActive})=>isActive?"text-blue-400":"text-black"}  onClick={()=> {setIsMobile(!isMobile)}}to={"/contact"}>SKILLS</NavLink>
        <NavLink className={({isActive})=>isActive?"text-blue-400":"text-black"} onClick={()=> {setIsMobile(!isMobile)}} to={"/contact"}>RESUME</NavLink></div>)}

{/*for  Aligns items horizontally (main axis) center or left and right  we use justify and if we need Aligns items vertically (cross axis) or Use when you want to center content top ↕ bottomso we use align items

 */}
<button className='hidden md:flex  items-center justify-center px-4 py-2 rounded-4xl bg-gradient-to-l text-white from-pink-400 to-blue-600 bg-clip-padding  '>Resume </button>
    </nav>
  )
}

export default Navbar