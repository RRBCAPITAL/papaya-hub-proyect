"use client"

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { questions } from "@/components/DataQuestions/DataQuestions";
import Question from "@/components/Question/Question";
import Link from "next/link";

// const randomArr = (arr) => {
//     const newArr = arr.sort(() => Math.random() - 0.5);
//     return newArr.slice(0, 20);
// }

// const CategoryPage = () => {

//     const { category } = useParams()

//     console.log(category);
//     const [ filteredQ, setFilteredQ ] = useState(
//         questions.filter(q => q.category === category)
//         )
//    const [ indexQ, setIndexQ ] = useState(0)
        
//         useEffect(() => {
    
//             const newQuestions = randomArr(filteredQ)
//             setFilteredQ(newQuestions)
//         }, [])
        
//         console.log(filteredQ);

//   return (
//     <div className="flex flex-col min-h-screen bg-violet-200 items-center justify-center gap-10"
        
//     >
//         <Question
//             Qfiltered={filteredQ[indexQ]}
//             setIndexQ={setIndexQ}
//             indexQ={indexQ}
//             filteredQ={filteredQ}
//             category={category}
//         />
//     </div>
//   )
// }

// export default CategoryPage;

const CategoryPage = () => {
    const params = useParams()

    console.log(params);

  return (
    <div className="min-h-screen w-screen bg-back-dark dark:bg-white dark:text-t-dark text-white flex flex-col items-center justify-center">
        <div className="rounded-lg shadow-customwhite dark:shadow-custom2 p-10 my-28 flex flex-col items-center justify-center gap-8 mx-10 max-w-[320px] sm:max-w-[960px]">
        <div className="flex items-center justify-center text-center">
            <h1 className="text-2xl sm:text-3xl font-bold">
            Quiero ser el <strong className="text-t-light">Frontend Developer</strong> con 
            <strong 
            className={`${ params.category === 'react' ? 'text-t-light' : params.category === 'vue' ? 'text-[#4eff37]' : params.category === 'angular' ? 'text-[#ff3d3d]' : 'text-[#ff9532]'  }`}> {params.category}</strong> de mi equipo.
            </h1>
        </div>
        <div>
            <div className="flex flex-col items-center justify-center gap-4">
                <h3 className="text-2xl">Confirmo que tengo estos requisitos necesarios:</h3>
                <div className="grid grid-col-1 gap-2 sm:grid-cols-4 lg:grid-cols-4">
                    <div className="p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="">Una computadora</h1>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015212/computadora_iqmaqd.png' width={100} height={100} className="w-10 h-10"/>
                    </div>
                    <div className="p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="">Conexión a internet</h1>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449317/wifi_nwbxxz.png' width={100} height={100} className="w-10 h-10"/>
                    </div>
                    <div className="p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="">HTML</h1>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694014505/html_yrpan6.png' width={100} height={100} className="w-10 h-10"/>
                    </div>
                    <div className="p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="">CSS</h1>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015212/css-3_l3typy.png' width={100} height={100} className="w-10 h-10"/>
                    </div>
                    <div className="p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="">JAVASCRIPT</h1>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015214/js_wwjeau.png' width={100} height={100} className="w-10 h-10"/>
                    </div>
                    <div className="p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="">Creación de rutas</h1>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015218/ruta_xn0p2t.png' width={100} height={100} className="w-10 h-10 bg-white rounded-md p-1"/>
                    </div>
                    <div className="p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="">Peticiones HTTP</h1>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015206/api_xldvyr.png' width={100} height={100} className="w-10 h-10"/>
                    </div>
                    <div className="p-2 border-2 border-blue-500 rounded-lg flex flex-col items-center">
                        <h1 className="">Disponibilidad</h1>
                        <Image src='https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015213/disponibilidad_cqztn0.png' width={100} height={100} className="w-10 h-10"/>
                    </div>
                </div>
    
                    <button className="border-b-4 text-t-light text-sm border-bor-light">Descargar programa</button>
     
            </div>
        </div>
        <div className="flex gap-4 items-center justify-center text-[16px] font-bold">
                <Link href={'/'} className="text-center p-4 w-[150px] sm:max-w-[500px] text-white bg-[#7530ff] rounded-lg hover:scale-105 duration-300 transition-all">Volver al inicio</Link>
                <Link href={'/metodos-de-pago'} className="p-4 w-[150px] sm:max-w-[500px] text-white bg-[#7530ff] rounded-lg hover:scale-105 duration-300 transition-all">Estoy listo/a</Link>
        </div>
        </div>
    </div>
  )
}

export default CategoryPage