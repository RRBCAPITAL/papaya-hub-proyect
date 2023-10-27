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
      <Link href={`chicas/${id}`}

      >
        <div
style={{ position: 'relative' }}
className={`min-w-[280px]  mb-2  h-fit bg-dark-d dark:bg-white rounded-[28px] hover:cursor-pointer`}

>
<img
  src={imagenPrincipal}
  alt="Imagen de la anfitriona"
  className={`${
    nivel === 'BICHOTA'
      ? 'border-bor-red'
      : nivel === 'MOTOMAMI'
      ? 'border-blue-500'
      : 'border-slate-500'
  } relative rounded-[16px] border-[4px]`}
/>

<div
  className="absolute text-white dark:text-slate-600 px-4"
  style={{
    // backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '0 0 18px 18px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }}
>
  <section className="flex flex-col px-1 gap-0 pb-4">
    <div className="flex gap-1">
      <div className="flex gap-1 items-center justify-center">
        {/* <h1 className="p-1 px-2 rounded text-[10px] border-2 border-bor-red text-white dark:text-slate-800 font-bold my-auto text-center">
          {region}, {lugar}
        </h1> */}
        <div className="flex gap-[2px] text-black px-2 py-1 rounded items-center justify-center bg-white">
        
                  { nacionalidad === 'Peruana' ?
                  <img width="16" height="16" src="https://img.icons8.com/color/48/peru.png" alt="peru"/> :
                  nacionalidad === 'Colombiana' ?
                  <img width="16" height="16" src="https://img.icons8.com/color/48/colombia.png" alt="colombia"/> :
                  nacionalidad === 'Argentina' ?
                  <img width="16" height="16" src="https://img.icons8.com/color/48/argentina.png" alt="argentina"/> :
                  nacionalidad === 'Boliviana' ?
                  <img width="16" height="16" src="https://img.icons8.com/color/48/bolivia.png" alt="bolivia"/> :
                  nacionalidad === 'Ecuatoriana' ?
                  <img width="16" height="16" src="https://img.icons8.com/color/48/ehcuador.png" alt="ehcuador"/> :
                  nacionalidad === 'Española' ?
                  <img width="16" height="16" src="https://img.icons8.com/color/48/spain-2.png" alt="spain-2"/> :
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
                  <h1 className='my-auto border-2 border-transparent text-[12px] mt-[3px]'>{name} -</h1>
                  <h1 className='my-auto border-2 border-transparent text-[12px] mt-[3px]'>{edad} años</h1>
        </div>
      </div>
    </div>

    <div className="flex gap-1 mt-1 rounded-[5px] w-fit px-2 py-1 bg-white">
      <p className="text-black my-auto text-[12px]">{lugar} - S/{tarifaxhr}</p>
    </div>

    {/* <div className="flex gap-1 mt-2">
      <h3 className="p-2 border-2 border-slate-500 -w-auto text-center text-xl font-extrabold font-mono rounded-[10px]">
        S/{tarifaxhr}
      </h3>
      <nav className="my-auto">x hora</nav>
    </div> */}
    {/* <div className="flex gap-1 mt-1 rounded-[5px] w-fit p-2 bg-white">
      <p className="text-black my-auto">{region}, </p>
      <p className="text-black my-auto">{lugar}</p>
    </div> */}

    {/* <div className="flex gap-1 mt-1 rounded-[5px] w-fit p-2 bg-white">
      <p className="text-black my-auto"><strong>Seguidores:</strong> {formattedFollowers}</p>
    </div> */}

  </section>

  {/* <div className="flex gap-2 mt-4 absolute bottom-2 left-[40%] right-[60%] w-full">
    <h1 className="rounded text-white dark:text-black text-center">
      <strong className="font-extrabold">ID:</strong> {shortId}
    </h1>
  </div> */}
</div>

</div>
      </Link>   
      
  )
}

export default Card