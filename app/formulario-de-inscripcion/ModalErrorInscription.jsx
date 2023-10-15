"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const ModalErrorInscription = ({ showActive, modalIsOpenErr, onCloseErr }) => {

    if(!modalIsOpenErr) return

    useEffect(() => {
      showActive(true);
    }, []);
  
    const handleClose = () => {
      showActive(false) // Cambia show a false primero
      onCloseErr();      // Luego cierra el modal
    };
  
    
    return (
        <div className="z-100 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex mt-[60px] sm:mt-[0px] justify-center items-center">
            <div className="flex flex-col h-[500px]">
                    
                <div className="mt-1 w-[340px] mx-auto sm:w-[280px] shadow-lg bg-[#771c34] h-[310px] py-[10px] sm:py-4 px-4 flex flex-col justify-center my-auto items-center">
                <button className="mr-2 mb-2 font-extrabold text-xl text-white place-self-end hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease" onClick={handleClose}>X</button>
                <div className=" p-2 text-white rounded font-bold">
                    <h1 className="text-center text-2xl sm:text-3xl font-bold">¡Inscripción incorrecta! 🥺</h1>
                    {/* <h6 className="text-center font-extralight mt-2">✅La información de tu inscripción estará en tu panel de usuario.</h6> */}
                    <p className="text-center font-extralight mt-2">❌Tienes errores en los campos del formulario.</p>
                </div>
                <botones className='flex flex-col gap-1 m-4'>
                <button onClick={handleClose} className="p-2 text-center bg-red-500 rounded-md text-white font-bold text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease">Corregir errores</button>
                <Link href={'/'} className="p-2 text-center bg-back-dark rounded-md text-white font-bold text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease">Inscribirme luego</Link>
                    
                </botones>
                </div>

                
                
                
            </div>
        </div>
        )
}

export default ModalErrorInscription;