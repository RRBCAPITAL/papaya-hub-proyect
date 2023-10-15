"use client";

import { useState } from "react";
import Link from "next/link";
import { MdDelete } from 'react-icons/md'
import { MdNotificationsActive } from 'react-icons/md'
import { AiTwotoneEdit } from 'react-icons/ai'

const CardDeAnuncio = ({
  id,
  userId,
  estado,
  imagenPrincipal,
  nivel,
  views,
  name,
  nacionalidad,
  lugar,
  edad,
  tarifaxhr,
  region,
  setModalDeleteOpen,
  setIsDeleted,
  setIdAnuncio,
  whatsapp
}) => {
  const shortId = id?.substring(0, 7);
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div>
      <container className="dark:bg-white bg-dark-d flex flex-col items-center justify-center gap-2 p-4 shadow-custom1 rounded-[10px]">   

        <containinfo className=" flex flex-col lg:flex-row gap-10 p-2 sm:p-5 m-5">

        <sectionactions className='flex flex-col items-center justify-center gap-4'>  
        <titulo className='flex'>
          {nivel === "NOTHING" ? (
            <div className="flex flex-col gap-2 bg-slate-200 shadow-2xl p-5 rounded-[20px]">
            <activo className='flex gap-2 w-full items-center justify-center  p-4'>
            <nav className="text-3xl font-extrabold">Anuncio Inactivo</nav>
            <img width="48" height="40" src="https://img.icons8.com/color/48/high-priority.png" alt="high-priority"/>
            </activo>
            <Link href={'/activar-anuncio'} className="flex gap-1 mx-10 items-center justify-center bg-violet-500 text-white px-4 py-2 rounded-[20px] text-2xl text-center font-extrabold hover:bg-violet-600">
                <MdNotificationsActive className="h-6 w-6"/>
                  <nav className=" mt-1">Activar</nav>
            </Link>
                <nav className="text-center text-xl font-bold text-slate-700">ID: {shortId}</nav>
          </div>
          ) : (
            <div className="flex flex-col gap-2 p-5 bg-slate-200 shadow-2xl rounded-[20px]">
              <activo className='flex gap-2 w-full items-center justify-center'>
              <nav className="text-2xl sm:text-3xl font-extrabold text-slate-700">Anuncio Activo</nav>
              <img width="64" height="64" src="https://img.icons8.com/cute-clipart/64/ok.png" alt="ok"/>
              </activo>
              <div className="flex flex-col gap-1">
                <p className="text-sm mx-4">Nivel</p>
              <nav className={`text-2xl rounded-[20px] text-center font-extrabold ${ nivel === "MOTOMAMI" ? "text-blue-200 bg-blue-700" : nivel === "BICHOTA" ? "text-t-red-l bg-back-red" : "text-slate-200 bg-slate-700"} p-2 mx-4`}>{nivel}</nav>
              </div>
              <nav className="text-center text-xl font-bold text-slate-700">ID: {shortId}</nav>
            </div>
          )}
        </titulo>

                <buttons className='flex flex-col gap-1 w-full items-center justify-center p-5 bg-slate-200 shadow-2xl rounded-[20px]'>

                    <h1 className="text-xl font-bold text-slate-700 mb-5">Acciones</h1>
                <div className="flex gap-1">
                <Link href={`/editar-anuncio/${id}`} className="flex gap-1 sm:gap-4 items-center justify-center bg-orange-500 text-white px-4 py-2 rounded-[10px] hover:bg-orange-600">
                <AiTwotoneEdit className="h-6 w-6"/>
                  <nav className="text-[16px] font-bold my-auto">Editar</nav>
                </Link>
                <button className="flex gap-1 sm:gap-4 items-center justify-center bg-red-500 text-white px-4 py-2 rounded-[10px] hover:bg-red-600"
                  onClick={() => {
                    setModalDeleteOpen(true),
                    setIdAnuncio(id)
                  }}
                >
                <MdDelete className="h-6 w-6"/>
                  <nav className="text-[16px] font-bold mt-1">Eliminar</nav>
                </button>
                </div>
                </buttons>

                {/* <estadisticas className='flex flex-col gap-1 w-full p-5 bg-slate-200 shadow-2xl rounded-[20px]'>

                    <h1 className="text-xl font-bold text-slate-700 mb-2">Estadísticas</h1>
                <h1 className="text-sm text-slate-700 text-center">Interactuaron con tu anuncio</h1>
                <div className="flex gap-1 items-center justify-center">
                <img width="40" height="40" src="https://img.icons8.com/external-colours-bomsymbols-/91/external-click-hand-conversation-colours-colours-bomsymbols--2.png" alt="external-click-hand-conversation-colours-colours-bomsymbols--2"/>
                <p className="mt-1 text-4xl font-bold text-slate-700">50</p>
                </div>

                </estadisticas> */}

          </sectionactions>

          <containvistaprevia className='flex flex-col gap-1 text-slate-100 dark:text-slate-700  font-bold'>

            <h1>VISTA PREVIA DEL ANUNCIO</h1>

          <containcard
            className={`shadow-custom1 w-[280px] sm:max-w-[340px] bg-dark-d dark:bg-white rounded-[28px] relative transition-opacity bg-opacity-100 duration-[3s] ease hover:bg-opacity-70 hover:cursor-pointer ${
              isHovered ? "hovered" : ""
            }`}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            <card>
              <img
                src={imagenPrincipal}
                alt="Imagen de la anfitriona"
                className={`${
                  nivel === "BICHOTA"
                    ? "border-bor-red"
                    : nivel === "MOTOMAMI"
                    ? "border-blue-500"
                    : "border-slate-500"
                } object-fill rounded-t-[16px] border-[10px]`}
              />
            </card>
            <containinfo className=" text-white dark:text-slate-600 p-4">
              <section1 className="flex flex-col gap-2 px-4">
                <cuadrito className="flex flex-col gap-1">
                  <h1 className="p-1 rounded text-sm  border-2 border-bor-red text-white dark:text-slate-800  font-bold my-auto text-center">
                    {region}
                  </h1>
                  <h1 className="p-1 rounded text-sm border-2 border-violet-700  text-white dark:text-slate-800  px-2 font-bold my-auto text-center">
                    {lugar}
                  </h1>

                  <div className="flex gap-2 items-center justify-center">
                    <nacionalidad className="flex gap-1 p-1 dark:text-white  px-2 rounded items-center justify-center bg-violet-700">
                      <h1 className="my-auto text-sm">{nacionalidad}</h1>
                      {nacionalidad === "Peruana" ? (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/peru.png"
                          alt="peru"
                        />
                      ) : nacionalidad === "Colombiana" ? (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/colombia.png"
                          alt="colombia"
                        />
                      ) : nacionalidad === "Argentina" ? (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/argentina.png"
                          alt="argentina"
                        />
                      ) : nacionalidad === "Boliviana" ? (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/bolivia.png"
                          alt="bolivia"
                        />
                      ) : nacionalidad === "Ecuatoriana" ? (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/ecuador.png"
                          alt="ecuador"
                        />
                      ) : nacionalidad === "Española" ? (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/españa.png"
                          alt="españa"
                        />
                      ) : nacionalidad === "Brasileña" ? (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/brazil.png"
                          alt="brazil"
                        />
                      ) : nacionalidad === "Chilena" ? (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/chile.png"
                          alt="chile"
                        />
                      ) : nacionalidad === "Uruguaya" ? (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/uruguay.png"
                          alt="uruguay"
                        />
                      ) : nacionalidad === "Mexicana" ? (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/mexico.png"
                          alt="mexico"
                        />
                      ) : nacionalidad === "Paraguaya" ? (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/paraguay.png"
                          alt="paraguay"
                        />
                      ) : (
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/color/48/venezuela.png"
                          alt="venezuela"
                        />
                      )}
                    </nacionalidad>
                    <edad className="flex gap-1 p-1 px-2 dark:text-white  rounded items-center justify-center bg-violet-700">
                      {edad} años
                    </edad>
                  </div>
                </cuadrito>

                <sectionp className="flex gap-4 mt-4">
                  <p className="text-3xl font-bold my-auto">{name}</p>
                </sectionp>

                <tarifa className="flex gap-1">
                  <h3 className="p-2 border-2 border-slate-500 w-[90px] text-center text-2xl font-extrabold font-mono rounded-[10px]">
                    S/{tarifaxhr}
                  </h3>
                  <nav className="my-auto">x hora</nav>
                </tarifa>
              </section1>

              <section2 className="flex flex-col gap-2 p-4">
                <h1 className="p-1 rounded bg-slate-700 dark:text-white text-center">
                  <strong className="font-extrabold">ID:</strong> {shortId}
                </h1>
              </section2>
            </containinfo>
            {isHovered && (
              <div className="absolute rounded-[18px] inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-70 hover-button">
                <Link
                  href={`/chicas/${id}`}
                  className="flex gap-2 items-center w-[50%] justify-center bg-blue-500 text-white px-6 py-2 rounded-[10px] hover:bg-blue-600"
                >
                  {/* <img width="28" height="28" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" className='my-auto'/> */}
                  <nav className="text-[16px] font-bold my-auto">Saber más</nav>
                </Link>
                <Link target="_blank"
          href={`https://api.whatsapp.com/send?phone=+51${whatsapp}&text=Hola %20${name},%20te%20vi%20en%20www.papayahub.pe,%20me%20interesan%20tus%20servicios.`} className="flex gap-2 items-center w-[50%] justify-center bg-green-500 text-white px-6 py-2 rounded-[10px] hover:bg-green-600">
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/color/48/whatsapp--v1.png"
                    alt="whatsapp--v1"
                    className="my-auto"
                  />
                  <nav className="text-[16px] font-bold my-auto">WhatsApp</nav>
                </Link>
              </div>
            )}
          </containcard>
          </containvistaprevia>


        </containinfo>
      </container>
    </div>
  );
};

export default CardDeAnuncio;
