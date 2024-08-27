import { motion } from 'framer-motion'
import React from 'react'

const nav = React.forwardRef((props,ref) => {
  return (
    <nav ref={ref} className='flex bg-transparent backdrop-blur-lg font-semibold sticky top-0 py-2 z-10'>
        <motion.div whileHover={{ scale: 1.2 }} className='mx-6 text-3xl cursor-pointer'>Gaming Portfolio</motion.div>
    <ul className='text-2xl flex md:ml-auto'>
        <li><motion.div className='mx-3 cursor-pointer hover:bg-slate-200 hover:text-gray-950 hover:font-semibold px-2 rounded-md border-solid' whileHover={{ scale: 1.2 }} onClick={() =>
          window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
          })
        }>Home</motion.div></li>
        <li><motion.div className='mx-3 cursor-pointer hover:bg-slate-200 hover:text-gray-950 hover:font-semibold px-2 rounded-md border-solid' whileHover={{ scale: 1.2 }} onClick={() =>
          window.scrollTo({
            left: 0,
            top: 450,
            behavior: 'smooth',
          })
        }>Currently Playing</motion.div></li>
        <li><motion.div className='mx-3 cursor-pointer hover:bg-slate-200 hover:text-gray-950 hover:font-semibold px-2 rounded-md border-solid' whileHover={{ scale: 1.2 }} onClick={() =>
          window.scrollTo({
            left: 0,
            top: 750,
            behavior: 'smooth',
          })
        }>Titles Played</motion.div></li>
        <li><motion.div className='mx-3 cursor-pointer hover:bg-slate-200 hover:text-gray-950 hover:font-semibold px-2 rounded-md border-solid' whileHover={{ scale: 1.2 }} onClick={() =>
          window.scrollTo({
            left: 0,
            top: 2950,
            behavior: 'smooth',
          })
        }>Wishlist</motion.div></li>
    </ul>
    </nav>
  )
})
const Navbar=motion(nav,{ forwardMotionProps: true })
export default Navbar