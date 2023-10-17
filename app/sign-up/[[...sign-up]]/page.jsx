// "use client"

// import { SignUp } from "@clerk/nextjs";
// import { useEffect } from "react";

// export default function Page() {

//   return (
//     <containtotal className="w-screen flex flex-col min-h-screen items-center bg-back-light">
//     <containparcial className='z-10 mt-20 relative m-4 sm:bg-[#0000003e] p-[2px] rounded-[20px]'>
//     <section className="m-4 p-4 rounded-[20px]">
//       {/* <textcontain className='hidden sm:block'>
//       <h1 className="text-white text-3xl text-center font-bold">Únete a <strong className="">Papaya</strong> Hub</h1>
//       <h6 className="text-white text-md text-center mb-4">y disfruta de los beneficios que tenemos para ti.</h6>
//       </textcontain> */}
//     <containerdata className='flex flex-col sm:flex-row gap-2'>

//       <SignUp/>

    
//     </containerdata>
//     </section>
//     </containparcial>

//     <img
//         src="/assets/bannerfulla.jpg"
//         alt=""
//         className="fixed z-0 top-0 left-0 w-screen h-screen object-cover"
//       />
//   </containtotal>
//     )
// }


"use client"

import { SignIn } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Page() {

  return (
    <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center bg-back-light relative">
      <div className="z-10 mt-20 m-4 bg-[#0000003e] shadow-sm p-[2px] rounded-[20px] relative">
        
        <section className="m-4 p-4 rounded-[20px]">
        <h1 className="text-center text-white font-bold"><strong className="text-t-red">Registrarse</strong> a PapayaHub</h1>
          <div className="flex flex-col sm:flex-row gap-2">
            <SignIn />
          </div>
        </section>
      </div>
      <img
        src="/assets/bannerfulla.jpg"
        alt=""
        className="fixed z-0 top-0 left-0 w-screen min-h-screen overflow-hidden object-cover"
      />
    </div>
  );
}