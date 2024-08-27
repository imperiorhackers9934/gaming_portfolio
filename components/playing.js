import React from 'react'
import { motion } from 'framer-motion'
const Playing = (props) => {
  return (<>
    <motion.div id='playing' className='font-bold text-2xl bg-black'>Currently Playing</motion.div>
    <div className='bg-black w-fit h-64 p-2 flex'>
        <motion.div className='imgcard mx-2 w-full' initial={{opacity:0,x:-50}} whileInView={{opacity: 1,x: 0,transition: {duration: 1}}}><img src={props.img}></img></motion.div>
        <motion.div className='card shadow-md text-wrap shadow-red-700' initial={{opacity:0,x:50}} whileInView={{opacity: 1,x: 0,transition: {duration: 1}}}>{props.desc}</motion.div>
    </div>
    </>
  )
}

export default Playing