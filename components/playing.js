import React from 'react'
import { motion } from 'framer-motion'

const Playing = (props) => {
  return (<>
    <motion.div id='playing' className='font-bold text-2xl bg-black'>Currently Playing</motion.div>
    <div className='bg-black w-full sm:w-fit min-h-64 p-2 flex flex-col sm:flex-row'>
      <motion.div 
        className='imgcard mx-2 w-full sm:w-auto mb-4 sm:mb-0' 
        initial={{opacity:0, x:{sm:-50}}} 
        whileInView={{opacity: 1, x: 0, transition: {duration: 1}}}
      >
        <img src={props.img} alt="Currently playing game" className="max-h-64 md:max-w-xs mx-auto sm:mx-0"></img>
      </motion.div>
      <motion.div 
        className='card shadow-md text-wrap shadow-red-700' 
        initial={{opacity:0, x:{sm:50}}} 
        whileInView={{opacity: 1, x: 0, transition: {duration: 1}}}
      >
        {props.desc}
      </motion.div>
    </div>
  </>)
}

export default Playing