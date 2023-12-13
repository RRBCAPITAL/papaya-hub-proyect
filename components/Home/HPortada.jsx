import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Quicksand } from "next/font/google";
import HEslogan from "./HEslogan";

const dancing = Quicksand({ subsets: ["latin"] });

const HPortada = () => {
  return (
    <div className="flex border-none">
      <div className="min-h-screen w-screen overflow-hidden shadow-lg shadow-slate-400 border-none flex flex-col gap-6 text-[#737373] items-center">
       
       <div className="flex justify-center h-[50%]">
       <img
          src="/assets/bnn.jpeg"
          alt=""
          className="z-10 hidden lg:block shadow-lg shadow-slate-400 rounded-[20px]
                     bg-no-repeat object-cover xl:w-[500px] 2xl:w-[600px] h-[100%]"
        />

        <div className="flex flex-col text-[#737373] mt-[120px]">
          
        <img
            src="/assets/phlogo.jpeg"
            alt=""
            className="z-[50] mx-auto shadow-lg shadow-slate-400 rounded-[20px] h-[100px] w-[300px]"
          />
          <div className="w-full flex flex-col items-center justify-center mt-6">
         
            <strong className="z-30 font-extrabold text-justify flex items-end px-10 2xl:pr-20 lg:w-[70%] 2xl:w-[70%] text-[18px] lg:text-[22px] 2xl:text-[32px] lg:leading-[30px] 2xl:leading-[40px] ">
              <h1 className={dancing.className}>
              Papayahub es el sitio web más completo y seguro para generar ingresos a través de servicios presenciales y contenido virtual.
              </h1>
            </strong>

            <strong className="z-30 mt-6 font-extrabold flex items-end px-10 text-justify lg:w-[70%] 2xl:w-[70%] text-[18px] lg:text-[22px] 2xl:text-[32px] lg:leading-[30px] 2xlleading-[40px] ">
              <h1 className={dancing.className}>
              Gana más a través de servicios adicionales o exclusivos que puedas realizar.
              </h1>
            </strong>
          </div>

          <Link
            href={"/"}
            className="font-medium mx-auto text-slate-100 lg:text-xl  hover:shadow-md hover:shadow-slate-400 transition-all duration-200 ease-linear flex z-30 my-8 w-fit text-center px-4 py-2 rounded-full bg-orange-500 gap-2"
          >
            <nav>Ver servicios</nav>
            <FaArrowRight className="my-auto lg:text-xl" />
          </Link>
        </div>
       </div>

       <HEslogan />

<div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mx-1 sm:mx-10 lg:w-[60%] mt-10 mb-20">
  <div className="rounded-[20px] border-2 border-bor-red p-4 shadow dark:shadow-orange-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100">
    <h1 className="font-bold text-2xl">Servicio presencial</h1>
    <h2 className="text-xl">Elige a la mejor escort o kinesióloga para pasar momentos agradables.</h2>
  </div>

  <div className="rounded-[20px] border-2 border-bor-red p-4 shadow dark:shadow-orange-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100">
    <h1 className="font-bold text-2xl">Servicio virtual</h1>
    <h2 className="text-xl">Elige el mejor contenido hot que deseas ver: fotos de pies, videollamadas, chats eróticos, consejos, entre otros.</h2>
  </div>

  <div className="rounded-[20px] border-2 border-bor-red p-4 shadow dark:shadow-orange-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100">
    <h1 className="font-bold text-2xl">Servicio exclusivo</h1>
    <h2 className="text-xl">Consulta los servicios exclusivos que tenemos para ti: trío, fetiches, anal, oral, natural, eyaculación corporal, entre otros.</h2>
  </div>

  <div className="rounded-[20px] border-2 border-bor-red p-4 shadow dark:shadow-orange-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100">
    <h1 className="font-bold text-2xl">Atención</h1>
    <h2 className="text-xl">Selecciona un servicio normal o específico, llega a un acuerdo en la tarifa y agenda una cita.</h2>
  </div>

  <div className="rounded-[20px] border-2 border-bor-red p-4 shadow dark:shadow-orange-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100">
    <h1 className="font-bold text-2xl">Nacionalidades</h1>
    <h2 className="text-xl">Encontrarás hermosas escorts y kinesiólogas de diferentes nacionalidades.</h2>
  </div>

  <div className="rounded-[20px] border-2 border-bor-red p-4 shadow dark:shadow-orange-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100">
    <h1 className="font-bold text-2xl">Idioma</h1>
    <h2 className="text-xl">En nuestra plataforma encontrarás bellas escorts que te atenderán en tu propio idioma.</h2>
  </div>

</div>
  {/* <div className="absolute opacity-10 lg:opacity-20 z-[800] top-0 right-0 left-0 m-auto bg-black min-h-screen w-screen"></div> */}
      </div>
    </div>
  );
};

export default HPortada;
