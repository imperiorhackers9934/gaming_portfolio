import React from 'react'
import Image from 'next/image'
let mydata2 = require('./wishdata')
import { motion } from 'framer-motion';
import { GiCondorEmblem, GiSkullShield,GiSpinningBlades,GiColtM1911  } from "react-icons/gi";
import Typed from 'typed.js';//USed Typed Js Library
import { useEffect } from 'react';
let mydata = require('./data')
let gotdata=mydata.arr
let myarr=[]
const Homepage = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  useEffect(() => {
    for(let i=0;i<gotdata.length;i++){
      myarr.push(gotdata[i].name)
    }
  },[])
  

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: myarr,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
    <Image src={"/back.jpg"} fill className='z-[-1]' alt='Background'></Image>
    <div id='home' className='stats w-2/3 p-4'>
        <motion.div className='rounded-lg ml-5 mt-4' animate={{x:100}}>
            <img src={"/tanishq.jpg"} className='rounded-full w-1/5'></img>
            <p className='text-4xl font-medium justify-center w-min my-3'>Gamer9936</p>
        </motion.div>
        <motion.div initial={{opacity:0,x:50}} whileInView={{opacity: 1,x: 0,transition: {duration: 1}}} className='cards px-4 flex space-x-8'>
          <motion.div whileHover={{ scale: 1.2 }} className='card1 h-min p-2 outline outline-offset-1 outline-slate-800 hover:bg-slate-200 hover:text-gray-950 hover:font-semibold rounded-md h-auto'>
            <div className='flex justify-center'><GiCondorEmblem size={50} /></div>
            <p className='font-black'>Titles Played</p>
             <p className='flex justify-center font-black'>{mydata.arr.length}</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className='card2 h-min p-2 outline outline-offset-1 outline-slate-800 hover:bg-slate-200 hover:text-gray-950 hover:font-semibold rounded-md h-auto'>
          <div className='flex justify-center'><GiSkullShield  size={50} /></div>
            <p className='font-black'>Wishlist</p>
             <p className='flex justify-center font-black'>{mydata2.arr.length}</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className='card3 h-min p-2 outline outline-offset-1 outline-slate-800 hover:bg-slate-200 hover:text-gray-950 hover:font-semibold rounded-md'>
          <div className='flex justify-center'><GiSpinningBlades  size={50} /></div>
            <p className='font-black'>Player Level</p>
             <p className='flex justify-center font-black'>Rookie</p>
          </motion.div>
        </motion.div>
        <div className='shower my-6'>
          <p className='text-3xl mx-auto flex'>Lets Play&nbsp;<GiColtM1911 size={50}/>&nbsp;<span className='font-bold rounded-lg' ref={el}></span></p>
        </div>
    </div>
    </>
  )
}

export default Homepage