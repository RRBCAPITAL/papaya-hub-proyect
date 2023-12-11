"use client"

import { useEffect } from 'react'
import { useState } from 'react'
import { TbFilterStar } from 'react-icons/tb'
import ModalFilter from '../ModalFilter'

import { motion } from "framer-motion"
import { changeIn } from '@/utils/motionTransitions'

import { Quicksand } from 'next/font/google'

const quick = Quicksand({ subsets: ['latin'] })


const Filtros = ({ setTextSearch, setModalFilterOpen, setSelectedNacionalidad, setSelectedRegion, setSelectedLugar, setSelectedIdioma }) => {


const [nombreid, setNombreid] = useState()

  const handleSearch = (e) => {

    const { value } = e.target
    console.log(value);
    setNombreid(value)
  }

  const handleClickSearch = (e) => {
    e.preventDefault()
    setTextSearch(nombreid)
  }
  
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      // Si se presiona la tecla Enter, ejecuta la búsqueda
      handleClickSearch();
    }
  };

  const handleReset = () => {
    setNombreid('')
    setTextSearch(nombreid),
    setSelectedNacionalidad(''),
    setSelectedIdioma(''),
    setSelectedLugar(''),
    setSelectedRegion('')
  
  }


  console.log(nombreid);

  return (
    <div className={quick.className}>
      <motion.div 
    variants={changeIn(0.3)} initial='hidden' animate="show" exit="hidden"
    className='z-1 flex sm:flex-row flex-col gap-4 p-2  text-black bg-dark-d dark:bg-[#fff7e3] shadow-2xl rounded-[20px] scale-[0.9] lg:scale-[0.7]'>
        {/* <form action="" onSubmit={handleClickSearch} onKeyUp={handleKeyUp} className='lg:h-[80px] flex sm:flex-row flex-col w-full items-center justify-center gap-2 sm:gap-6'>
          <input type="text" name="nombreid" value={nombreid} onChange={handleSearch} className='w-full lg:w-[50%] sm:h-[70px] lg:h-[70px] my-auto outline-none text-sm sm:text-xl shadow-xl  p-4 rounded-[10px] placeholder:text-[#818181] placeholder:font-medium' placeholder='Busca por id, nombre o ciudad' />
          
          <div className='flex flex-col lg:flex-row gap-1 items-center justify-center'>
       <div className='flex gap-1 items-center justify-center'>
       <button
          type='submit'
          className='flex gap-2 my-auto text-xl font-bold p-4 bg-back-red hover:bg-[#ff894a] transition-all ease-linear duration-300 rounded-[10px]'
          
          >
            <nav className='my-auto text-sm lg:text-xl font-extrabold text-white'>Buscar</nav>
            <TbFilterStar className='my-auto text-white'/>
        </button>
        <button className='flex gap-2 my-auto text-xl font-bold p-4 bg-slate-600 hover:bg-slate-700 transition-all ease-linear duration-300 rounded-[10px]' onClick={() => setModalFilterOpen(true)}>
            <nav className='my-auto text-sm lg:text-xl font-extrabold text-white'>Filtrar</nav>
            <TbFilterStar className='my-auto text-white'/>
        </button>
       </div>

        <button className='flex gap-2 my-auto text-xl font-bold p-4 bg-[#542eff] hover:bg-[#3f01aa] transition-all ease-linear duration-300 rounded-[10px]' onClick={handleReset}>
            <nav className='my-auto text-sm lg:text-xl font-extrabold text-white'>Ver todas las chicas</nav>
            <TbFilterStar className='my-auto text-white'/>
        </button>
        </div>
          
        </form> */}
  
    </motion.div>
    </div>
  )
}

export default Filtros