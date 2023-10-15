"use client"

import { useUser } from "@clerk/nextjs";
import FormularioDeUnion from "./FormularioDeUnion";
import { useState } from "react";
import { useRouter } from "next/navigation";


const UnitedTeam = () => {

    const user = useUser();
    const [show, setShow] = useState(false)
    const router = useRouter()

    const showActive = (estado) => setShow(estado)
    
    if(!user?.user) return router.push('/sign-in')

  return (
    <div className="z-10 min-h-screen w-screen flex sm:flex-row shadow-md flex-col">
        <div className="relative  h-full sm:min-h-screen w-full sm:w-[40%] flex flex-col text-white  bg-[#26074e]">
            <div className={`${ show ? "" : "z-10"}`}>
                <h1 className="font-bold text-4xl mt-32 mb-2 mx-10 ">Hola, {user?.user?.fullName}</h1>
                <p className="text-[16px] mb-10 font-light mx-10">Completa tu formulario de inscripción y ayúdanos a formar el equipo ideal para ti.</p>
            </div>
            <img src="/assets/team.png" alt="team" className={`${ show ? "" : "z-10"} mb-20`} />

            <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015214/guia1_wz1h7k.jpg" alt="teamdev" className=" z-1 absolute top-0 right-0 left-0 
                      m-auto bg-no-repeat object-left object-cover w-full h-full"/>

        </div>
        
        <FormularioDeUnion showActive={showActive}/>
    </div>
  )
}

export default UnitedTeam;