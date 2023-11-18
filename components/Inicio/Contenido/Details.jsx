"use client"

import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import GaleriaIMG from './GaleriaIMG/GaleriaIMG'
import GaleriaVIDEO from './GaleriaVIDEO/GaleriaVIDEO'
import Link from 'next/link'
import { conversorDeHora12 } from './conversorDeHora12'

const Details = ({ id }) => {

    const [anuncio, setAnuncio] = useState()

    // useEffect(() => {
    //     axios.get(`/api/anuncio/${id}`)
    //     .then(res => setAnuncio(res.data))
    //     .catch(err => console.log(err))
    // }, [])

    useEffect(() => {
      const data = localStorage.getItem("anuncioStorage")
      const Anuncios = JSON.parse(data)
      const anuncioFound = Anuncios?.find((a) => a?.id === id)
      if(anuncioFound){
        setAnuncio(anuncioFound)
      }else{
        axios.get(`/api/anuncio/${id}`)
            .then(res => setAnuncio(res.data))
            .catch(err => console.log(err))
      }
    }, [])
    
    const shortID = anuncio?.id?.substring(0, 7);

    console.log(anuncio);

  return (
    <div className='flex'>
        <containerinfo className='flex flex-col gap-4 items-center justify-center bg-dark-l dark:bg-white min-h-screen w-screen'>
           <contain className='flex flex-col gap-2 w-[90%] lg:w-[60%] p-10 mt-[90px] mx-20 bg-dark-d rounded-[10px] dark:bg-white shadow-custom1 '>
            
           <p className='dark:text-slate-500 text-slate-300 text-medium font-think text-[20px]'><strong>ID: {anuncio?.idFrontend}</strong></p>
            
            
            <div className='flex flex-col lg:flex-row gap-6'>
            
            <div className='flex flex-col gap-2'>
            <img src={anuncio?.imagenPrincipal} alt="" className='max-w-[400px] h-fit lg:min-w-[400px] lg:h-fit rounded-[10px] shadow-xl'/>
            
            </div>
            

            <detalles className='flex flex-col gap-6'>
              <info className='flex flex-col gap-4'>
              <h1 className='dark:text-black text-white text-4xl font-extrabold'>{anuncio?.name}</h1>
              <div className='flex flex-col gap-2 dark:text-slate-500 text-slate-300'>
              <h2 className=' text-medium font-think text-[16px]'>{anuncio?.description}</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Edad:</strong> {anuncio?.edad} años</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Nacionalidad:</strong> {anuncio?.nacionalidad}</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Idiomas:</strong>{" "}
              {anuncio?.idioma?.join(", ") || ""}</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Altura:</strong> {anuncio?.altura} cm</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Peso:</strong> {anuncio?.peso} kg</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Tarifa (x hora):</strong> S/{anuncio?.tarifaxhr}</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Tarifa (x media hora):</strong> S/{anuncio?.tarifaxmr}</h2>
              </div>
              </info>

              <contacto className='flex flex-col gap-4'>
              <h1 className='dark:text-black text-white text-xl font-bold'>Información de contacto:</h1>
              <div className='flex flex-col gap-2 dark:text-slate-500 text-slate-300'>
              <h2 className='text-medium font-think text-[16px]'><strong>WhatsApp:</strong> {anuncio?.whatsapp}</h2>
              </div>
              </contacto>

              <adicional className='flex flex-col gap-4'>
              <h1 className='dark:text-black text-white text-xl font-bold'>Detalles adicionales:</h1>
              <div className='flex flex-col gap-2 dark:text-slate-500 text-slate-300'>
              <h2 className='text-medium font-think text-[16px]'><strong>Preferencia de atención:</strong>{" "}
              {anuncio?.atencion?.join(", ") || ""}</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Horario de atención:</strong></h2>
              <h2 className='text-medium font-think text-[16px]'>{anuncio?.diasAtencion} de {anuncio?.horarioInicio} a {anuncio?.horarioFin}</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Región de atención:</strong> {anuncio?.region}</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Distrito de atención:</strong> {anuncio?.lugar}</h2>
              </div>
              </adicional>

              <Link                                                                                
              target="_blank"
          href={`https://api.whatsapp.com/send?phone=+51${anuncio?.whatsapp}&text=Hola %20${anuncio?.name},%20te%20vi%20en%20Papayahub.pe,%20¿en%20qué%20horario%20estás%20disponible%20hoy?`} 
          className="flex gap-2 items-center w-fit justify-center bg-green-500 text-white px-6 py-2 rounded-[10px] ease-linear duration-200 transition-all hover:bg-green-600">
              <img width="28" height="28" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" className='my-auto'/>
              <nav className='text-[16px] font-bold my-auto'>WhatsApp</nav>
          </Link>
  
            </detalles>

            </div>

           </contain>

          <GaleriaIMG galeriaIMG={anuncio?.galeriaFotos} />
          <GaleriaVIDEO galeriaVIDEO={anuncio?.galeriaVideos} />

        </containerinfo>

    </div>
  )
}

export default Details