"use client"

import Link from 'next/link'
import React from 'react'

const ReportPage = () => {
  return (
    
  <>
  <div className='flex'>
        <containreportar className='z-10 flex flex-col gap-1 h-screen items-center justify-center w-screen relative'>
        
        <containcuadrito className='flex flex-col gap-4 p-10 w-[95%] lg:w-[30%] rounded-lg bg-dark-d dark:bg-white shadow-custom1'>
        <div className='flex flex-col gap-2 items-center justify-center text-white dark:text-black'>
        <h1 className='font-bold text-2xl sm:text-[30px] border-b-4 border-bor-red text-white dark:text-black'><strong className='text-t-red '>PapayaHub</strong> - Reporte</h1>
        <p className='mt-2 text-sm sm:text-normal text-center'>Lamentamos que haya pasado por esta experiencia. 😟​😭​</p>
        <p className='text-center text-[12px] sm:text-sm'>
En PapayaHub nos esmeramos por brindarte el mejor servicio y darte lo mejor de lo mejor, con tu reporte nos ayudarás muchísimo, se verificara tu reporte y de inmediato el perfil será eliminado.</p>
        </div>


        <Link target='_blank' href={'https://docs.google.com/forms/d/e/1FAIpQLSeCw-3Bf8SENzUapB-Kr6UIqks7jnrawUhcTH1x77jxuS0q8Q/viewform'} className='z-10 p-4 rounded-lg bg-back-red hover:bg-[#ff9b49] border-2 border-[#fff]  text-center font-bold text-xl'>Reportar</Link>
  
        </containcuadrito>

        </containreportar>
        
    </div>
    <img
    src="/assets/bannerfulla.jpg"
    alt=""
    className="fixed z-0 top-0 left-0 w-screen h-screen object-cover object-right"
  />
  </>
  )
}

export default ReportPage