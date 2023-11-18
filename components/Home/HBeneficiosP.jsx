import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Quicksand } from 'next/font/google'

const quick = Quicksand({ subsets: ['latin'] })

const HBeneficiosP = () => {
  return (
    <div className="overflow-hidden flex border-none"> 
      <div className={quick.className}>
      <div className="min-h-fit border-none py-20 px-6 sm:px-10 lg:px-[160px] w-screen overflow-hidden grid sm:grid-cols-2 gap-4 dark:bg-[#FFFFFF] bg-dark-l justify-center">
        {/* <h1 className="border-b-4 pb-4 border-bor-red z-30 w-[30%] font-extrabold mx-20 text-[16px] text-center sm:text-[40px] text-slate-600 dark:text-white leading-[45px]">
          Dicen que la felicidad no tiene precio, pero puedes venir a vernos.
        </h1> */}
        <section className="px-8 lg:px-10 py-14 h-full shadow-custom2 dark:shadow-violet-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100 rounded-[10px]">
            <div className="flex flex-col lg:flex-row gap-2">
            <h1 className="font-extrabold text-3xl ml-4 my-auto">Nacionalidades</h1>
            <images className='flex mx-4 lg:mx-0'>
                  <img width="40" height="16" src="https://img.icons8.com/color/48/peru.png" alt="peru" className="h-fit my-auto"/>
                  <img width="40" height="16" src="https://img.icons8.com/color/48/colombia.png" alt="colombia" className="h-fit my-auto"/>
                  <img width="40" height="16" src="https://img.icons8.com/color/48/argentina.png" alt="argentina" className="h-fit my-auto"/>
            </images>
            </div>
            <h2 className="text-xl mx-4 mt-4">En <strong>Papayahub Perú</strong>, encontrarás hermosas escorts y kinesiólogas de diferentes países, tales como Colombia, Venezuela, Ecuador, Argentina y Chile.</h2>
        </section>

        <section className="px-8 lg:px-10 py-14 h-full shadow-custom2 dark:shadow-violet-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100 rounded-[10px]">
            <div className="flex gap-2 mx-4">
            <h1 className="font-extrabold text-3xl text-center mt-2">Atención</h1>
            <img width="40" height="40" src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-hotel-vacation-vitaliy-gorbachev-blue-vitaly-gorbachev.png" alt="external-hotel-vacation-vitaliy-gorbachev-blue-vitaly-gorbachev"/>
            </div>
            <h2 className="text-xl mx-4 mt-4">Tendrás la libertad de elegir cómo deseas ser atendido. Ofrecemos servicios de atención en hoteles de tu elección, servicio a domicilio tipo delivery, así como atención en departamentos privados.</h2>
        </section>

        <section className="px-8 lg:px-10 py-14 h-full shadow-custom2 dark:shadow-violet-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100 rounded-[10px]">
            <div className="flex gap-1 mx-4">
            <h1 className="font-extrabold text-3xl  text-center my-auto">Idioma</h1>
            <img width="64" height="64" src="https://img.icons8.com/nolan/64/language.png" alt="language"/>
            </div>
            <h2 className="text-xl mx-4 mt-4">En nuestra plataforma encontrarás bellas escorts que te atenderán en tu propio idioma.</h2>
        </section>

        <section className="px-8 lg:px-10 py-14 h-full shadow-custom2 dark:shadow-violet-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100 rounded-[10px]">
            <div className="flex gap-2 mx-4">
            <h1 className="font-extrabold text-3xl  text-center my-auto">Multimedia</h1>
            <img width="50" height="50" src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Multimedia-web-and-software-development-smashingstocks-flat-smashing-stocks.png" alt="external-Multimedia-web-and-software-development-smashingstocks-flat-smashing-stocks"/>
            </div>
            <h2 className="text-xl mx-4 mt-4">En cada perfil encontrarás imágenes, fotokines y videos para que puedas tomar la mejor decisión</h2>
        </section>
      </div>
      </div>
    </div>
  );
};

export default HBeneficiosP;
