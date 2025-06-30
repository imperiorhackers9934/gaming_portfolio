import { motion } from 'framer-motion'
import React, { useState } from 'react'
import ScrollLink from './scrolltolink'

const nav = React.forwardRef((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav ref={ref} className='flex flex-col md:flex-row bg-transparent backdrop-blur-lg font-semibold sticky top-0 py-2 z-10'>
      <div className='flex justify-between items-center'>
        <motion.div 
          whileHover={{ scale: 1.2 }} 
          className='mx-6 text-3xl cursor-pointer'
        >
          Gaming Portfolio
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <button 
          className='md:hidden px-6 py-2' 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Navigation Links - Hidden on mobile until menu is toggled */}
      <ul className={`
        ${isMenuOpen ? 'flex' : 'hidden'} 
        md:flex flex-col md:flex-row text-2xl md:ml-auto 
        w-full md:w-auto transition-all duration-300 ease-in-out
      `}>
        <li className='md:mx-0'>
          <motion.div 
            className='mx-3 my-2 md:my-0 cursor-pointer hover:bg-slate-200 hover:text-gray-950 hover:font-semibold px-2 rounded-md border-solid' 
            whileHover={{ scale: 1.2 }}
          >
            <ScrollLink to="#home" onClick={() => setIsMenuOpen(false)}>Home</ScrollLink>
          </motion.div>
        </li>
        <li className='md:mx-0'>
          <motion.div 
            className='mx-3 my-2 md:my-0 cursor-pointer hover:bg-slate-200 hover:text-gray-950 hover:font-semibold px-2 rounded-md border-solid' 
            whileHover={{ scale: 1.2 }}
          >
            <ScrollLink to="#playing" onClick={() => setIsMenuOpen(false)}>Currently Playing</ScrollLink>
          </motion.div>
        </li>
        <li className='md:mx-0'>
          <motion.div 
            className='mx-3 my-2 md:my-0 cursor-pointer hover:bg-slate-200 hover:text-gray-950 hover:font-semibold px-2 rounded-md border-solid' 
            whileHover={{ scale: 1.2 }}
          >
            <ScrollLink to="#played" onClick={() => setIsMenuOpen(false)}>Titles Played</ScrollLink>
          </motion.div>
        </li>
        <li className='md:mx-0'>
          <motion.div 
            className='mx-3 my-2 md:my-0 cursor-pointer hover:bg-slate-200 hover:text-gray-950 hover:font-semibold px-2 rounded-md border-solid' 
            whileHover={{ scale: 1.2 }}
          >
            <ScrollLink to="#wishlist" onClick={() => setIsMenuOpen(false)}>Wishlist</ScrollLink>
          </motion.div>
        </li>
      </ul>
    </nav>
  )
})

const Navbar = motion(nav, { forwardMotionProps: true })
export default Navbar