"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosSave } from 'react-icons/io'
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { updateUser } from "./UpdateUser";
import { validation } from "./validation";
import ModalConfirmPay from "./ModalConfirmPay";
import ModalErrorInscription from "./ModalErrorInscription";

const FormularioDeUnion = ({ showActive }) => {

  const user = useUser()
  const [allUsers, setAllUsers] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenErr, setModalIsOpenErr] = useState(false);

  console.log(user?.user)

    const [selectedDeveloper, setSelectedDeveloper] = useState({
        enfoque: "",
        stackTechs: "",
        description: "",
        phone: ""
    });

    const [error, setError] = useState({})

    const handleFrontClick = () => {
        setSelectedDeveloper(prev => {
            return {
                ...prev,
                enfoque: "Frontend Developer"
            }
        });

        setError(prev => {
          return {
            ...prev,
            enfoque: validation({...prev, enfoque: "Frontend Developer"})["enfoque"]
          }
        })
      };
  
    const handleBackClick = () => {
      setSelectedDeveloper(prev => {
        return {
            ...prev,
            enfoque: "Backend Developer"
        }
    });

    setError(prev => {
      return {
        ...prev,
        enfoque: validation({...prev, enfoque: "Backend Developer"})["enfoque"]
      }
    })
    };

    const handleFullClick = () => {
      setSelectedDeveloper(prev => {
        return {
            ...prev,
            enfoque: "FullStack Developer"
        }
    });
    setError(prev => {
      return {
        ...prev,
        enfoque: validation({...prev, enfoque: "FullStack Developer"})["enfoque"]
      }
    })
    };
  
    useEffect(() => {
      axios.get('api/user')
      .then(data => setAllUsers(data?.data))
      .catch(err => console.log(err))
    }, [])
    
    console.log(allUsers);
    console.log(selectedDeveloper);

    const currentUser = allUsers?.find(u => u?.clerkId === user?.user?.id)

    console.log(currentUser);
    
    const handleTech = (e) => {
        e.preventDefault()

       const { name, value } = e.target

       console.log(value);

       setSelectedDeveloper(prev => {
        return {
            ...prev,
            [name]: value
        }
    });

    setError(prev => {
      return {
        ...prev,
        [name]: validation({...prev, [name]: value})[name]
      }
    })
    }
    
    const handleSaveInfo = () => {

      console.log(currentUser?.id);
      if(error?.enfoque || error?.stackTechs || error?.description || error?.phone){
        openModalErr();
        return   
      }

      updateUser(currentUser?.id, selectedDeveloper);
      openModal();
      
    }

    useEffect(() => {
      setError(validation(selectedDeveloper))
    }, [selectedDeveloper])

    const openModal = () => {
      setModalIsOpen(true);
    };
    
    const closeModal = () => {
      setModalIsOpen(false);
    };

    const openModalErr = () => {
      setModalIsOpenErr(true);
    };
    
    const closeModalErr = () => {
      setModalIsOpenErr(false);
    };
    
    
  return (
    <div className=" w-full sm:min-h-screen flex flex-col gap-[10px] px-8 bg-back-dark dark:bg-white text-black py-10 sm:pt-20 ">
      <div className="flex flex-col text-white gap-2">
        <h6 className="text-t-light font-bold">Mr Developer Program</h6>
        <h1 className="text-center text-[24px] text-white font-bold bg-[#421c77] p-2 w-full">Formulario de inscripción</h1>
      </div>
     <section className="grid sm:grid-cols-2 gap-6">

     <div className="mt-2">
        <div className="">
          <h1 className="font-bold text-xl sm:w-full text-white dark:text-t-dark">1. Quiero unirme a un equipo como:</h1>
        </div>
        <section className="flex gap-2">
        <div
        className={`${
          selectedDeveloper.enfoque === "Frontend Developer"
            ? "text-[15px] mt-4 rounded-md p-[12px] bg-[#ff5f1f] text-white border-none outline-none font-bold cursor-pointer scale-[1.05] active:scale-[0.95] transition-all ease"
            : "text-[15px] mt-4 rounded-md p-[12px] bg-[#421c77] text-white border-none outline-none font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease"
        }`}
        onClick={handleFrontClick}
      >
        <h1 className="text-center">Frontend Developer</h1>
      </div>
      <div
        className={`${
          selectedDeveloper.enfoque === "Backend Developer"
            ? "text-[15px] text-center mt-4 rounded-md p-[12px] bg-[#ff5f1f] text-white border-none outline-none font-bold cursor-pointer scale-[1.05] active:scale-[0.95] transition-all ease"
            : "text-[15px] text-center mt-4 rounded-md p-[12px] bg-[#421c77] text-white border-none outline-none font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease"
        }`}
        onClick={handleBackClick}
      >
        Backend Developer
      </div>
      <div
        className={`${
          selectedDeveloper.enfoque === "FullStack Developer"
            ? "text-[15px] text-center mt-4 rounded-md p-[12px] bg-[#ff5f1f] text-white border-none outline-none font-bold cursor-pointer scale-[1.05] active:scale-[0.95] transition-all ease"
            : "text-[15px] text-center mt-4 rounded-md p-[12px] bg-[#421c77] text-white border-none outline-none font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease"
        }`}
        onClick={handleFullClick}
      >
        FullStack Developer
      </div>
        </section>
        { error?.enfoque && <p className="text-red-500">{error?.enfoque}</p>}
      </div>

      <div className="mt-2">
        <div>
          <h1 className="font-bold text-xl sm:w-full text-white dark:text-t-dark">2. Escribe las tecnologías que más domines:</h1>
        </div>
            <input onChange={handleTech} name="stackTechs" type="text" placeholder="React, Node.js, MongoDB, etc." className="p-[10px] rounded-md w-full mt-4 outline-none dark:border-2 dark:border-slate-300"/>
            { error?.stackTechs ? <p className="text-red-500">{error?.stackTechs}</p> : ""}
      </div>

      <div>
        <div>
          <h1 className="font-bold text-xl sm:w-full text-white dark:text-t-dark">3. ¿Por qué te gustaría unirte a un equipo?</h1>
        </div>
            <input onChange={handleTech} name="description" type="text" placeholder="Porque quiero colaborar en proyectos." className="p-[10px] rounded-md w-full mt-4 outline-none dark:border-2 dark:border-slate-300"/>
            { error?.description ? <p className="text-red-500">{error?.description}</p> : <p></p>}
      </div>

      <div>
        <div>
          <h1 className="font-bold text-xl sm:w-full text-white dark:text-t-dark">4. Proporciona tu número de WhatsApp.</h1>
        </div>
            <input onChange={handleTech} name="phone" type="text" placeholder="+51 920334932" className="p-[10px] rounded-md w-full sm:w-[35%] mt-4 outline-none dark:border-2 dark:border-slate-300"/>
            { error?.phone ? <p className="text-red-500">{error?.phone}</p> : ""}
      </div>

     </section>
     <div className="" >
        <div className="">
          <h1 className="font-bold text-xl sm:w-full text-white dark:text-t-dark text-center border-b-2 border-blue-500 p-2">Requisitos para acceder al programa:</h1>
        </div>
        <div className="flex flex-col">
                <div className=" mt-4 text-sm text-white grid grid-col-1 gap-2 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {/* <div className="w-[180px] p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="">Una computadora</h1>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015212/computadora_iqmaqd.png' width={100} height={100} className="w-8 h-8"/>
                    </div>
                    <div className="w-[180px] p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="">Conexión a internet</h1>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449317/wifi_nwbxxz.png' width={100} height={100} className="w-8 h-8"/>
                    </div> */}
                    <div className="w-full p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="dark:text-black">Dominar las bases de HTML, CSS y JS</h1>
                        
                        <div className="flex gap-2 mt-2">
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694014505/html_yrpan6.png' width={100} height={100} className="w-6 h-6"/>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015212/css-3_l3typy.png' width={100} height={100} className="w-6 h-6"/>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015214/js_wwjeau.png' width={100} height={100} className="w-6 h-6"/>
                        </div>
                    </div>
                  
                    {/* <div className="w-[180px] p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="">Creación de rutas</h1>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015218/ruta_xn0p2t.png' width={100} height={100} className="w-8 h-8 bg-white rounded-md p-1"/>
                    </div>
                    <div className="w-[180px] p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="">Peticiones HTTP</h1>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015206/api_xldvyr.png' width={100} height={100} className="w-8 h-8"/>
                    </div> */}
                    <div className="w-full p-2 border-2 border-blue-500 rounded-lg flex flex-col gap-2 items-center">
                        <h1 className="dark:text-black">Dominar un framework Front o Back</h1>
                        <frameworks className = "flex gap-1">
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449317/vue_uoymzn.png' width={100} height={100} className="w-6 h-6"/>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449316/svelte_tuc5a0.png' width={100} height={100} className="w-6 h-6"/>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015206/angular_tj4qx6.png' width={100} height={100} className="w-6 h-6"/>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015218/react_irujcy.png' width={100} height={100} className="w-6 h-6"/>
                        </frameworks>
                    </div>
                    <div className="w-full p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="dark:text-black">Alta disponibilidad y motivación</h1>
                        <div className="flex gap-2 mt-2">
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015213/disponibilidad_cqztn0.png' width={100} height={100} className="w-6 h-6"/>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449317/valor2_yhpzya.png' width={100} height={100} className="w-6 h-6"/>
                        </div>
                    </div>
                    </div>
                 
    
                    {/* <button className="border-b-4 text-t-light text-sm border-bor-light">Descargar programa</button> */}
     
            </div>
      </div>
                        <button onClick={handleSaveInfo} className="flex sm:gap-1 mx-auto items-center justify-center px-6 py-4 w-[96%] rounded-md mt-4 text-white font-bold text-xl bg-back-light cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease">
                            <nav>Inscribirme al programa</nav>
                            <IoIosSave className="h-10 w-10 sm:h-6 sm:w-6"/>
                        </button>
                        <ModalConfirmPay showActive={showActive} modalIsOpen={modalIsOpen} onClose={closeModal}/>
                        <ModalErrorInscription showActive={showActive} modalIsOpenErr={modalIsOpenErr} onCloseErr={closeModalErr}/>
    </div>
  );
};

export default FormularioDeUnion;
