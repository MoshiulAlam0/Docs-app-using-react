"use client"
import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"



const Card = ({ info, refrence }) => {  // object theke info ke  destructuring kore nici 
  const setZIndexPlus = (e, ) =>{
    console.log(e.target.style.zIndex = 999);
  }
  const setZIndexMinas = (e) =>{
    console.log(e.target.style.zIndex = 0);
  }



  return (
    <motion.div
    onChange={setZIndexPlus}
    onMouseLeave={setZIndexMinas}
      drag
      dragConstraints={refrence}
      dragTransition={
        {
          bounceStiffness: 600,
          bounceDamping: 80,
        }
      }
      whileDrag={{ scale: 1.02, transition: 3}}
      id='card'
      className='relative rounded-[5vmin] bg-[#000000bb] text-white/85 backdrop:blur-12 overflow-hidden'>

      <div className='w-full h-full flex flex-col justify-between px-[2vmin] py-[4vmin]' >
        <div className="">
          <FaFileLines />
          <p className=' pt-[2vmin] text-[2.4vmin] font-[500]'>{info.dosc}</p>
        </div>

        <div className="flex items-center justify-between pb-[2.4vmin]">
          <p className='text-[2.4vmin]' >{info.fileSize}</p>
          <p className='cursor-pointer p-[.8vmin] text-[2.2vmin] bg-[#a3a3a3]  rounded-full hover:bg-zinc-800 hover:text-white/40 transition'>
            {info.isCloseIcon ? <RiDownloadCloud2Fill /> : <IoCloseSharp />}
          </p>
        </div>
      </div>
      {info.isBottom ? <div id='bottom' className={`flex item-center justify-center absolute bottom-0 w-full py-[1vmin]`} style={{ backgroundColor: `${info.bottomColor}` }}>
        <p className='text-zinc-800 font-[560] text-[2.6vmin]'>{info.bottomText}</p>
      </div> : null
      }

    </motion.div>
  )
}

export default Card
