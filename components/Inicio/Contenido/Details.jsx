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
    const [tarifaPresencial, setTarifaPresencial] = useState()
    const [tarifaVirtual, setTarifaVirtual] = useState()

    // useEffect(() => {
    //     axios.get(`/api/anuncio/${id}`)
    //     .then(res => setAnuncio(res.data))
    //     .catch(err => console.log(err))
    // }, [])

    const idioma = []
    anuncio?.idioma?.map((i) => (
        i === "Español" ? idioma.push("ES") : i === "Inglés" ? idioma.push("EN") : i === "Portugués" ? idioma.push("PT") : ""
    ))

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

    useEffect(() => {
      if(anuncio?.tarifaPresencial){
        const tarifaPresencial = JSON.parse(anuncio?.tarifaPresencial);
        console.log(tarifaPresencial);
        setTarifaPresencial(tarifaPresencial)
      }
      if(anuncio?.tarifaVirtual){
        const tarifaVirtual = JSON.parse(anuncio?.tarifaVirtual);
        console.log(tarifaVirtual);
        setTarifaVirtual(tarifaVirtual)
      }
      
    }, [anuncio?.tarifaVirtual, anuncio?.tarifaPresencial])

  return (
    <div className='flex'>
        <containerinfo className='flex flex-col gap-4 items-center justify-center bg-dark-l dark:bg-[#edeced] min-h-screen w-screen'>
           <contain className='flex flex-col gap-2 w-[90%] lg:w-[90%] 2xl:w-[1170px] p-10 mt-[90px] mx-20 bg-dark-d rounded-[10px] dark:bg-white shadow-2xl '>
            
           <p className='dark:text-slate-500 text-slate-300 text-medium font-think text-[20px]'><strong>ID: {anuncio?.idFrontend}</strong></p>
            
            
            <div className='flex flex-col lg:flex-row gap-6'>
            
            <div className='flex flex-col gap-2'>
            <img src={anuncio?.imagenPrincipal} alt="" className='max-w-[400px] h-fit lg:min-w-[400px] border-4 border-bor-red lg:h-fit rounded-[10px] shadow-xl'/>
            
            <div className='flex gap-4 w-full items-center justify-center sm:w-[50%] lg:w-full'>
            <Link                                                                                
              target="_blank"
          href={`https://api.whatsapp.com/send?phone=+51${anuncio?.whatsapp}&text=Hola %20${anuncio?.name},%20te%20vi%20en%20Papayahub.pe,%20¿en%20qué%20horario%20estás%20disponible%20hoy?`} 
          className="flex gap-2 items-center w-fit justify-center bg-blue-500 text-white px-6 py-2 rounded-[10px] ease-linear duration-200 transition-all hover:bg-blue-600">
             <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png" alt="phone" className='w-[18px] h-[18px] sm:w-[28px] sm:h-[28px]'/>
              <nav className='text-[12px] sm:text-[16px] font-bold my-auto'>Teléfono</nav>
          </Link>
          <Link                                                                                
              target="_blank"
          href={`https://api.whatsapp.com/send?phone=+51${anuncio?.whatsapp}&text=Hola %20${anuncio?.name},%20te%20vi%20en%20Papayahub.pe,%20¿en%20qué%20horario%20estás%20disponible%20hoy?`} 
          className="flex gap-2 items-center w-fit justify-center bg-green-500 text-white px-6 py-2 rounded-[10px] ease-linear duration-200 transition-all hover:bg-green-600">
              <img width="28" height="28" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" className='my-auto w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]'/>
              <nav className='text-[12px] sm:text-[16px] font-bold my-auto'>WhatsApp</nav>
          </Link>
            </div>
            </div>
            

            <detalles className='flex flex-col gap-6'>
              <info className='flex flex-col gap-4'>
              <infodetails className='flex flex-col lg:flex-row gap-2 dark:text-slate-700 text-white'>
              <h1 className=' text-4xl font-extrabold'>{anuncio?.name}</h1>
              
              <div className='text-[12px] sm:text-sm grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-none overflow-hidden 2xl:flex gap-2'>
              <h2 className='rounded-[10px] bg-back-red my-auto px-2 py-1 text-center'>{anuncio?.nacionalidad}</h2>
              <h2 className='rounded-[10px] bg-back-red my-auto px-2 py-1 text-center'>{anuncio?.edad} años</h2>
              <h2 className='rounded-[10px] bg-back-red my-auto px-2 py-1 text-center'>{anuncio?.altura} cm</h2>
              <h2 className='rounded-[10px] bg-back-red my-auto px-2 py-1 text-center'>{anuncio?.peso} kg</h2>
              {/* <h2 className='rounded-[10px] bg-back-red my-auto px-2 py-1 text-center'>Idioma: <nav className='inline-block'>{" "}{idioma?.join(", ") || ""}</nav></h2> */}
              <h2 className='rounded-[10px] bg-back-red my-auto px-2 py-1 text-center'>ID: {anuncio?.idFrontend}</h2>
              </div>
                 
              </infodetails>
              <infodescription className='flex flex-col gap-2 dark:text-slate-500 text-slate-300 w-full'>
              <h2 className=' text-medium font-think text-[16px] text-justify' style={{ whiteSpace: "pre-line" }}>{anuncio?.description}</h2>
              <h2 className='text-medium font-think text-[16px] text-red-500 font-bold'>No olvides mencionar que me viste en Papayahub.</h2>
             
              </infodescription>
              </info>

              <tarifas className='flex flex-col gap-4'>
              {
  ( tarifaPresencial || tarifaVirtual ) && (
    <tarifas className='flex flex-row gap-4'>
      {/* <h1 className='dark:text-black text-white text-xl font-bold'>Tarifas presencial:</h1> */}
      
      <div className='flex flex-col gap-2 dark:text-slate-500 text-slate-300'>
        <h2 className='text-medium font-think text-[16px]'>
          <strong>Tarifa Presencial:</strong> {" "}
          {tarifaPresencial?.filter(tarifa => tarifa.value !== undefined && tarifa.value !== "")
            ?.map(tarifa => `${tarifa.name} minutos - S/${tarifa.value}`)
            ?.join(", ") || "No especificado"}
        </h2>
      </div>

      <div className='flex flex-col gap-2 dark:text-slate-500 text-slate-300'>
        <h2 className='text-medium font-think text-[16px]'>
          <strong>Tarifa Virtual:</strong> {" "}
          {tarifaVirtual?.filter(tarifa => tarifa.value !== undefined && tarifa.value !== "")
            ?.map(tarifa => `${tarifa.name} minutos - S/${tarifa.value}`)
            ?.join(", ") || "No especificado"}
        </h2>
      </div>
    </tarifas>
  )
}

               </tarifas>

              <contacto className='flex flex-col gap-4'>
              <h1 className='dark:text-black text-white text-xl font-bold'>Información de contacto:</h1>
              <div className='flex flex-col gap-2 dark:text-slate-500 text-slate-300'>
              <h2 className='text-medium font-think text-[16px]'><strong>WhatsApp:</strong> {anuncio?.whatsapp}</h2>
              </div>
              </contacto>

              <adicional className='flex flex-col gap-4'>
              <h1 className='dark:text-black text-white text-xl font-bold'>Detalles adicionales:</h1>
              <div className='flex flex-col gap-2 dark:text-slate-500 text-slate-300'>
              <h2 className='text-medium font-think text-[16px]'><strong>Categorias de atención:</strong>{" "}
              {anuncio?.categorias?.join(", ") || ""}</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Preferencia de atención:</strong>{" "}
              {anuncio?.atencion?.join(", ") || ""}</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Horario de atención:</strong></h2>
              <h2 className='text-medium font-think text-[16px]'>{anuncio?.diasAtencion} de {anuncio?.horarioInicio} a {anuncio?.horarioFin}</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Región de atención:</strong> {anuncio?.region}</h2>
              <h2 className='text-medium font-think text-[16px]'><strong>Distrito de atención:</strong> {anuncio?.lugar}</h2>
              </div>
              </adicional>

              
  
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