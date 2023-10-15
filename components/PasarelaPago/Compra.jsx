"use client";

import CardBeneficios from "./CardBeneficios";
import CardDetalles from "./CardDetalles";
import CardPrincipal from "./CardPrincipal";

// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";

const Compra = () => {

  const handlePostOrder = async () => {
    const res = await fetch('/api/paypal', {
      method: 'POST'
    })

    const data = await res.json()

    window.location.href = data.links[1].href
  }
  
  return (
    <div className="bg-back-dark dark:bg-white min-h-screen w-screen flex flex-col items-center justify-center gap-10">

        <div className="mt-[100px] flex gap-10 justify-center">
        <section>
        <h1 className="font-bold dark:text-t-dark text-white text-2xl">Métodos de pago</h1>
        <h1 className="text-3xl lg:text-4xl font-bold text-t-light text-center">Mr Developer Program</h1>
        </section>
        
        </div>
        
       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
       <div className="my-0">
       <CardPrincipal />
        <CardBeneficios />
        <CardDetalles />
        </div>
        
        <div className="mx-2 flex flex-col gap-4 items-center mb-[40px] my-0"> 
          
          <div className="flex flex-col items-center p-5 w-full border-bor-light border-4 rounded-lg justify-center gap-2">
          <h1 className="text-center text-white dark:text-t-dark font-bold text-3xl">Cuenta de Paypal</h1>
            <h3 className="text-center text-white dark:text-t-dark">A nombre de: Carlos Daniel Rojas Ramirez</h3>
            <div className="mt-auto ">
            <button onClick={handlePostOrder} className="rounded-[0.5rem] bg-back-light py-[1rem] px-[2.5rem] text-center text-[1rem] leading-[1.25rem] font-[600] text-white transition-all duration-100 ease-in-out " href="#">Pagar con Paypal</button>
            </div>
          </div>

          <div className="text-white dark:text-t-dark p-5 border-bor-light border-4 rounded-lg gap-2">
            <h1 className="text-center font-bold text-3xl">Cuentas bancarias (Perú)</h1>
            <h3 className="text-center">A nombre de: Carlos Daniel Rojas Ramirez</h3>
            <div className="grid items-center justify-center">
              <section className="flex gap-2 justify-center items-center">
                <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015210/bcpp_jpbbp1.png" alt="" className="h-[150px] w-[150px]"/>
                <infocta>
                  <contain className='flex lg:flex-row flex-col lg:gap-2'>
                    <p className="">Cta. Soles: </p>
                    <p className="lg:text-[16px] my-auto text-sm"> 355-2525176-0-85</p>
                  </contain>
                  <contain className='flex lg:flex-row flex-col lg:gap-2'>
                    <p className="">CCI Soles: </p>
                    <p className="lg:text-[16px] my-auto text-sm">002-35500252517608563</p>
                  </contain>
                </infocta>
              </section>
              <section className="flex gap-2 justify-center items-center">
              <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015210/bbvap_jvhbyy.png" alt="" className="h-[150px] w-[150px]"/>
              <infocta>
                  <contain className='flex lg:flex-row flex-col lg:gap-2'>
                    <p className="">Cta. Soles: </p>
                    <p className="lg:text-[16px] my-auto text-sm"> 355-2525176-0-85</p>
                  </contain>
                  <contain className='flex lg:flex-row flex-col lg:gap-2'>
                    <p className="">CCI Soles: </p>
                    <p className="lg:text-[16px] my-auto text-sm">002-35500252517608563</p>
                  </contain>
                </infocta>
              </section>
              <section className="flex gap-2 justify-center items-center">
              <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015210/bnp_fu1aqa.png" alt="" className="h-[150px] w-[150px]"/>
              <infocta>
                  <contain className='flex lg:flex-row flex-col lg:gap-2'>
                    <p className="">Cta. Soles: </p>
                    <p className="lg:text-[16px] my-auto text-sm"> 355-2525176-0-85</p>
                  </contain>
                  <contain className='flex lg:flex-row flex-col lg:gap-2'>
                    <p className="">CCI Soles: </p>
                    <p className="lg:text-[16px] my-auto text-sm">002-35500252517608563</p>
                  </contain>
                </infocta>
              </section>
            </div>
          </div>

          <div className="w-full text-white dark:text-t-dark p-5 border-bor-light border-4 rounded-lg gap-2">
            <h1 className="text-center font-bold text-3xl">Yape</h1>
            <h3 className="text-center">A nombre de: Carlos Daniel Rojas Ramirez</h3>
            <div className="grid items-center justify-center">
              <section className="flex gap-2 justify-center items-center">
                <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449318/yapep_dh6iav.png" alt="" className="h-[150px] w-[150px]"/>
                <infocta>
                  <p>+51 924169968</p>
                </infocta>
              </section>
            </div>
          </div>
       
          
        </div>
       </div>
    </div>
  );
};

export default Compra;
