import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HPortada = () => {
  return (
    <div className="flex border-none">
      <div className="min-h-screen w-screen overflow-hidden border-none flex flex-col justify-center">
        <h1 className="z-30 mx-auto text-center sm:text-left sm:w-[65%] sm:mx-20 text-[34px] sm:text-[60px] text-white">
          <strong className="font-extrabold font-custom">LA VIDA ES HOY</strong>
        </h1>
        <h1 className="z-30 mx-auto text-center sm:text-left w-[80%] leading-[22px] sm:mx-20 sm:w-[65%] lg:w-[35%] mt-4 text-[16px] sm:text-xl text-white">
          <strong className="font-extrabold">
            En Papayahub encontrarás hermosas escorts que brindan servicios de
            manera casual y profesional, así como kinesiólogas que darán el
            mejor servicio para ti.
          </strong>
        </h1>
        <Link
          href={"/"}
          className="font-medium mx-auto text-slate-600 text-xl hover:shadow-md hover:shadow-yellow-300 transition-all duration-200 ease-linear flex z-30 sm:mx-[250px] my-8 w-fit text-center px-4 py-2 rounded-full bg-[#fff] gap-2"
        >
          <nav>Ver escorts</nav>
          <FaArrowRight className="my-auto" />
        </Link>
        <img
          src="/assets/portadahome.jpg"
          alt=""
          className=" z-10 absolute top-0 right-0 left-0 
                      m-auto bg-no-repeat object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default HPortada;
