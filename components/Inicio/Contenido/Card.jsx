"use client"

import Link from "next/link";
import { useState } from "react";

const Card = ({id, imagenPrincipal, name, nacionalidad, lugar, edad, tarifaxhr, region, nivel, whatsapp}) => {
  
    const shortId = id?.substring(0, 7);
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
      setIsHovered(!isHovered);
    };
  
    return (
    <containcard 
    className={`shadow-custom1 h-fit dark:bg-dark-d bg-white rounded-[28px] relative transition-opacity bg-opacity-100 duration-[3s] ease hover:bg-opacity-70 hover:cursor-pointer ${isHovered ? 'hovered' : ''}`}
    onMouseEnter={toggleHover}
    onMouseLeave={toggleHover}>
        <card>
            <img src={imagenPrincipal} alt="Imagen de la anfitriona" className={`${nivel === "BICHOTA" ? "border-bor-red" : nivel === "MOTOMAMI" ? "border-blue-500" : "border-slate-500"} rounded-t-[16px] border-[10px]`} />
        </card>
        <containinfo className=' dark:text-white text-slate-600 px-4'>
            
            <section1 className='flex flex-col px-4 gap-0 pb-8'>
                <cuadrito className='flex gap-1'>
                <lugar className='flex gap-1 items-center justify-center'>
                <h1 className='p-1 px-2 rounded text-[10px] border-2 border-bor-red dark:text-white text-slate-800  font-bold my-auto text-center'>{region}, {lugar}</h1>
                
                
                <nacionalidad className='flex gap-[2px] p-1 text-white px-2 rounded items-center justify-center bg-violet-700'>
                    <h1 className='my-auto border-2 border-transparent text-[10px]'>{nacionalidad}</h1>
                    { nacionalidad === 'Peruana' ?
                    <img width="16" height="16" src="https://img.icons8.com/color/48/peru.png" alt="peru"/> :
                    nacionalidad === 'Colombiana' ?
                    <img width="16" height="16" src="https://img.icons8.com/color/48/colombia.png" alt="colombia"/> :
                    nacionalidad === 'Argentina' ?
                    <img width="16" height="16" src="https://img.icons8.com/color/48/argentina.png" alt="argentina"/> :
                    nacionalidad === 'Boliviana' ?
                    <img width="16" height="16" src="https://img.icons8.com/color/48/bolivia.png" alt="bolivia"/> :
                    nacionalidad === 'Ecuatoriana' ?
                    <img width="16" height="16" src="https://img.icons8.com/color/48/ecuador.png" alt="ecuador"/> :
                    nacionalidad === 'Española' ?
                    <img width="16" height="16" src="https://img.icons8.com/color/48/españa.png" alt="españa"/> :
                    nacionalidad === 'Brasileña' ?
                    <img width="16" height="16" src="https://img.icons8.com/color/48/brazil.png" alt="brazil"/> :
                    nacionalidad === 'Chilena' ?
                    <img width="16" height="16" src="https://img.icons8.com/color/48/chile.png" alt="chile"/> :
                    nacionalidad === 'Uruguaya' ?
                    <img width="16" height="16" src="https://img.icons8.com/color/48/uruguay.png" alt="uruguay"/> :
                    nacionalidad === 'Mexicana' ?
                    <img width="16" height="16" src="https://img.icons8.com/color/48/mexico.png" alt="mexico"/> :
                    nacionalidad === 'Paraguaya' ?
                    <img width="16" height="16" src="https://img.icons8.com/color/48/paraguay.png" alt="paraguay"/> :
                    <img width="16" height="16" src="https://img.icons8.com/color/48/venezuela.png" alt="venezuela"/>
                    }
                </nacionalidad>
              
                </lugar>

                </cuadrito>
                
                <sectionp className='flex gap-1 mt-4'>
                <p className='text-xl font-bold my-auto'>{name}</p>
                <edad className='flex gap-1 p-1 px-2 dark:text-white text-[10px] rounded items-center justify-center top-0'>({edad} años)</edad>
                </sectionp>

                <tarifa className='flex gap-1 mt-2'>
                <h3 className='p-2 border-2 border-slate-500 -w-auto text-center text-xl font-extrabold font-mono rounded-[10px]'>S/{tarifaxhr}</h3>
                <nav className='my-auto'>x hora</nav>
                </tarifa>
            </section1>

            <section2 className='flex gap-2 mt-4 absolute bottom-2 left-[40%] right-[60%] w-full'>
                <h1 className='rounded dark:text-white text-black text-center'><strong className='font-extrabold'>ID:</strong> {shortId}</h1>
            </section2>

        </containinfo>
        {isHovered && (
        <div className="absolute rounded-[18px] inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-70 hover-button">
          <Link href={`/chicas/${id}`} className="flex gap-2 items-center w-[50%] justify-center bg-blue-500 text-white px-6 py-2 rounded-[10px] hover:bg-blue-600">

              {/* <img width="28" height="28" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" className='my-auto'/> */}
              <nav className='text-[16px] font-bold my-auto'>Saber más</nav>

          </Link>
          <Link target="_blank" href={`https://api.whatsapp.com/send?phone=+51${whatsapp}&text=Hola %20${name},%20te%20vi%20en%20www.papayahub.pe,%20me%20interesan%20tus%20servicios.`} className="flex gap-2 items-center w-[50%] justify-center bg-green-500 text-white px-6 py-2 rounded-[10px] hover:bg-green-600">
              <img width="28" height="28" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" className='my-auto'/>
              <nav className='text-[16px] font-bold my-auto'>WhatsApp</nav>
          </Link>
        </div>
      )}
    </containcard>
  )
}

export default Card