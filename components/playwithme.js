import React from 'react'
import { motion } from 'framer-motion'
import { BsEnvelopeArrowDownFill } from "react-icons/bs";
import Link from 'next/link'
const Multiplayer = () => {
  return (
    <motion.div className='w-full h-fit bg-black justify-center p-10 border border-red-500'>
        <motion.p className='font-semibold text-white my-3 text-2xl flex'> To Play with me Contact to &nbsp;<BsEnvelopeArrowDownFill size={25} className='my-auto'/></motion.p>
        <Link href={'mailto:2k23.cs2313608@gmail.com?subject=Lets Play Some Games Together Bro&body=Hi My Name is [Your Name] I Want to Play [Game Name] with you bro my Gaming id is [Your Game id]'} target='_blank' className='font-bold text-black bg-slate-200 p-2 rounded'>2k23.cs2313608@gmail.com</Link>
    </motion.div>
  )
}

export default Multiplayer