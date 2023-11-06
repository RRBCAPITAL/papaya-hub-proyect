import React from 'react'
import { BsInstagram, BsFacebook, BsTelegram, BsTiktok} from 'react-icons/bs'
import { motion } from "framer-motion"
import { fadeIn } from '@/utils/motionTransitions'

const Banner = () => {
  return (
    <motion.div className="mt-10 z-9 flex flex-col  text-white"
    variants={fadeIn("right", 0)} initial='hidden' animate="show" exit="hidden"
    >
        <bannercontainer className=" overflow-hidden w-full mt-10 bg-transparent rounded-xl flex items-center justify-center relative scale-[0.9]"  >
          <textbanner className="z-30 my-10 w-screen leading-0 rounded-[20px] flex flex-col items-center justify-center">
          <h1 className="mx-6 text-[16px] sm:text-3xl text-white text-center">
          <strong className="font-bold font-mono">DICEN QUE LA FELICIDAD NO TIENE PRECIO</strong>
          </h1>
          <h1 className="mx-6 text-[16px] sm:text-3xl text-white text-center">
                 <strong className="font-bold font-mono">PERO PUEDES VENIR A VERNOS.</strong>
          </h1>
          </textbanner>

          <div>
            <img
              src="/assets/bannerfulla.jpg"
              alt="teamdev"
              className=" z-10 absolute top-0 right-0 left-0 
                      m-auto bg-no-repeat object-cover w-full h-full rounded-[20px]"
              
            />
            <div className='absolute z-50 bottom-1 right-2 flex gap-4 text-4xl p-[4px] rounded-[10px] w-fit items-center justify-center'>
              <h1 className='text-sm lg:text-[18px]'>¡Únete a la comunidad!</h1>
              <a target='_blank' href="https://t.me/+582ZqhG3W_g2YzYx" className=""><img src='/assets/logotelegram.png' className='w-4 h-4 sm:w-[25px] sm:h-[25px]  hover:scale-125 transition-all ease-linear duration-300'/></a>
              <a target='_blank' href="https://www.instagram.com/papayahub.pe" className=" text-white"><BsInstagram className='w-4 h-4 sm:w-6 sm:h-6  hover:scale-125 transition-all ease-linear duration-300'/></a>
              {/* <a target='_blank' href="" className="text-white"><BsTiktok className='w-4 h-4 sm:w-6 sm:h-6 hover:scale-125 transition-all ease-linear duration-300'/></a> */}
              

          </div>
             {/* <img
              src="/assets/newbannerpro12.jpg"
              alt="teamdev"
              className=" z-10 absolute top-0 right-0 left-0 
                      m-auto bg-no-repeat scale-[1] sm:scale-[1.2] lg:scale-100 object-cover w-full h-full rounded-[20px]"
              
            /> */}
          </div>
        </bannercontainer>
      </motion.div>
  )
}

export default Banner