import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    // fisrt we create state for mousepos
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    // mousemove is broweserevent
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
//   emty array means “Run this once when the component mounts, and clean up when it unmounts

  return (<div>  <motion.div   animate={{
  x: mousePos.x - 20,
  y: mousePos.y - 20,
}}transition={{ type: 'spring', stiffness: 300, damping: 25 }}
className='bg-[#a200ff]
 fixed h-8 w-8 rounded-full shadow   
 z-50 '
      />
</div>
   
  );
};

export default CustomCursor;
