import React,{useEffect,useState} from 'react'
import { motion,AnimatePresence} from 'framer-motion'
import Mymodal from './mymodal'
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'black',
    overflow:'hidden'
  },
};

const Card = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [audio, setaudio] = useState(new Audio('/Audio/button.mp3'))
  useEffect(() => {
    setaudio(new Audio('/Audio/button.mp3'))
  },[])
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    audio.play()
  }
      return (<>
  <motion.div className='shadow-md shadow-red-700 w-1/4 p-2 cursor-pointer' whileHover={{ scale: 1.1 }} onHoverStart={()=>{audio.play()}} onHoverEnd={()=>{audio.pause();audio.currentTime=0}} initial={{opacity:0,y:50}} onClick={()=>{openModal()}} whileInView={{opacity: 1,y: 0,transition: {duration: 1}}}>
        <img src={props.img} className='w-1/2 mx-auto'></img>
        <p className='font-semibold text-3xl mx-auto text-center text-wrap'>{props.name}</p>
    </motion.div>
    <AnimatePresence>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Mymodal
          name={props.name}
          img={props.img}
          desc={props.desc}
          clear={() => {closeModal()}}
        />
        </Modal>
      </AnimatePresence>
    </>)
}

export default Card