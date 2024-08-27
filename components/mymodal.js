import React from 'react'
import { GiCrossMark } from "react-icons/gi";
import { motion } from 'framer-motion'

const Mymodal = (props) => {
  return (<>
  <button className='flex justify-self-end ml-auto' onClick={()=>{props.clear()}}><GiCrossMark size={50} /></button>
    <motion.div className='backdrop-blur-lg z-50 rounded-lg bg-black opacity-0.5 justify-center' initial={{opacity:0,y:-50}} whileInView={{opacity: 1,y: 0,transition: {duration: 1}}}>
        <motion.div id='playing' className='font-bold text-4xl flex bg-black'>{props.name}</motion.div>
        <div className='bg-black p-2 flex'>
            <motion.div className='imgcard w-max h-max' initial={{opacity:0,x:-50}} whileInView={{opacity: 1,x: 0,transition: {duration: 1}}}><img src={props.img}></img></motion.div>
            <motion.p className='card shadow-md w-fit text-wrap p-2 break-words shadow-red-700' initial={{opacity:0,x:50}} whileInView={{opacity: 1,x: 0,transition: {duration: 1}}}>{props.desc}</motion.p>
        </div>
    </motion.div>
    </>
  )
}

export default Mymodal