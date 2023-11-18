import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Quicksand } from 'next/font/google'

const dancing = Quicksand({ subsets: ['latin'] })

const HEslogan = () => {
  return (
    <div className="overflow-hidden flex border-none">
      <div className={dancing.className}>
      <div className="h-fit border-none pt-[50px] lg:pt-20 w-screen overflow-hidden flex flex-col bg-white dark:bg-dark-l items-center">
        
        <h2 className="border-b-4 pb-4 border-bor-red z-30 leading-[30px] sm:w-[60%] lg:w-[30%] font-extrabold mx-20 text-2xl text-center sm:text-[40px] text-slate-600 dark:text-white sm:leading-[45px]">
          Dicen que la felicidad no tiene precio, pero puedes venir a vernos.
        </h2>
        </div>
      </div>
    </div>
  );
};

export default HEslogan;
