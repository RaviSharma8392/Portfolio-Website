import React from 'react'
import { FaLinkedin,FaPhone,FaGithub, FaLessThan, FaGreaterThan } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


const details=[
    {id:1,
        icon:MdOutlineMail
    ,name:"Email",
    values:"sharmaravi8392@gmail.com"

    },
     {id:2,
        icon:FaPhone
    ,name:"Phone",
    values:"+91 8392856993"

    },
     {id:3,
        icon:FaGithub
    ,name:"GitHub",
    values:"RaviSharma8392"

    }
    ,
     {id:4,
        icon:FaLinkedin
    ,name:"LinkdIn",
    values:"Ravi Sharma "

    }
]
const Contact = () => {
  return (
    <div id='contact' className='bg-black pt-2.5 md:pt-40 md:px-20 py-5 px-4 text-white '>
<h1 className=' font-bold flex justify-center text-md bg-gradient-to-r from-pink-400 to-blue-600 bg-clip-text text-transparent'> Get In Touch </h1>  
<h1 className=' font-bold text-3xl pt-2.5 text-white flex justify-center mb-2.5 '>
        <FaLessThan className='text-violet-700 text-md my-1 px-1.5' />Contact Me<span className='text-violet-700 pl-1.5 '>/</span><FaGreaterThan className='text-violet-700 my-1 px-1.5 text-md'  />


       </h1><div>
    <div> 
        <h1 className='flex md:hidden md:pl-0 justify-center font-bold text-2xl'>Let's Discuss Your Project
            
</h1>
 <h1 className=' hidden md:flex  font-bold mt-5 text-2xl'>Let's Discuss Your Project
            
</h1>
<p className='flex text-gray-500 px-3 py-3 flex-wrap text-sm'>I'd love to hear about your project and how I can help. Feel free to reach out through any of the following contact methods or by using the form.</p>
  <div className='grid md:grid-cols-3 grid-cols-1 gap-4.5'>{
    details.map((detail)=>{
        // conver icon to uppercase because react component is uppercase
        const Icon=detail.icon
       
        return(
            <div  className="flex px-5  gap-5 bg-[#340c3b] shadow py-4  rounded-2xl" key={detail.id}>
                
                  <Icon className='text-2xl py-0.5 my-2'/>
                  <span>  <h1>{detail.name}</h1>
                <a href={detail.values}>{detail.values}</a></span>
               
               
          
            </div>
        )
    })
  }</div> 
  </div>
    
    </div> 
    </div>
  )
}

export default Contact
