"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";
import { TbFilterStar } from "react-icons/tb";
import ModalFilter from "../ModalFilter";

import { motion } from "framer-motion";
import { changeIn } from "@/utils/motionTransitions";

import { categoriasNameIcon } from "@/Data/data";

import "./styles.css"

import { Poppins } from "next/font/google";

const quick = Poppins({ subsets: ['latin'], weight: "400" })

const Filtros = ({
  setCategoria,
  setTextSearch,
  setModalFilterOpen,
  setSelectedNacionalidad,
  setSelectedRegion,
  setSelectedLugar,
  setSelectedIdioma,
}) => {

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  const [active, setActive] = useState(false);

  const [nombreid, setNombreid] = useState();

  const handleSearch = (e) => {
    const { value } = e.target;
    console.log(value);
    setNombreid(value);
  };

  const handleClickSearch = (e) => {
    e.preventDefault();
    setTextSearch(nombreid);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      // Si se presiona la tecla Enter, ejecuta la búsqueda
      handleClickSearch();
    }
  };

  const handleReset = () => {
    setNombreid("");
    setTextSearch(nombreid),
      setSelectedNacionalidad(""),
      setSelectedIdioma(""),
      setSelectedLugar(""),
      setSelectedRegion("");
    setCategoria("");
  };

  const l = categoriasNameIcon?.length

  console.log(nombreid);

  return (
    <div className={quick.className}>
      <motion.div
        variants={changeIn(0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="z-[999] flex sm:flex-row flex-col gap-4 p-2  text-black bg-white  fixed rounded-[20px]"
      >
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

        <bannercontainer className=" overflow-hidden w-full mt-24 bg-transparent flex  items-center justify-center relative bg-white ">
          <iconos className="z-30 w-screen flex flex-col lg:flex-row items-center justify-center">

      <div
        className="filter-div"
      >
        {categoriasNameIcon.map((i, index) => (
          <div
            key={index}
            onClick={() => {
              setCategoria(i?.name);
              setActive(i?.name);
            }}
            className={`links-box ${ active === i?.name && "selected-box"}`}
          >
            <img
              src={i.path}
              alt={i.name}
              width={35}
              height={35}
              className="links-img"
            />
            <h1 className={`links-label ${ active === i?.name && "selected-label"}`}>{i.name}</h1>
          </div>
        ))}
      </div>


      
      

            <div className="z-30 w-[20%] flex justify-center gap-2">
            {/* <button
              className="flex gap-2 my-auto text-sm font-light px-2 py-4 text-slate-400 border-2 border-slate-400 transition-all ease-linear duration-300 rounded-[10px]"
              onClick={() => setModalFilterOpen(true)}
            >
              <nav className="my-auto text-sm lg:text-sm font-extrabold">
                Filtros
              </nav>
              <TbFilterStar className="my-auto text-slate-400" />
            </button> */}

            {/* <button
              className="flex gap-1 my-auto text-sm font-light px-2 py-4 text-slate-400 border-2 border-slate-400 transition-all ease-linear duration-300 rounded-[10px]"
              onClick={handleReset}
            >
              <nav className="my-auto text-sm lg:text-sm font-extrabold">
                Todo
              </nav>
              <TbFilterStar className="my-auto" />
            </button> */}
            </div>
      
          </iconos>
        </bannercontainer>
      </motion.div>
    </div>
  );
};

export default Filtros;
