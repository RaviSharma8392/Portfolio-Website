import React, { useState } from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
 

const About = () => {
  const [frontend , setFrontend]=useState({})
  const skill=[
  {name:"HTML",
    image:"./icons/html.CDcQYsfM_NH7Vk.svg",
    link:"./",
    category:"Frontend"
  },{name:"CSS",
    image:"./icons/css.Bg2puW5N_ZC4U5N.svg",
    link:"./",
    category:"Frontend"
  },{name:"JavaScript ",
    image:"./icons/javascript.BtpOR5m6_12NXF2.svg",
    link:"./",
    category:"Frontend"
  },
  {name:"REACT",
    image:"./icons/reactjs.CgxoH06g_ygjfI.svg",
    link:"./",
    category:"Frontend"
  },
   
  {name:"Tailwind",
    image:"./icons/tailwind.DIFktTyy_1x0vDH.svg",
    link:"./",
    category:"Frontend"
  },{name:"Node.js",
    image:"./icons/nodejs.BV17mpJ3_Zb9KFI.svg",
    link:"./",
    category:"Backend"
  },{name:"	Express.js",
    image:"./icons/express.png",
    link:"./",
    category:"Backend"
  },{name:"Postman ",
    image:"https://voyager.postman.com/logo/postman-logo-icon-orange.svg",
    link:"./",
    category:"Backend"
  },{name:"JWT ",
    image:"https://jwt.io/img/pic_logo.svg",
    link:"./",
    category:"Backend"
  }
  ,{name:"Mongo DB ",
    image:"./icons/mongodb.Dijo5B3J_1JCDju.svg",
    link:"./",
    category:"Backend"
  },{name:"Mongoose ",
    image:"https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-e908-61f7-8bfc-ef8155105a52/raw?se=2025-06-07T08%3A28%3A45Z&sp=r&sv=2024-08-04&sr=b&scid=2f6ceaeb-14c9-5271-b66c-6299de2cff44&skoid=732f244e-db13-47c3-bcc7-7ee02a9397bc&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-07T01%3A00%3A27Z&ske=2025-06-08T01%3A00%3A27Z&sks=b&skv=2024-08-04&sig=tqdir/oAtTkzR1WneBNRa8LNtSDeafWqtmSTHzi3U5Q%3D",
    link:"./",
    category:"Backend"
    
  },
  {name:"Github ",
    image:"https://cdn-icons-png.flaticon.com/512/25/25231.png",
    link:"./",
    category:"Tech & Tools"
  },
   {name:"NPM ",
    image:"./icons/npm.dseLRU7P_7eE64.svg",
    link:"./",
    category:"Tech & Tools"
  },
  ,
   {name:"Vite ",
    image:"./icons/vitejs.DcBtz0py_Z1aiy3d.svg",
    link:"./",
    category:"Tech & Tools"
  },
   {name:"VS Code ",
    image:"./icons/vscode.PgsXvHN1_1WT2XV.svg",
    link:"./",
    category:"Tech & Tools"
  },
   {name:"Netlify ",
    image:"./icons/netlify.BzDjAtPc_Z1ssL49.svg",
    link:"./",
    category:"Tech & Tools"
  }, {name:"Render",
    image:"./icons/icon.svg",
    link:"./",
    category:"Tech & Tools"
  },
]
const grouped=skill.reduce((acc,item)=>{
  // 1 st we check item is avalbile in accumalator
  if(!acc[item.category]){
    // if item is not available then we push item on itemCategory
acc[item.category] = [];}else{
}

acc[item.category].push(item) 
 return acc

},{})
 console.log(grouped)

  return (
    <div id='about' className=' bg-[#000000] md:px-20 px-4 pt-10'>
      <h1 className='  font-bold my-10 text-3xl text-white flex justify-center md:mb-20 '><span className='hidden md:flex mt-4 bg-pink-400 h-0.5 w-150'></span>
        <FaLessThan className='text-violet-700 text-md my-1 flex px-1.5'  />About<span className='px-2'>  </span>Me<FaGreaterThan  className='text-violet-700 my-1 px-1.5 text-md'  />
<span className=' hidden md:flex bg-pink-400 mt-4 pl-0 h-0.5 w-150'></span>

        </h1>  



       <div className='md:flex my-10 border  gap-10  '> <div className='  px-10 md:flex border-r  border-blue-500 '><img  className="w-sm" src="https://chiragchrg.netlify.app/_astro/Avatar_250.D5Y28m99.webp" alt="" /></div>
<div className='text-white font-[Poppins] px-2 py-16 text-lg max-w-4xl '>
  <h1 className='text-3xl font-semibold text-purple-400 mb-4 animate-pulse'>Hey there! 👋🏻</h1>

  <p className='mb-6'>
    I'm <span className="text-purple-300 font-semibold">Ravi Sharma</span>, a <span className="text-blue-300">frontend-focused full stack web developer</span> with a passion for building sleek, modern interfaces and dynamic digital experiences.
  </p>

  <p className='mb-6'>
    With a <span className="text-pink-400">sharp eye for design</span> and a love for code, I specialize in crafting <span className="text-pink-400">interactive UI/UX</span> that feels alive — from smooth transitions to glowing, animated visuals.
  </p>

  {/* <p className='mb-6'>
    I'm always exploring modern tools like <span className="text-cyan-300">Vite</span>, <span className="text-cyan-300">Framer Motion</span>, and <span className="text-cyan-300">MongoDB/Mongoose</span> to push creative boundaries and improve performance.
  </p> */}

  <p className='mb-6'>
    Whether it’s a personal portfolio or a scalable full-stack application, I enjoy solving real-world problems and transforming ideas into clean, efficient, and impactful code.
  </p>

  <p className='text-purple-200 font-medium'>
    Ready to collaborate? Let’s create something awesome together. ⚡
  </p>
</div>
</div>
       

        {/* skillls */}
<h1 className=' font-bold my-10 text-3xl text-white flex justify-center md:mb-20 '><span className='hidden md:flex mt-4  bg-pink-400 h-0.5 w-200'></span>
        <FaLessThan className='text-violet-700 text-md my-1 px-1.5' />Skills<FaGreaterThan  className='text-violet-700 my-1 px-1.5 text-md'  />
<span className=' hidden md:flex  bg-pink-400 mt-4 pl-0 h-0.5 w-200'></span>

        </h1>   
           
       <div className='text-white'>
       
<div className='grid md:grid-cols-2 md:gap-25'>
  {/* for object we used object.entries */}
  {Object.entries(grouped).map(([category,item])=>(
    // console.log(category),
  <div key={category}>
    <h1 className='font-bold flex justify-center p-4 text-2xl '>{category}  ()</h1>
<div className=' grid grid-cols-3 gap-9 p-6'>
  {item.map((element)=>(<div className='grid  justify-center py-3  px-3 rounded-md bg-[#222E50] ' key={element.id}>
    <img className="flex   h-10" src={element.image} alt={element.name}/>
    <p className=' text-sm '>{element.name}</p>
  </div>))}
  </div> 
  </div>
  ))}
  
</div>

       
       

       </div>
       </div>
       
       
      
  )
}

export default About
