import Link from "next/link"

const Modal18 = ({setOpenModal18}) => {
  return (
    <div className='fixed flex items-center justify-center min-h-screen w-screen overflow-hidden bg-[#000000e3]'>
           <div className='flex flex-col gap-2 p-10 items-center justify-center bg-[#1a1a1a] rounded-sm w-[95%] sm:w-[80%] lg:w-[60%] h-fit'>
                <h1 className='text-3xl lg:text-4xl text-center text-white font-bold'>
                Verificación De Edad
                </h1>
                <p className='text-white sm:mx-4 lg:mx-20 text-center'>Este sitio web contiene material restringido a menores de edad. Al entrar, afirma que tiene por lo menos 18 años de edad o la mayoría de edad en la jurisdicción desde que está accediendo al sitio web y que da consentimiento pleno de lo que ve.</p>
                
                <section className="w-full mt-4 flex flex-col sm:flex-row gap-2 items-center justify-center">
                    <button className='text-center bg-back-red hover:bg-[#ff8446] text-normal sm:text-xl transition-all duration-300 ease-linear p-4 font-bold rounded-lg' onClick={() => setOpenModal18(false)}>Tengo 18 años o más - Entrar</button>
                    <Link href={'https://www.google.com.pe/?hl=es'} className='text-center bg-[#3a3a3a] hover:bg-[#555555] transition-all duration-300 ease-linear text-normal sm:text-xl text-white p-4 font-bold rounded-lg'>Tengo menos de 18 años - Salir</Link>
                </section>
            </div> 
    </div>
  )
}

export default Modal18