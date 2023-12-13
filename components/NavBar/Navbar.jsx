"use client"

import Link from "next/link"
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { FaUserCheck } from 'react-icons/fa'
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MdNightlight } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'

import { Button, ButtonGroup, Stack } from '@chakra-ui/react'

import { motion } from "framer-motion"
import { fadeIn } from '@/utils/motionTransitions'

import { Quicksand } from 'next/font/google'

const quick = Quicksand({ subsets: ['latin'] })

const Navbar = ({ currentUserR }) => {

    const pathname = usePathname()
    const [ show, setShow ] = useState(false)
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showActive, setShowActive] = useState(false)
    // const [ currentUserR, setCurrentUserR] = useState()

    const userR = useUser()
    const id = currentUserR?.id
    console.log(userR);

    // useEffect(() => {
    //     if(userR?.user){
          
    //       axios('/api/user')
    //       .then(res => {
    //         const foundUser = res?.data?.find(u => u?.email === userR?.user?.emailAddresses[0]?.emailAddress)
    //         setCurrentUserR(foundUser)
    //       })
    //       .catch(err => console.log(err))
    //       }
    // }, [userR])
    
    console.log(currentUserR);

    const openModal = () => {
        setModalIsOpen(true);
      };
      
      const closeModal = () => {
        setModalIsOpen(false);
      };

    const handleModal = () => {
        setShowActive(true)
        openModal()
    }

  const handleLinkClick = () => {
    
    // e.preventDefault();
    setLoading(true);

    setTimeout(() => {
        setLoading(false)
    }, 300)
  };

  if (typeof window !== 'undefined'){
    // Recuperar el estado del tema desde el almacenamiento local si está disponible
    const initialTheme = localStorage?.getItem('theme') || (
        window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        );
  
  var [theme, setTheme] = useState(initialTheme);

  // Cambiar el tema
  var handleChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // Guardar el nuevo tema en el almacenamiento local
    localStorage?.setItem('theme', newTheme);
    handleNavbarPhone()
  };
  

  // Aplicar la clase 'dark' al cuerpo del documento según el estado del tema
  useEffect(() => {
    const bodyElement = document.querySelector('body');
    if (theme === 'dark') {
      bodyElement.classList.add('dark');
    } else {
      bodyElement.classList.remove('dark');
    }
  }, [theme]);
}

const [isLoadingAnuncio, setIsLoadingAnuncio] = useState(false);

  const handleClick = () => {
    // Inicia la carga
    setIsLoadingAnuncio(true);

    // Simula alguna operación asincrónica, como una solicitud HTTP
    setTimeout(() => {
      // Finaliza la carga después de un tiempo de simulación
      setIsLoadingAnuncio(false);
    }, 2000); // Simulación de 2 segundos
  };

    const handleNavbarPhone = () => setShow(!show)

    return (
    <div className={quick.className}>
    <header className="z-[999] w-screen fixed  bg-[#000000] shadow-custom1 dark:bg-white py-0 px-[2rem]">
        <motion.div className=" h-[70px] w-[90%] mx-auto flex items-center justify-between"
         variants={fadeIn("left", 0)} initial='hidden' animate="show" exit="hidden"
        >
            
            <menu className="flex gap-10">
            <div className="text-[1.5rem] font-bold">
            <Link href={'/'} onClick={() => setShow(false)} className="font-extrabold">
                    <img src="/assets/phlogo.jpeg" alt="" className="h-12 w-auto rounded-md shadow-sm"/>
            </Link>
            </div>
            <div className="hidden lg:block dark:text-white text-slate-800">
                <ul className="my-auto flex gap-[2rem] h-full font-bold text-[16px]">
                <Link
                    href={'/inicio'}
                    className={`my-auto ${pathname === ('/inicio') ? "font-extrabold  text-t-red transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out text-white  dark:text-slate-800"}`}
                >Inicio</Link>
                <Link
                    href={'/'}
                    className={`my-auto ${pathname === ('/') ? "font-extrabold  text-t-red transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out text-white  dark:text-slate-800"}`}
                >Chicas</Link>
                <Link
                    href={'/soporte'}
                    className={`my-auto ${pathname === ('/soporte') ? "font-extrabold  text-t-red transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out text-white  dark:text-slate-800"}`}>
                Soporte</Link>
                
                {

                }
                </ul>
            </div>
            </menu>

            <div className="hidden lg:block">
                <div className="flex gap-[0.8rem]">
                
               <Link 
      href={`/dashboard-de-usuario/${id}`} 
      className={`${pathname === `/dashboard-de-usuario/${id}` && "bg-back-red-l"} transition-all duration-200 ease-linear flex gap-[4px] border-2 border-bor-red  text-white py-[0.4rem] px-[1rem]
                    rounded-[20px] text-[16px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1] ease`}
    >
      <h3 className="my-auto text-t-red">Mis anuncios</h3>
      <FaUserCheck className="my-auto text-t-red"/>       
    </Link>

                {
                   currentUserR && (currentUserR?.role === 'ADMIN' || currentUserR?.role === 'SUPER_ADMIN') && 
                    <Link href={'/dashboard'} className={`${pathname === '/dashboard' && "bg-[#dcd7ff]"} transition-all duration-200 ease-linear flex gap-[4px] border-2 border-[#794cff]  text-white py-[0.4rem] px-[1rem]
                    rounded-[20px] text-[16px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1] ease`}>
                           <h3 className="my-auto text-[#794cff]">Dashboard</h3>
                        <FaUserCheck className="my-auto text-[#794cff]"/>  
                        
                    </Link>
                }

               {!currentUserR? 
                  <Link href={'/sign-in'} className="bg-back-red-l border-2 border-bor-red transition-all duration-200 ease-linear flex gap-[4px] text-[#fff7d3] py-[0.5rem] px-[1rem] outline-none
                  rounded-[20px] text-[16px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]">
                <nav className="inline-block text-t-red">Iniciar</nav> Sesión
                </Link>
                : <div className="my-auto border-2 scale-[1.1] border-bor-red rounded-full">
                <UserButton afterSignOutUrl="/sign-in"/>

                </div>
                }

                {
                  currentUserR ? <Link
                  href={'/crear-anuncio'}
                  className={`bg-back-red shadow-p4 hover:shadow transition-all duration-200 ease-linear flex gap-[4px] text-[#fff7d3] py-[0.5rem] px-[1rem] border-none outline-none
                  rounded-[20px] text-[16px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]`}
                  
                  >
              <Button 
              variant="outline"
              isLoading={isLoadingAnuncio} // Utiliza el estado de isLoading de Chakra UI
              loadingText="Cargando"
              onClick={handleClick} // Llama a la función cuando se hace clic
              >
                  Crear anuncio
              </Button>
          </Link> : <Link
                href={'/sign-in'}
                className={`bg-back-red shadow-p4 hover:shadow transition-all duration-200 ease-linear flex gap-[4px] text-[#fff7d3] py-[0.5rem] px-[1rem] border-none outline-none
                rounded-[20px] text-[16px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]`}
                
                >
            <Button 
            variant="outline"
            isLoading={isLoadingAnuncio} // Utiliza el estado de isLoading de Chakra UI
            loadingText="Cargando"
            onClick={handleClick} // Llama a la función cuando se hace clic
            >
                Crear anuncio
            </Button>
        </Link>
                }

            { theme === "dark" ?
            <button onClick={handleChangeTheme} className=" rounded-full px-[10px] transition-all duration-300 ease-in-out">
                  <MdOutlineLightMode className="text-t-red w-6 h-6 transition-all duration-300 ease-in-out"/>
            </button>
            :
            <button onClick={handleChangeTheme} className="rounded-full px-[10px] transition-all duration-300 ease-in-out">       
                 <MdNightlight className="text-t-red w-6 h-6 transition-all duration-300 ease-in-out"/>
            </button>  
            }
                </div>
            </div>
            <div className=" lg:hidden"
            onClick={handleNavbarPhone}
            >
                <div className="text-[#fff] dark:text-black text-[1.5rem] cursor-pointer flex-none">
                    { show ? <MdOutlineClose /> : <FiMenu />}
                </div>
            </div>
        </motion.div>
        
        {
            show ? <div className="z-50 lg:hidden fixed left-[0rem] h-screen w-screen bg-[#131313] dark:bg-white dark:text-t-dark backdrop:blur-[15px]
            overflow-hidden transition-nicetransition">
                <div className="flex flex-col justify-between gap-1 my-2">
                    <ul className="flex flex-col text-2xl gap-[0.5rem] p-[0.7rem] my-4 items-center justify-center">
                    {!currentUserR &&
                <Link href={'/sign-in'} onClick={handleNavbarPhone} className="sm:w-[284px] bg-back-red-l border-2 border-bor-red transition-all duration-200 ease-linear flex gap-[4px] text-[#fff7d3] py-[1rem] px-[1.2rem] outline-none
                rounded-[20px] text-[20px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]">
                <nav className="inline-block text-t-red">Iniciar</nav> Sesión
                </Link>
                }
                  <div className="flex gap-2 text-white dark:text-black" >{currentUserR?.firstname} <UserButton afterSignOutUrl="/sign-in"/></div>
                  <Link href={'/inicio'} onClick={handleNavbarPhone} className={` ${pathname === ('/inicio') && "bg-back-red-l" } my-auto text-xl w-full flex items-center justify-center gap-2 text-t-red py-[0.5rem] px-[1rem] border-2 border-bor-red outline-none
                    rounded-[20px] text-[16px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Inicio</Link>
                        <Link href={'/'} onClick={handleNavbarPhone} className={` ${pathname === ('/') && "bg-back-red-l" } my-auto text-xl w-full flex items-center justify-center gap-2 text-t-red py-[0.5rem] px-[1rem] border-2 border-bor-red outline-none
                    rounded-[20px] text-[16px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Chicas</Link>
                        <Link href={'/soporte'} onClick={handleNavbarPhone} className={` ${pathname === ('/reportar') && "bg-back-red-l" } my-auto text-xl w-full flex items-center justify-center gap-2 text-t-red py-[0.5rem] px-[1rem] border-2 border-bor-red outline-none
                    rounded-[20px] text-[16px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Soporte</Link>
                    </ul>
    
                    <div className="flex flex-col justify-center items-center text-2xl mx-6 p-4 rounded-xl gap-[8px]">

                    <Link href={`/dashboard-de-usuario/${id}`} onClick={handleNavbarPhone} className={` ${pathname === ('/dashboard-de-usuario') && "bg-[#170936]" } w-full flex items-center justify-center gap-2 text-[#5d36e8] py-[0.5rem] px-[1rem] border-2 border-[#5d36e8] outline-none
                    rounded-[20px] text-[16px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>
                        
                        <h3 className="my-auto text-xl text-[#5d36e8]">Mis anuncios</h3>
                        <FaUserCheck className="my-[4px] h-6 w-6 text-[#5d36e8]"/>       
                        
                    </Link>

                    { userR?.isSignedIn &&
                    (currentUserR?.role === 'ADMIN' || currentUserR?.role === 'SUPER_ADMIN') && 
                    <Link href={'/dashboard'} onClick={handleNavbarPhone} className={` ${pathname === ('/dashboard') && "bg-[#170936]" } w-full flex items-center justify-center gap-2 text-[#5d36e8] py-[0.5rem] px-[1rem] border-2 border-[#5d36e8] outline-none
                    rounded-[20px] text-[16px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>
                    
                        <h3 className="my-auto text-xl text-[#5d36e8]">Dashboard</h3>
                        <FaUserCheck className="my-[4px] h-6 w-6 text-[#5d36e8]"/>       
                        
                    </Link>
                    }

                    {
                      currentUserR ? <Link href={'/crear-anuncio'} onClick={handleNavbarPhone} className={` ${pathname === ('/crear-anuncio') && "bg-[#361e09]" } w-full flex items-center justify-center gap-2 text-t-red py-[0.5rem] px-[1rem] border-2 border-bor-red outline-none
                      rounded-[20px] text-[16px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>
                          
                          <h3 className="my-auto text-xl">Crear anuncio</h3>
                          <FaUserCheck className="my-[4px] h-6 w-6"/>       
                          
                      </Link> :
                      <Link href={'/sign-in'} onClick={handleNavbarPhone} className={` ${pathname === ('/crear-anuncio') && "bg-[#361e09]" } w-full flex items-center justify-center gap-2 text-t-red py-[0.5rem] px-[1rem] border-2 border-bor-red outline-none
                      rounded-[20px] text-[16px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>
                          
                          <h3 className="my-auto text-xl">Crear anuncio</h3>
                          <FaUserCheck className="my-[4px] h-6 w-6"/>       
                          
                      </Link>
                    }

                { theme === "dark" ?
            <div className="flex gap-2 mt-2 text-white dark:text-black">
                <p className="my-auto font-bold font-mono text-xl">Cambiar tema</p>
            <button onClick={handleChangeTheme} className="rounded-full p-[10px] transition-all duration-300 ease">    
                 <MdNightlight className="text-t-red w-6 h-6 transition-all duration-300 ease"/> 
            </button>    
            </div>
            :
            <div className="flex gap-2 mt-2 text-white dark:text-black">
                <p className="my-auto font-bold font-mono text-xl">Cambiar tema</p>
            <button onClick={handleChangeTheme} className="rounded-full p-[10px] transition-all duration-300 ease">
                 <MdOutlineLightMode className="text-t-red w-6 h-6 transition-all duration-300 ease"/>
            </button>  
            </div>
            }
                    </div>
                </div>
                    </div> : ""
        }

    </header>

        {/* <ModalConfirmLogin showActive={showActive} modalIsOpen={modalIsOpen} onClose={closeModal}/> */}
    </div>
  )
}

export default Navbar;